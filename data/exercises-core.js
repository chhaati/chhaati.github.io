// data/exercises-core.js
window.GYM_EXERCISES = window.GYM_EXERCISES || [];
window.GYM_EXERCISES.push(
  {
    id: "core-ab-crunch-machine",
    name: "Ab Crunch Machine",
    group: "core",
    equipment: "machine",
    level: 1,
    primary: ["Abs"],
    secondary: ["Obliques"],
    steps: [
      "Set the seat so the pads rest against your upper chest and your feet sit flat under the ankle rollers.",
      "Pick a light weight, grip the handles beside your head and sit tall.",
      "Breathe out and curl your ribs down toward your hips, rounding your upper back like a shrimp.",
      "Pause for a second at the bottom, feeling your abs squeeze.",
      "Breathe in as you slowly return until the stack almost touches down, then repeat."
    ],
    tips: [
      "Move by rounding your spine, not by pulling with your arms — hands only rest on the handles.",
      "If you feel it in your hip flexors more than your abs, lower the weight and shorten the range.",
      "Take 2 seconds down, 2 seconds back — jerky reps mean the weight is too heavy.",
      "Keep your feet planted; lifting them takes tension off your abs."
    ],
    setsReps: "3 sets × 12–15 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<path d="M22 70 L22 126 M40 70 L40 126 M22 112 L40 112 M22 119 L40 119" stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round"/>
<line x1="22" y1="106" x2="40" y2="106" stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
  <animate attributeName="y1" values="106;88;106" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
  <animate attributeName="y2" values="106;88;106" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
<path d="M74 92 L118 92 M96 92 L96 126" stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round"/>
<circle cx="125" cy="110" r="5" stroke="var(--equip,#64748b)" stroke-width="4"/>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
  <path d="M94 88 L117 96 L117 124"/>
  <g>
    <animateTransform attributeName="transform" type="rotate" values="0 94 88;40 94 88;0 94 88" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
    <line x1="94" y1="88" x2="90" y2="50"/>
    <circle cx="88" cy="38" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
    <line x1="104" y1="40" x2="104" y2="62" stroke="var(--equip,#64748b)" stroke-width="4"/>
    <path d="M90 54 L104 46 L100 33" stroke="var(--acc,#a3e635)"/>
  </g>
</g>
</svg>`
  },
  {
    id: "core-cable-crunch",
    name: "Cable Crunch",
    group: "core",
    equipment: "cable",
    level: 1,
    primary: ["Abs"],
    secondary: ["Obliques"],
    steps: [
      "Attach a rope to a high pulley, grab both ends and kneel down facing the stack, about a metre back.",
      "Hold the rope against the sides of your head — your hands stay glued there the whole set.",
      "Breathe out and crunch down, pulling your elbows toward your knees by rounding your spine.",
      "Squeeze your abs hard at the bottom for one second.",
      "Breathe in and let the cable pull you back up until your torso is nearly upright, then repeat."
    ],
    tips: [
      "Your hips must stay still — if your bum drifts back and forth you are pulling with your arms, not crunching.",
      "Think ribs to hips: the movement is a curl of the spine, not a bow at the waist.",
      "Kneel on a mat or folded towel to save your knees.",
      "Start lighter than feels right — a moderate weight with a hard squeeze beats a heavy tug."
    ],
    setsReps: "3 sets × 12–15 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<path d="M16 26 L16 126 M36 26 L36 126 M16 26 L36 26 M16 104 L36 104 M16 112 L36 112 M16 120 L36 120" stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round"/>
<circle cx="26" cy="32" r="4" stroke="var(--equip,#64748b)" stroke-width="4"/>
<line x1="16" y1="88" x2="36" y2="88" stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
  <animate attributeName="y1" values="88;72;88" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
  <animate attributeName="y2" values="88;72;88" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
<line x1="28" y1="34" x2="72" y2="54" stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
  <animate attributeName="x2" values="72;51;72" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
  <animate attributeName="y2" values="54;88;54" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
  <path d="M106 98 L96 124 M96 124 L120 124"/>
  <g>
    <animateTransform attributeName="transform" type="rotate" values="0 106 98;-42 106 98;0 106 98" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
    <line x1="106" y1="98" x2="86" y2="62"/>
    <circle cx="76" cy="54" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
    <path d="M86 64 L72 54" stroke="var(--acc,#a3e635)"/>
  </g>
</g>
</svg>`
  },
  {
    id: "core-plank",
    name: "Plank",
    group: "core",
    equipment: "bodyweight",
    level: 1,
    primary: ["Abs", "Deep Core"],
    secondary: ["Glutes", "Shoulders"],
    steps: [
      "Lie face down, then prop yourself on your forearms with elbows directly under your shoulders.",
      "Tuck your toes and lift your hips so your body makes one straight line from head to heels.",
      "Squeeze your glutes and gently pull your belly button in, as if bracing for a light poke.",
      "Breathe steadily — do not hold your breath — and hold the line for the target time.",
      "Drop your knees down the moment your hips start to sag."
    ],
    tips: [
      "Sagging hips is the number one mistake — a shorter hold with a straight line beats a long saggy one.",
      "Look at the floor just ahead of your hands to keep your neck neutral.",
      "If a full plank is too hard, start from your knees and build up in 10-second jumps.",
      "Time only counts while your form holds; stop the timer when your hips drop."
    ],
    setsReps: "3 × 30–45s",
    trackMode: "time",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<line x1="30" y1="125" x2="170" y2="125" stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round"/>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
  <path d="M40 122 L64 122 M62 122 L64 100"/>
  <circle cx="50" cy="94" r="9" fill="var(--fig,#cbd5e1)" stroke="none">
    <animate attributeName="cy" values="94;96;94" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
  </circle>
  <path d="M64 100 L118 104 L160 122" stroke="var(--acc,#a3e635)">
    <animate attributeName="d" values="M64 100 L118 104 L160 122;M64 102 L118 108 L160 122;M64 100 L118 104 L160 122" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
  </path>
</g>
</svg>`
  },
  {
    id: "core-hanging-knee-raise",
    name: "Hanging Knee Raise (Captain's Chair)",
    group: "core",
    equipment: "bodyweight",
    level: 2,
    primary: ["Abs", "Hip Flexors"],
    secondary: ["Obliques"],
    steps: [
      "Step onto the captain's chair, rest your forearms on the pads and press your back against the backrest.",
      "Grip the handles, step off the platform and let your legs hang straight down.",
      "Breathe out and draw your knees up toward your chest, letting your lower back round slightly at the top.",
      "Pause briefly when your thighs pass horizontal.",
      "Lower your legs slowly and with control — no swinging — then repeat."
    ],
    tips: [
      "Swinging is cheating: if you start to sway, pause and reset between reps.",
      "Curl your pelvis up at the top — knees alone work the hip flexors, the pelvic curl works the abs.",
      "Keep your shoulders down away from your ears; do not hang slack on the pads.",
      "Too hard? Raise one knee at a time. Too easy? Keep the legs straight."
    ],
    setsReps: "3 sets × 8–12 reps",
    trackMode: "reps",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<path d="M136 20 L136 126 M118 126 L154 126 M98 40 L138 40 M98 40 L98 52" stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round"/>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
  <circle cx="104" cy="26" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
  <line x1="106" y1="46" x2="110" y2="86"/>
  <path d="M106 48 L102 38 L124 37"/>
  <path d="M110 86 L106 108 L108 122" stroke="var(--acc,#a3e635)">
    <animate attributeName="d" values="M110 86 L106 108 L108 122;M110 86 L84 82 L88 106;M110 86 L106 108 L108 122" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
  </path>
</g>
</svg>`
  },
  {
    id: "core-russian-twist",
    name: "Russian Twist",
    group: "core",
    equipment: "bodyweight",
    level: 1,
    primary: ["Obliques"],
    secondary: ["Abs", "Hip Flexors"],
    steps: [
      "Sit on the floor with knees bent, heels lightly touching the ground.",
      "Lean your torso back to about 45 degrees, keeping your back straight, and clasp your hands in front of your chest.",
      "Rotate your shoulders to one side and tap your hands beside your hip.",
      "Rotate all the way across and tap the other side — that is 2 twists.",
      "Keep breathing rhythmically and stay leaned back for the whole set."
    ],
    tips: [
      "Turn your shoulders, not just your arms — your chest should face sideways at each tap.",
      "Keep your back long; rounding into a slump strains the lower back.",
      "Make it harder by holding a dumbbell or lifting your feet; easier by keeping heels down.",
      "Slow and controlled beats fast flailing — count 1 second per twist."
    ],
    setsReps: "3 sets × 16 total twists",
    trackMode: "reps",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
  <circle cx="76" cy="64" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
  <line x1="100" y1="110" x2="80" y2="76"/>
  <path d="M100 110 L130 94 L148 106"/>
  <g>
    <animateTransform attributeName="transform" type="rotate" values="-12 80 76;55 80 76;-12 80 76" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
    <line x1="84" y1="78" x2="118" y2="70" stroke="var(--acc,#a3e635)"/>
    <circle cx="124" cy="68" r="5" stroke="var(--equip,#64748b)" stroke-width="4"/>
  </g>
</g>
</svg>`
  },
  {
    id: "core-dead-bug",
    name: "Dead Bug",
    group: "core",
    equipment: "bodyweight",
    level: 1,
    primary: ["Deep Core", "Abs"],
    secondary: ["Hip Flexors"],
    steps: [
      "Lie on your back with arms pointing at the ceiling and knees bent 90 degrees over your hips.",
      "Press your lower back gently into the floor — it must stay there for every rep.",
      "Breathe out and slowly reach one arm overhead while straightening the opposite leg toward the floor.",
      "Stop just before your lower back starts to arch, then return to the start.",
      "Switch to the other arm and leg and keep alternating."
    ],
    tips: [
      "The whole point is a still, flat lower back — if it arches off the floor, shorten the reach.",
      "Move slowly: about 3 seconds out, 3 seconds back.",
      "Exhale as you extend; it helps your core stay braced.",
      "Hover the heel above the floor rather than resting it down."
    ],
    setsReps: "3 sets × 10 per side",
    trackMode: "reps",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<line x1="34" y1="125" x2="170" y2="125" stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round"/>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
  <circle cx="54" cy="106" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
  <line x1="68" y1="112" x2="112" y2="112"/>
  <line x1="74" y1="110" x2="78" y2="82"/>
  <path d="M112 112 L108 88 L130 90"/>
  <path d="M70 110 L66 80" stroke="var(--acc,#a3e635)">
    <animateTransform attributeName="transform" type="rotate" values="0 70 110;-70 70 110;0 70 110" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
  </path>
  <path d="M112 112 L116 88 L138 92" stroke="var(--acc,#a3e635)">
    <animate attributeName="d" values="M112 112 L116 88 L138 92;M112 112 L138 102 L162 108;M112 112 L116 88 L138 92" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
  </path>
</g>
</svg>`
  },
  {
    id: "core-bicycle-crunch",
    name: "Bicycle Crunch",
    group: "core",
    equipment: "bodyweight",
    level: 1,
    primary: ["Abs", "Obliques"],
    secondary: ["Hip Flexors"],
    steps: [
      "Lie on your back, fingertips lightly behind your ears, and lift your shoulder blades off the floor.",
      "Raise your legs with knees bent, shins roughly parallel to the floor.",
      "Draw one knee in while extending the other leg, and rotate your opposite elbow toward the bent knee.",
      "Switch sides in a smooth pedalling rhythm, exhaling on each twist.",
      "Keep your lower back in contact with the floor throughout."
    ],
    tips: [
      "Never yank your head with your hands — fingertips are just resting there.",
      "Rotate from the ribcage: aim your shoulder, not just your elbow, at the knee.",
      "The lower you extend the straight leg, the harder it gets — keep it higher if your back arches.",
      "Slow pedalling with full twists beats fast half-reps."
    ],
    setsReps: "3 sets × 12 per side",
    trackMode: "reps",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<line x1="34" y1="125" x2="170" y2="125" stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round"/>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
  <circle cx="52" cy="90" r="9" fill="var(--fig,#cbd5e1)" stroke="none">
    <animate attributeName="cy" values="90;86;90" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
    <animate attributeName="cx" values="52;55;52" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
  </circle>
  <path d="M104 112 L64 100">
    <animate attributeName="d" values="M104 112 L64 100;M104 112 L66 96;M104 112 L64 100" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
  </path>
  <path d="M64 100 L54 88">
    <animate attributeName="d" values="M64 100 L54 88;M66 96 L56 84;M64 100 L54 88" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
  </path>
  <path d="M104 112 L134 102 L158 110">
    <animate attributeName="d" values="M104 112 L134 102 L158 110;M104 112 L84 94 L104 86;M104 112 L134 102 L158 110" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
  </path>
  <path d="M104 112 L84 94 L104 86" stroke="var(--acc,#a3e635)">
    <animate attributeName="d" values="M104 112 L84 94 L104 86;M104 112 L134 102 L158 110;M104 112 L84 94 L104 86" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
  </path>
</g>
</svg>`
  },
  {
    id: "core-torso-rotation-machine",
    name: "Torso Rotation Machine",
    group: "core",
    equipment: "machine",
    level: 1,
    primary: ["Obliques"],
    secondary: ["Abs"],
    steps: [
      "Set the seat height so the chest or arm pads sit against your upper body comfortably, and select a light weight.",
      "Set the starting angle on the pivot so you begin turned slightly to one side.",
      "Sit tall, press your thighs against the leg pads and grip the handles.",
      "Breathe out and rotate your torso smoothly to the other side, keeping hips and legs still.",
      "Return slowly against the resistance, finish the set, then swap the setup for the opposite direction."
    ],
    tips: [
      "Rotate from your waist — if your hips swivel on the seat, the weight is too heavy.",
      "Use a small, comfortable range at first; forcing extra rotation strains the lower spine.",
      "Control the return: letting the stack yank you back is where injuries happen.",
      "Do equal sets in both directions to stay balanced."
    ],
    setsReps: "2–3 sets × 12–15 per side",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<path d="M160 70 L160 126 M178 70 L178 126 M160 112 L178 112 M160 119 L178 119" stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round"/>
<line x1="160" y1="104" x2="178" y2="104" stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
  <animate attributeName="y1" values="104;92;104" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
  <animate attributeName="y2" values="104;92;104" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
<circle cx="100" cy="114" r="10" stroke="var(--equip,#64748b)" stroke-width="4"/>
<line x1="100" y1="114" x2="100" y2="105" stroke="var(--acc,#a3e635)" stroke-width="4" stroke-linecap="round">
  <animateTransform attributeName="transform" type="rotate" values="-45 100 114;45 100 114;-45 100 114" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
<path d="M84 90 L112 90 M100 104 L100 90" stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round"/>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
  <path d="M98 88 L122 96 L118 124"/>
  <g>
    <animateTransform attributeName="transform" type="rotate" values="-8 98 88;8 98 88;-8 98 88" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
    <line x1="98" y1="88" x2="96" y2="50"/>
    <circle cx="94" cy="38" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
    <line x1="116" y1="54" x2="116" y2="78" stroke="var(--equip,#64748b)" stroke-width="4"/>
    <path d="M96 56 L114 60 L112 74" stroke="var(--acc,#a3e635)"/>
  </g>
</g>
</svg>`
  },
  {
    id: "core-side-plank",
    name: "Side Plank",
    group: "core",
    equipment: "bodyweight",
    level: 2,
    primary: ["Obliques"],
    secondary: ["Deep Core", "Glutes"],
    steps: [
      "Lie on your side with your elbow directly under your shoulder and forearm flat on the floor.",
      "Stack your feet (or stagger them for balance) and rest your top hand on your hip or point it up.",
      "Lift your hips until your body forms a straight line from head to feet.",
      "Hold, breathing steadily, without letting your hips drop toward the floor.",
      "Lower with control, rest, and repeat on the other side."
    ],
    tips: [
      "Push the floor away through your forearm so your shoulder does not collapse.",
      "Keep your head in line with your spine — do not let it droop forward.",
      "Too hard? Bend your knees and lift from the knee instead of the feet.",
      "Do both sides every time, even if one is much easier."
    ],
    setsReps: "3 × 20–30s per side",
    trackMode: "time",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<line x1="36" y1="125" x2="166" y2="125" stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round"/>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
  <circle cx="54" cy="94" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
  <path d="M46 124 L72 124 M70 124 L66 102"/>
  <line x1="68" y1="100" x2="77" y2="77"/>
  <path d="M66 102 L108 106 L150 124" stroke="var(--acc,#a3e635)">
    <animate attributeName="d" values="M66 102 L108 106 L150 124;M66 102 L110 112 L150 124;M66 102 L108 106 L150 124" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
  </path>
</g>
</svg>`
  }
);

// Lower-abs emphasis expansion
window.GYM_EXERCISES.push(
  {
    id: "core-reverse-crunch",
    name: "Reverse Crunch",
    group: "core",
    equipment: "bodyweight",
    level: 1,
    primary: ["Lower abs"],
    secondary: ["Obliques", "Hip Flexors"],
    steps: [
      "Lie on your back on a mat with your knees bent 90 degrees and shins parallel to the floor.",
      "Rest your arms flat on the floor beside you, palms down, for balance.",
      "Breathe out and curl your hips up off the floor, rolling your knees toward your chest.",
      "Pause for a second at the top with your tailbone lifted, feeling the squeeze below your belly button.",
      "Breathe in and lower your hips back down slowly until your tailbone just touches the mat, then repeat."
    ],
    tips: [
      "The lift comes from curling your pelvis, not from swinging your legs — small and slow beats big and fast.",
      "Press your palms into the floor for stability, but do not push yourself up with them.",
      "If your lower back hurts, shrink the range: lift the tailbone just an inch or two.",
      "Exhale fully as you curl up — it helps your lower abs fire."
    ],
    setsReps: "3 sets × 10–15 reps",
    trackMode: "reps",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<line x1="34" y1="125" x2="170" y2="125" stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round"/>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
  <circle cx="50" cy="108" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
  <line x1="64" y1="112" x2="102" y2="114">
    <animate attributeName="x2" values="102;96;102" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
    <animate attributeName="y2" values="114;102;114" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
  </line>
  <line x1="70" y1="120" x2="98" y2="121"/>
  <path d="M102 114 L112 90 L132 98" stroke="var(--acc,#a3e635)">
    <animate attributeName="d" values="M102 114 L112 90 L132 98;M96 102 L90 74 L112 76;M102 114 L112 90 L132 98" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
  </path>
</g>
</svg>`
  },
  {
    id: "core-lying-leg-raise",
    name: "Lying Leg Raise",
    group: "core",
    equipment: "bodyweight",
    level: 1,
    primary: ["Lower abs", "Hip Flexors"],
    secondary: ["Deep Core"],
    steps: [
      "Lie flat on your back on a mat with your legs straight and together.",
      "Slide your hands under your hips, palms down — this protects your lower back.",
      "Breathe out and raise both legs, keeping them straight, until they point at the ceiling.",
      "Breathe in and lower them slowly, taking about 3 seconds, stopping just before your heels touch the floor.",
      "Keep your lower back pressed toward the floor the whole time, then repeat."
    ],
    tips: [
      "The slow lower is where the lower abs work — never let the legs just drop.",
      "If your back arches off the floor near the bottom, do not lower as far, or bend your knees slightly.",
      "Keep your head and shoulders relaxed on the mat; no neck straining.",
      "Too hard? Raise one leg at a time until both-legs feels controlled."
    ],
    setsReps: "3 sets × 8–12 reps",
    trackMode: "reps",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<line x1="34" y1="125" x2="170" y2="125" stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round"/>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
  <circle cx="46" cy="108" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
  <line x1="60" y1="112" x2="104" y2="114"/>
  <line x1="66" y1="120" x2="98" y2="121"/>
  <g stroke="var(--acc,#a3e635)">
    <animateTransform attributeName="transform" type="rotate" values="0 104 114;-76 104 114;0 104 114" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
    <line x1="104" y1="114" x2="156" y2="118"/>
    <line x1="104" y1="117" x2="152" y2="122" stroke="var(--fig,#cbd5e1)"/>
  </g>
</g>
</svg>`
  },
  {
    id: "core-flutter-kicks",
    name: "Flutter Kicks",
    group: "core",
    equipment: "bodyweight",
    level: 1,
    primary: ["Lower abs"],
    secondary: ["Hip Flexors", "Quads"],
    steps: [
      "Lie on your back with your hands under your hips and legs straight.",
      "Lift both heels about 15 cm (6 inches) off the floor.",
      "Kick your legs up and down in small, quick, alternating scissors — about 30 cm of travel each.",
      "Keep your lower back pressed down and breathe steadily; do not hold your breath.",
      "Kick for the target time, then lower your legs and rest."
    ],
    tips: [
      "Small fast kicks from the hips — knees stay almost straight, ankles relaxed.",
      "If your lower back lifts off the floor, raise your legs higher; the closer to the floor, the harder it is.",
      "Tuck your chin slightly and keep shoulders relaxed instead of shrugging.",
      "Count out loud or breathe in a rhythm to avoid tensing up and breath-holding."
    ],
    setsReps: "3 × 20–30s",
    trackMode: "time",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<line x1="34" y1="125" x2="170" y2="125" stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round"/>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
  <circle cx="46" cy="104" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
  <line x1="60" y1="110" x2="104" y2="114"/>
  <line x1="66" y1="120" x2="98" y2="121"/>
  <line x1="104" y1="114" x2="158" y2="106">
    <animateTransform attributeName="transform" type="rotate" values="-16 104 114;-2 104 114;-16 104 114;-2 104 114;-16 104 114" keyTimes="0;0.25;0.5;0.75;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1"/>
  </line>
  <line x1="104" y1="114" x2="158" y2="106" stroke="var(--acc,#a3e635)">
    <animateTransform attributeName="transform" type="rotate" values="-2 104 114;-16 104 114;-2 104 114;-16 104 114;-2 104 114" keyTimes="0;0.25;0.5;0.75;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1"/>
  </line>
</g>
</svg>`
  },
  {
    id: "core-ab-coaster-machine",
    name: "Ab Coaster Machine",
    group: "core",
    equipment: "machine",
    level: 1,
    primary: ["Lower abs"],
    secondary: ["Obliques", "Hip Flexors"],
    steps: [
      "Kneel on the swinging knee carriage at the bottom of the curved track, one knee at a time.",
      "Grip the fixed handles on the front tower and rest your forearms on the pads, keeping your chest tall.",
      "Start with no added weight — the carriage alone is plenty; plates go on the side pegs only once you can do 15 smooth reps.",
      "Breathe out and curl your knees up the curve toward your chest by tucking your pelvis under.",
      "Breathe in and ride the carriage back down slowly — do not let it free-fall — then repeat."
    ],
    tips: [
      "Finish each rep with a pelvic tuck at the top; just sliding the carriage up and down works your hip flexors, not your lower abs.",
      "Keep your arms as hooks — pulling yourself up with your shoulders is the most common mistake.",
      "To hit the obliques, turn the knee carriage a notch to one side and do a set per side.",
      "Add small plates (2.5–5 kg) to the carriage pegs gradually; speed and momentum ruin the exercise."
    ],
    setsReps: "3 sets × 12–15 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<path d="M58 28 L58 126 M44 36 L70 36" stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round"/>
<path d="M156 118 Q112 114 86 76" stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
  <animateTransform attributeName="transform" type="translate" values="0 0;-30 -18;0 0" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
  <line x1="126" y1="106" x2="150" y2="117"/>
  <circle cx="134" cy="99" r="5"/>
  <circle cx="141" cy="102" r="5"/>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
  <circle cx="76" cy="32" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
  <path d="M82 52 L62 38"/>
  <path d="M82 52 L106 86 L130 102 L148 114" stroke="var(--acc,#a3e635)">
    <animate attributeName="d" values="M82 52 L106 86 L130 102 L148 114;M82 52 L94 72 L102 88 L118 96;M82 52 L106 86 L130 102 L148 114" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
  </path>
</g>
</svg>`
  },
  {
    id: "core-decline-bench-sit-up",
    name: "Decline Bench Sit-Up",
    group: "core",
    equipment: "bodyweight",
    level: 2,
    primary: ["Abs", "Hip Flexors"],
    secondary: ["Lower abs", "Obliques"],
    steps: [
      "Set the decline bench to a gentle angle to start — the steeper the decline, the harder it gets.",
      "Sit on the bench, hook your feet under the ankle rollers and adjust them so they hold your shins snugly.",
      "Cross your arms over your chest and lower your torso back until it is just above the bench.",
      "Breathe out and sit up by curling your ribs toward your hips until your chest nears your thighs.",
      "Breathe in and lower yourself back down slowly, one vertebra at a time, then repeat."
    ],
    tips: [
      "Do not flop back and bounce off the bench — the slow lower is half the exercise.",
      "Keep your chin off your chest and never yank your head with your hands.",
      "Feeling it only in your hips or thighs? Reduce the decline angle and curl your spine more.",
      "Hold a small plate on your chest only after bodyweight sets feel easy."
    ],
    setsReps: "3 sets × 8–12 reps",
    trackMode: "reps",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<path d="M48 110 L142 76 M62 108 L62 126 M126 84 L126 126" stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round"/>
<circle cx="152" cy="66" r="5" stroke="var(--equip,#64748b)" stroke-width="4"/>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
  <path d="M112 88 L136 72 L150 60"/>
  <g>
    <animateTransform attributeName="transform" type="rotate" values="0 112 88;85 112 88;0 112 88" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
    <line x1="112" y1="88" x2="76" y2="102" stroke="var(--acc,#a3e635)"/>
    <circle cx="66" cy="106" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
    <path d="M80 100 L92 86"/>
  </g>
</g>
</svg>`
  },
  {
    id: "core-mountain-climbers",
    name: "Mountain Climbers",
    group: "core",
    equipment: "bodyweight",
    level: 1,
    primary: ["Lower abs", "Hip Flexors"],
    secondary: ["Shoulders", "Quads"],
    steps: [
      "Start in a push-up position: hands under your shoulders, body in a straight line from head to heels.",
      "Brace your core so your hips stay level and do not pike up or sag.",
      "Drive one knee toward your chest, then quickly switch legs, like running in place horizontally.",
      "Keep a steady rhythm and breathe with the pace — exhale as each knee drives in.",
      "Continue for the target time, then rest."
    ],
    tips: [
      "Hips stay low and level — bouncing your bum up and down means you are going too fast.",
      "Keep your shoulders stacked over your wrists; drifting backward makes it much easier and less effective.",
      "New to these? Go slow and tap each foot down; speed comes after control.",
      "Land softly on the balls of your feet to keep the movement quiet and smooth."
    ],
    setsReps: "3 × 20–30s",
    trackMode: "time",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
  <circle cx="62" cy="78" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
  <path d="M70 92 L62 124 M70 92 L76 124"/>
  <line x1="70" y1="92" x2="122" y2="102"/>
  <path d="M122 102 L98 108 L112 122">
    <animate attributeName="d" values="M122 102 L98 108 L112 122;M122 102 L144 114 L164 124;M122 102 L98 108 L112 122;M122 102 L144 114 L164 124;M122 102 L98 108 L112 122" keyTimes="0;0.25;0.5;0.75;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1"/>
  </path>
  <path d="M122 102 L144 114 L164 124" stroke="var(--acc,#a3e635)">
    <animate attributeName="d" values="M122 102 L144 114 L164 124;M122 102 L98 108 L112 122;M122 102 L144 114 L164 124;M122 102 L98 108 L112 122;M122 102 L144 114 L164 124" keyTimes="0;0.25;0.5;0.75;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1"/>
  </path>
</g>
</svg>`
  }
);
