// node data/validate.js data/exercises-<group>.js [more files...]
// Validates exercise data files against SPEC.md. Prints "OK" on success, exits 1 on failure.
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const GROUPS = ["chest", "back", "legs", "shoulders", "arms", "core", "cardio"];
const EQUIP = ["machine", "barbell", "dumbbell", "cable", "bodyweight", "kettlebell", "band", "cardio-machine"];
const MODES = ["weight", "reps", "time"];

const files = process.argv.slice(2);
if (!files.length) {
  console.error("usage: node data/validate.js <file.js> [...]");
  process.exit(1);
}

const errors = [];
const seenIds = new Set();
let total = 0;

for (const file of files) {
  const src = fs.readFileSync(file, "utf8");
  const sandbox = { window: {} };
  try {
    vm.runInNewContext(src, sandbox, { filename: file, timeout: 5000 });
  } catch (e) {
    errors.push(`${file}: script error: ${e.message}`);
    continue;
  }
  const list = (sandbox.window.GYM_EXERCISES || []);
  if (!Array.isArray(list) || list.length === 0) {
    errors.push(`${file}: pushed no exercises into window.GYM_EXERCISES`);
    continue;
  }
  list.forEach((ex, i) => {
    total++;
    const where = `${path.basename(file)}[${i}] (${ex && ex.id || "?"})`;
    const err = (m) => errors.push(`${where}: ${m}`);
    if (!ex || typeof ex !== "object") return err("not an object");
    if (typeof ex.id !== "string" || !/^[a-z0-9]+(-[a-z0-9]+)+$/.test(ex.id)) err("bad id (kebab-case required)");
    else if (seenIds.has(ex.id)) err("duplicate id");
    else seenIds.add(ex.id);
    if (typeof ex.name !== "string" || ex.name.length < 3) err("bad name");
    if (!GROUPS.includes(ex.group)) err(`bad group '${ex.group}'`);
    if (!EQUIP.includes(ex.equipment)) err(`bad equipment '${ex.equipment}'`);
    if (![1, 2, 3].includes(ex.level)) err("bad level (1|2|3)");
    if (!Array.isArray(ex.primary) || ex.primary.length < 1 || ex.primary.length > 2) err("primary must have 1-2 entries");
    if (!Array.isArray(ex.secondary) || ex.secondary.length > 3) err("secondary must be array of 0-3");
    if (!Array.isArray(ex.steps) || ex.steps.length < 3 || ex.steps.length > 6) err("steps must have 3-6 entries");
    if (!Array.isArray(ex.tips) || ex.tips.length < 2 || ex.tips.length > 4) err("tips must have 2-4 entries");
    if (typeof ex.setsReps !== "string" || !ex.setsReps) err("missing setsReps");
    if (!MODES.includes(ex.trackMode)) err(`bad trackMode '${ex.trackMode}'`);
    if (typeof ex.svg !== "string") return err("missing svg");
    if (!ex.svg.includes('viewBox="0 0 200 140"')) err("svg must use viewBox 0 0 200 140");
    if (!/<animate/.test(ex.svg)) err("svg has no <animate*> element (must be animated)");
    if (/<script/i.test(ex.svg)) err("svg must not contain <script>");
    if (/\sid=/.test(ex.svg)) err("svg must not use id= attributes");
    if (ex.svg.length > 4000) err(`svg too large (${ex.svg.length} chars, max 4000)`);
    if (!ex.svg.includes("var(--fig")) err("svg must use var(--fig,...) for the figure");
    if (!ex.svg.includes("repeatCount=\"indefinite\"")) err("svg animation must loop indefinitely");
  });
}

if (errors.length) {
  console.error(errors.join("\n"));
  console.error(`\nFAILED: ${errors.length} error(s) across ${files.length} file(s).`);
  process.exit(1);
}
console.log(`OK — ${total} exercises valid across ${files.length} file(s).`);
