/* IronLog — storage layer. Everything lives in localStorage under one JSON blob. */
(function () {
  "use strict";

  var KEY = "gymlog.v1";
  var THEME_KEY = "gymlog.theme"; // mirrored for pre-paint theme script

  function defaults() {
    return {
      version: 1,
      createdAt: Date.now(),
      settings: {
        theme: "dark",
        units: "kg",          // "kg" | "lb"
        restSec: 90,
        weeklyTarget: 3,      // workouts per week
        name: "",
        gymName: ""
      },
      learned: [],            // exercise ids the user marked as learned
      logs: [],               // { id, date:"YYYY-MM-DD", ts, exerciseId, sets:[{w,r,s}] }  w=kg, r=reps, s=seconds
      goals: []               // { id, type, title, exerciseId, target, progress, done, createdAt }
    };
  }

  var data = null;

  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      if (raw) {
        data = JSON.parse(raw);
        var d = defaults();
        // shallow-merge forward-compatibly
        data.settings = Object.assign(d.settings, data.settings || {});
        data.learned = Array.isArray(data.learned) ? data.learned : [];
        data.logs = Array.isArray(data.logs) ? data.logs : [];
        data.goals = Array.isArray(data.goals) ? data.goals : [];
      } else {
        data = defaults();
      }
    } catch (e) {
      console.warn("IronLog: could not read saved data, starting fresh.", e);
      data = defaults();
    }
    return data;
  }

  function save() {
    try {
      localStorage.setItem(KEY, JSON.stringify(data));
      localStorage.setItem(THEME_KEY, data.settings.theme);
    } catch (e) {
      console.error("IronLog: save failed", e);
    }
  }

  function uid() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  }

  /* ---------- dates ---------- */
  function dstr(d) {
    d = d || new Date();
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }
  function today() { return dstr(new Date()); }
  function mondayOf(d) {
    var x = new Date(d.getFullYear(), d.getMonth(), d.getDate());
    var wd = (x.getDay() + 6) % 7; // Mon=0
    x.setDate(x.getDate() - wd);
    return x;
  }

  /* ---------- units ---------- */
  var KG_PER_LB = 0.45359237;
  function toKg(val) { return data.settings.units === "lb" ? val * KG_PER_LB : val; }
  function fromKg(kg) { return data.settings.units === "lb" ? kg / KG_PER_LB : kg; }
  function fmtW(kg, withUnit) {
    if (kg == null) return "—";
    var v = fromKg(kg);
    var s = (Math.round(v * 2) / 2).toString();
    return withUnit === false ? s : s + " " + data.settings.units;
  }
  function fmtTime(sec) {
    sec = Math.round(sec || 0);
    var m = Math.floor(sec / 60), s = sec % 60;
    return m + ":" + String(s).padStart(2, "0");
  }

  /* ---------- logs ---------- */
  function addLog(exerciseId, sets) {
    var entry = { id: uid(), date: today(), ts: Date.now(), exerciseId: exerciseId, sets: sets };
    data.logs.push(entry);
    save();
    return entry;
  }
  function deleteLog(id) {
    data.logs = data.logs.filter(function (l) { return l.id !== id; });
    save();
  }
  function logsFor(exerciseId) {
    return data.logs.filter(function (l) { return l.exerciseId === exerciseId; })
      .sort(function (a, b) { return a.ts - b.ts; });
  }
  function lastEntry(exerciseId) {
    var ls = logsFor(exerciseId);
    return ls.length ? ls[ls.length - 1] : null;
  }
  function bestSet(entry) { // heaviest set of an entry
    if (!entry || !entry.sets.length) return null;
    return entry.sets.reduce(function (a, b) { return ((b.w || 0) > (a.w || 0)) ? b : a; });
  }
  function prWeight(exerciseId) { // all-time max weight (kg)
    var max = null;
    logsFor(exerciseId).forEach(function (l) {
      l.sets.forEach(function (s) { if (s.w != null && (max == null || s.w > max)) max = s.w; });
    });
    return max;
  }
  function logsByDate() {
    var map = {};
    data.logs.forEach(function (l) { (map[l.date] = map[l.date] || []).push(l); });
    return map;
  }
  function workoutDates() { return Object.keys(logsByDate()).sort(); }

  function workoutsThisWeek() {
    var mon = mondayOf(new Date());
    var days = {};
    data.logs.forEach(function (l) {
      var d = new Date(l.date + "T12:00:00");
      if (d >= mon) days[l.date] = 1;
    });
    return Object.keys(days).length;
  }

  function weekStreak() {
    // consecutive weeks (incl. current) hitting >=1 workout
    var byWeek = {};
    data.logs.forEach(function (l) {
      byWeek[dstr(mondayOf(new Date(l.date + "T12:00:00")))] = 1;
    });
    var streak = 0;
    var cur = mondayOf(new Date());
    while (byWeek[dstr(cur)]) { streak++; cur.setDate(cur.getDate() - 7); }
    return streak;
  }

  function totalVolumeKg() {
    var v = 0;
    data.logs.forEach(function (l) {
      l.sets.forEach(function (s) { if (s.w && s.r) v += s.w * s.r; });
    });
    return v;
  }

  function weeklyVolume(nWeeks) { // [{label, vol}] oldest→newest
    var out = [];
    var mon = mondayOf(new Date());
    for (var i = nWeeks - 1; i >= 0; i--) {
      var start = new Date(mon); start.setDate(start.getDate() - i * 7);
      var end = new Date(start); end.setDate(end.getDate() + 7);
      var vol = 0;
      data.logs.forEach(function (l) {
        var d = new Date(l.date + "T12:00:00");
        if (d >= start && d < end) l.sets.forEach(function (s) { if (s.w && s.r) vol += s.w * s.r; });
      });
      out.push({ label: (start.getMonth() + 1) + "/" + start.getDate(), vol: vol });
    }
    return out;
  }

  /* ---------- learned ---------- */
  function isLearned(id) { return data.learned.indexOf(id) !== -1; }
  function toggleLearned(id) {
    var i = data.learned.indexOf(id);
    if (i === -1) data.learned.push(id); else data.learned.splice(i, 1);
    save();
    return i === -1;
  }

  /* ---------- goals ---------- */
  function addGoal(g) {
    g.id = uid(); g.createdAt = Date.now(); g.done = false; g.progress = g.progress || 0;
    data.goals.push(g); save(); return g;
  }
  function deleteGoal(id) { data.goals = data.goals.filter(function (g) { return g.id !== id; }); save(); }

  /* ---------- backup ---------- */
  function exportJSON() {
    var blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "ironlog-backup-" + today() + ".json";
    document.body.appendChild(a);
    a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 400);
  }

  function importJSON(text, mode) { // mode: "replace" | "merge"; returns {ok, msg}
    var incoming;
    try { incoming = JSON.parse(text); } catch (e) { return { ok: false, msg: "That file isn't valid JSON." }; }
    if (!incoming || typeof incoming !== "object" || !Array.isArray(incoming.logs)) {
      return { ok: false, msg: "That doesn't look like an IronLog backup (missing logs)." };
    }
    if (mode === "replace") {
      data = incoming;
      data.settings = Object.assign(defaults().settings, data.settings || {});
      data.learned = data.learned || [];
      data.goals = data.goals || [];
    } else {
      var haveLog = {};
      data.logs.forEach(function (l) { haveLog[l.id] = 1; });
      incoming.logs.forEach(function (l) { if (!haveLog[l.id]) data.logs.push(l); });
      (incoming.learned || []).forEach(function (id) { if (data.learned.indexOf(id) === -1) data.learned.push(id); });
      var haveGoal = {};
      data.goals.forEach(function (g) { haveGoal[g.id] = 1; });
      (incoming.goals || []).forEach(function (g) { if (!haveGoal[g.id]) data.goals.push(g); });
    }
    save();
    return { ok: true, msg: mode === "replace" ? "Backup restored." : "Backup merged — " + data.logs.length + " total sessions." };
  }

  function resetAll() {
    data = defaults();
    save();
  }

  window.Store = {
    load: load, save: save, uid: uid,
    get data() { return data; },
    dstr: dstr, today: today, mondayOf: mondayOf,
    toKg: toKg, fromKg: fromKg, fmtW: fmtW, fmtTime: fmtTime,
    addLog: addLog, deleteLog: deleteLog, logsFor: logsFor, lastEntry: lastEntry,
    bestSet: bestSet, prWeight: prWeight, logsByDate: logsByDate, workoutDates: workoutDates,
    workoutsThisWeek: workoutsThisWeek, weekStreak: weekStreak,
    totalVolumeKg: totalVolumeKg, weeklyVolume: weeklyVolume,
    isLearned: isLearned, toggleLearned: toggleLearned,
    addGoal: addGoal, deleteGoal: deleteGoal,
    exportJSON: exportJSON, importJSON: importJSON, resetAll: resetAll
  };
})();
