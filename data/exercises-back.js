// data/exercises-back.js
window.GYM_EXERCISES = window.GYM_EXERCISES || [];
window.GYM_EXERCISES.push(
  {
    id: "back-lat-pulldown",
    name: "Lat Pulldown Machine",
    group: "back",
    equipment: "machine",
    level: 1,
    primary: ["Lats"],
    secondary: ["Biceps", "Rear delts"],
    steps: [
      "Adjust the thigh pad so it presses snugly on your thighs when seated — it stops you lifting off the seat.",
      "Grab the bar a little wider than shoulder width, palms facing away, and sit down with arms fully stretched up.",
      "Exhale and pull the bar down to the top of your chest, driving your elbows down toward your hips.",
      "Pause for a second with your chest up and shoulder blades squeezed together.",
      "Inhale and let the bar rise slowly (about 2–3 seconds) until your arms are straight again."
    ],
    tips: [
      "Pull to your collarbone, never behind your neck — behind-the-neck pulls strain the shoulders.",
      "Lean back only slightly (10–15°); if you're heaving your whole body, the weight is too heavy.",
      "Think 'elbows in your back pockets' — you should feel the sides of your back working, not just your arms.",
      "Don't let the stack slam down between reps; control the way up too."
    ],
    setsReps: "3 sets × 10–12 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="152" y1="126" x2="152" y2="22"/>
<line x1="152" y1="22" x2="112" y2="26"/>
<line x1="86" y1="96" x2="124" y2="96"/>
<line x1="104" y1="96" x2="104" y2="126"/>
<line x1="110" y1="82" x2="128" y2="82"/>
<line x1="114" y1="28" x2="118" y2="34" stroke-width="3">
<animate attributeName="y2" values="34;70;34" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
<line x1="106" y1="34" x2="132" y2="34">
<animate attributeName="y1" values="34;70;34" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="y2" values="34;70;34" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="97" cy="44" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<path d="M97 54 L99 88 L120 90 L118 122"/>
<path stroke="var(--acc,#a3e635)" d="M97 56 L108 44 L118 34">
<animate attributeName="d" values="M97 56 L108 44 L118 34;M97 56 L102 70 L118 70;M97 56 L108 44 L118 34" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  },
  {
    id: "back-seated-cable-row",
    name: "Seated Cable Row",
    group: "back",
    equipment: "cable",
    level: 1,
    primary: ["Mid-back", "Lats"],
    secondary: ["Biceps", "Rear delts"],
    steps: [
      "Sit on the bench, put your feet on the footplates, and grab the handle with both hands.",
      "Push back with your legs until your knees are slightly bent and your arms are stretched forward.",
      "Sit tall with a straight back, then exhale and pull the handle to your belly button, elbows sliding past your ribs.",
      "Squeeze your shoulder blades together for a second at the back.",
      "Inhale and let your arms straighten slowly — let your shoulders stretch forward a little, but keep your back straight."
    ],
    tips: [
      "Don't rock your torso back and forth to move the weight — your arms and back do the pulling, not momentum.",
      "Keep your shoulders down away from your ears; shrugging means the wrong muscles are working.",
      "A common beginner mistake is rounding the lower back on the stretch — hinge at the hips instead.",
      "Pull the handle to your stomach, not your chest."
    ],
    setsReps: "3 sets × 10–12 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="26" y1="126" x2="26" y2="58"/>
<line x1="40" y1="126" x2="40" y2="58"/>
<line x1="26" y1="58" x2="40" y2="58"/>
<line x1="28" y1="96" x2="38" y2="96"/>
<line x1="28" y1="106" x2="38" y2="106"/>
<line x1="96" y1="98" x2="136" y2="98"/>
<line x1="116" y1="98" x2="116" y2="126"/>
<line x1="58" y1="112" x2="70" y2="92"/>
<line x1="41" y1="78" x2="62" y2="78" stroke-width="3">
<animate attributeName="x2" values="62;96;62" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="106" cy="46" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<path d="M108 56 L114 92 L88 86 L66 100"/>
<path stroke="var(--acc,#a3e635)" d="M108 58 L84 68 L62 78">
<animate attributeName="d" values="M108 58 L84 68 L62 78;M108 58 L118 78 L96 78;M108 58 L84 68 L62 78" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  },
  {
    id: "back-assisted-pullup",
    name: "Assisted Pull-Up Machine",
    group: "back",
    equipment: "machine",
    level: 1,
    primary: ["Lats"],
    secondary: ["Biceps", "Mid-back"],
    steps: [
      "Set the assist weight — on this machine MORE weight = MORE help, so beginners should start with a heavy pin setting.",
      "Climb up, kneel on the pad (or stand, depending on the machine), and grab the wide handles overhead.",
      "Exhale and pull yourself up until your chin is near hand level, leading with your chest.",
      "Lower yourself slowly (2–3 seconds) until your arms are almost straight — that stretch is half the exercise.",
      "Step off carefully when done; don't jump off while the pad is loaded."
    ],
    tips: [
      "If you can't do 6 reps, add assist weight; if 12 feels easy, remove some — that's how you progress to real pull-ups.",
      "Start each rep by pulling your shoulder blades down before your elbows bend.",
      "Avoid half reps: full hang at the bottom, chin near hands at the top.",
      "Keep your body still — no swinging or kicking."
    ],
    setsReps: "3 sets × 6–10 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="62" y1="126" x2="62" y2="18"/>
<line x1="62" y1="18" x2="100" y2="22"/>
<line x1="100" y1="22" x2="100" y2="30"/>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<animateTransform attributeName="transform" type="translate" values="0 0;0 -20;0 0" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<circle cx="92" cy="52" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<path d="M90 62 L86 88 L84 108 L102 112"/>
<line x1="72" y1="116" x2="106" y2="116" stroke="var(--equip,#64748b)" stroke-width="4"/>
</g>
<path stroke="var(--acc,#a3e635)" stroke-width="6" stroke-linecap="round" d="M100 30 L98 46 L90 62">
<animate attributeName="d" values="M100 30 L98 46 L90 62;M100 30 L106 40 L90 42;M100 30 L98 46 L90 62" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</svg>`
  },
  {
    id: "back-chest-supported-row",
    name: "Chest-Supported Row Machine",
    group: "back",
    equipment: "machine",
    level: 1,
    primary: ["Mid-back"],
    secondary: ["Lats", "Biceps", "Rear delts"],
    steps: [
      "Adjust the seat height so the chest pad sits against your mid-chest and the handles are at shoulder level.",
      "Sit down, press your chest into the pad, and grab the handles with straight arms.",
      "Exhale and pull the handles back until your elbows pass your torso, squeezing your shoulder blades together.",
      "Hold the squeeze for one second.",
      "Inhale and return slowly until your arms are straight and you feel a stretch across your upper back."
    ],
    tips: [
      "Keep your chest glued to the pad the whole set — if it comes off, you're cheating with momentum.",
      "This machine is great for beginners because it protects your lower back — perfect before you try barbell rows.",
      "Try both grips if the machine has them: palms-down hits the upper back more, palms-in hits the lats more.",
      "Don't yank with your hands; imagine your hands are hooks and your elbows do the work."
    ],
    setsReps: "3 sets × 10–12 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="124" y1="126" x2="124" y2="96"/>
<line x1="112" y1="96" x2="138" y2="96"/>
<line x1="88" y1="58" x2="104" y2="88"/>
<line x1="104" y1="88" x2="110" y2="96"/>
<line x1="48" y1="120" x2="48" y2="126"/>
<line x1="48" y1="120" x2="54" y2="66">
<animate attributeName="x2" values="54;82;54" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="y2" values="66;72;66" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="89" cy="49" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<path d="M96 60 L122 90 L140 100 L134 124"/>
<path stroke="var(--acc,#a3e635)" d="M96 62 L74 62 L54 66">
<animate attributeName="d" values="M96 62 L74 62 L54 66;M96 62 L110 76 L82 72;M96 62 L74 62 L54 66" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  },
  {
    id: "back-hyperextension",
    name: "Back Extension (Hyperextension)",
    group: "back",
    equipment: "bodyweight",
    level: 1,
    primary: ["Lower back"],
    secondary: ["Glutes", "Hamstrings"],
    steps: [
      "Adjust the pad so its top edge sits at the crease of your hips — you must be able to bend freely at the hips.",
      "Hook your heels under the foot rollers and cross your arms over your chest.",
      "Inhale and lower your torso slowly toward the floor, keeping your back straight, until you feel a hamstring stretch.",
      "Exhale and lift back up until your body forms one straight line from head to heels.",
      "Stop there — don't arch up past straight."
    ],
    tips: [
      "If the pad is too high you'll bend from your spine instead of your hips — that's the number one setup mistake.",
      "Squeeze your glutes at the top; the lift should come from hips and glutes, not from whipping your lower back.",
      "Move slowly: about 2 seconds down, 2 seconds up. No swinging.",
      "Too easy? Hold a small weight plate against your chest."
    ],
    setsReps: "3 sets × 10–15 reps",
    trackMode: "reps",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="84" y1="78" x2="118" y2="106"/>
<line x1="84" y1="78" x2="84" y2="126"/>
<line x1="112" y1="102" x2="112" y2="126"/>
<circle cx="131" cy="104" r="4"/>
<line x1="131" y1="108" x2="131" y2="126"/>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<path d="M86 74 L110 94 L128 110"/>
<g>
<animateTransform attributeName="transform" type="rotate" values="-58 86 74;0 86 74;-58 86 74" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<line x1="86" y1="74" x2="52" y2="66" stroke="var(--acc,#a3e635)"/>
<circle cx="44" cy="62" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<line x1="66" y1="70" x2="62" y2="80"/>
</g>
</g>
</svg>`
  },
  {
    id: "back-dumbbell-row",
    name: "Single-Arm Dumbbell Row",
    group: "back",
    equipment: "dumbbell",
    level: 1,
    primary: ["Lats", "Mid-back"],
    secondary: ["Biceps", "Rear delts"],
    steps: [
      "Put your left knee and left hand on a flat bench; keep your right foot on the floor.",
      "Hold a dumbbell in your right hand, arm hanging straight down, back flat like a table.",
      "Exhale and pull the dumbbell up to your hip, driving your elbow toward the ceiling and keeping it close to your body.",
      "Lower it slowly until your arm is straight and you feel a stretch in your lat.",
      "Do all reps, then switch sides."
    ],
    tips: [
      "Pull toward your hip, not your armpit — rowing to the armpit turns it into an arm exercise.",
      "Keep your torso square: don't twist your shoulders open to hoist the weight higher.",
      "Your neck follows your spine — look at the bench, not the mirror.",
      "Great first rowing exercise: the bench supports your lower back completely."
    ],
    setsReps: "3 sets × 10–12 reps per arm",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="44" y1="88" x2="112" y2="88"/>
<line x1="48" y1="88" x2="48" y2="126"/>
<line x1="108" y1="88" x2="108" y2="126"/>
<line x1="74" y1="104" x2="92" y2="104">
<animate attributeName="y1" values="104;80;104" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="y2" values="104;80;104" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="55" cy="50" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<line x1="68" y1="56" x2="116" y2="62"/>
<line x1="68" y1="58" x2="64" y2="86"/>
<line x1="116" y1="62" x2="100" y2="86"/>
<path d="M116 62 L128 92 L122 124"/>
<path stroke="var(--acc,#a3e635)" d="M80 58 L81 80 L82 102">
<animate attributeName="d" values="M80 58 L81 80 L82 102;M80 58 L88 64 L84 78;M80 58 L81 80 L82 102" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  },
  {
    id: "back-barbell-row",
    name: "Barbell Bent-Over Row",
    group: "back",
    equipment: "barbell",
    level: 2,
    primary: ["Mid-back", "Lats"],
    secondary: ["Lower back", "Biceps"],
    steps: [
      "Hold the bar at shoulder width, palms facing you, and stand with feet hip width apart.",
      "Push your hips back and hinge forward until your torso is close to parallel with the floor, knees slightly bent.",
      "With a flat back, exhale and row the bar to your lower ribs, elbows staying close to your body.",
      "Lower the bar under control until your arms are straight.",
      "Keep your torso frozen in the hinge for the whole set."
    ],
    tips: [
      "Master the empty bar first — the hardest part is holding the hinge, not the rowing.",
      "If your torso bobs up and down each rep, drop the weight; that's your lower back taking over.",
      "Brace your core like someone is about to poke your stomach before each rep.",
      "Learn on the chest-supported row machine first, then move here."
    ],
    setsReps: "3 sets × 8–10 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<circle cx="72" cy="102" r="11" stroke="var(--equip,#64748b)" stroke-width="4">
<animate attributeName="cx" values="72;78;72" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="cy" values="102;74;102" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</circle>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="63" cy="46" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<line x1="74" y1="54" x2="112" y2="80"/>
<path d="M112 80 L120 104 L114 124"/>
<path d="M112 80 L116 102 L108 124"/>
<path stroke="var(--acc,#a3e635)" d="M76 56 L74 80 L72 102">
<animate attributeName="d" values="M76 56 L74 80 L72 102;M76 56 L88 72 L78 74;M76 56 L74 80 L72 102" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  },
  {
    id: "back-straight-arm-pulldown",
    name: "Straight-Arm Cable Pulldown",
    group: "back",
    equipment: "cable",
    level: 1,
    primary: ["Lats"],
    secondary: ["Core", "Triceps"],
    steps: [
      "Set a cable pulley to the highest position and attach a straight bar or rope.",
      "Stand facing the machine, take a step back, and hold the bar with straight arms at shoulder height.",
      "Hinge slightly forward at the hips and brace your core.",
      "Exhale and sweep the bar down in an arc to your thighs, keeping your arms almost straight the whole way.",
      "Inhale and let the bar rise slowly back up until you feel a big stretch in your lats."
    ],
    tips: [
      "This isolates the lats without tiring your biceps — perfect for actually feeling where your lats are.",
      "Keep just a soft bend in the elbows; if your elbows bend and straighten, it becomes a triceps pushdown.",
      "Use a light weight — if you have to lean your whole body on the bar, it's too heavy.",
      "Imagine pushing the floor away with the bar using your armpits."
    ],
    setsReps: "3 sets × 12–15 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="24" y1="126" x2="24" y2="20"/>
<line x1="24" y1="20" x2="38" y2="24"/>
<line x1="38" y1="26" x2="60" y2="40" stroke-width="3">
<animate attributeName="x2" values="60;80;60" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="y2" values="40;84;40" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="101" cy="39" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<line x1="96" y1="50" x2="106" y2="88"/>
<path d="M106 88 L102 106 L108 124"/>
<path d="M106 88 L94 106 L98 124"/>
<path stroke="var(--acc,#a3e635)" d="M96 50 L60 40">
<animate attributeName="d" values="M96 50 L60 40;M96 50 L80 84;M96 50 L60 40" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  },
  {
    id: "back-face-pull",
    name: "Cable Face Pull",
    group: "back",
    equipment: "cable",
    level: 1,
    primary: ["Rear delts", "Upper back"],
    secondary: ["Rotator cuff"],
    steps: [
      "Set a cable pulley to upper-chest or face height and attach the rope handle.",
      "Hold the rope ends with thumbs pointing back toward you, step back until your arms are straight.",
      "Exhale and pull the rope toward your face, spreading the ends apart so your hands finish beside your ears.",
      "Your elbows should end up high and wide, level with your shoulders.",
      "Return slowly with control until your arms are straight."
    ],
    tips: [
      "Go light — this is a posture and shoulder-health exercise, not a strength contest.",
      "Finish each rep like you're doing a double-biceps flex: elbows high, hands back by your ears.",
      "If your lower back arches or you lean back, lower the weight.",
      "Fantastic if you sit at a desk all day — 2–3 sessions a week helps rounded shoulders."
    ],
    setsReps: "3 sets × 12–15 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="20" y1="126" x2="20" y2="28"/>
<line x1="20" y1="48" x2="30" y2="48"/>
<line x1="30" y1="48" x2="56" y2="50" stroke-width="3">
<animate attributeName="x2" values="56;86;56" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="y2" values="50;48;50" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="100" cy="40" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<line x1="102" y1="52" x2="106" y2="88"/>
<path d="M106 88 L112 106 L106 124"/>
<path d="M106 88 L98 106 L102 124"/>
<path stroke="var(--acc,#a3e635)" d="M102 54 L79 52 L56 50">
<animate attributeName="d" values="M102 54 L79 52 L56 50;M102 54 L110 46 L86 48;M102 54 L79 52 L56 50" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  },
  {
    id: "back-deadlift",
    name: "Deadlift",
    group: "back",
    equipment: "barbell",
    level: 2,
    primary: ["Lower back", "Glutes"],
    secondary: ["Hamstrings", "Lats", "Core"],
    steps: [
      "Stand with the bar over the middle of your feet, feet hip width apart.",
      "Hinge down and grip the bar just outside your legs; drop your hips until your shins touch the bar.",
      "Flatten your back, pull your chest up, and take a big breath into your belly.",
      "Push the floor away with your legs and stand up tall — the bar stays in contact with your legs the whole way.",
      "Lock out by squeezing your glutes (don't lean back), then push your hips back and lower the bar the same path."
    ],
    tips: [
      "Start with an empty bar on blocks, or light dumbbells, and have a coach or experienced lifter check your first sessions.",
      "The bar should feel like it's dragging up your shins and thighs — if it drifts forward, your back takes the load.",
      "Think 'push the floor away', not 'pull the bar up' — it keeps your hips and chest rising together.",
      "Never round your lower back for extra reps; when your back starts rounding, the set is over."
    ],
    setsReps: "3 sets × 5–8 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<circle cx="108" cy="112" r="14" stroke="var(--equip,#64748b)" stroke-width="4">
<animate attributeName="cy" values="112;88;112" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</circle>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="90" cy="54" r="9" fill="var(--fig,#cbd5e1)" stroke="none">
<animate attributeName="cx" values="90;101;90" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="cy" values="54;31;54" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</circle>
<path stroke="var(--acc,#a3e635)" d="M96 64 L124 86 L124 106 L112 122">
<animate attributeName="d" values="M96 64 L124 86 L124 106 L112 122;M102 44 L104 76 L106 100 L112 122;M96 64 L124 86 L124 106 L112 122" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
<path d="M96 64 L102 88 L108 110">
<animate attributeName="d" values="M96 64 L102 88 L108 110;M102 44 L105 66 L108 86;M96 64 L102 88 L108 110" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  },
  {
    id: "back-inverted-row",
    name: "Inverted Row",
    group: "back",
    equipment: "bodyweight",
    level: 1,
    primary: ["Mid-back", "Lats"],
    secondary: ["Biceps", "Core"],
    steps: [
      "Set a bar in a rack (or Smith machine) at about waist height.",
      "Lie under it and grab the bar slightly wider than your shoulders, heels on the floor, body in a straight line.",
      "Exhale and pull your chest up to the bar, squeezing your shoulder blades together.",
      "Lower yourself slowly until your arms are straight.",
      "Keep your hips up and body rigid like a plank the entire time."
    ],
    tips: [
      "Easier than pull-ups and needs no machine — raise the bar higher to make it easier, lower to make it harder.",
      "Sagging hips is the classic mistake: squeeze your glutes and abs like a plank.",
      "Touch the bar to the same spot on your chest every rep for consistency.",
      "Bend your knees and put your feet flat on the floor for an easier version."
    ],
    setsReps: "3 sets × 8–12 reps",
    trackMode: "reps",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="78" y1="126" x2="78" y2="46"/>
<line x1="78" y1="46" x2="96" y2="46"/>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="64" cy="99" r="9" fill="var(--fig,#cbd5e1)" stroke="none">
<animate attributeName="cx" values="64;69;64" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="cy" values="99;62;99" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</circle>
<path d="M76 102 L109 112 L142 122">
<animate attributeName="d" values="M76 102 L109 112 L142 122;M79 70 L110 96 L142 122;M76 102 L109 112 L142 122" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
<path stroke="var(--acc,#a3e635)" d="M90 48 L84 76 L76 102">
<animate attributeName="d" values="M90 48 L84 76 L76 102;M90 48 L100 60 L79 70;M90 48 L84 76 L76 102" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  }
);

window.GYM_EXERCISES.push(
  {
    id: "back-iso-lateral-low-row",
    name: "Iso-Lateral Low Row (Plate-Loaded)",
    group: "back",
    equipment: "machine",
    level: 1,
    primary: ["Lats", "Mid-back"],
    secondary: ["Biceps", "Rear delts"],
    steps: [
      "Load the same number of plates on each side of the machine — one 10 lb plate per side is plenty for a first session.",
      "Adjust the seat so the chest pad sits against your mid-chest and the handles are level with the bottom of your ribs when you reach forward.",
      "Press your chest into the pad, grab the palms-facing handles, and sit tall with your feet planted on the footrests.",
      "Exhale and drive your elbows straight back past your ribs until the handles reach your sides.",
      "Pause for a second, then inhale and let your arms stretch fully forward under control — don't let the plates clank down."
    ],
    tips: [
      "Each handle moves independently, so your strong side can't take over — you can even row one arm at a time to fix imbalances.",
      "Keep your chest glued to the pad the whole set; if it peels off, you're heaving with momentum instead of rowing with your back.",
      "Unlike pin-loaded machines there's no stack to catch the weight — set the handles down gently between sets, never drop them mid-rep.",
      "Drive your elbows back and down, not out wide — your hands should finish beside your lower ribs."
    ],
    setsReps: "3 sets × 10–12 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="118" y1="100" x2="144" y2="100"/>
<line x1="132" y1="100" x2="132" y2="126"/>
<line x1="86" y1="54" x2="92" y2="82"/>
<line x1="92" y1="82" x2="86" y2="126"/>
<circle cx="30" cy="104" r="9"/>
<circle cx="43" cy="108" r="7"/>
<line x1="36" y1="118" x2="56" y2="64" stroke-width="3">
<animate attributeName="x2" values="56;78;56" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="y2" values="64;74;64" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="104" cy="42" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<path d="M102 52 L116 90 L94 100 L96 124"/>
<path stroke="var(--acc,#a3e635)" d="M100 58 L78 60 L56 64">
<animate attributeName="d" values="M100 58 L78 60 L56 64;M100 58 L104 74 L78 74;M100 58 L78 60 L56 64" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  },
  {
    id: "back-machine-pullover",
    name: "Machine Pullover",
    group: "back",
    equipment: "machine",
    level: 1,
    primary: ["Lats"],
    secondary: ["Chest", "Triceps"],
    steps: [
      "Set the seat height so your shoulders line up with the machine's pivot point (the round cam beside your shoulder) — this is the key adjustment.",
      "Pick a light pin to start and sit down with your back flat against the pad; fasten the seat belt if the machine has one.",
      "Step on the foot assist bar to bring the bar within reach, grip it overhead, and rest your elbows on the pads.",
      "Exhale and sweep the bar down in a big arc to your belly, driving with your elbows and keeping your chest tall.",
      "Inhale and let the bar rise slowly back overhead until you feel a deep stretch along your lats, then repeat."
    ],
    tips: [
      "One of the few machines that trains your lats without tiring your biceps first — you should feel it from armpit to waist.",
      "Feeling it in your shoulders instead? The seat is probably too low — realign your shoulders with the pivot cam.",
      "Push with your elbows, not your hands — imagine your hands are just resting on the bar for the ride.",
      "Don't let the weight stack slam at the top; the slow overhead stretch is the best part of the rep."
    ],
    setsReps: "3 sets × 10–12 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="158" y1="126" x2="158" y2="68"/>
<line x1="176" y1="126" x2="176" y2="68"/>
<line x1="158" y1="68" x2="176" y2="68"/>
<line x1="158" y1="104" x2="176" y2="104" stroke-width="3">
<animate attributeName="y1" values="104;95;86;95;104" keyTimes="0;0.25;0.5;0.75;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 1 1;0 0 0.55 1;0.45 0 1 1;0 0 0.55 1"/>
<animate attributeName="y2" values="104;95;86;95;104" keyTimes="0;0.25;0.5;0.75;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 1 1;0 0 0.55 1;0.45 0 1 1;0 0 0.55 1"/>
</line>
<line x1="98" y1="98" x2="126" y2="98"/>
<line x1="112" y1="98" x2="112" y2="126"/>
<line x1="118" y1="94" x2="112" y2="56"/>
<circle cx="110" cy="50" r="4"/>
<path d="M110 50 L104 16" stroke-width="3">
<animate attributeName="d" values="M110 50 L104 16;M110 50 L78 37;M110 50 L82 70;M110 50 L78 37;M110 50 L104 16" keyTimes="0;0.25;0.5;0.75;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 1 1;0 0 0.55 1;0.45 0 1 1;0 0 0.55 1"/>
</path>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="106" cy="38" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<path d="M106 48 L112 90 L84 96 L88 124"/>
<path stroke="var(--acc,#a3e635)" d="M106 52 L106 34 L104 16">
<animate attributeName="d" values="M106 52 L106 34 L104 16;M106 52 L92 44 L78 37;M106 52 L94 61 L82 70;M106 52 L92 44 L78 37;M106 52 L106 34 L104 16" keyTimes="0;0.25;0.5;0.75;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 1 1;0 0 0.55 1;0.45 0 1 1;0 0 0.55 1"/>
</path>
</g>
</svg>`
  },
  {
    id: "back-close-grip-pulldown",
    name: "Close-Grip Lat Pulldown (V-Bar)",
    group: "back",
    equipment: "machine",
    level: 1,
    primary: ["Lats"],
    secondary: ["Biceps", "Mid-back"],
    steps: [
      "Clip the V-bar (the narrow triangle handle) onto the pulldown cable and adjust the thigh pad so it locks your legs down snugly.",
      "Pick a moderate pin — most people can handle a little more weight here than on the wide bar.",
      "Sit down, reach up, and grab the handle with your palms facing each other, arms fully stretched overhead.",
      "Exhale, lean back slightly, and pull the handle down to the top of your chest with your elbows tucked close to your ribs.",
      "Squeeze your back for a second, then inhale and let the handle rise slowly until your arms are straight again."
    ],
    tips: [
      "The close, palms-facing grip is easier on the shoulders and wrists than the wide bar — a great swap if wide pulldowns feel awkward.",
      "Lift your chest up to meet the handle at the bottom instead of hunching your shoulders forward.",
      "Keep the slight lean-back fixed — rocking further back every rep means the pin is set too heavy.",
      "Drive your elbows down toward your ribs, not backward; you should feel the sides of your back doing the work."
    ],
    setsReps: "3 sets × 10–12 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="40" y1="126" x2="40" y2="20"/>
<line x1="40" y1="20" x2="84" y2="24"/>
<line x1="24" y1="126" x2="24" y2="78"/>
<line x1="24" y1="112" x2="40" y2="112" stroke-width="3">
<animate attributeName="y1" values="112;96;112" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="y2" values="112;96;112" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
<line x1="84" y1="24" x2="88" y2="32" stroke-width="3">
<animate attributeName="x2" values="88;92;88" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="y2" values="32;70;32" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
<path d="M83 38 L88 32 L93 38" stroke-width="3">
<animate attributeName="d" values="M83 38 L88 32 L93 38;M87 76 L92 70 L97 76;M83 38 L88 32 L93 38" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
<line x1="78" y1="98" x2="112" y2="98"/>
<line x1="94" y1="98" x2="94" y2="126"/>
<line x1="78" y1="86" x2="96" y2="86"/>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="102" cy="46" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<path d="M102 56 L108 92 L84 94 L88 124"/>
<path stroke="var(--acc,#a3e635)" d="M102 58 L95 45 L88 32">
<animate attributeName="d" values="M102 58 L95 45 L88 32;M102 58 L100 68 L92 70;M102 58 L95 45 L88 32" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  }
);

window.GYM_EXERCISES.push(
  {
    id: "back-iso-lateral-front-lat-pulldown",
    name: "Iso-Lateral Front Lat Pulldown",
    group: "back",
    equipment: "machine",
    level: 1,
    primary: ["Lats"],
    secondary: ["Biceps", "Mid-back"],
    steps: [
      "Slide the same plates onto both lever arms — one small plate per side is plenty for a first session.",
      "Adjust the seat so the thigh pads press snugly on your legs and the overhead handles are just within reach.",
      "Sit tall, grab the handles, and let your arms stretch all the way up so you feel your lats lengthen.",
      "Exhale and pull the handles down to your upper chest, driving your elbows down and slightly back.",
      "Pause with your chest up, then inhale and let the levers rise slowly until your arms are straight again."
    ],
    tips: [
      "Each handle rides its own lever, so your strong side can't cover for the weak one — you can even do one arm at a time.",
      "There's no weight stack to catch the plates — control the top of every rep instead of letting the levers crash back up.",
      "Pull with your elbows, not your hands; if your biceps tire first, you're yanking with your arms instead of your lats.",
      "Keep your chest lifted and lean back only slightly — hunching forward over the machine robs your lats of the work."
    ],
    setsReps: "3 sets × 10–12 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="146" y1="126" x2="146" y2="30"/>
<line x1="88" y1="96" x2="124" y2="96"/>
<line x1="106" y1="96" x2="106" y2="126"/>
<line x1="108" y1="82" x2="126" y2="82"/>
<g stroke-width="3">
<animateTransform attributeName="transform" type="rotate" values="0 146 30;-55 146 30;0 146 30" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<line x1="146" y1="30" x2="106" y2="24"/>
<line x1="146" y1="30" x2="172" y2="44"/>
<circle cx="174" cy="46" r="8"/>
<circle cx="167" cy="42" r="5"/>
</g>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="95" cy="48" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<path d="M96 58 L100 90 L122 92 L120 124"/>
<path stroke="var(--acc,#a3e635)" d="M97 60 L101 42 L106 24">
<animate attributeName="d" values="M97 60 L101 42 L106 24;M97 60 L102 70 L118 59;M97 60 L101 42 L106 24" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  },
  {
    id: "back-iso-lateral-high-row",
    name: "Iso-Lateral High Row",
    group: "back",
    equipment: "machine",
    level: 1,
    primary: ["Lats", "Mid-back"],
    secondary: ["Biceps", "Rear delts"],
    steps: [
      "Load matching plates on both sides, then set the seat height so your chest meets the pad and the handles sit up ahead of you.",
      "Sit down, lean your chest firmly into the pad, and reach up-and-forward to grab the handles.",
      "Exhale and pull the handles down and back toward the sides of your ribs, driving your elbows behind you.",
      "Squeeze your shoulder blades down and together for a second.",
      "Inhale and let your arms stretch fully up and forward — that long stretch is what makes this machine special."
    ],
    tips: [
      "Keep your chest glued to the pad for the whole rep — pushing yourself back off it means the plates are too heavy.",
      "Think 'elbows to your back pockets': the down-AND-back arc is what hits the upper lats, not a straight pulldown.",
      "Let the weight pull you into a full stretch at the top instead of cutting the rep short.",
      "Row one arm at a time to fix side-to-side imbalances — brace your free hand on the frame."
    ],
    setsReps: "3 sets × 10–12 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="36" y1="126" x2="36" y2="30"/>
<circle cx="22" cy="116" r="9"/>
<circle cx="33" cy="119" r="6"/>
<line x1="96" y1="100" x2="128" y2="100"/>
<line x1="112" y1="100" x2="112" y2="126"/>
<line x1="88" y1="50" x2="94" y2="86"/>
<line x1="91" y1="86" x2="88" y2="126"/>
<line x1="36" y1="30" x2="64" y2="40" stroke-width="3">
<animate attributeName="x2" values="64;86;64" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="y2" values="40;66;40" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="94" cy="40" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<path d="M96 50 L104 92 L94 100 L96 124"/>
<path stroke="var(--acc,#a3e635)" d="M96 54 L80 47 L64 40">
<animate attributeName="d" values="M96 54 L80 47 L64 40;M96 54 L102 74 L86 66;M96 54 L80 47 L64 40" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  },
  {
    id: "back-t-bar-row",
    name: "T-Bar Row",
    group: "back",
    equipment: "machine",
    level: 2,
    primary: ["Mid-back", "Lats"],
    secondary: ["Lower back", "Biceps", "Rear delts"],
    steps: [
      "Wedge one end of the bar into the landmine pivot and load plates on the free end — smaller 25 lb plates let you pull deeper than big 45s.",
      "Straddle the bar, hook the V-handle underneath it just behind the plates, and stand with your feet planted on the platform.",
      "Push your hips back and hinge to about 45 degrees — chest up, back flat, arms hanging straight.",
      "Exhale and row the plates up to your chest, driving your elbows back along your ribs.",
      "Inhale and lower under control until your arms are straight, holding the hinge — don't stand up between reps."
    ],
    tips: [
      "Rounding your lower back is the big mistake here — brace your core and keep your chest proud; when your back starts rounding, the set is over.",
      "Don't yank with your biceps or heave your torso upright — the weight moves because your elbows drive back.",
      "Keep your knees softly bent and your weight over mid-foot so the plates don't tip you forward.",
      "If your gym has a T-bar machine with a chest pad, that version supports your lower back and is friendlier for your first sessions."
    ],
    setsReps: "3 sets × 8–10 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="20" y1="126" x2="28" y2="114"/>
<line x1="36" y1="126" x2="28" y2="114"/>
<line x1="106" y1="124" x2="148" y2="124"/>
<line x1="28" y1="116" x2="118" y2="102" stroke-width="3">
<animate attributeName="x2" values="118;114;118" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="y2" values="102;82;102" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
<circle cx="114" cy="100" r="9">
<animate attributeName="cx" values="114;110;114" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="cy" values="100;80;100" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</circle>
<circle cx="121" cy="99" r="6">
<animate attributeName="cx" values="121;117;121" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="cy" values="99;79;99" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</circle>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="85" cy="50" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<line x1="94" y1="58" x2="126" y2="80"/>
<path d="M126 80 L133 102 L127 122"/>
<path d="M126 80 L128 102 L119 122"/>
<path stroke="var(--acc,#a3e635)" d="M96 62 L100 84 L104 105">
<animate attributeName="d" values="M96 62 L100 84 L104 105;M96 62 L107 76 L101 88;M96 62 L100 84 L104 105" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  }
);

window.GYM_EXERCISES.push(
  {
    id: "back-wide-grip-lat-pulldown",
    name: "Wide-Grip Lat Pulldown",
    group: "back",
    equipment: "machine",
    level: 1,
    primary: ["Lats"],
    secondary: ["Rear delts", "Biceps"],
    steps: [
      "Set the thigh pad snug against your legs, then stand and grab the bar out on the wide, angled ends — hands well beyond shoulder width.",
      "Sit down with your arms stretched fully overhead and your chest lifted.",
      "Exhale and pull the bar down to the top of your chest, driving your elbows down and out to the sides.",
      "Squeeze for a second with your shoulder blades pulled down and together.",
      "Inhale and let the bar rise slowly for 2–3 seconds until your arms are straight again."
    ],
    tips: [
      "The wide grip shortens the pull, so use LESS weight than your normal pulldown — chasing the same pin is the most common mistake.",
      "Compared with the standard or close grip, the wide grip works the outer lats that build back width; keep both in your week.",
      "Pull to your collarbone in front, never behind your neck.",
      "If your wrists ache, slide your hands in an inch — the bend in the bar should sit comfortably in your palms."
    ],
    setsReps: "3 sets × 10–12 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="152" y1="126" x2="152" y2="22"/>
<line x1="152" y1="22" x2="114" y2="26"/>
<line x1="86" y1="96" x2="124" y2="96"/>
<line x1="104" y1="96" x2="104" y2="126"/>
<line x1="110" y1="82" x2="128" y2="82"/>
<line x1="116" y1="28" x2="117" y2="32" stroke-width="3">
<animate attributeName="y2" values="32;58;32" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
<path d="M96 34 L103 30 L131 30 L138 34" stroke-width="3">
<animate attributeName="d" values="M96 34 L103 30 L131 30 L138 34;M96 60 L103 56 L131 56 L138 60;M96 34 L103 30 L131 30 L138 34" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="95" cy="46" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<path d="M97 56 L99 88 L120 90 L118 122"/>
<path stroke="var(--acc,#a3e635)" d="M97 58 L106 46 L117 32">
<animate attributeName="d" values="M97 58 L106 46 L117 32;M97 58 L99 74 L114 58;M97 58 L106 46 L117 32" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  },
  {
    id: "back-reverse-grip-lat-pulldown",
    name: "Reverse-Grip Lat Pulldown",
    group: "back",
    equipment: "machine",
    level: 1,
    primary: ["Lats"],
    secondary: ["Biceps", "Mid-back"],
    steps: [
      "Set the thigh pad snug, then grab the bar underhand (palms facing you) at shoulder width.",
      "Sit tall with arms stretched overhead, chest up, and a very slight lean back.",
      "Exhale and pull the bar down to your mid-chest, keeping your elbows tucked close in front of your ribs.",
      "Pause for a second with your shoulder blades squeezed down.",
      "Inhale and straighten your arms slowly — no letting the stack yank you back up."
    ],
    tips: [
      "Compared with the overhand pulldown, the underhand grip lets your biceps help and hits the lower part of your lats — expect to pull a little more weight.",
      "The classic mistake is turning it into a biceps curl: start every rep by pulling your shoulders down, then bend the elbows.",
      "Keep your wrists straight; if they hurt, use an EZ-curl-shaped bar or slightly wider grip.",
      "Bar travels to the chest, not to the belly — stop when your elbows reach your sides."
    ],
    setsReps: "3 sets × 10–12 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="152" y1="126" x2="152" y2="22"/>
<line x1="152" y1="22" x2="114" y2="26"/>
<line x1="86" y1="96" x2="124" y2="96"/>
<line x1="104" y1="96" x2="104" y2="126"/>
<line x1="110" y1="82" x2="128" y2="82"/>
<line x1="116" y1="28" x2="117" y2="34" stroke-width="3">
<animate attributeName="y2" values="34;68;34" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
<line x1="106" y1="34" x2="126" y2="34" stroke-width="3">
<animate attributeName="y1" values="34;68;34" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="y2" values="34;68;34" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="95" cy="46" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<path d="M97 56 L99 88 L120 90 L118 122"/>
<path stroke="var(--acc,#a3e635)" d="M97 58 L104 46 L114 34">
<animate attributeName="d" values="M97 58 L104 46 L114 34;M97 58 L106 72 L114 68;M97 58 L104 46 L114 34" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  },
  {
    id: "back-single-arm-kneeling-pulldown",
    name: "Single-Arm Kneeling Cable Pulldown",
    group: "back",
    equipment: "cable",
    level: 2,
    primary: ["Lats"],
    secondary: ["Biceps", "Core"],
    steps: [
      "Clip a single D-handle to a high pulley on the cable/functional trainer and pick a light weight to start.",
      "Take a half-kneeling position facing the stack: the knee on the working-arm side goes down on the floor, the other foot flat in front.",
      "Reach up and grab the handle, letting the cable stretch your arm and lat fully upward.",
      "Exhale and pull your elbow down to your ribs, keeping your torso tall — don't lean or twist.",
      "Inhale and let the handle rise slowly until you feel the big stretch again, then finish all reps before switching sides."
    ],
    tips: [
      "The huge overhead stretch at the top is the whole point — compared with the seated pulldown machine, you get a longer range, so don't cut it short.",
      "The classic mistake is shrugging the shoulder up toward your ear; pull the shoulder blade down before your elbow bends.",
      "Squeeze the glute of your kneeling side to keep your hips square and stop your body rocking.",
      "No thigh pad holds you down here, so go lighter than your pulldown weight."
    ],
    setsReps: "3 sets × 10–12 reps per arm",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="156" y1="126" x2="156" y2="18"/>
<line x1="156" y1="18" x2="144" y2="20"/>
<circle cx="148" cy="25" r="4"/>
<line x1="148" y1="28" x2="138" y2="32" stroke-width="3">
<animate attributeName="x2" values="138;112;138" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="y2" values="32;64;32" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="82" cy="46" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<line x1="84" y1="56" x2="76" y2="92"/>
<path d="M76 92 L66 120 L44 122"/>
<path d="M76 92 L100 94 L102 124"/>
<path stroke="var(--acc,#a3e635)" d="M84 58 L112 44 L138 32">
<animate attributeName="d" values="M84 58 L112 44 L138 32;M84 58 L90 78 L112 64;M84 58 L112 44 L138 32" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  },
  {
    id: "back-single-arm-cable-row",
    name: "Single-Arm Seated Cable Row",
    group: "back",
    equipment: "cable",
    level: 1,
    primary: ["Lats", "Mid-back"],
    secondary: ["Biceps", "Core"],
    steps: [
      "Clip a single D-handle to the low row cable, sit on the bench, and brace both feet on the footplates.",
      "Grab the handle with one hand, push back until your knees are slightly bent, and rest your free hand on your thigh.",
      "Sit tall, exhale, and pull the handle to the side of your belly, sliding your elbow past your ribs.",
      "Squeeze the shoulder blade back for a second without twisting your torso open.",
      "Inhale and reach the arm slowly forward, letting that shoulder stretch a little, then do all reps and switch arms."
    ],
    tips: [
      "One arm at a time exposes your weaker side — start every set with it and match reps, unlike the two-hand seated row where the strong side quietly takes over.",
      "The common mistake is spinning your whole torso to move the weight; a tiny controlled rotation is fine, a big swivel is cheating.",
      "Keep your shoulders level — don't dip toward the working arm.",
      "Go about half of your two-arm row weight to start."
    ],
    setsReps: "3 sets × 10–12 reps per arm",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="26" y1="126" x2="26" y2="58"/>
<line x1="40" y1="126" x2="40" y2="58"/>
<line x1="26" y1="58" x2="40" y2="58"/>
<line x1="28" y1="96" x2="38" y2="96"/>
<line x1="28" y1="106" x2="38" y2="106"/>
<line x1="96" y1="98" x2="136" y2="98"/>
<line x1="116" y1="98" x2="116" y2="126"/>
<line x1="58" y1="112" x2="70" y2="92"/>
<line x1="41" y1="78" x2="62" y2="78" stroke-width="3">
<animate attributeName="x2" values="62;96;62" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="106" cy="46" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<path d="M108 56 L114 92 L88 86 L66 100"/>
<path d="M108 58 L112 74 L104 84"/>
<path stroke="var(--acc,#a3e635)" d="M108 58 L84 68 L62 78">
<animate attributeName="d" values="M108 58 L84 68 L62 78;M108 58 L118 78 L96 78;M108 58 L84 68 L62 78" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  },
  {
    id: "back-wide-grip-cable-row",
    name: "Wide-Grip Seated Cable Row",
    group: "back",
    equipment: "cable",
    level: 1,
    primary: ["Mid-back"],
    secondary: ["Rear delts", "Lats", "Biceps"],
    steps: [
      "Attach the wide lat bar to the seated row cable, sit down, and plant your feet on the footplates.",
      "Grab the bar overhand with hands well outside your shoulders and push back until your knees are softly bent.",
      "Sit tall, exhale, and pull the bar to your lower chest with your elbows flared out to the sides.",
      "Squeeze your shoulder blades together hard for a second.",
      "Inhale and let your arms straighten slowly, keeping your chest up."
    ],
    tips: [
      "Elbows OUT and bar to the chest hits the mid-back and rear delts; the regular close-grip V-handle with elbows in hits more lat — they are different rows, keep both.",
      "The common mistake is pulling this one to the belly like a normal row — that kills the elbows-out path; aim for the lower chest.",
      "Use noticeably less weight than your close-grip row.",
      "Keep your neck long and shoulders away from your ears as you squeeze."
    ],
    setsReps: "3 sets × 10–12 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="26" y1="126" x2="26" y2="58"/>
<line x1="40" y1="126" x2="40" y2="58"/>
<line x1="26" y1="58" x2="40" y2="58"/>
<line x1="28" y1="96" x2="38" y2="96"/>
<line x1="28" y1="106" x2="38" y2="106"/>
<line x1="96" y1="98" x2="136" y2="98"/>
<line x1="116" y1="98" x2="116" y2="126"/>
<line x1="58" y1="112" x2="70" y2="92"/>
<line x1="41" y1="72" x2="62" y2="66" stroke-width="3">
<animate attributeName="x2" values="62;94;62" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
<line x1="62" y1="56" x2="62" y2="76" stroke-width="3">
<animate attributeName="x1" values="62;94;62" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="x2" values="62;94;62" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="106" cy="46" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<path d="M108 56 L114 92 L88 86 L66 100"/>
<path stroke="var(--acc,#a3e635)" d="M108 58 L85 62 L62 66">
<animate attributeName="d" values="M108 58 L85 62 L62 66;M108 58 L117 62 L94 66;M108 58 L85 62 L62 66" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  },
  {
    id: "back-smith-bent-over-row",
    name: "Smith Machine Bent-Over Row",
    group: "back",
    equipment: "machine",
    level: 2,
    primary: ["Mid-back", "Lats"],
    secondary: ["Lower back", "Biceps"],
    steps: [
      "Set the Smith bar to about mid-shin height and load light plates to learn the movement.",
      "Stand with your feet under the bar, push your hips back, and hinge until your torso is close to 45 degrees, back flat.",
      "Grab the bar overhand just outside your knees and unhook it by rotating your wrists.",
      "Exhale and row the bar up the rails to your lower ribs, driving your elbows behind you.",
      "Inhale and lower it under control to mid-shin without standing up, then re-hook when the set is done."
    ],
    tips: [
      "The fixed rails remove the balance work of a free barbell row, so you can focus purely on the hinge and squeeze — a great stepping stone to the barbell version.",
      "The classic mistake is standing taller every rep; pick your hinge angle and hold it for the whole set.",
      "Stand so the bar path brushes your legs — too far forward and your lower back takes over.",
      "Round-back pulling is the set-ender: when your back starts rounding, stop."
    ],
    setsReps: "3 sets × 8–10 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="68" y1="126" x2="68" y2="18"/>
<line x1="80" y1="126" x2="80" y2="18"/>
<line x1="62" y1="18" x2="86" y2="18"/>
<circle cx="74" cy="102" r="9">
<animate attributeName="cy" values="102;84;102" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</circle>
<circle cx="80" cy="101" r="5">
<animate attributeName="cy" values="101;83;101" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</circle>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="74" cy="48" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<line x1="80" y1="54" x2="104" y2="80"/>
<path d="M104 80 L106 102 L100 124"/>
<path d="M104 80 L112 100 L108 124"/>
<path stroke="var(--acc,#a3e635)" d="M82 58 L78 80 L74 100">
<animate attributeName="d" values="M82 58 L78 80 L74 100;M82 58 L92 74 L78 84;M82 58 L78 80 L74 100" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  },
  {
    id: "back-landmine-row",
    name: "Landmine Row (Meadows Row)",
    group: "back",
    equipment: "machine",
    level: 2,
    primary: ["Lats", "Mid-back"],
    secondary: ["Rear delts", "Biceps", "Core"],
    steps: [
      "Wedge one end of a barbell into the landmine pivot (or a corner) and load a small plate on the free end.",
      "Stand sideways next to the loaded end, feet about shoulder width, and hinge at the hips with a flat back.",
      "Grip the very end of the sleeve overhand with your inside hand, bracing your free forearm on your thigh.",
      "Exhale and row the bar end up toward your hip, driving your elbow high and behind you.",
      "Inhale and lower it slowly until your arm is straight and your shoulder blade stretches forward, then switch sides."
    ],
    tips: [
      "The thick sleeve challenges your grip — use chalk or straps so your back, not your fingers, is the limit.",
      "The bar arcs on a fixed hinge, so the pull naturally sweeps up and back — let it, don't fight the path straight up like a dumbbell row.",
      "The common mistake is twisting your torso open to lift higher; keep your chest square to the floor.",
      "Small 25 lb plates leave more room to pull deep than big 45s."
    ],
    setsReps: "3 sets × 8–10 reps per arm",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="20" y1="126" x2="30" y2="118"/>
<line x1="38" y1="126" x2="30" y2="118"/>
<line x1="28" y1="120" x2="126" y2="94">
<animate attributeName="x2" values="126;120;126" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="y2" values="94;74;94" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
<circle cx="114" cy="98" r="8">
<animate attributeName="cx" values="114;108;114" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="cy" values="98;78;98" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</circle>
<circle cx="121" cy="96" r="5">
<animate attributeName="cx" values="121;115;121" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="cy" values="96;76;96" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</circle>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="106" cy="48" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<line x1="112" y1="54" x2="142" y2="80"/>
<path d="M142 80 L144 102 L138 124"/>
<path d="M142 80 L150 102 L148 124"/>
<path stroke="var(--acc,#a3e635)" d="M114 58 L118 78 L124 96">
<animate attributeName="d" values="M114 58 L118 78 L124 96;M114 58 L124 70 L118 78;M114 58 L118 78 L124 96" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  },
  {
    id: "back-assisted-chinup",
    name: "Assisted Chin-Up Machine",
    group: "back",
    equipment: "machine",
    level: 1,
    primary: ["Lats", "Biceps"],
    secondary: ["Mid-back"],
    steps: [
      "Set the assist pin — remember, on this machine MORE weight = MORE help, so start heavy on the assist.",
      "Climb up, kneel on the pad, and grab the closer, narrower handles UNDERHAND at shoulder width, palms facing you.",
      "Exhale and pull yourself up until your chin reaches hand level, keeping your elbows in front of your ribs.",
      "Inhale and lower for a slow 2–3 count until your arms are nearly straight.",
      "Step off carefully at the end — don't hop off while the pad is under load."
    ],
    tips: [
      "The underhand grip recruits your biceps more than the overhand assisted pull-up, so most people are stronger here — set a little less assist than on pull-ups.",
      "The common mistake is stopping halfway down; the near-straight-arm stretch is where the growth is.",
      "Think 'chest to the bar', not 'chin over' — it keeps your shoulders in a safe position.",
      "Reduce the assist weight a pin at a time over the weeks; that's your road to a real chin-up."
    ],
    setsReps: "3 sets × 6–10 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="138" y1="126" x2="138" y2="18"/>
<line x1="138" y1="18" x2="100" y2="22"/>
<line x1="100" y1="22" x2="100" y2="30"/>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<animateTransform attributeName="transform" type="translate" values="0 0;0 -22;0 0" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<circle cx="94" cy="52" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<path d="M92 62 L88 88 L86 108 L104 112"/>
<line x1="74" y1="116" x2="108" y2="116" stroke="var(--equip,#64748b)" stroke-width="4"/>
</g>
<path stroke="var(--acc,#a3e635)" stroke-width="6" stroke-linecap="round" d="M100 32 L96 46 L90 60">
<animate attributeName="d" values="M100 32 L96 46 L90 60;M100 32 L110 44 L92 42;M100 32 L96 46 L90 60" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</svg>`
  },
  {
    id: "back-smith-rack-pull",
    name: "Smith Machine Rack Pull",
    group: "back",
    equipment: "machine",
    level: 1,
    primary: ["Lower back", "Glutes"],
    secondary: ["Lats", "Hamstrings", "Traps"],
    steps: [
      "Set the Smith bar (or the safety stops) so the bar rests at knee height, and load light plates first.",
      "Stand with your shins nearly touching the bar, feet hip width apart.",
      "Push your hips back, grab the bar overhand just outside your legs, and flatten your back with your chest up.",
      "Take a breath, brace your belly, and stand up tall by driving your hips forward — drag the bar up your thighs.",
      "Exhale at the top, then push your hips back and lower the bar to the rails under control. No bouncing."
    ],
    tips: [
      "This is a shortened deadlift from knee height — the fixed rails and the raised start make it the friendliest way to learn the hip hinge before a floor deadlift.",
      "The common mistake is bending the knees into a squat; the bar starts high, so this move is almost all hips.",
      "Finish standing tall with squeezed glutes — don't lean backward at the top.",
      "Keep the bar dragging lightly against your thighs the whole way."
    ],
    setsReps: "3 sets × 8–10 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="64" y1="126" x2="64" y2="18"/>
<line x1="76" y1="126" x2="76" y2="18"/>
<line x1="58" y1="18" x2="82" y2="18"/>
<line x1="56" y1="104" x2="66" y2="104"/>
<circle cx="70" cy="100" r="9">
<animate attributeName="cy" values="100;76;100" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</circle>
<circle cx="76" cy="99" r="5">
<animate attributeName="cy" values="99;75;99" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</circle>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="74" cy="48" r="9" fill="var(--fig,#cbd5e1)" stroke="none">
<animate attributeName="cx" values="74;92;74" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="cy" values="48;34;48" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</circle>
<path d="M80 56 L104 84 L106 106 L100 124">
<animate attributeName="d" values="M80 56 L104 84 L106 106 L100 124;M96 44 L100 72 L102 100 L100 124;M80 56 L104 84 L106 106 L100 124" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
<path d="M104 84 L110 102 L106 124">
<animate attributeName="d" values="M104 84 L110 102 L106 124;M100 72 L106 100 L106 124;M104 84 L110 102 L106 124" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
<path stroke="var(--acc,#a3e635)" d="M82 60 L77 80 L72 98">
<animate attributeName="d" values="M82 60 L77 80 L72 98;M94 50 L83 65 L72 78;M82 60 L77 80 L72 98" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  },
  {
    id: "back-iso-lateral-dy-row",
    name: "Iso-Lateral D.Y. Row",
    group: "back",
    equipment: "machine",
    level: 2,
    primary: ["Upper back", "Rear delts"],
    secondary: ["Lats", "Biceps"],
    steps: [
      "Load plates on the lever arms and set the seat so your chest sits comfortably against the pad with the handles reachable at shoulder height.",
      "Sit down, press your chest into the pad, and grab the high handles overhand.",
      "Exhale and pull the handles back with your elbows OUT wide, level with your shoulders.",
      "Squeeze your shoulder blades together for a full second at the back.",
      "Inhale and let the handles travel forward slowly until your upper back stretches."
    ],
    tips: [
      "Elbows stay high and flared here — that's what makes it an upper-back and rear-delt machine, unlike the Iso-Lateral Low Row where elbows stay tucked for lats.",
      "The common mistake is letting the elbows drop to the ribs mid-set, which turns it into just another lat row.",
      "Keep your chest on the pad; driving your head back to finish the rep is momentum, not muscle.",
      "One arm at a time works great for evening out sides."
    ],
    setsReps: "3 sets × 10–12 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="36" y1="126" x2="36" y2="34"/>
<circle cx="22" cy="116" r="9"/>
<circle cx="33" cy="119" r="6"/>
<line x1="96" y1="100" x2="128" y2="100"/>
<line x1="112" y1="100" x2="112" y2="126"/>
<line x1="88" y1="52" x2="94" y2="86"/>
<line x1="91" y1="86" x2="88" y2="126"/>
<line x1="36" y1="122" x2="62" y2="46" stroke-width="3">
<animate attributeName="x2" values="62;88;62" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="y2" values="46;54;46" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="94" cy="40" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<path d="M96 50 L104 92 L94 100 L96 124"/>
<path stroke="var(--acc,#a3e635)" d="M96 54 L79 50 L62 46">
<animate attributeName="d" values="M96 54 L79 50 L62 46;M96 54 L107 58 L88 54;M96 54 L79 50 L62 46" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  },
  {
    id: "back-diverging-row-machine",
    name: "Diverging Seated Row Machine",
    group: "back",
    equipment: "machine",
    level: 1,
    primary: ["Mid-back", "Lats"],
    secondary: ["Rear delts", "Biceps"],
    steps: [
      "Set the pin in the weight stack and adjust the seat so the handles sit at chest height with your chest against the pad.",
      "Sit tall, press your chest into the pad, and grab the handles with straight arms.",
      "Exhale and pull back — feel the handles swing apart and outward as they travel toward you; let your elbows follow that widening path.",
      "Squeeze your shoulder blades together for a second.",
      "Inhale and let the handles glide forward and back together until your arms are straight."
    ],
    tips: [
      "The diverging arc matches how your shoulder blades naturally sweep out and in — compared with a straight-path row machine, the squeeze at the back feels wider; don't fight the arc.",
      "The common mistake is leaning back off the pad to finish reps — chest stays glued down.",
      "Try both grips if the handles offer them: vertical (palms-in) favors lats, horizontal favors upper back.",
      "Pause a beat at full stretch; don't let the stack touch down between reps."
    ],
    setsReps: "3 sets × 10–12 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="20" y1="126" x2="20" y2="60"/>
<line x1="34" y1="126" x2="34" y2="60"/>
<line x1="20" y1="60" x2="34" y2="60"/>
<line x1="22" y1="92" x2="32" y2="92"/>
<line x1="22" y1="102" x2="32" y2="102"/>
<line x1="52" y1="126" x2="52" y2="90"/>
<line x1="52" y1="120" x2="60" y2="62" stroke-width="3">
<animate attributeName="x2" values="60;86;60" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="y2" values="62;72;62" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
<line x1="88" y1="58" x2="98" y2="88"/>
<line x1="98" y1="88" x2="104" y2="98"/>
<line x1="120" y1="98" x2="120" y2="126"/>
<line x1="106" y1="98" x2="134" y2="98"/>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="91" cy="46" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<path d="M98 58 L122 90 L138 100 L132 124"/>
<path stroke="var(--acc,#a3e635)" d="M98 60 L79 61 L60 62">
<animate attributeName="d" values="M98 60 L79 61 L60 62;M98 60 L110 70 L86 72;M98 60 L79 61 L60 62" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  },
  {
    id: "back-standing-cable-row",
    name: "Standing Cable Row",
    group: "back",
    equipment: "cable",
    level: 1,
    primary: ["Mid-back", "Lats"],
    secondary: ["Core", "Biceps"],
    steps: [
      "Set two pulleys (or one with a rope) to chest height on the functional trainer and grab a handle in each hand.",
      "Step back until the cables are taut, feet shoulder width or slightly staggered, knees soft.",
      "Brace your core like someone's about to poke your stomach, and stand tall with arms stretched forward.",
      "Exhale and pull the handles to the sides of your ribs, squeezing your shoulder blades together.",
      "Inhale and let your arms reach slowly forward without letting the weight tip you toward the machine."
    ],
    tips: [
      "Unlike the seated cable row, nothing holds your body in place — your core and legs are the bench, which is exactly what makes it worth doing.",
      "The common mistake is leaning back and turning it into a body swing; if you must lean to finish reps, drop the pin a plate.",
      "Keep your ribs down and glutes squeezed for a rock-solid stance.",
      "Stagger your stance if you keep getting pulled forward."
    ],
    setsReps: "3 sets × 10–12 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="160" y1="126" x2="160" y2="16"/>
<line x1="160" y1="16" x2="146" y2="16"/>
<circle cx="156" cy="62" r="4"/>
<line x1="153" y1="62" x2="128" y2="60" stroke-width="3">
<animate attributeName="x2" values="128;96;128" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="y2" values="60;64;60" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="72" cy="38" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<line x1="74" y1="48" x2="82" y2="86"/>
<path d="M82 86 L90 106 L86 124"/>
<path d="M82 86 L76 104 L70 124"/>
<path stroke="var(--acc,#a3e635)" d="M76 52 L102 56 L128 60">
<animate attributeName="d" values="M76 52 L102 56 L128 60;M76 52 L86 68 L96 64;M76 52 L102 56 L128 60" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  }
);
