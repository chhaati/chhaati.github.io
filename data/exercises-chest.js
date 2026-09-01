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
