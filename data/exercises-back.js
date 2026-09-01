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
