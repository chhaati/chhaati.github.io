// data/exercises-chest.js
window.GYM_EXERCISES = window.GYM_EXERCISES || [];
window.GYM_EXERCISES.push(
  {
    id: "chest-press-machine",
    name: "Chest Press Machine",
    group: "chest",
    equipment: "machine",
    level: 1,
    primary: ["Pectorals"],
    secondary: ["Triceps", "Front Delts"],
    steps: [
      "Adjust the seat so the handles line up with the middle of your chest.",
      "Sit with your back and head against the pad and grab the handles with a full grip.",
      "Exhale and press the handles forward until your arms are almost straight.",
      "Inhale and let the handles come back slowly over 2-3 seconds.",
      "Stop just before the weight stack touches down, then press again."
    ],
    tips: [
      "Pick a light pin setting for your first set and add weight only if the last rep felt easy.",
      "Keep your shoulder blades pulled back against the pad; do not let shoulders roll forward.",
      "Never fully lock your elbows at the end of the press.",
      "If your wrists bend backward, choke your grip so the handle sits over your forearm bones."
    ],
    setsReps: "3 sets × 10–12 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<rect x="24" y="68" width="18" height="54"/>
<line x1="24" y1="88" x2="42" y2="88"/>
<line x1="24" y1="106" x2="42" y2="106"/>
<path d="M33 66 L33 30 L136 30 L136 122"/>
<path d="M64 50 L68 94"/>
<path d="M60 94 L92 94"/>
<path d="M78 94 L78 122"/>
<line x1="120" y1="30" x2="102" y2="44">
  <animate attributeName="x2" values="102;124;102" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
<line x1="102" y1="44" x2="102" y2="70">
  <animate attributeName="x1" values="102;124;102" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
  <animate attributeName="x2" values="102;124;102" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="74" cy="44" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<path d="M72 56 L76 88"/>
<path d="M76 88 L92 92 L94 122"/>
<path d="M76 88 L98 90 L100 122"/>
<path stroke="var(--acc,#a3e635)" d="M72 58 L88 74 L100 60">
  <animate attributeName="d" values="M72 58 L88 74 L100 60;M72 58 L98 64 L122 58;M72 58 L88 74 L100 60" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  },
  {
    id: "chest-pec-deck",
    name: "Pec Deck (Fly Machine)",
    group: "chest",
    equipment: "machine",
    level: 1,
    primary: ["Pectorals"],
    secondary: ["Front Delts"],
    steps: [
      "Set the seat so the pads or handles sit at chest height with your feet flat on the floor.",
      "Sit tall with your back on the pad and place your forearms or hands on the arm pads.",
      "Exhale and squeeze the pads together in front of your chest in a hugging motion.",
      "Pause for one second at the middle and feel your chest tighten.",
      "Inhale and open your arms back slowly until you feel a gentle chest stretch."
    ],
    tips: [
      "Open only as far as comfortable — a small stretch is good, shoulder pain is not.",
      "Keep your elbows slightly bent and at the same height as the pads the whole time.",
      "Do not let the weight stack slam down between reps; stop just before it touches.",
      "Think 'elbows together', not 'hands together' — that keeps the work in your chest."
    ],
    setsReps: "3 sets × 12–15 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<path d="M56 122 L56 26 L104 26"/>
<path d="M72 46 L72 94"/>
<path d="M64 94 L92 94"/>
<path d="M80 94 L80 122"/>
<line x1="104" y1="26" x2="100" y2="46">
  <animate attributeName="x2" values="100;116;100" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
<line x1="100" y1="44" x2="100" y2="70" stroke-width="5">
  <animate attributeName="x1" values="100;116;100" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
  <animate attributeName="x2" values="100;116;100" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="84" cy="44" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<path d="M82 56 L80 88"/>
<path d="M80 88 L98 94 L100 122"/>
<path d="M80 88 L104 92 L106 122"/>
<path stroke="var(--acc,#a3e635)" d="M82 58 L98 66 L100 46">
  <animate attributeName="d" values="M82 58 L98 66 L100 46;M82 58 L114 64 L116 46;M82 58 L98 66 L100 46" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  },
  {
    id: "chest-cable-crossover",
    name: "Cable Crossover",
    group: "chest",
    equipment: "cable",
    level: 1,
    primary: ["Pectorals"],
    secondary: ["Front Delts"],
    steps: [
      "Set both pulleys to the top position and pick a light weight on each stack.",
      "Grab a handle in each hand and step forward into a staggered stance, one foot ahead.",
      "Lean your torso slightly forward and start with arms wide, elbows softly bent.",
      "Exhale and sweep both hands down and together in front of your hips, like hugging a barrel.",
      "Squeeze your chest for a second, then inhale and let your arms open back up slowly."
    ],
    tips: [
      "Keep the same slight elbow bend the whole rep — swinging straight arms strains the shoulder.",
      "If the stacks lift you onto your toes, the weight is too heavy; go lighter.",
      "Do not shrug — keep shoulders down and away from your ears.",
      "Step far enough forward that the cables are tight before you start."
    ],
    setsReps: "3 sets × 12–15 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<path d="M30 122 L30 26 L44 26"/>
<rect x="22" y="90" width="16" height="32"/>
<line x1="44" y1="28" x2="70" y2="38" stroke-width="2">
  <animate attributeName="x2" values="70;110;70" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
  <animate attributeName="y2" values="38;84;38" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="98" cy="42" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<path d="M94 54 L84 88"/>
<path d="M84 88 L72 106 L64 122"/>
<path d="M84 88 L102 104 L108 122"/>
<path stroke="var(--acc,#a3e635)" d="M94 56 L86 46 L70 38">
  <animate attributeName="d" values="M94 56 L86 46 L70 38;M94 56 L102 72 L110 84;M94 56 L86 46 L70 38" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  },
  {
    id: "chest-incline-machine-press",
    name: "Incline Press Machine",
    group: "chest",
    equipment: "machine",
    level: 1,
    primary: ["Upper Pectorals"],
    secondary: ["Front Delts", "Triceps"],
    steps: [
      "Adjust the seat so the handles sit at upper-chest level, just below your collarbone.",
      "Sit back with hips and shoulders on the pad and feet flat on the floor.",
      "Exhale and press the handles up and away until your arms are nearly straight.",
      "Inhale and lower slowly for 2-3 seconds until your hands return to chest level.",
      "Keep tension — do not let the stack rest between reps."
    ],
    tips: [
      "If the seat is too low you will press with your shoulders; handles should start below your chin.",
      "Keep your lower back against the pad — no arching to push extra weight.",
      "Drive through your palms, not your fingers, and keep wrists straight."
    ],
    setsReps: "3 sets × 10–12 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<path d="M64 104 L92 56"/>
<path d="M60 104 L82 110"/>
<path d="M74 108 L74 122"/>
<path d="M140 122 L140 32"/>
<line x1="140" y1="32" x2="110" y2="54">
  <animate attributeName="x2" values="110;124;110" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
  <animate attributeName="y2" values="54;34;54" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="101" cy="47" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<path d="M94 60 L74 96"/>
<path d="M74 96 L92 104 L94 122"/>
<path d="M74 96 L98 102 L102 122"/>
<path stroke="var(--acc,#a3e635)" d="M94 62 L104 74 L110 54">
  <animate attributeName="d" values="M94 62 L104 74 L110 54;M94 62 L110 48 L124 34;M94 62 L104 74 L110 54" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  },
  {
    id: "chest-smith-machine-bench",
    name: "Smith Machine Bench Press",
    group: "chest",
    equipment: "machine",
    level: 1,
    primary: ["Pectorals"],
    secondary: ["Triceps", "Front Delts"],
    steps: [
      "Slide a flat bench under the Smith bar so the bar lines up with your mid-chest when lying down.",
      "Lie back, grip the bar slightly wider than shoulders, and rotate your wrists to unhook it.",
      "Inhale and lower the bar slowly until it lightly touches your mid-chest.",
      "Exhale and press straight up until your arms are almost locked.",
      "To finish, press up and rotate the bar back onto the hooks."
    ],
    tips: [
      "Set the safety stops just above chest height so the bar can never pin you.",
      "The bar path is fixed, so bench position matters — test the line-up with the empty bar first.",
      "Keep feet flat on the floor and squeeze your shoulder blades into the bench.",
      "The bar alone has resistance; start with no added plates to learn the movement."
    ],
    setsReps: "3 sets × 8–12 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<path d="M88 18 L88 118"/>
<path d="M76 18 L100 18"/>
<path d="M56 98 L136 98"/>
<path d="M66 98 L66 122"/>
<path d="M128 98 L128 122"/>
<circle cx="88" cy="44" r="7">
  <animate attributeName="cy" values="44;64;44" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</circle>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="64" cy="88" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<path d="M78 92 L110 94"/>
<path d="M110 94 L124 100 L128 122"/>
<path d="M110 94 L128 96 L134 122"/>
<path stroke="var(--acc,#a3e635)" d="M80 92 L84 68 L87 48">
  <animate attributeName="d" values="M80 92 L84 68 L87 48;M80 92 L96 84 L90 66;M80 92 L84 68 L87 48" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  },
  {
    id: "chest-barbell-bench-press",
    name: "Barbell Bench Press",
    group: "chest",
    equipment: "barbell",
    level: 2,
    primary: ["Pectorals"],
    secondary: ["Triceps", "Front Delts"],
    steps: [
      "Lie on the bench with your eyes roughly under the bar and feet flat on the floor.",
      "Grip the bar a little wider than shoulder width and squeeze your shoulder blades together.",
      "Unrack the bar and hold it over your chest with straight arms.",
      "Inhale and lower it under control until it touches your mid-chest.",
      "Exhale and press back up in a slight arc toward the rack until arms are nearly straight."
    ],
    tips: [
      "Ask someone to spot you, or press inside a rack with safety bars set at chest height.",
      "Never bounce the bar off your chest — touch lightly and press.",
      "Keep wrists stacked straight over your elbows; a bent wrist dumps stress on the joint.",
      "Use collars so plates cannot slide off if the bar tilts."
    ],
    setsReps: "3 sets × 6–10 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<path d="M46 122 L46 44"/>
<path d="M46 58 L58 58"/>
<path d="M58 98 L140 98"/>
<path d="M68 98 L68 122"/>
<path d="M130 98 L130 122"/>
<circle cx="90" cy="42" r="10">
  <animate attributeName="cy" values="42;62;42" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</circle>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="70" cy="89" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<path d="M82 92 L114 94"/>
<path d="M114 94 L128 100 L132 122"/>
<path d="M114 94 L132 96 L138 122"/>
<path stroke="var(--acc,#a3e635)" d="M84 92 L88 68 L90 48">
  <animate attributeName="d" values="M84 92 L88 68 L90 48;M84 92 L100 84 L94 66;M84 92 L88 68 L90 48" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  },
  {
    id: "chest-incline-dumbbell-press",
    name: "Incline Dumbbell Press",
    group: "chest",
    equipment: "dumbbell",
    level: 2,
    primary: ["Upper Pectorals"],
    secondary: ["Front Delts", "Triceps"],
    steps: [
      "Set an adjustable bench to a 30–45 degree incline.",
      "Sit with a dumbbell resting upright on each thigh, then lie back and kick them up one at a time to shoulder level.",
      "Exhale and press both dumbbells straight up until your arms are nearly straight.",
      "Inhale and lower slowly until you feel a light stretch across your upper chest.",
      "When done, bring the dumbbells back to your thighs and sit up — do not drop them."
    ],
    tips: [
      "Go lighter than you think — dumbbells wobble more than machines and need control.",
      "Do not clang the dumbbells together at the top; stop just short.",
      "Keep your feet planted and your lower back lightly touching the pad.",
      "Elbows at about 45 degrees from your body, not flared straight out."
    ],
    setsReps: "3 sets × 8–12 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<path d="M64 104 L92 58"/>
<path d="M60 104 L82 110"/>
<path d="M74 108 L74 122"/>
<circle cx="98" cy="21" r="5">
  <animate attributeName="cx" values="98;112;98" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
  <animate attributeName="cy" values="21;43;21" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</circle>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="101" cy="49" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<path d="M94 62 L74 96"/>
<path d="M74 96 L92 104 L94 122"/>
<path d="M74 96 L98 102 L102 122"/>
<path stroke="var(--acc,#a3e635)" d="M94 64 L96 44 L98 26">
  <animate attributeName="d" values="M94 64 L96 44 L98 26;M94 64 L110 68 L112 48;M94 64 L96 44 L98 26" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  },
  {
    id: "chest-dumbbell-fly",
    name: "Dumbbell Fly",
    group: "chest",
    equipment: "dumbbell",
    level: 2,
    primary: ["Pectorals"],
    secondary: ["Front Delts"],
    steps: [
      "Lie flat on a bench holding light dumbbells straight above your chest, palms facing each other.",
      "Bend your elbows slightly and lock that angle in for the whole set.",
      "Inhale and open your arms out to the sides in a wide arc until you feel a chest stretch.",
      "Exhale and squeeze the dumbbells back up along the same arc, like hugging a tree.",
      "Stop the dumbbells just before they touch at the top and repeat."
    ],
    tips: [
      "This is a stretch exercise, not a strength test — use much lighter weight than a press.",
      "Lower only until your elbows reach about bench height; deeper strains the shoulders.",
      "If your elbows straighten or bend more during the rep, it turns into a press — keep the angle fixed."
    ],
    setsReps: "3 sets × 12–15 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<path d="M58 98 L134 98"/>
<path d="M68 98 L68 122"/>
<path d="M126 98 L126 122"/>
<circle cx="88" cy="43" r="5">
  <animate attributeName="cx" values="88;101;88" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
  <animate attributeName="cy" values="43;78;43" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</circle>
</g>
<path d="M88 48 Q108 56 101 78" stroke="var(--acc,#a3e635)" stroke-width="2" opacity="0.45" stroke-dasharray="2 5"/>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="66" cy="89" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<path d="M80 92 L112 94"/>
<path d="M112 94 L126 100 L130 122"/>
<path d="M112 94 L130 96 L136 122"/>
<path stroke="var(--acc,#a3e635)" d="M82 92 L85 70 L88 48">
  <animate attributeName="d" values="M82 92 L85 70 L88 48;M82 92 L92 88 L100 82;M82 92 L85 70 L88 48" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  },
  {
    id: "chest-push-up",
    name: "Push-Up",
    group: "chest",
    equipment: "bodyweight",
    level: 1,
    primary: ["Pectorals"],
    secondary: ["Triceps", "Core"],
    steps: [
      "Place your hands on the floor slightly wider than your shoulders, arms straight.",
      "Step your feet back so your body forms one straight line from head to heels.",
      "Inhale and bend your elbows to lower your chest until it nearly touches the floor.",
      "Exhale and push the floor away until your arms are straight again.",
      "Keep your belly and glutes tight the entire time."
    ],
    tips: [
      "Too hard? Do them with knees on the floor or hands on a bench — same form, less load.",
      "Do not let your hips sag or pike up; imagine a plank of wood from head to heels.",
      "Elbows should point about 45 degrees back, not straight out to the sides.",
      "Look at the floor slightly ahead of you, not up, to keep your neck neutral."
    ],
    setsReps: "3 sets × 8–12 reps",
    trackMode: "reps",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="62" cy="71" r="9" fill="var(--fig,#cbd5e1)" stroke="none">
  <animate attributeName="cy" values="71;93;71" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</circle>
<path d="M152 124 L74 78">
  <animate attributeName="d" values="M152 124 L74 78;M152 124 L74 98;M152 124 L74 78" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
<path d="M80 79 L78 102 L78 124">
  <animate attributeName="d" values="M80 79 L78 102 L78 124;M80 99 L64 110 L78 124;M80 79 L78 102 L78 124" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
<path stroke="var(--acc,#a3e635)" d="M76 80 L72 102 L70 124">
  <animate attributeName="d" values="M76 80 L72 102 L70 124;M76 100 L56 108 L70 124;M76 80 L72 102 L70 124" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  },
  {
    id: "chest-assisted-dip-machine",
    name: "Assisted Dip Machine (Chest Lean)",
    group: "chest",
    equipment: "machine",
    level: 1,
    primary: ["Lower Pectorals", "Triceps"],
    secondary: ["Front Delts"],
    steps: [
      "Set the assist weight — on this machine MORE weight means MORE help, so beginners start heavy.",
      "Grip the dip handles, then kneel onto the assist pad one knee at a time.",
      "Lean your chest forward about 30 degrees to aim the work at your chest.",
      "Inhale and bend your elbows to lower yourself until your upper arms are about parallel to the floor.",
      "Exhale and press back up without fully locking your elbows."
    ],
    tips: [
      "If a full set feels easy, reduce the assist weight a little next time — that makes it harder.",
      "Staying upright turns this into a triceps dip; keep the forward lean for chest.",
      "Go only as deep as your shoulders allow — stop if you feel a pinch at the front of the shoulder.",
      "Step off the pad carefully; let it rise back up slowly, do not let it slam."
    ],
    setsReps: "3 sets × 8–12 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<path d="M148 122 L148 24 L124 24"/>
<path d="M148 58 L118 70"/>
<line x1="92" y1="70" x2="118" y2="70" stroke-width="5"/>
<line x1="70" y1="112" x2="102" y2="112" stroke-width="5">
  <animateTransform attributeName="transform" type="translate" values="0 0;0 14;0 0" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<animateTransform attributeName="transform" type="translate" values="0 0;0 14;0 0" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<circle cx="106" cy="34" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<path d="M102 46 L90 84"/>
<path d="M90 84 L98 104 L76 104"/>
</g>
<path stroke="var(--acc,#a3e635)" stroke-width="6" stroke-linecap="round" d="M102 46 L104 58 L106 70">
  <animate attributeName="d" values="M102 46 L104 58 L106 70;M102 60 L116 64 L106 70;M102 46 L104 58 L106 70" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</svg>`
  }
);
window.GYM_EXERCISES.push(
  {
    id: "chest-iso-lateral-press",
    name: "Iso-Lateral Chest Press (Plate-Loaded)",
    group: "chest",
    equipment: "machine",
    level: 1,
    primary: ["Pectorals"],
    secondary: ["Triceps", "Front Delts"],
    steps: [
      "Set the seat so the handles line up with the middle of your chest, then slide one small plate fully onto each side's plate horn.",
      "Sit with your back and head against the pad, feet flat on the floor, and grab one handle in each hand.",
      "Exhale and press both handles forward at the same speed until your arms are nearly straight.",
      "Inhale and bring the handles back slowly over 2-3 seconds until your hands are beside your chest.",
      "Finish by letting the levers settle gently onto their stops — never drop them."
    ],
    tips: [
      "The empty levers already weigh something, so start with just one 10 lb (5 kg) plate per side.",
      "Each arm moves independently — if one side races ahead or wobbles, go lighter until both travel together.",
      "Load and unload plates evenly, one side at a time, and push them all the way onto the horns.",
      "Stop just short of locking your elbows at the end of each press."
    ],
    setsReps: "3 sets × 8–12 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<path d="M64 50 L68 94"/>
<path d="M60 94 L92 94"/>
<path d="M78 94 L78 122"/>
<path d="M120 122 L120 24 L138 26"/>
<g>
<animateTransform attributeName="transform" type="rotate" values="0 138 26;-16 138 26;0 138 26" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<line x1="138" y1="26" x2="110" y2="60"/>
<line x1="110" y1="60" x2="110" y2="76"/>
<line x1="138" y1="26" x2="152" y2="37"/>
<circle cx="156" cy="40" r="9"/>
<circle cx="156" cy="40" r="4"/>
</g>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="74" cy="44" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<path d="M72 56 L76 88"/>
<path d="M76 88 L92 92 L94 122"/>
<path d="M76 88 L98 90 L100 122"/>
<path stroke="var(--acc,#a3e635)" d="M72 58 L88 74 L106 62">
  <animate attributeName="d" values="M72 58 L88 74 L106 62;M72 58 L98 64 L120 66;M72 58 L88 74 L106 62" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  },
  {
    id: "chest-decline-press-machine",
    name: "Decline Press Machine",
    group: "chest",
    equipment: "machine",
    level: 1,
    primary: ["Lower Pectorals"],
    secondary: ["Triceps", "Front Delts"],
    steps: [
      "Adjust the seat so the handles line up with your lower chest, just below your pecs.",
      "Push the pin fully into a light plate on the weight stack — you can add weight next set if it feels easy.",
      "Sit back with your head and shoulders on the pad, feet flat, and grip the handles.",
      "Exhale and press the handles forward and slightly downward until your arms are nearly straight.",
      "Inhale and return slowly over 2-3 seconds, stopping just before the stack touches down."
    ],
    tips: [
      "If the handles start at shoulder height the seat is too low — you should press from your lower chest, not your shoulders.",
      "Keep your shoulder blades pressed into the back pad for the whole set.",
      "A quiet stack means a controlled rep — never let the plates slam down between reps.",
      "If the machine has a foot lever, use it to bring the handles forward for your first rep instead of reaching back."
    ],
    setsReps: "3 sets × 10–12 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<rect x="22" y="64" width="18" height="58"/>
<line x1="22" y1="98" x2="40" y2="98"/>
<rect x="26" y="67" width="10" height="10" stroke-width="3">
  <animateTransform attributeName="transform" type="translate" values="0 0;0 -10;0 0" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</rect>
<path d="M31 62 L31 28 L132 28 L132 122"/>
<path d="M62 46 L76 96"/>
<path d="M64 96 L96 96"/>
<path d="M82 96 L82 122"/>
<line x1="132" y1="28" x2="100" y2="58">
  <animate attributeName="x2" values="100;118;100" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
  <animate attributeName="y2" values="58;76;58" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
<line x1="100" y1="58" x2="100" y2="72">
  <animate attributeName="x1" values="100;118;100" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
  <animate attributeName="y1" values="58;76;58" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
  <animate attributeName="x2" values="100;118;100" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
  <animate attributeName="y2" values="72;90;72" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="70" cy="40" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<path d="M69 52 L78 90"/>
<path d="M78 90 L94 94 L96 122"/>
<path d="M78 90 L100 92 L104 122"/>
<path stroke="var(--acc,#a3e635)" d="M70 56 L88 70 L98 62">
  <animate attributeName="d" values="M70 56 L88 70 L98 62;M70 56 L98 68 L116 78;M70 56 L88 70 L98 62" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  }
);
window.GYM_EXERCISES.push(
  {
    id: "chest-iso-lateral-incline-press",
    name: "Iso-Lateral Incline Press (Plate-Loaded)",
    group: "chest",
    equipment: "machine",
    level: 1,
    primary: ["Upper Pectorals"],
    secondary: ["Front Delts", "Triceps"],
    steps: [
      "Adjust the seat so the handles start just below your collarbone, then slide one small plate fully onto each side's plate horn.",
      "Sit back with your hips, shoulders and head on the angled pad and grab one handle in each hand.",
      "Exhale and press both handles up and forward at the same speed until your arms are nearly straight.",
      "Inhale and lower slowly over 2-3 seconds until your hands return to upper-chest level.",
      "Let the levers settle gently onto their stops when the set is done — never drop them."
    ],
    tips: [
      "The empty levers already have weight, so start with one 10 lb (5 kg) plate per side and add from there.",
      "Each arm moves on its own — if one side lags or wobbles, go lighter until both travel together.",
      "Keep your lower back against the pad; arching means the weight is too heavy.",
      "Load and unload plates one side at a time and push them all the way onto the horns."
    ],
    setsReps: "3 sets × 8–12 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<path d="M64 104 L92 56"/>
<path d="M60 104 L82 110"/>
<path d="M74 108 L74 122"/>
<path d="M146 122 L146 98"/>
<g>
<animateTransform attributeName="transform" type="rotate" values="0 146 98;22 146 98;0 146 98" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<line x1="146" y1="98" x2="114" y2="58"/>
<circle cx="126" cy="73" r="9"/>
<circle cx="126" cy="73" r="4"/>
</g>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="101" cy="47" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<path d="M94 60 L74 96"/>
<path d="M74 96 L92 104 L94 122"/>
<path d="M74 96 L98 102 L102 122"/>
<path stroke="var(--acc,#a3e635)" d="M94 62 L104 74 L114 58">
  <animate attributeName="d" values="M94 62 L104 74 L114 58;M94 62 L112 56 L131 49;M94 62 L104 74 L114 58" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  },
  {
    id: "chest-smith-incline-press",
    name: "Smith Machine Incline Press",
    group: "chest",
    equipment: "machine",
    level: 1,
    primary: ["Upper Pectorals"],
    secondary: ["Front Delts", "Triceps"],
    steps: [
      "Set an adjustable bench to a 30-45 degree incline and slide it under the Smith bar.",
      "Lie back and check the line-up: the bar should touch your upper chest, just below the collarbone — move the bench, not your body, to fix it.",
      "Grip the bar slightly wider than your shoulders and rotate your wrists to unhook it.",
      "Inhale and lower the bar slowly until it lightly touches your upper chest.",
      "Exhale and press straight up along the rails until your arms are almost locked, then re-hook the bar at the end of the set."
    ],
    tips: [
      "Set the safety stops just above chest height before your first rep so the bar can never pin you.",
      "Do a set with the empty bar first — it has resistance on its own and confirms the bench is in the right spot.",
      "Keep your feet flat on the floor and your shoulder blades squeezed into the bench.",
      "If the bar drifts toward your face or belly, the bench is misplaced — stop and slide it."
    ],
    setsReps: "3 sets × 8–12 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<path d="M112 14 L112 120"/>
<path d="M98 14 L126 14"/>
<path d="M64 106 L92 58"/>
<path d="M60 106 L82 112"/>
<path d="M74 110 L74 122"/>
<circle cx="112" cy="38" r="7">
  <animate attributeName="cy" values="38;58;38" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</circle>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="100" cy="48" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<path d="M94 62 L74 98"/>
<path d="M74 98 L92 106 L94 122"/>
<path d="M74 98 L98 104 L102 122"/>
<path stroke="var(--acc,#a3e635)" d="M96 62 L104 50 L111 40">
  <animate attributeName="d" values="M96 62 L104 50 L111 40;M96 62 L106 68 L111 60;M96 62 L104 50 L111 40" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  },
  {
    id: "chest-low-to-high-cable-fly",
    name: "Low-to-High Cable Fly",
    group: "chest",
    equipment: "cable",
    level: 1,
    primary: ["Upper Pectorals"],
    secondary: ["Front Delts"],
    steps: [
      "At the cable crossover, move both pulleys to the lowest setting and clip on single handles.",
      "Pick a light pin on each stack, grab the handles palms facing forward, and step ahead into a staggered stance.",
      "Start with your hands low and slightly behind your hips, elbows softly bent.",
      "Exhale and sweep both hands forward and up until they meet in front of your face at eye level.",
      "Squeeze your upper chest for a second, then inhale and lower back along the same path over 2-3 seconds."
    ],
    tips: [
      "Think of scooping up and in, like throwing sand over your shoulder — the rising cable line is what hits the upper chest.",
      "Keep the same slight elbow bend the whole rep; bending and straightening turns it into a press.",
      "If the stacks pull you backward onto your heels, step further forward or go lighter.",
      "Do not shrug as your hands rise — shoulders stay down and away from your ears."
    ],
    setsReps: "3 sets × 12–15 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<path d="M30 122 L30 26"/>
<rect x="22" y="88" width="16" height="34"/>
<path d="M38 114 L48 114"/>
<line x1="44" y1="114" x2="70" y2="92" stroke-width="2">
  <animate attributeName="x2" values="70;112;70" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
  <animate attributeName="y2" values="92;44;92" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
</g>
<path d="M70 92 Q104 84 112 44" stroke="var(--acc,#a3e635)" stroke-width="2" opacity="0.45" stroke-dasharray="2 5"/>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="98" cy="42" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<path d="M94 54 L84 88"/>
<path d="M84 88 L72 106 L64 122"/>
<path d="M84 88 L102 104 L108 122"/>
<path stroke="var(--acc,#a3e635)" d="M94 58 L84 74 L70 92">
  <animate attributeName="d" values="M94 58 L84 74 L70 92;M94 58 L104 52 L112 44;M94 58 L84 74 L70 92" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  },
  {
    id: "chest-high-to-low-cable-fly",
    name: "High-to-Low Cable Fly",
    group: "chest",
    equipment: "cable",
    level: 1,
    primary: ["Lower Pectorals"],
    secondary: ["Front Delts"],
    steps: [
      "Move both pulleys of the cable crossover to the highest setting and clip on single handles.",
      "Set a light pin on each stack, grab the handles, and step forward into a staggered stance with a slight forward lean.",
      "Begin with your arms wide and high, hands about shoulder height, elbows softly bent.",
      "Exhale and sweep both hands down and in until they meet in front of your hips, palms facing each other.",
      "Hold the squeeze low for a full second, then inhale and let your arms rise back wide over 2-3 seconds."
    ],
    tips: [
      "The downward line of pull works the lower chest — finish each rep below your waist, not at chest height.",
      "Lock in a slight elbow bend and keep it; swinging straight arms strains the shoulders.",
      "Keep the lean from your ankles, not by rounding your back.",
      "If the weight yanks your arms up on the return, go lighter — you should control both directions."
    ],
    setsReps: "3 sets × 12–15 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<path d="M30 122 L30 22 L44 22"/>
<rect x="22" y="88" width="16" height="34"/>
<line x1="44" y1="24" x2="70" y2="42" stroke-width="2">
  <animate attributeName="x2" values="70;108;70" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
  <animate attributeName="y2" values="42;92;42" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
</g>
<path d="M70 42 Q100 56 108 92" stroke="var(--acc,#a3e635)" stroke-width="2" opacity="0.45" stroke-dasharray="2 5"/>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="102" cy="44" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<path d="M98 56 L86 90"/>
<path d="M86 90 L74 108 L66 122"/>
<path d="M86 90 L104 106 L110 122"/>
<path stroke="var(--acc,#a3e635)" d="M98 58 L84 52 L70 42">
  <animate attributeName="d" values="M98 58 L84 52 L70 42;M98 58 L102 76 L108 92;M98 58 L84 52 L70 42" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  },
  {
    id: "chest-standing-cable-press",
    name: "Standing Cable Chest Press (Functional Trainer)",
    group: "chest",
    equipment: "cable",
    level: 2,
    primary: ["Pectorals"],
    secondary: ["Core", "Front Delts", "Triceps"],
    steps: [
      "At a dual-cable functional trainer (Freemotion or dual adjustable pulley), set both pulleys to chest height.",
      "Grab a handle in each hand, turn to face away from the machine, and step forward until the cables are tight.",
      "Take a staggered stance — one foot ahead — brace your belly, and hold the handles beside your chest.",
      "Exhale and press both handles straight forward until your arms are nearly extended.",
      "Inhale and bring your hands back beside your chest slowly over 2-3 seconds without letting the stacks touch down."
    ],
    tips: [
      "Start with the lightest pin on each side — standing cables challenge your balance far more than a seated machine.",
      "If your torso twists or gets pulled backward, narrow the press or go lighter and squeeze your glutes.",
      "Keep your wrists straight and press slightly inward so the handles almost meet at full extension.",
      "Swap your front foot halfway through your sets so both sides are worked evenly."
    ],
    setsReps: "3 sets × 10–12 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<path d="M26 122 L26 26"/>
<rect x="18" y="86" width="16" height="36"/>
<path d="M26 60 L36 62"/>
<line x1="36" y1="62" x2="90" y2="64" stroke-width="2">
  <animate attributeName="x2" values="90;108;90" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
  <animate attributeName="y2" values="64;62;64" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="72" cy="40" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<path d="M70 52 L64 90"/>
<path d="M64 90 L82 106 L92 122"/>
<path d="M64 90 L56 108 L48 122"/>
<path stroke="var(--acc,#a3e635)" d="M70 56 L78 72 L90 64">
  <animate attributeName="d" values="M70 56 L78 72 L90 64;M70 56 L88 60 L108 62;M70 56 L78 72 L90 64" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  }
);

window.GYM_EXERCISES.push(
  {
    id: "chest-converging-press-machine",
    name: "Converging Chest Press Machine",
    group: "chest",
    equipment: "machine",
    level: 1,
    primary: ["Pectorals"],
    secondary: ["Triceps", "Front Delts"],
    steps: [
      "Set the seat so the handles start right at mid-chest height, then pick a light pin setting.",
      "Sit with your back and head on the pad, grab the handles, and plant your feet flat.",
      "Exhale and press forward — feel the handles curve in toward each other as your arms straighten.",
      "Squeeze your chest for one second at the point where your hands are closest together.",
      "Inhale and ride the handles back slowly until they are beside your chest, then press again."
    ],
    tips: [
      "Unlike the straight-path chest press machine, these handles travel inward on an arc — that finishing squeeze is the whole point, so never rush the last few inches.",
      "Stop the return just before the plates touch down to keep tension on your chest.",
      "Keep your elbows about 45 degrees from your sides, not flared straight out.",
      "Shoulder blades stay pinned to the pad the entire set — do not reach forward at the end."
    ],
    setsReps: "3 sets × 10–12 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<path d="M40 122 L40 28 L136 28 L136 122"/>
<path d="M64 50 L68 94"/>
<path d="M60 94 L92 94"/>
<path d="M78 94 L78 122"/>
<path d="M102 66 Q116 60 126 51" stroke-dasharray="2 5" stroke-width="2"/>
<line x1="136" y1="28" x2="100" y2="52">
  <animate attributeName="x2" values="100;124;100" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
  <animate attributeName="y2" values="52;39;52" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
<line x1="100" y1="52" x2="100" y2="74" stroke-width="5">
  <animate attributeName="x1" values="100;124;100" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
  <animate attributeName="y1" values="52;39;52" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
  <animate attributeName="x2" values="100;124;100" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
  <animate attributeName="y2" values="74;61;74" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="74" cy="44" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<path d="M72 56 L76 88"/>
<path d="M76 88 L92 92 L94 122"/>
<path d="M76 88 L98 90 L100 122"/>
<path stroke="var(--acc,#a3e635)" d="M72 58 L88 74 L100 63">
  <animate attributeName="d" values="M72 58 L88 74 L100 63;M72 58 L100 60 L124 50;M72 58 L88 74 L100 63" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  },
  {
    id: "chest-iso-lateral-decline-press",
    name: "Iso-Lateral Decline Press (Plate-Loaded)",
    group: "chest",
    equipment: "machine",
    level: 2,
    primary: ["Lower Pectorals"],
    secondary: ["Triceps", "Front Delts"],
    steps: [
      "Load the same small plates on both sides of the machine — check both sides twice before sitting down.",
      "Adjust the seat so the handles line up with the bottom of your chest.",
      "Grip both handles, pull your shoulder blades back into the pad, and plant your feet.",
      "Exhale and press forward and slightly downward until your arms are nearly straight.",
      "Inhale and lower for a slow count of three, stopping before the weight rests."
    ],
    tips: [
      "Each arm moves independently — if one side wobbles or lags behind, lighten the load until both travel smoothly together.",
      "The downward press path is what hits your lower chest; keep your ribs down and do not arch your back to flatten it out.",
      "You can press one arm at a time to fix a weaker side — brace your free hand on the frame.",
      "Never let the handles crash back to the start between reps."
    ],
    setsReps: "3 sets × 8–12 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<path d="M128 122 L158 122"/>
<path d="M148 122 L136 36"/>
<path d="M62 50 L68 94"/>
<path d="M58 94 L90 94"/>
<path d="M76 94 L76 122"/>
<line x1="136" y1="36" x2="96" y2="66">
  <animate attributeName="x2" values="96;114;96" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
  <animate attributeName="y2" values="66;86;66" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
<circle cx="91" cy="70" r="8">
  <animate attributeName="cx" values="91;112;91" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
  <animate attributeName="cy" values="70;92;70" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</circle>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="70" cy="46" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<path d="M68 58 L74 90"/>
<path d="M74 90 L96 94 L98 122"/>
<path d="M74 90 L90 96 L90 122"/>
<path stroke="var(--acc,#a3e635)" d="M68 60 L84 72 L96 66">
  <animate attributeName="d" values="M68 60 L84 72 L96 66;M68 60 L92 76 L114 86;M68 60 L84 72 L96 66" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  },
  {
    id: "chest-incline-cable-fly",
    name: "Incline Cable Fly",
    group: "chest",
    equipment: "cable",
    level: 2,
    primary: ["Upper Pectorals"],
    secondary: ["Front Delts"],
    steps: [
      "Drag an incline bench (30–45 degrees) to the middle of the cable crossover and set both pulleys to the lowest notch.",
      "Pick a light weight on each stack, grab one handle, sit down, then reach for the other.",
      "Lie back with arms wide and low, elbows slightly bent, palms facing up and in.",
      "Exhale and sweep both hands up and together over your upper chest, like hugging a big tree.",
      "Inhale and lower slowly until you feel a gentle stretch across your chest, then repeat."
    ],
    tips: [
      "Cables pull on your chest even at the bottom stretch — where dumbbells go slack — so move extra slowly through that range.",
      "Keep the same slight elbow bend the whole rep; bending more as you tire turns it into a press.",
      "If your shoulders complain, shrink the range — only go as wide as feels pain-free."
    ],
    setsReps: "3 sets × 12–15 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<path d="M28 124 L28 32"/>
<path d="M168 124 L168 32"/>
<rect x="158" y="94" width="14" height="28"/>
<circle cx="162" cy="112" r="4"/>
<path d="M70 104 L104 62"/>
<path d="M80 122 L84 100"/>
<line x1="162" y1="112" x2="130" y2="92" stroke-width="2">
  <animate attributeName="x2" values="130;118;130" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
  <animate attributeName="y2" values="92;40;92" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="110" cy="54" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<path d="M104 64 L80 94"/>
<path d="M80 94 L98 102 L100 124"/>
<path d="M80 94 L90 106 L88 124"/>
<path stroke="var(--acc,#a3e635)" d="M100 68 L116 80 L130 92">
  <animate attributeName="d" values="M100 68 L116 80 L130 92;M100 68 L112 54 L118 40;M100 68 L116 80 L130 92" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  },
  {
    id: "chest-seated-cable-press",
    name: "Seated Cable Chest Press",
    group: "chest",
    equipment: "cable",
    level: 1,
    primary: ["Pectorals"],
    secondary: ["Triceps", "Core"],
    steps: [
      "Place a bench in front of the functional trainer, facing away from it, and set both pulleys to chest height.",
      "Pick a light weight, sit down, and hold a handle at each side of your chest.",
      "Exhale and press both handles straight forward until your arms are nearly straight.",
      "Pause for a second, then inhale and bring your hands back beside your chest slowly.",
      "Keep your chest tall and belly braced the entire set."
    ],
    tips: [
      "Unlike the chest press machine, nothing guides these handles — a little wobble is normal at first; slower reps and lighter weight fix it.",
      "Brace your stomach like someone is about to poke it — the cables constantly pull you backward.",
      "Do not shrug your shoulders toward your ears as you press."
    ],
    setsReps: "3 sets × 10–12 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<path d="M30 124 L30 24 L46 24"/>
<rect x="22" y="88" width="14" height="34"/>
<circle cx="34" cy="60" r="4"/>
<path d="M66 62 L70 96"/>
<path d="M62 96 L94 96"/>
<path d="M80 96 L80 124"/>
<line x1="36" y1="60" x2="96" y2="62" stroke-width="2">
  <animate attributeName="x2" values="96;124;96" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
  <animate attributeName="y2" values="62;58;62" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="80" cy="44" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<path d="M78 56 L82 90"/>
<path d="M82 90 L100 94 L102 122"/>
<path d="M82 90 L106 92 L108 122"/>
<path stroke="var(--acc,#a3e635)" d="M78 58 L92 72 L96 62">
  <animate attributeName="d" values="M78 58 L92 72 L96 62;M78 58 L102 62 L124 58;M78 58 L92 72 L96 62" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  },
  {
    id: "chest-single-arm-cable-press",
    name: "Single-Arm Cable Chest Press",
    group: "chest",
    equipment: "cable",
    level: 2,
    primary: ["Pectorals"],
    secondary: ["Core", "Triceps"],
    steps: [
      "Set one pulley to chest height and pick a light weight — this is harder than it looks.",
      "Face away from the stack holding the handle at your chest, and step into a split stance with the opposite foot forward.",
      "Exhale and press the handle straight forward without letting your torso twist.",
      "Inhale and return your hand to your chest under control.",
      "Finish all reps on one arm, then switch arms and switch which foot is forward."
    ],
    tips: [
      "The hidden work is your core fighting the twist — if your shoulders rotate toward the machine, the weight is too heavy.",
      "Keep your hips pointing straight ahead like headlights for the whole set.",
      "Stand tall; do not lean forward to shove the weight out."
    ],
    setsReps: "3 sets × 10–12 reps each arm",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<path d="M28 124 L28 24 L44 24"/>
<rect x="20" y="86" width="14" height="36"/>
<circle cx="32" cy="56" r="4"/>
<line x1="34" y1="56" x2="104" y2="54" stroke-width="2">
  <animate attributeName="x2" values="104;130;104" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
  <animate attributeName="y2" values="54;52;54" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="92" cy="36" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<path d="M90 48 L94 86"/>
<path d="M94 86 L112 102 L116 124"/>
<path d="M94 86 L80 106 L72 124"/>
<path d="M90 50 L96 66 L94 78"/>
<path stroke="var(--acc,#a3e635)" d="M90 50 L102 66 L104 54">
  <animate attributeName="d" values="M90 50 L102 66 L104 54;M90 50 L112 56 L130 52;M90 50 L102 66 L104 54" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  },
  {
    id: "chest-landmine-press",
    name: "Landmine Chest Press",
    group: "chest",
    equipment: "barbell",
    level: 1,
    primary: ["Pectorals"],
    secondary: ["Front Delts", "Triceps", "Core"],
    steps: [
      "Wedge one end of a barbell into the landmine sleeve and load a small plate on the free end.",
      "Stand facing the bar with feet shoulder-width and cup the very end of the bar in both hands at mid-chest.",
      "Exhale and press the bar up and forward until your arms are straight — it travels on a natural arc.",
      "Inhale and lower the bar back to your chest over two slow counts.",
      "Too easy standing? Do it kneeling to take your legs out of the movement."
    ],
    tips: [
      "The up-and-forward arc is much friendlier to cranky shoulders than a flat barbell press — a great first pressing exercise.",
      "Squeeze your glutes and keep your ribs down; the most common mistake is leaning back to finish the press.",
      "Interlace your fingers around the fat end of the bar so it cannot slip."
    ],
    setsReps: "3 sets × 8–12 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<path d="M22 124 L40 124"/>
<circle cx="30" cy="119" r="3"/>
<g>
<line x1="30" y1="120" x2="106" y2="66"/>
<circle cx="90" cy="77" r="8"/>
<animateTransform attributeName="transform" type="rotate" values="0 30 120;-11 30 120;0 30 120" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</g>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="124" cy="40" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<path d="M122 52 L120 88"/>
<path d="M120 88 L132 106 L134 124"/>
<path d="M120 88 L112 108 L108 124"/>
<path stroke="var(--acc,#a3e635)" d="M122 54 L112 68 L106 66">
  <animate attributeName="d" values="M122 54 L112 68 L106 66;M122 54 L106 58 L94 52;M122 54 L112 68 L106 66" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  },
  {
    id: "chest-incline-push-up-smith",
    name: "Incline Push-Up on Smith Bar",
    group: "chest",
    equipment: "bodyweight",
    level: 1,
    primary: ["Pectorals"],
    secondary: ["Triceps", "Core"],
    steps: [
      "Set the Smith machine bar to about hip height and rock it back so it locks into the hooks.",
      "Grip the bar slightly wider than your shoulders and walk your feet back until your body is one straight line.",
      "Inhale and bend your elbows to lower your chest to the bar over two counts.",
      "Exhale and push back up until your arms are straight.",
      "When you can do 15 clean reps, move the bar one notch lower next time."
    ],
    tips: [
      "Bar height is your difficulty dial — higher is easier, lower is harder — making this the perfect ramp toward floor push-ups.",
      "The most common mistake is sagging hips: squeeze your belly and glutes to stay plank-straight.",
      "Double-check the bar is latched in its hooks, not just resting on them, before you lean on it."
    ],
    setsReps: "3 sets × 8–15 reps",
    trackMode: "reps",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="58" y1="20" x2="58" y2="124"/>
<line x1="74" y1="20" x2="74" y2="124"/>
<circle cx="66" cy="74" r="5"/>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="92" cy="60" r="9" fill="var(--fig,#cbd5e1)" stroke="none">
  <animate attributeName="cx" values="92;80;92" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
  <animate attributeName="cy" values="60;70;60" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</circle>
<path d="M146 124 L100 70">
  <animate attributeName="d" values="M146 124 L100 70;M146 124 L90 81;M146 124 L100 70" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
<path stroke="var(--acc,#a3e635)" d="M100 70 L83 71 L66 74">
  <animate attributeName="d" values="M100 70 L83 71 L66 74;M90 81 L76 90 L66 74;M100 70 L83 71 L66 74" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  },
  {
    id: "chest-seated-dip-machine",
    name: "Seated Dip Machine",
    group: "chest",
    equipment: "machine",
    level: 1,
    primary: ["Lower Pectorals"],
    secondary: ["Triceps", "Front Delts"],
    steps: [
      "Set the seat so the handles sit level with your lower chest, and pick a light pin setting.",
      "Grip the handles and lean your chest slightly forward — keep that lean the whole set.",
      "Exhale and press the handles down until your arms are straight.",
      "Inhale and let your hands rise back to chest height over a slow count of three.",
      "Stop before the weight stack touches down, then press again."
    ],
    tips: [
      "The forward chest lean is what separates this from the upright triceps dip machine — sit bolt upright and your triceps take over instead of your chest.",
      "Keep your shoulders pulled down away from your ears; do not shrug as you press.",
      "If your elbows barely bend at the top, lower the weight so you get a full range of motion."
    ],
    setsReps: "3 sets × 10–12 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<path d="M132 122 L132 34"/>
<rect x="138" y="84" width="16" height="38"/>
<line x1="138" y1="96" x2="154" y2="96"/>
<line x1="138" y1="108" x2="154" y2="108"/>
<path d="M60 50 L64 92"/>
<path d="M56 92 L88 92"/>
<path d="M72 92 L72 122"/>
<line x1="130" y1="58" x2="94" y2="64">
  <animate attributeName="x2" values="94;100;94" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
  <animate attributeName="y2" values="64;86;64" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="82" cy="42" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<path d="M80 54 L78 90"/>
<path d="M78 90 L96 94 L98 122"/>
<path d="M78 90 L90 96 L90 122"/>
<path stroke="var(--acc,#a3e635)" d="M80 56 L92 64 L94 62">
  <animate attributeName="d" values="M80 56 L92 64 L94 62;M80 56 L90 76 L100 86;M80 56 L92 64 L94 62" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  }
);
