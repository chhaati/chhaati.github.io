/* IronLog — main app */
(function () {
  "use strict";

  var S = window.Store;
  S.load();

  var EX = (window.GYM_EXERCISES || []).slice();
  var EX_BY_ID = {};
  EX.forEach(function (e) { EX_BY_ID[e.id] = e; });

  var GROUPS = [
    { id: "chest",     label: "Chest",     day: "Chest Day",    color: "var(--g-chest)",     emoji: "🫁" },
    { id: "back",      label: "Back",      day: "Back Day",     color: "var(--g-back)",      emoji: "🪽" },
    { id: "legs",      label: "Legs",      day: "Leg Day",      color: "var(--g-legs)",      emoji: "🦵" },
    { id: "shoulders", label: "Shoulders", day: "Shoulder Day", color: "var(--g-shoulders)", emoji: "🏔️" },
    { id: "arms",      label: "Arms",      day: "Arm Day",      color: "var(--g-arms)",      emoji: "💪" },
    { id: "core",      label: "Core",      day: "Core Day",     color: "var(--g-core)",      emoji: "🎯" },
    { id: "cardio",    label: "Cardio",    day: "Cardio Day",   color: "var(--g-cardio)",    emoji: "❤️" }
  ];
  function groupMeta(id) {
    for (var i = 0; i < GROUPS.length; i++) if (GROUPS[i].id === id) return GROUPS[i];
    return { id: id, label: id, day: id, color: "var(--muted)", emoji: "🏋️" };
  }
  var EQUIP_LABEL = {
    machine: "Machine", barbell: "Barbell", dumbbell: "Dumbbell", cable: "Cable",
    bodyweight: "Bodyweight", kettlebell: "Kettlebell", band: "Band", "cardio-machine": "Cardio machine"
  };

  /* ================= utilities ================= */
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function h(html) {
    var t = document.createElement("template");
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  }
  function fmtInt(n) { return Math.round(n).toLocaleString("en-US"); }

  function toast(msg, cls, ms) {
    var root = document.getElementById("toast-root");
    var t = h('<div class="toast ' + (cls || "") + '">' + msg + "</div>");
    root.appendChild(t);
    setTimeout(function () { t.style.transition = "opacity .3s"; t.style.opacity = "0"; }, (ms || 2400) - 300);
    setTimeout(function () { t.remove(); }, ms || 2400);
  }

  function confetti() {
    var colors = ["#a3e635", "#fbbf24", "#f472b6", "#60a5fa", "#c084fc", "#34d399"];
    for (var i = 0; i < 26; i++) {
      (function () {
        var b = h('<div class="confetti-bit"></div>');
        var x = 10 + Math.random() * 80;
        b.style.left = x + "vw";
        b.style.top = "-20px";
        b.style.background = colors[Math.floor(Math.random() * colors.length)];
        b.style.transform = "rotate(" + Math.random() * 360 + "deg)";
        document.body.appendChild(b);
        var dur = 1100 + Math.random() * 700;
        b.animate([
          { transform: b.style.transform, top: "-20px", opacity: 1 },
          { transform: "rotate(" + (Math.random() * 720 - 360) + "deg)", top: "104vh", opacity: 0.7 }
        ], { duration: dur, easing: "cubic-bezier(.2,.6,.4,1)" });
        setTimeout(function () { b.remove(); }, dur);
      })();
    }
  }

  /* pause offscreen SMIL animations for performance */
  var svgObserver = ("IntersectionObserver" in window) ? new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      var svg = en.target.querySelector("svg");
      if (!svg || typeof svg.pauseAnimations !== "function") return;
      if (en.isIntersecting) svg.unpauseAnimations(); else svg.pauseAnimations();
    });
  }, { rootMargin: "60px" }) : null;

  function watchFig(container) {
    var svg = container.querySelector("svg");
    if (svg && typeof svg.pauseAnimations === "function") svg.pauseAnimations();
    if (svgObserver) svgObserver.observe(container);
  }

  /* ================= modal / sheet ================= */
  function openModal(innerHTML) {
    var back = h('<div class="modal-back"><div class="modal"><div class="grab"></div>' + innerHTML + "</div></div>");
    back.addEventListener("click", function (e) { if (e.target === back) closeModal(back); });
    var onKey = function (e) { if (e.key === "Escape") { closeModal(back); } };
    document.addEventListener("keydown", onKey);
    back.addEventListener("remove", function () {});
    var origRemove = back.remove.bind(back);
    back.remove = function () { document.removeEventListener("keydown", onKey); origRemove(); };
    document.getElementById("modal-root").appendChild(back);
    document.body.style.overflow = "hidden";
    return back;
  }
  function closeModal(back) {
    back.remove();
    if (!document.querySelector(".modal-back")) document.body.style.overflow = "";
  }

  /* ================= theme ================= */
  function applyTheme(t) {
    document.documentElement.setAttribute("data-theme", t);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", t === "dark" ? "#0b0f14" : "#f2f5f8");
  }
  function setTheme(t) {
    S.data.settings.theme = t;
    S.save();
    applyTheme(t);
  }
  applyTheme(S.data.settings.theme);
  document.getElementById("btn-theme").addEventListener("click", function () {
    setTheme(S.data.settings.theme === "dark" ? "light" : "dark");
    if (state.tab === "settings") render(); // keep the settings segment in sync
  });

  /* ================= router ================= */
  var state = { tab: "home", group: "all", equip: "all", q: "", month: null, selDate: S.today() };

  function switchTab(tab) {
    state.tab = tab;
    document.querySelectorAll(".nav-btn").forEach(function (b) {
      b.classList.toggle("active", b.dataset.tab === tab);
    });
    render();
    window.scrollTo({ top: 0 });
  }
  document.getElementById("bottomnav").addEventListener("click", function (e) {
    var b = e.target.closest(".nav-btn");
    if (b) switchTab(b.dataset.tab);
  });
  document.getElementById("btn-timer").addEventListener("click", function () { openTimer(); });

  function render() {
    var v = document.getElementById("view");
    v.innerHTML = "";
    ({ home: renderHome, exercises: renderExercises, history: renderHistory, goals: renderGoals, settings: renderSettings }[state.tab] || renderHome)(v);
  }

  /* ================= exercise of the day ================= */
  function hashStr(s) {
    var x = 0;
    for (var i = 0; i < s.length; i++) { x = (x * 31 + s.charCodeAt(i)) >>> 0; }
    return x;
  }
  function exerciseOfTheDay() {
    if (!EX.length) return null;
    var pool = EX.filter(function (e) { return !S.isLearned(e.id) && e.level === 1; });
    if (!pool.length) pool = EX.filter(function (e) { return !S.isLearned(e.id); });
    if (!pool.length) pool = EX;
    pool = pool.slice().sort(function (a, b) { return a.id < b.id ? -1 : 1; });
    return pool[hashStr(S.today()) % pool.length];
  }

  function suggestedGroup() {
    // least-recently-trained muscle group (cardio excluded from rotation)
    var lastByGroup = {};
    S.data.logs.forEach(function (l) {
      var ex = EX_BY_ID[l.exerciseId];
      if (!ex) return;
      if (!lastByGroup[ex.group] || l.date > lastByGroup[ex.group]) lastByGroup[ex.group] = l.date;
    });
    var candidates = GROUPS.filter(function (g) { return g.id !== "cardio" && g.id !== "core"; });
    candidates.sort(function (a, b) {
      var da = lastByGroup[a.id] || "0000", db = lastByGroup[b.id] || "0000";
      return da < db ? -1 : da > db ? 1 : 0;
    });
    return candidates[0];
  }

  /* ================= HOME ================= */
  function renderHome(v) {
    var s = S.data.settings;
    var hour = new Date().getHours();
    var greet = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";
    var name = s.name ? ", " + esc(s.name) : "";
    var week = S.workoutsThisWeek();
    var target = s.weeklyTarget || 3;
    var pct = Math.min(1, week / target);

    var R = 32, C = 2 * Math.PI * R;
    v.appendChild(h(
      '<div class="card hero">' +
        "<div><h1>" + greet + name + " 👋</h1>" +
        '<div class="sub">' + new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" }) +
        (s.gymName ? ' · <b style="color:var(--acc)">' + esc(s.gymName) + "</b>" : "") + "</div></div>" +
        '<div class="ring-wrap"><svg width="74" height="74" viewBox="0 0 74 74">' +
          '<circle cx="37" cy="37" r="' + R + '" fill="none" stroke="var(--card-2)" stroke-width="7"/>' +
          '<circle cx="37" cy="37" r="' + R + '" fill="none" stroke="var(--acc)" stroke-width="7" stroke-linecap="round" stroke-dasharray="' + C + '" stroke-dashoffset="' + (C * (1 - pct)) + '"/>' +
        "</svg>" +
        '<div class="ring-num">' + week + "/" + target + "<small>this week</small></div></div>" +
      "</div>"
    ));

    // stats
    var prCount = 0;
    EX.forEach(function (e) { if (S.prWeight(e.id) != null) prCount++; });
    v.appendChild(h(
      '<div class="statgrid">' +
        '<div class="stat"><b>' + S.weekStreak() + " 🔥</b><span>week streak</span></div>" +
        '<div class="stat"><b>' + S.workoutDates().length + "</b><span>workouts</span></div>" +
        '<div class="stat"><b>' + S.data.learned.length + "/" + EX.length + "</b><span>learned</span></div>" +
        '<div class="stat"><b>' + prCount + "</b><span>lifts w/ PR</span></div>" +
      "</div>"
    ));

    // first-visit welcome
    if (!S.data.logs.length && !S.data.learned.length) {
      v.appendChild(h(
        '<div class="card" style="margin-top:14px">' +
          "<h3 style='font-size:16px'>Welcome to IronLog 🎉</h3>" +
          '<p class="small muted" style="margin:8px 0 0">Built for gym newbies. Learn one exercise a day, log the weight you used on each machine, and IronLog will remember it for next time — everything is stored <b>on this device</b> (export a backup anytime from Settings).</p>' +
        "</div>"
      ));
    }

    // exercise of the day
    var eotd = exerciseOfTheDay();
    if (eotd) {
      var learned = S.isLearned(eotd.id);
      var card = h(
        '<div class="card eotd"><div class="glow"></div>' +
          '<div class="eotd-head"><span class="tag" style="color:var(--acc);border-color:var(--acc)">✨ Exercise of the day</span>' +
          '<span class="tag">' + esc(groupMeta(eotd.group).label) + "</span></div>" +
          '<div class="eotd-body">' +
            '<div class="eotd-fig">' + eotd.svg + "</div>" +
            "<div><h3>" + esc(eotd.name) + "</h3>" +
            '<div class="small muted">' + esc(eotd.primary.join(", ")) + " · " + esc(EQUIP_LABEL[eotd.equipment] || eotd.equipment) + "</div>" +
            '<div class="small muted" style="margin-top:4px">' + esc(eotd.setsReps) + "</div></div>" +
          "</div>" +
          '<div class="eotd-actions">' +
            '<button class="btn primary" data-act="open">Learn it →</button>' +
            '<button class="btn" data-act="learned">' + (learned ? "✓ Learned" : "Mark learned") + "</button>" +
          "</div>" +
        "</div>"
      );
      card.querySelector('[data-act="open"]').addEventListener("click", function () { openExercise(eotd.id); });
      card.querySelector('[data-act="learned"]').addEventListener("click", function () {
        var now = S.toggleLearned(eotd.id);
        this.textContent = now ? "✓ Learned" : "Mark learned";
        if (now) toast("Nice! " + esc(eotd.name) + " added to your toolbox 🧰");
        checkGoalCompletion();
      });
      v.appendChild(card);
    } else {
      v.appendChild(h('<div class="card"><p class="muted small">Exercise library not loaded — check that the <code>data/</code> files are present.</p></div>'));
    }

    // today's split
    var sg = suggestedGroup();
    var split = h(
      '<div class="card dayplan-card">' +
        '<div style="display:flex;justify-content:space-between;align-items:center">' +
          "<h3 style='font-size:16px'>Pick today's focus</h3>" +
          '<span class="small muted">suggested: <b style="color:var(--acc)">' + esc(sg.label) + "</b></span>" +
        "</div>" +
        '<div class="chip-row" id="home-groups"></div>' +
      "</div>"
    );
    var row = split.querySelector("#home-groups");
    GROUPS.forEach(function (g) {
      var c = h('<button class="chip"><span class="dot" style="background:' + g.color + '"></span>' + g.emoji + " " + esc(g.day) + "</button>");
      if (g.id === sg.id) c.style.borderColor = "var(--acc)";
      c.addEventListener("click", function () {
        state.group = g.id; state.q = ""; state.equip = "all";
        switchTab("exercises");
      });
      row.appendChild(c);
    });
    v.appendChild(split);

    // recent activity
    var recent = S.data.logs.slice().sort(function (a, b) { return b.ts - a.ts; }).slice(0, 3);
    if (recent.length) {
      v.appendChild(h('<div class="section-title">Recent activity</div>'));
      var rc = h('<div class="card"></div>');
      recent.forEach(function (l) { rc.appendChild(dayLogItem(l, false)); });
      v.appendChild(rc);
    }

    v.querySelectorAll(".eotd-fig, .daylog-item .thumb").forEach(watchFig);
  }

  /* ================= EXERCISES ================= */
  function renderExercises(v) {
    v.appendChild(h(
      '<div class="searchbar">' +
        '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.8-3.8"/></svg>' +
        '<input type="search" id="ex-search" placeholder="Search ' + EX.length + ' exercises…" value="' + esc(state.q) + '">' +
      "</div>"
    ));

    var gRow = h('<div class="chip-row" style="margin-bottom:9px"></div>');
    var allChip = h('<button class="chip' + (state.group === "all" ? " active" : "") + '">All</button>');
    allChip.addEventListener("click", function () { state.group = "all"; renderList(); syncChips(); });
    gRow.appendChild(allChip);
    GROUPS.forEach(function (g) {
      var n = EX.filter(function (e) { return e.group === g.id; }).length;
      var c = h('<button class="chip' + (state.group === g.id ? " active" : "") + '" data-g="' + g.id + '"><span class="dot" style="background:' + g.color + '"></span>' + esc(g.label) + " · " + n + "</button>");
      c.addEventListener("click", function () { state.group = (state.group === g.id) ? "all" : g.id; renderList(); syncChips(); });
      gRow.appendChild(c);
    });
    v.appendChild(gRow);

    var eqs = ["all", "machine", "dumbbell", "barbell", "cable", "bodyweight", "cardio-machine"];
    var eRow = h('<div class="chip-row" style="margin-bottom:14px"></div>');
    eqs.forEach(function (eq) {
      var lbl = eq === "all" ? "Any equipment" : (EQUIP_LABEL[eq] || eq);
      var c = h('<button class="chip' + (state.equip === eq ? " active" : "") + '" data-e="' + eq + '" style="font-size:12px;padding:6px 12px">' + esc(lbl) + "</button>");
      c.addEventListener("click", function () { state.equip = eq; renderList(); syncChips(); });
      eRow.appendChild(c);
    });
    v.appendChild(eRow);

    var grid = h('<div class="exgrid" id="ex-grid"></div>');
    v.appendChild(grid);

    function syncChips() {
      gRow.querySelectorAll(".chip").forEach(function (c) {
        c.classList.toggle("active", c.dataset.g ? c.dataset.g === state.group : state.group === "all");
      });
      eRow.querySelectorAll(".chip").forEach(function (c) {
        c.classList.toggle("active", c.dataset.e === state.equip);
      });
    }

    function renderList() {
      grid.innerHTML = "";
      var q = state.q.trim().toLowerCase();
      var list = EX.filter(function (e) {
        if (state.group !== "all" && e.group !== state.group) return false;
        if (state.equip !== "all" && e.equipment !== state.equip) return false;
        if (q && (e.name + " " + e.primary.join(" ") + " " + e.equipment).toLowerCase().indexOf(q) === -1) return false;
        return true;
      });
      list.sort(function (a, b) { return a.level - b.level || (a.name < b.name ? -1 : 1); });
      if (!list.length) {
        grid.appendChild(h('<div class="empty" style="grid-column:1/-1"><div class="big">🔍</div>No exercises match.<br><span class="small">The exercise library may still be loading — or try another filter.</span></div>'));
        return;
      }
      list.forEach(function (e) {
        var g = groupMeta(e.group);
        var last = S.lastEntry(e.id);
        var best = last ? S.bestSet(last) : null;
        var lastTxt = "";
        if (best) {
          if (e.trackMode === "weight" && best.w != null) lastTxt = "Last: " + S.fmtW(best.w) + (best.r ? " × " + best.r : "");
          else if (e.trackMode === "reps" && best.r != null) lastTxt = "Last: " + best.r + " reps";
          else if (e.trackMode === "time" && best.s != null) lastTxt = "Last: " + S.fmtTime(best.s);
        }
        var card = h(
          '<button class="excard">' +
            (S.isLearned(e.id) ? '<span class="learned-badge">✓</span>' : "") +
            '<div class="fig">' + e.svg + "</div>" +
            "<h4>" + esc(e.name) + "</h4>" +
            '<div class="meta">' +
              '<span class="groupdot" style="background:' + g.color + '"></span>' +
              '<span class="tag">' + esc(EQUIP_LABEL[e.equipment] || e.equipment) + "</span>" +
              (e.level === 1 ? '<span class="tag" style="color:var(--acc)">Beginner</span>' : "") +
            "</div>" +
            (lastTxt ? '<span class="lastw">' + lastTxt + "</span>" : "") +
          "</button>"
        );
        card.addEventListener("click", function () { openExercise(e.id); });
        grid.appendChild(card);
        watchFig(card.querySelector(".fig"));
      });
    }

    v.querySelector("#ex-search").addEventListener("input", function () {
      state.q = this.value;
      renderList();
    });
    renderList();
  }

  /* ================= exercise modal + logger ================= */
  function repUpperBound(setsReps) {
    // last range in the string is the reps range ("3 sets × 10–12 reps" → 12)
    var m = (setsReps || "").match(/(\d+)\s*[–-]\s*(\d+)/g);
    if (!m || !m.length) return null;
    var last = /(\d+)\s*[–-]\s*(\d+)/.exec(m[m.length - 1]);
    return parseInt(last[2], 10);
  }

  function sparklineSVG(points) {
    // points: array of numbers (display units)
    if (points.length < 2) return "";
    var w = 300, hh = 70, pad = 6;
    var min = Math.min.apply(null, points), max = Math.max.apply(null, points);
    if (max === min) { max += 1; min -= 1; }
    var step = (w - pad * 2) / (points.length - 1);
    var xy = points.map(function (p, i) {
      return [pad + i * step, pad + (hh - pad * 2) * (1 - (p - min) / (max - min))];
    });
    var line = xy.map(function (p, i) { return (i ? "L" : "M") + p[0].toFixed(1) + " " + p[1].toFixed(1); }).join(" ");
    var area = line + " L" + xy[xy.length - 1][0].toFixed(1) + " " + (hh - 2) + " L" + xy[0][0].toFixed(1) + " " + (hh - 2) + " Z";
    var dots = xy.map(function (p) { return '<circle cx="' + p[0].toFixed(1) + '" cy="' + p[1].toFixed(1) + '" r="3" fill="var(--acc)"/>'; }).join("");
    return '<svg viewBox="0 0 ' + w + " " + hh + '" preserveAspectRatio="none">' +
      '<path d="' + area + '" fill="var(--acc-soft)"/>' +
      '<path d="' + line + '" fill="none" stroke="var(--acc)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>' +
      dots + "</svg>";
  }

  function openExercise(id) {
    var e = EX_BY_ID[id];
    if (!e) return;
    var g = groupMeta(e.group);
    var last = S.lastEntry(e.id);
    var pr = S.prWeight(e.id);
    var learned = S.isLearned(e.id);

    var lastLine = "";
    if (last) {
      var when = new Date(last.ts).toLocaleDateString("en-US", { month: "short", day: "numeric" });
      var parts = last.sets.map(function (st) {
        if (e.trackMode === "weight") return S.fmtW(st.w, false) + "×" + (st.r || "?");
        if (e.trackMode === "reps") return (st.r || "?") + "";
        return S.fmtTime(st.s);
      }).join(", ");
      var sug = "";
      if (e.trackMode === "weight") {
        var ub = repUpperBound(e.setsReps);
        var bs = S.bestSet(last);
        if (ub && bs && bs.r >= ub) {
          var inc = S.data.settings.units === "lb" ? "5 lb" : "2.5 kg";
          sug = ' <span class="suggest">💡 You hit ' + bs.r + " reps — try +" + inc + " today!</span>";
        }
      }
      lastLine = '<div class="lastinfo">🧠 Last time (' + when + "): <b>" + parts +
        (e.trackMode === "weight" ? " " + S.data.settings.units : "") + "</b>" + sug +
        (pr != null && e.trackMode === "weight" ? ' <span class="pr-flag">🏆 PR ' + S.fmtW(pr) + "</span>" : "") +
        "</div>";
    } else {
      lastLine = '<div class="lastinfo">✨ First time doing this — log your sets below and IronLog will remember the weight for next time.</div>';
    }

    var mode = e.trackMode;
    var hint = mode === "weight"
      ? '<div class="unit-hint"><span></span><span>' + S.data.settings.units + "</span><span>reps</span><span></span></div>"
      : mode === "reps"
        ? '<div class="unit-hint"><span></span><span>reps</span><span></span><span></span></div>'
        : '<div class="unit-hint"><span></span><span>min</span><span>sec</span><span></span></div>';

    var back = openModal(
      '<div class="modal-head"><div>' +
        "<h2>" + esc(e.name) + "</h2>" +
        '<div class="muscle-row">' +
          '<span class="tag"><span class="groupdot" style="background:' + g.color + '"></span>' + esc(g.label) + "</span>" +
          '<span class="tag">' + esc(EQUIP_LABEL[e.equipment] || e.equipment) + "</span>" +
          '<span class="tag">' + (e.level === 1 ? "Beginner" : e.level === 2 ? "Intermediate" : "Advanced") + "</span>" +
        "</div></div>" +
        '<button class="icon-btn" data-close aria-label="Close">✕</button>' +
      "</div>" +
      '<div class="bigfig">' + e.svg + "</div>" +
      '<div class="small muted"><b style="color:var(--text)">Targets:</b> ' + esc(e.primary.join(", ")) +
        (e.secondary.length ? ' <span class="muted">(+ ' + esc(e.secondary.join(", ")) + ")</span>" : "") + "</div>" +

      '<div class="section-title" style="margin-top:16px">How to do it <small>' + esc(e.setsReps) + "</small></div>" +
      '<ol class="steps">' + e.steps.map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("") + "</ol>" +
      '<div class="tipbox"><b>💡 Newbie tips</b><ul>' + e.tips.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul></div>" +

      (e.equipment === "barbell" ? plateCalcHTML() : "") +

      '<div class="section-title">Log today\'s sets</div>' +
      lastLine +
      '<div class="logger">' + hint + '<div id="set-rows"></div>' +
        '<div style="display:flex;gap:8px;margin-top:4px">' +
          '<button class="btn sm" id="add-set">+ Add set</button>' +
          '<button class="btn sm" id="start-rest">⏱ Rest timer</button>' +
          '<button class="btn sm" id="mark-learned">' + (learned ? "✓ Learned" : "☐ Mark learned") + "</button>" +
        "</div>" +
        '<button class="btn primary block" id="save-log" style="margin-top:14px">Save workout</button>' +
      "</div>" +
      '<div id="ex-history"></div>'
    );

    back.querySelector("[data-close]").addEventListener("click", function () { closeModal(back); });

    /* set rows */
    var rowsEl = back.querySelector("#set-rows");
    function addRow(pre) {
      var n = rowsEl.children.length + 1;
      var row;
      if (mode === "weight") {
        var wVal = pre && pre.w != null ? (Math.round(S.fromKg(pre.w) * 2) / 2) : "";
        row = h('<div class="set-row"><span class="setn">' + n + '</span>' +
          '<input type="number" step="0.5" min="0" inputmode="decimal" data-f="w" placeholder="weight" value="' + wVal + '">' +
          '<input type="number" step="1" min="0" inputmode="numeric" data-f="r" placeholder="reps" value="' + (pre && pre.r != null ? pre.r : "") + '">' +
          '<button class="del" title="Remove set">✕</button></div>');
      } else if (mode === "reps") {
        row = h('<div class="set-row"><span class="setn">' + n + '</span>' +
          '<input type="number" step="1" min="0" inputmode="numeric" data-f="r" placeholder="reps" value="' + (pre && pre.r != null ? pre.r : "") + '">' +
          "<span></span>" +
          '<button class="del" title="Remove set">✕</button></div>');
      } else {
        var mins = pre && pre.s != null ? Math.floor(pre.s / 60) : "";
        var secs = pre && pre.s != null ? pre.s % 60 : "";
        row = h('<div class="set-row timed"><span class="setn">' + n + '</span>' +
          '<input type="number" step="1" min="0" inputmode="numeric" data-f="m" placeholder="min" value="' + mins + '">' +
          '<input type="number" step="1" min="0" max="59" inputmode="numeric" data-f="s" placeholder="sec" value="' + secs + '">' +
          '<button class="del" title="Remove set">✕</button></div>');
      }
      row.querySelector(".del").addEventListener("click", function () {
        row.remove();
        Array.prototype.forEach.call(rowsEl.children, function (r, i) {
          r.querySelector(".setn").textContent = i + 1;
        });
      });
      rowsEl.appendChild(row);
    }
    if (last && last.sets.length) last.sets.forEach(function (st) { addRow(st); });
    else { addRow(); addRow(); addRow(); }

    back.querySelector("#add-set").addEventListener("click", function () { addRow(); });
    back.querySelector("#start-rest").addEventListener("click", function () { openTimer(); });
    back.querySelector("#mark-learned").addEventListener("click", function () {
      var now = S.toggleLearned(e.id);
      this.textContent = now ? "✓ Learned" : "☐ Mark learned";
      if (now) toast("Added to your learned list ✅");
      checkGoalCompletion();
    });

    back.querySelector("#save-log").addEventListener("click", function () {
      var sets = [];
      Array.prototype.forEach.call(rowsEl.children, function (r) {
        var get = function (f) {
          var inp = r.querySelector('[data-f="' + f + '"]');
          if (!inp || inp.value === "") return null;
          var num = parseFloat(inp.value);
          return isNaN(num) ? null : num;
        };
        if (mode === "weight") {
          var w = get("w"), rr = get("r");
          if (w != null || rr != null) sets.push({ w: w != null ? S.toKg(w) : null, r: rr });
        } else if (mode === "reps") {
          var r2 = get("r");
          if (r2 != null) sets.push({ r: r2 });
        } else {
          var m = get("m") || 0, sc = get("s") || 0;
          if (m || sc) sets.push({ s: Math.round(m * 60 + sc) });
        }
      });
      if (!sets.length) { toast("Add at least one set first 🙂"); return; }

      var oldPr = S.prWeight(e.id);
      S.addLog(e.id, sets);
      var newPr = S.prWeight(e.id);

      if (mode === "weight" && newPr != null && (oldPr == null || newPr > oldPr) && S.logsFor(e.id).length > 1) {
        toast("🏆 NEW PR on " + esc(e.name) + ": " + S.fmtW(newPr) + "!", "pr", 3400);
        confetti();
      } else {
        toast("Workout saved 💾 — IronLog will remember " + (mode === "weight" ? "these weights" : "this") + " next time.");
      }
      checkGoalCompletion();
      closeModal(back);
      render();
    });

    /* plate calculator */
    if (e.equipment === "barbell") bindPlateCalc(back);

    /* history */
    var histEl = back.querySelector("#ex-history");
    var logs = S.logsFor(e.id);
    if (logs.length) {
      var vals = logs.map(function (l) {
        var b = S.bestSet(l);
        if (mode === "weight") return b && b.w != null ? S.fromKg(b.w) : null;
        if (mode === "reps") return b ? b.r : null;
        return b && b.s != null ? b.s / 60 : null;
      }).filter(function (x) { return x != null; });
      var histHTML = '<div class="section-title">Your progress <small>' + logs.length + " session" + (logs.length > 1 ? "s" : "") + "</small></div>";
      if (vals.length >= 2) histHTML += '<div class="card spark-wrap">' + sparklineSVG(vals) +
        '<div class="goal-meta" style="margin-top:6px"><span>' + (mode === "weight" ? "best set weight" : mode === "reps" ? "best set reps" : "minutes") + " over time</span><span>latest: <b style='color:var(--acc)'>" +
        (mode === "weight" ? S.fmtW(S.toKg(vals[vals.length - 1])) : mode === "time" ? Math.round(vals[vals.length - 1]) + " min" : vals[vals.length - 1] + " reps") + "</b></span></div></div>";
      histHTML += '<div class="card" id="hist-list"></div>';
      histEl.innerHTML = histHTML;
      var listEl = histEl.querySelector("#hist-list");
      logs.slice().reverse().slice(0, 6).forEach(function (l) {
        var item = h('<div class="daylog-item"><div style="flex:1"><b class="small">' +
          new Date(l.ts).toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" }) + "</b>" +
          '<div class="sets">' + setsSummary(e, l) + "</div></div>" +
          '<button class="del btn ghost sm" title="Delete entry" style="color:var(--muted)">🗑</button></div>');
        item.querySelector(".del").addEventListener("click", function () {
          if (window.confirm("Delete this logged session?")) {
            S.deleteLog(l.id);
            closeModal(back);
            openExercise(e.id);
          }
        });
        listEl.appendChild(item);
      });
    }
  }

  function setsSummary(e, l) {
    return l.sets.map(function (st) {
      if (e.trackMode === "weight") return (st.w != null ? S.fmtW(st.w, false) : "—") + "×" + (st.r != null ? st.r : "—");
      if (e.trackMode === "reps") return (st.r != null ? st.r : "—") + " reps";
      return S.fmtTime(st.s);
    }).join("  ·  ") + (e.trackMode === "weight" ? "  (" + S.data.settings.units + ")" : "");
  }

  function plateCalcHTML() {
    return '<details class="acc-box"><summary>🧮 Plate calculator <span class="muted small">tap to open</span></summary>' +
      '<div class="inner"><div class="small muted" style="margin-bottom:8px">Enter your target total weight — see which plates to load per side (' +
      (S.data.settings.units === "lb" ? "45 lb bar" : "20 kg bar") + ").</div>" +
      '<input type="number" step="0.5" inputmode="decimal" id="plate-in" placeholder="Target total (' + S.data.settings.units + ')">' +
      '<div id="plate-out" class="small" style="margin-top:9px;font-weight:600"></div></div></details>';
  }
  function bindPlateCalc(root) {
    var inp = root.querySelector("#plate-in"), out = root.querySelector("#plate-out");
    if (!inp) return;
    inp.addEventListener("input", function () {
      var lb = S.data.settings.units === "lb";
      var bar = lb ? 45 : 20;
      var plates = lb ? [45, 35, 25, 10, 5, 2.5] : [25, 20, 15, 10, 5, 2.5, 1.25];
      var total = parseFloat(inp.value);
      if (isNaN(total) || total <= 0) { out.textContent = ""; return; }
      if (total < bar) { out.textContent = "That's lighter than the empty bar (" + bar + " " + S.data.settings.units + ") — start with just the bar!"; return; }
      var side = (total - bar) / 2, rem = side, used = [];
      plates.forEach(function (p) {
        var n = Math.floor(rem / p + 1e-9);
        if (n > 0) { used.push(n + "×" + p); rem = +(rem - n * p).toFixed(3); }
      });
      out.innerHTML = "Per side: <span style='color:var(--acc)'>" + (used.length ? used.join(" + ") : "empty bar") + "</span>" +
        (rem > 0.01 ? " <span class='muted'>(" + rem.toFixed(2) + " " + S.data.settings.units + " unmatchable)</span>" : "");
    });
  }

  /* ================= HISTORY ================= */
  function renderHistory(v) {
    var now = state.month ? new Date(state.month) : new Date();
    now.setDate(1);
    state.month = now.toISOString();

    var byDate = S.logsByDate();
    var monthName = now.toLocaleDateString("en-US", { month: "long", year: "numeric" });

    var cal = h(
      '<div class="card">' +
        '<div class="cal-head"><h3>' + monthName + '</h3>' +
        '<div class="cal-nav"><button class="btn sm" id="cal-prev">‹</button><button class="btn sm" id="cal-next">›</button></div></div>' +
        '<div class="cal-grid" id="cal-grid"></div>' +
      "</div>"
    );
    var grid = cal.querySelector("#cal-grid");
    ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].forEach(function (d) {
      grid.appendChild(h('<div class="cal-dow">' + d + "</div>"));
    });
    var first = new Date(now.getFullYear(), now.getMonth(), 1);
    var startOffset = (first.getDay() + 6) % 7;
    var start = new Date(first);
    start.setDate(start.getDate() - startOffset);
    var todayStr = S.today();

    for (var i = 0; i < 42; i++) {
      (function () {
        var d = new Date(start);
        d.setDate(d.getDate() + i);
        var ds = S.dstr(d);
        var inMonth = d.getMonth() === now.getMonth();
        var entries = byDate[ds] || [];
        var groups = {};
        entries.forEach(function (l) {
          var ex = EX_BY_ID[l.exerciseId];
          if (ex) groups[ex.group] = 1;
        });
        var dots = Object.keys(groups).slice(0, 3).map(function (gid) {
          return '<i style="background:' + groupMeta(gid).color + '"></i>';
        }).join("");
        var b = h('<button class="cal-day' + (inMonth ? "" : " other") + (ds === todayStr ? " today" : "") + (ds === state.selDate ? " sel" : "") + '">' +
          "<span>" + d.getDate() + "</span>" + '<span class="dots">' + dots + "</span></button>");
        b.addEventListener("click", function () { state.selDate = ds; render(); });
        grid.appendChild(b);
      })();
    }
    cal.querySelector("#cal-prev").addEventListener("click", function () {
      var m = new Date(state.month); m.setMonth(m.getMonth() - 1); state.month = m.toISOString(); render();
    });
    cal.querySelector("#cal-next").addEventListener("click", function () {
      var m = new Date(state.month); m.setMonth(m.getMonth() + 1); state.month = m.toISOString(); render();
    });
    v.appendChild(cal);

    // selected-day details
    var sel = byDate[state.selDate] || [];
    var selDate = new Date(state.selDate + "T12:00:00");
    v.appendChild(h('<div class="section-title">' + selDate.toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric" }) +
      "<small>" + (sel.length ? sel.length + " exercise" + (sel.length > 1 ? "s" : "") : "rest day") + "</small></div>"));
    if (sel.length) {
      var card = h('<div class="card"></div>');
      sel.forEach(function (l) { card.appendChild(dayLogItem(l, true)); });
      v.appendChild(card);
    } else {
      v.appendChild(h('<div class="empty"><div class="big">😴</div>No workout logged this day.</div>'));
    }

    // weekly volume
    var weeks = S.weeklyVolume(6);
    var maxVol = Math.max.apply(null, weeks.map(function (w) { return w.vol; }).concat([1]));
    if (maxVol > 1) {
      v.appendChild(h('<div class="section-title">Weekly volume <small>' + (S.data.settings.units === "lb" ? "lb" : "kg") + " lifted</small></div>"));
      var bars = h('<div class="card"><div class="bars"></div></div>');
      var barsEl = bars.querySelector(".bars");
      weeks.forEach(function (w) {
        var v2 = S.data.settings.units === "lb" ? S.fromKg(w.vol) : w.vol;
        barsEl.appendChild(h('<div class="bar"><i style="height:' + Math.max(3, (w.vol / maxVol) * 78) + 'px"></i><span>' + w.label + "</span></div>"));
        barsEl.lastChild.title = fmtInt(v2) + " " + S.data.settings.units;
      });
      v.appendChild(bars);
    }

    // totals
    var totalV = S.data.settings.units === "lb" ? S.fromKg(S.totalVolumeKg()) : S.totalVolumeKg();
    v.appendChild(h('<div class="statgrid" style="grid-template-columns:1fr 1fr 1fr">' +
      '<div class="stat"><b>' + S.workoutDates().length + "</b><span>gym days</span></div>" +
      '<div class="stat"><b>' + S.data.logs.length + "</b><span>exercises logged</span></div>" +
      '<div class="stat"><b>' + fmtInt(totalV) + "</b><span>" + S.data.settings.units + " lifted</span></div>" +
    "</div>"));

    v.querySelectorAll(".daylog-item .thumb").forEach(watchFig);
  }

  function dayLogItem(l, withDelete) {
    var e = EX_BY_ID[l.exerciseId];
    var name = e ? e.name : l.exerciseId;
    var item = h('<div class="daylog-item">' +
      (e ? '<div class="thumb">' + e.svg + "</div>" : "") +
      '<div style="flex:1;min-width:0"><b class="small">' + esc(name) + "</b>" +
      '<div class="sets">' + (e ? setsSummary(e, l) : "") + "</div></div>" +
      (withDelete ? '<button class="del btn ghost sm" style="color:var(--muted)" title="Delete">🗑</button>' : "") +
      "</div>");
    if (e) {
      item.style.cursor = "pointer";
      item.addEventListener("click", function (ev) {
        if (ev.target.closest(".del")) return;
        openExercise(e.id);
      });
    }
    if (withDelete) {
      item.querySelector(".del").addEventListener("click", function () {
        if (window.confirm("Delete this logged session?")) { S.deleteLog(l.id); render(); }
      });
    }
    return item;
  }

  /* ================= GOALS ================= */
  function goalProgress(g) {
    // returns {cur, target, pct, label}
    if (g.type === "weight") {
      var pr = S.prWeight(g.exerciseId) || 0;
      return { cur: pr, target: g.target, pct: Math.min(1, pr / g.target), label: S.fmtW(pr) + " / " + S.fmtW(g.target) };
    }
    if (g.type === "frequency") {
      var w = S.workoutsThisWeek();
      return { cur: w, target: g.target, pct: Math.min(1, w / g.target), label: w + " / " + g.target + " workouts this week" };
    }
    if (g.type === "learn") {
      var n = S.data.learned.length;
      return { cur: n, target: g.target, pct: Math.min(1, n / g.target), label: n + " / " + g.target + " exercises learned" };
    }
    var c = g.progress || 0;
    return { cur: c, target: g.target, pct: Math.min(1, c / g.target), label: c + " / " + g.target };
  }

  function checkGoalCompletion() {
    var changed = false;
    S.data.goals.forEach(function (g) {
      var p = goalProgress(g);
      if (!g.done && p.pct >= 1) {
        g.done = true;
        changed = true;
        toast("🎯 Goal complete: " + esc(g.title) + "!", "pr", 3400);
        confetti();
      }
    });
    if (changed) S.save();
  }

  function renderGoals(v) {
    var head = h('<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">' +
      "<h1 style='font-size:21px;font-weight:800'>Goals 🎯</h1>" +
      '<button class="btn primary sm" id="add-goal">+ New goal</button></div>');
    head.querySelector("#add-goal").addEventListener("click", openGoalForm);
    v.appendChild(head);

    if (!S.data.goals.length) {
      var emptyBox = h('<div class="empty card"><div class="big">🎯</div>No goals yet.<br><span class="small">Try “Bench press 40 kg”, “3 workouts a week”, or “Learn 15 exercises”.</span><br><br><button class="btn primary" id="add-goal2">Set your first goal</button></div>');
      emptyBox.querySelector("#add-goal2").addEventListener("click", openGoalForm);
      v.appendChild(emptyBox);
      return;
    }

    S.data.goals.slice().sort(function (a, b) { return (a.done === b.done) ? b.createdAt - a.createdAt : (a.done ? 1 : -1); })
      .forEach(function (g) {
        var p = goalProgress(g);
        var card = h('<div class="card goal-card' + (g.done ? " goal-done" : "") + '">' +
          '<div class="goal-top"><h4>' + (g.done ? "🏆 " : "") + esc(g.title) + "</h4>" +
          '<button class="btn ghost sm" style="color:var(--muted)" title="Delete goal">🗑</button></div>' +
          '<div class="progress"><i style="width:' + Math.round(p.pct * 100) + '%"></i></div>' +
          '<div class="goal-meta"><span>' + esc(p.label) + "</span><span>" + Math.round(p.pct * 100) + "%</span></div>" +
          (g.type === "custom" && !g.done ? '<button class="btn sm" data-inc style="align-self:flex-start">+1 progress</button>' : "") +
        "</div>");
        card.querySelector("[title='Delete goal']").addEventListener("click", function () {
          if (window.confirm("Delete goal “" + g.title + "”?")) { S.deleteGoal(g.id); render(); }
        });
        var inc = card.querySelector("[data-inc]");
        if (inc) inc.addEventListener("click", function () {
          g.progress = (g.progress || 0) + 1;
          S.save(); checkGoalCompletion(); render();
        });
        v.appendChild(card);
      });
  }

  function openGoalForm() {
    var weightExs = EX.filter(function (e) { return e.trackMode === "weight"; })
      .sort(function (a, b) { return a.name < b.name ? -1 : 1; });
    var back = openModal(
      '<div class="modal-head"><h2>New goal</h2><button class="icon-btn" data-close>✕</button></div>' +
      '<label class="f">Goal type</label>' +
      '<select id="g-type">' +
        '<option value="weight">🏋️ Lift a target weight</option>' +
        '<option value="frequency">📅 Workouts per week</option>' +
        '<option value="learn">🧠 Learn N exercises</option>' +
        '<option value="custom">✏️ Custom (count anything)</option>' +
      "</select>" +
      '<div id="g-ex-wrap"><label class="f">Exercise</label><select id="g-ex">' +
        weightExs.map(function (e) { return '<option value="' + e.id + '">' + esc(e.name) + "</option>"; }).join("") +
      "</select></div>" +
      '<div id="g-title-wrap" style="display:none"><label class="f">Goal name</label><input type="text" id="g-title" placeholder="e.g. Attend 10 classes"></div>' +
      '<label class="f" id="g-target-lbl">Target weight (' + S.data.settings.units + ")</label>" +
      '<input type="number" id="g-target" step="0.5" min="1" inputmode="decimal" placeholder="e.g. 40">' +
      '<button class="btn primary block" id="g-save" style="margin-top:18px">Create goal</button>'
    );
    back.querySelector("[data-close]").addEventListener("click", function () { closeModal(back); });

    var typeSel = back.querySelector("#g-type");
    function syncForm() {
      var t = typeSel.value;
      back.querySelector("#g-ex-wrap").style.display = t === "weight" ? "" : "none";
      back.querySelector("#g-title-wrap").style.display = t === "custom" ? "" : "none";
      back.querySelector("#g-target-lbl").textContent =
        t === "weight" ? "Target weight (" + S.data.settings.units + ")" :
        t === "frequency" ? "Workouts per week" :
        t === "learn" ? "Number of exercises to learn" : "Target count";
    }
    typeSel.addEventListener("change", syncForm);
    syncForm();

    back.querySelector("#g-save").addEventListener("click", function () {
      var t = typeSel.value;
      var target = parseFloat(back.querySelector("#g-target").value);
      if (isNaN(target) || target <= 0) { toast("Enter a target number 🙂"); return; }
      var goal = { type: t, target: target };
      if (t === "weight") {
        var exId = back.querySelector("#g-ex").value;
        var ex = EX_BY_ID[exId];
        if (!ex) { toast("Pick an exercise"); return; }
        goal.exerciseId = exId;
        goal.target = S.toKg(target);
        goal.title = ex.name + " — " + S.fmtW(goal.target);
      } else if (t === "frequency") {
        goal.title = target + "× per week";
        S.data.settings.weeklyTarget = target;
      } else if (t === "learn") {
        goal.title = "Learn " + target + " exercises";
      } else {
        var name = back.querySelector("#g-title").value.trim();
        if (!name) { toast("Give your goal a name 🙂"); return; }
        goal.title = name;
      }
      S.addGoal(goal);
      closeModal(back);
      checkGoalCompletion();
      render();
      toast("Goal set. Go get it! 💪");
    });
  }

  /* ================= SETTINGS ================= */
  function renderSettings(v) {
    var s = S.data.settings;
    var card = h(
      '<div class="card">' +
        '<div class="setting-row"><div><div class="lbl">Your name</div><div class="desc">Used for the home-screen greeting</div></div>' +
          '<input type="text" id="set-name" style="width:150px" placeholder="Optional" value="' + esc(s.name) + '"></div>' +
        '<div class="setting-row"><div><div class="lbl">Home gym</div><div class="desc">Shown on your home screen</div></div>' +
          '<input type="text" id="set-gym" style="width:150px" placeholder="e.g. VASA Lafayette" value="' + esc(s.gymName) + '"></div>' +
        '<div class="setting-row"><div><div class="lbl">Theme</div><div class="desc">Dark is the default</div></div>' +
          '<div class="seg" id="seg-theme"><button data-v="dark"' + (s.theme === "dark" ? ' class="active"' : "") + ">Dark</button><button data-v=\"light\"" + (s.theme === "light" ? ' class="active"' : "") + ">Light</button></div></div>" +
        '<div class="setting-row"><div><div class="lbl">Units</div><div class="desc">Existing logs convert automatically</div></div>' +
          '<div class="seg" id="seg-units"><button data-v="kg"' + (s.units === "kg" ? ' class="active"' : "") + ">kg</button><button data-v=\"lb\"" + (s.units === "lb" ? ' class="active"' : "") + ">lb</button></div></div>" +
        '<div class="setting-row"><div><div class="lbl">Weekly workout target</div><div class="desc">Drives the ring on Home</div></div>' +
          '<input type="number" id="set-weekly" min="1" max="14" value="' + s.weeklyTarget + '"></div>' +
        '<div class="setting-row"><div><div class="lbl">Default rest timer</div><div class="desc">Seconds between sets</div></div>' +
          '<select id="set-rest"><option>60</option><option>90</option><option>120</option><option>180</option></select></div>' +
      "</div>"
    );
    v.appendChild(h("<h1 style='font-size:21px;font-weight:800;margin-bottom:14px'>Settings ⚙️</h1>"));
    v.appendChild(card);

    card.querySelector("#set-name").addEventListener("change", function () { s.name = this.value.trim(); S.save(); });
    card.querySelector("#set-gym").addEventListener("change", function () { s.gymName = this.value.trim(); S.save(); });
    card.querySelector("#seg-theme").addEventListener("click", function (e) {
      var b = e.target.closest("button"); if (!b) return;
      setTheme(b.dataset.v);
      this.querySelectorAll("button").forEach(function (x) { x.classList.toggle("active", x === b); });
    });
    card.querySelector("#seg-units").addEventListener("click", function (e) {
      var b = e.target.closest("button"); if (!b) return;
      s.units = b.dataset.v; S.save();
      this.querySelectorAll("button").forEach(function (x) { x.classList.toggle("active", x === b); });
      toast("Units switched to " + s.units);
    });
    card.querySelector("#set-weekly").addEventListener("change", function () {
      var n = parseInt(this.value, 10);
      if (n >= 1 && n <= 14) { s.weeklyTarget = n; S.save(); }
    });
    var restSel = card.querySelector("#set-rest");
    restSel.value = String(s.restSec);
    restSel.addEventListener("change", function () { s.restSec = parseInt(this.value, 10); S.save(); });

    /* backup */
    v.appendChild(h('<div class="section-title">Backup &amp; restore</div>'));
    var bk = h(
      '<div class="card">' +
        '<p class="small muted" style="margin:0 0 12px">All your data lives in this browser\'s storage. Export a JSON backup regularly — keep it in your files or upload it to Google Drive. Restore it here on any device.</p>' +
        '<div style="display:flex;gap:9px;flex-wrap:wrap">' +
          '<button class="btn primary" id="bk-export">⬇ Export JSON</button>' +
          '<button class="btn" id="bk-import">⬆ Import JSON</button>' +
          '<input type="file" id="bk-file" accept="application/json,.json" style="display:none">' +
        "</div>" +
      "</div>"
    );
    v.appendChild(bk);
    bk.querySelector("#bk-export").addEventListener("click", function () {
      S.exportJSON();
      toast("Backup downloaded 📦 — store it somewhere safe (e.g. Google Drive).");
    });
    var fileInp = bk.querySelector("#bk-file");
    bk.querySelector("#bk-import").addEventListener("click", function () { fileInp.click(); });
    fileInp.addEventListener("change", function () {
      var f = this.files[0];
      if (!f) return;
      var reader = new FileReader();
      reader.onload = function () {
        var text = reader.result;
        var back = openModal(
          '<div class="modal-head"><h2>Import backup</h2><button class="icon-btn" data-close>✕</button></div>' +
          '<p class="small muted">How should <b>' + esc(f.name) + "</b> be applied?</p>" +
          '<button class="btn primary block" id="imp-merge" style="margin-top:10px">Merge with current data</button>' +
          '<button class="btn danger block" id="imp-replace" style="margin-top:9px">Replace everything</button>'
        );
        back.querySelector("[data-close]").addEventListener("click", function () { closeModal(back); });
        function doImport(mode) {
          var res = S.importJSON(text, mode);
          closeModal(back);
          if (res.ok) { applyTheme(S.data.settings.theme); render(); toast("✅ " + res.msg); }
          else toast("⚠️ " + res.msg, "", 3400);
        }
        back.querySelector("#imp-merge").addEventListener("click", function () { doImport("merge"); });
        back.querySelector("#imp-replace").addEventListener("click", function () {
          if (window.confirm("Replace ALL current data with this backup?")) doImport("replace");
        });
      };
      reader.readAsText(f);
      this.value = "";
    });

    /* about / help */
    v.appendChild(h('<div class="section-title">About</div>'));
    var used = 0;
    try { used = (localStorage.getItem("gymlog.v1") || "").length; } catch (e) {}
    v.appendChild(h(
      '<details class="acc-box"><summary>📖 How IronLog works</summary><div class="inner small muted">' +
        "<p><b>Learn:</b> the Home tab features one new exercise every day, with an animated demo. Mark it learned to grow your toolbox.</p>" +
        "<p><b>Log:</b> open any exercise, enter your sets, save. Next time, your last weights are pre-filled — no more guessing which pin you used.</p>" +
        "<p><b>Progress:</b> PRs trigger automatically, the History tab shows your training calendar, and Goals track lifts, frequency, and learning.</p>" +
        "<p><b>Privacy:</b> zero accounts, zero servers. Data stays in your browser (" + (used / 1024).toFixed(1) + " KB used). Export JSON backups from above.</p>" +
      "</div></details>"
    ));
    v.appendChild(h('<div class="card small muted" style="text-align:center">IronLog · ' + EX.length + " exercises loaded · works offline once visited</div>"));

    /* danger */
    var dz = h('<button class="btn danger block" style="margin-top:6px">⚠ Erase all data</button>');
    dz.addEventListener("click", function () {
      if (window.confirm("Erase ALL IronLog data on this device? Export a backup first if you care about it.")) {
        if (window.confirm("Really erase everything? This cannot be undone.")) {
          S.resetAll(); applyTheme(S.data.settings.theme); render(); toast("Fresh start 🌱");
        }
      }
    });
    v.appendChild(dz);
  }

  /* ================= rest timer ================= */
  var timer = { total: 90, left: 90, iv: null, sheet: null };

  function beep() {
    try {
      var ctx = new (window.AudioContext || window.webkitAudioContext)();
      if (ctx.state === "suspended") ctx.resume();
      [0, 0.18, 0.36].forEach(function (t, i) {
        var o = ctx.createOscillator(), gn = ctx.createGain();
        o.connect(gn); gn.connect(ctx.destination);
        o.frequency.value = i === 2 ? 1040 : 780;
        gn.gain.setValueAtTime(0.001, ctx.currentTime + t);
        gn.gain.exponentialRampToValueAtTime(0.28, ctx.currentTime + t + 0.02);
        gn.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + t + 0.16);
        o.start(ctx.currentTime + t); o.stop(ctx.currentTime + t + 0.18);
      });
    } catch (e) {}
    if (navigator.vibrate) navigator.vibrate([180, 90, 180]);
  }

  function openTimer() {
    if (timer.sheet) return;
    timer.total = timer.left = S.data.settings.restSec || 90;
    var R = 84, C = 2 * Math.PI * R;
    var back = h(
      '<div class="sheet-back"><div class="sheet">' +
        '<div class="grab" style="width:42px;height:4.5px;border-radius:4px;background:var(--border);margin:2px auto 10px"></div>' +
        "<h3>Rest timer</h3>" +
        '<div class="timer-ring"><svg width="190" height="190" viewBox="0 0 190 190">' +
          '<circle cx="95" cy="95" r="' + R + '" fill="none" stroke="var(--card-2)" stroke-width="10"/>' +
          '<circle id="t-ring" cx="95" cy="95" r="' + R + '" fill="none" stroke="var(--acc)" stroke-width="10" stroke-linecap="round" stroke-dasharray="' + C + '" stroke-dashoffset="0"/>' +
        "</svg>" +
        '<div class="timer-num" id="t-num"></div></div>' +
        '<div class="timer-presets">' +
          '<button class="btn sm" data-t="60">1:00</button>' +
          '<button class="btn sm" data-t="90">1:30</button>' +
          '<button class="btn sm" data-t="120">2:00</button>' +
          '<button class="btn sm" data-t="180">3:00</button>' +
        "</div>" +
        '<div class="timer-actions">' +
          '<button class="btn" id="t-plus">+15s</button>' +
          '<button class="btn primary" id="t-toggle" style="min-width:110px">Pause</button>' +
          '<button class="btn" id="t-close">Done</button>' +
        "</div>" +
      "</div></div>"
    );
    document.getElementById("sheet-root").appendChild(back);
    timer.sheet = back;

    var ringEl = back.querySelector("#t-ring"), numEl = back.querySelector("#t-num");
    function paint() {
      numEl.textContent = S.fmtTime(timer.left);
      ringEl.style.strokeDashoffset = C * (1 - timer.left / Math.max(1, timer.total));
      ringEl.style.stroke = timer.left <= 5 ? "var(--warn)" : "var(--acc)";
    }
    function tick() {
      timer.left--;
      if (timer.left <= 0) {
        timer.left = 0; paint(); stop();
        beep();
        numEl.textContent = "GO!";
        toast("⏱ Rest over — next set! 💪");
        return;
      }
      paint();
    }
    function start() { if (!timer.iv) timer.iv = setInterval(tick, 1000); back.querySelector("#t-toggle").textContent = "Pause"; }
    function stop() { clearInterval(timer.iv); timer.iv = null; back.querySelector("#t-toggle").textContent = "Start"; }

    back.querySelectorAll("[data-t]").forEach(function (b) {
      b.addEventListener("click", function () {
        timer.total = timer.left = parseInt(b.dataset.t, 10);
        paint(); start();
      });
    });
    back.querySelector("#t-plus").addEventListener("click", function () { timer.left += 15; timer.total = Math.max(timer.total, timer.left); paint(); });
    back.querySelector("#t-toggle").addEventListener("click", function () { timer.iv ? stop() : start(); });
    function close() { stop(); back.remove(); timer.sheet = null; }
    back.querySelector("#t-close").addEventListener("click", close);
    back.addEventListener("click", function (e) { if (e.target === back) close(); });

    paint();
    start();
  }

  /* ================= boot ================= */
  render();
})();
