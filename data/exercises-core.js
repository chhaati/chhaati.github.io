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
