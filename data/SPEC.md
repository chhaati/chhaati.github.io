# GymLog Exercise Data Spec (v1)

Each data file is a plain JS file loaded via `<script>` tag that pushes exercise objects
into a global array. **Exact file skeleton:**

```js
// data/exercises-<group>.js
window.GYM_EXERCISES = window.GYM_EXERCISES || [];
window.GYM_EXERCISES.push(
  { /* exercise 1 */ },
  { /* exercise 2 */ }
);
```

No imports, no top-level `const` collisions (wrap helpers in an IIFE if needed — but you
should not need helpers). File must be valid ES2017. No template-literal placeholders left
unfilled.

## Exercise object schema (all fields required unless marked optional)

| field       | type     | rules |
|-------------|----------|-------|
| `id`        | string   | kebab-case, globally unique, prefixed with group, e.g. `"chest-machine-press"` |
| `name`      | string   | Display name, e.g. `"Chest Press Machine"` |
| `group`     | string   | one of: `chest` `back` `legs` `shoulders` `arms` `core` `cardio` |
| `equipment` | string   | one of: `machine` `barbell` `dumbbell` `cable` `bodyweight` `kettlebell` `band` `cardio-machine` |
| `level`     | number   | 1 = beginner-friendly, 2 = intermediate, 3 = advanced. Majority should be 1. |
| `primary`   | string[] | 1–2 primary muscles, human-readable ("Pectorals", "Quads") |
| `secondary` | string[] | 0–3 secondary muscles |
| `steps`     | string[] | 3–6 numbered how-to steps, short imperative sentences written for a total beginner |
| `tips`      | string[] | 2–4 newbie tips: form cues, common mistakes, machine-setup hints (seat height etc.) |
| `setsReps`  | string   | beginner recommendation, e.g. `"3 sets × 10–12 reps"` or `"3 × 30s"` |
| `trackMode` | string   | `"weight"` (log weight×reps — use for anything loadable incl. machines), `"reps"` (bodyweight reps), `"time"` (planks, cardio — seconds/minutes) |
| `svg`       | string   | Animated inline SVG demo. See SVG spec below. Use a JS template literal (backticks). |

## SVG animation spec — this is the "GIF" showing how to do the exercise

- Root: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">`
  (no width/height attributes — CSS sizes it).
- Draw a **side-view stick figure** performing the movement, plus the equipment
  (bench, machine frame, barbell, dumbbell, cable stack...).
- **Colors — use these CSS variables exactly** (the app themes them):
  - figure body/limbs: `stroke="var(--fig,#cbd5e1)"`
  - the *moving* limb(s) or bar path highlight: `stroke="var(--acc,#a3e635)"`
  - equipment: `stroke="var(--equip,#64748b)"`
  - ground line: `stroke="var(--floor,#334155)"` (a line near y=126)
- Style: `stroke-linecap="round"`, body/limbs `stroke-width="6"`, equipment `stroke-width="4"`,
  head = `<circle r="9">` with `fill="var(--fig,#cbd5e1)"` and no stroke.
- **Animate with SMIL** (`<animate>` / `<animateTransform>`), NOT CSS keyframes (avoids
  class-name collisions when many SVGs render on one page). Loop forever:
  `dur="2.2s" repeatCount="indefinite"`, and animate with `values="A;B;A"` +
  `keyTimes="0;0.5;1"` and `calcMode="spline"` with ease-in-out splines
  `keySplines="0.45 0 0.55 1;0.45 0 0.55 1"` so motion looks natural.
- Prefer animating whole limb groups with `<animateTransform type="rotate">` around a
  joint, and/or `<animate attributeName="d">` on paths where the d-strings have identical
  command structure. The movement must clearly read as the exercise (press = arms extend,
  squat = hips drop, row = elbow pulls back...).
- Keep each SVG under ~2.5 KB. It must contain at least one `<animate` element.
- No `<script>`, no external refs, no ids that could collide — if you need SMIL to reference
  an element, inline the animation inside the target element instead of using ids.

### Worked example (squat) — match this quality bar:

```js
svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<line x1="60" y1="34" x2="140" y2="34" stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
  <animate attributeName="y1" values="34;62;34" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
  <animate attributeName="y2" values="34;62;34" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
  <circle cx="100" cy="26" r="9" fill="var(--fig,#cbd5e1)" stroke="none">
    <animate attributeName="cy" values="26;54;26" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
  </circle>
  <path stroke="var(--acc,#a3e635)" d="M100 38 L100 78 L96 122">
    <animate attributeName="d" values="M100 38 L100 78 L96 122;M100 66 L104 96 L96 122;M100 38 L100 78 L96 122" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
  </path>
</g>
</svg>`
```

(Your figures should usually have 2 legs + 2 arms visible in side view: draw near-side
limbs with the accent or figure color; a far-side limb may share the same path.)

## Content quality bar

- Steps and tips must be genuinely useful to a **first-week gym member**: mention seat/pad
  adjustments on machines, breathing, tempo, what a rep should feel like, what NOT to do.
- Do not invent silly exercise names; use standard gym names.
- Machines are the priority for beginners — include the common pin-loaded machines for the
  group, then barbell/dumbbell/cable/bodyweight staples.

## Validation

Run `node data/validate.js data/exercises-<group>.js` — it must print `OK`. Fix and re-run
until it does.
