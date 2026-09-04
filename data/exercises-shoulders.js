// data/exercises-shoulders.js
window.GYM_EXERCISES = window.GYM_EXERCISES || [];
window.GYM_EXERCISES.push(
  {
    id: "shoulders-machine-press",
    name: "Shoulder Press Machine",
    group: "shoulders",
    equipment: "machine",
    level: 1,
    primary: ["Front Delts", "Side Delts"],
    secondary: ["Triceps", "Upper Traps"],
    steps: [
      "Adjust the seat so the handles sit at about ear height when you sit down.",
      "Sit with your back flat against the pad and grab the handles with a full grip.",
      "Exhale and press the handles up until your arms are almost straight (don't lock the elbows).",
      "Inhale and lower slowly for 2-3 seconds back to ear height.",
      "Keep your head and lower back touching the pad the whole set."
    ],
    tips: [
      "If your elbows start below shoulder level at the bottom, raise the seat — too deep a stretch strains the shoulders.",
      "Don't arch your lower back off the pad to grind out reps; pick a lighter pin instead.",
      "Press evenly with both arms — the machine will let one side do all the work if you let it.",
      "A rep should feel hard on the shoulders, not pinchy in the joint. Sharp pain = stop and lower the weight."
    ],
    setsReps: "3 sets × 10–12 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="158" y1="126" x2="158" y2="42"/>
<line x1="176" y1="126" x2="176" y2="42"/>
<line x1="158" y1="42" x2="176" y2="42"/>
<line x1="161" y1="120" x2="173" y2="120"/>
<line x1="161" y1="112" x2="173" y2="112"/>
<line x1="161" y1="104" x2="173" y2="104">
<animate attributeName="y1" values="104;92;104" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="y2" values="104;92;104" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
<line x1="92" y1="126" x2="92" y2="98"/>
<line x1="78" y1="98" x2="106" y2="98"/>
<line x1="82" y1="94" x2="78" y2="56"/>
<line x1="158" y1="54" x2="114" y2="48">
<animate attributeName="x2" values="114;104;114" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="y2" values="48;18;48" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="93" cy="40" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<line x1="93" y1="50" x2="93" y2="92"/>
<path d="M93 92 L112 100 L112 122"/>
<path stroke="var(--acc,#a3e635)" d="M93 56 L108 68 L112 50">
<animate attributeName="d" values="M93 56 L108 68 L112 50;M93 56 L99 36 L102 20;M93 56 L108 68 L112 50" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  },
  {
    id: "shoulders-dumbbell-overhead-press",
    name: "Dumbbell Overhead Press",
    group: "shoulders",
    equipment: "dumbbell",
    level: 1,
    primary: ["Front Delts", "Side Delts"],
    secondary: ["Triceps", "Core"],
    steps: [
      "Sit on a bench with the backrest set upright (about 85 degrees) and feet flat on the floor.",
      "Bring the dumbbells to shoulder height, palms facing forward, elbows below your wrists.",
      "Exhale and press both dumbbells up until your arms are nearly straight overhead.",
      "Inhale and lower them under control back to about ear level.",
      "Keep your ribs down and lower back against the pad — don't arch to finish a rep."
    ],
    tips: [
      "Kick the dumbbells up one at a time with your knees to get them into position safely.",
      "Lower until your elbows reach roughly 90 degrees; deeper is fine only if it feels comfortable.",
      "The dumbbells should travel slightly toward each other at the top, not clank together.",
      "Start lighter than you think — stabilizing two separate weights is harder than the machine."
    ],
    setsReps: "3 sets × 8–12 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="98" y1="126" x2="98" y2="100"/>
<line x1="84" y1="100" x2="112" y2="100"/>
<line x1="88" y1="96" x2="84" y2="52"/>
</g>
<g stroke="var(--equip,#64748b)" stroke-linecap="round">
<animateTransform attributeName="transform" type="translate" values="0 0;-9 -30;0 0" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<line x1="103" y1="44" x2="115" y2="44" stroke-width="6"/>
<line x1="104" y1="38" x2="104" y2="50" stroke-width="4"/>
<line x1="114" y1="38" x2="114" y2="50" stroke-width="4"/>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<path d="M95 54 L104 66 L106 48">
<animate attributeName="d" values="M95 54 L104 66 L106 48;M95 54 L97 36 L98 18;M95 54 L104 66 L106 48" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
<circle cx="95" cy="38" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<line x1="95" y1="48" x2="95" y2="94"/>
<path d="M95 94 L113 102 L113 124"/>
<path stroke="var(--acc,#a3e635)" d="M95 54 L107 64 L109 46">
<animate attributeName="d" values="M95 54 L107 64 L109 46;M95 54 L100 34 L101 16;M95 54 L107 64 L109 46" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  },
  {
    id: "shoulders-lateral-raise-machine",
    name: "Lateral Raise Machine",
    group: "shoulders",
    equipment: "machine",
    level: 1,
    primary: ["Side Delts"],
    secondary: ["Upper Traps"],
    steps: [
      "Adjust the seat so your shoulders line up with the machine's pivot points.",
      "Sit tall, place your elbows and forearms against the pads, and lightly hold the handles.",
      "Exhale and push outward with your elbows until your upper arms reach shoulder height.",
      "Pause for a second, then inhale and lower slowly back to your sides.",
      "Keep your torso still — no rocking or leaning to swing the weight up."
    ],
    tips: [
      "Lead the movement with your elbows, not your hands — pushing with the hands shifts work off the delts.",
      "Stop at shoulder height; going higher mostly works the traps and can pinch the shoulder.",
      "This is a small muscle — light weight and a slow 2-second lowering beats stacking plates.",
      "If the pads hit you at the wrong spot, re-check the seat height before adding weight."
    ],
    setsReps: "3 sets × 12–15 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="164" y1="126" x2="164" y2="60"/>
<line x1="180" y1="126" x2="180" y2="60"/>
<line x1="164" y1="60" x2="180" y2="60"/>
<line x1="166" y1="74" x2="178" y2="74"/>
<line x1="166" y1="88" x2="178" y2="88"/>
<line x1="166" y1="102" x2="178" y2="102"/>
<line x1="166" y1="116" x2="178" y2="116"/>
<line x1="100" y1="126" x2="100" y2="96"/>
<line x1="84" y1="96" x2="116" y2="96"/>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="100" cy="30" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<line x1="100" y1="42" x2="100" y2="88"/>
<path d="M100 88 L92 96 L92 122"/>
<path d="M100 88 L108 96 L108 122"/>
</g>
<g stroke-linecap="round">
<animateTransform attributeName="transform" type="rotate" values="0 94 52;80 94 52;0 94 52" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<line x1="94" y1="52" x2="88" y2="86" stroke="var(--acc,#a3e635)" stroke-width="6"/>
<line x1="84" y1="74" x2="96" y2="74" stroke="var(--equip,#64748b)" stroke-width="5"/>
</g>
<g stroke-linecap="round">
<animateTransform attributeName="transform" type="rotate" values="0 106 52;-80 106 52;0 106 52" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<line x1="106" y1="52" x2="112" y2="86" stroke="var(--acc,#a3e635)" stroke-width="6"/>
<line x1="104" y1="74" x2="116" y2="74" stroke="var(--equip,#64748b)" stroke-width="5"/>
</g>
</svg>`
  },
  {
    id: "shoulders-dumbbell-lateral-raise",
    name: "Dumbbell Lateral Raise",
    group: "shoulders",
    equipment: "dumbbell",
    level: 1,
    primary: ["Side Delts"],
    secondary: ["Upper Traps", "Front Delts"],
    steps: [
      "Stand tall with a light dumbbell in each hand at your sides, elbows very slightly bent.",
      "Exhale and raise both arms out to the sides until they reach shoulder height.",
      "Pause briefly at the top with palms facing the floor.",
      "Inhale and lower slowly — take 2-3 seconds on the way down.",
      "Keep your knees soft and torso still throughout."
    ],
    tips: [
      "Imagine pouring two jugs of water: pinkies slightly up, elbows leading the way.",
      "If you have to shrug or swing your hips to lift the weight, it's too heavy — go lighter.",
      "Stopping at shoulder height protects the joint; higher isn't better.",
      "The slow lowering is where the growth happens — never just drop the dumbbells to your sides."
    ],
    setsReps: "3 sets × 12–15 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="100" cy="28" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<line x1="100" y1="38" x2="100" y2="86"/>
<path d="M86 122 L100 86 L114 122"/>
</g>
<g stroke-linecap="round">
<animateTransform attributeName="transform" type="rotate" values="0 94 50;77 94 50;0 94 50" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<line x1="94" y1="50" x2="86" y2="84" stroke="var(--acc,#a3e635)" stroke-width="6"/>
<line x1="79" y1="84" x2="93" y2="84" stroke="var(--equip,#64748b)" stroke-width="7"/>
</g>
<g stroke-linecap="round">
<animateTransform attributeName="transform" type="rotate" values="0 106 50;-77 106 50;0 106 50" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<line x1="106" y1="50" x2="114" y2="84" stroke="var(--acc,#a3e635)" stroke-width="6"/>
<line x1="107" y1="84" x2="121" y2="84" stroke="var(--equip,#64748b)" stroke-width="7"/>
</g>
</svg>`
  },
  {
    id: "shoulders-front-raise",
    name: "Dumbbell Front Raise",
    group: "shoulders",
    equipment: "dumbbell",
    level: 1,
    primary: ["Front Delts"],
    secondary: ["Side Delts", "Upper Chest"],
    steps: [
      "Stand with dumbbells resting on the front of your thighs, palms facing your legs.",
      "Exhale and raise the dumbbells straight in front of you to shoulder height, arms almost straight.",
      "Pause for a second at the top.",
      "Inhale and lower slowly back to your thighs without letting the weights drop.",
      "Alternate arms or lift both together — both are fine."
    ],
    tips: [
      "Brace your core and squeeze your glutes so your lower back doesn't arch as you lift.",
      "No swinging: if the dumbbells bounce off your thighs to get moving, the weight is too heavy.",
      "Your front delts already work in every pressing exercise, so one light exercise here is plenty.",
      "Keep wrists neutral — don't let the dumbbell heads droop toward the floor."
    ],
    setsReps: "3 sets × 10–12 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="86" cy="30" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<line x1="86" y1="40" x2="86" y2="88"/>
<path d="M80 124 L86 88 L94 124"/>
</g>
<g stroke-linecap="round">
<animateTransform attributeName="transform" type="rotate" values="0 86 50;-85 86 50;0 86 50" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<line x1="86" y1="50" x2="90" y2="86" stroke="var(--acc,#a3e635)" stroke-width="6"/>
<circle cx="90" cy="88" r="6" fill="var(--equip,#64748b)" stroke="none"/>
</g>
</svg>`
  },
  {
    id: "shoulders-reverse-pec-deck",
    name: "Reverse Pec Deck (Rear Delts)",
    group: "shoulders",
    equipment: "machine",
    level: 1,
    primary: ["Rear Delts"],
    secondary: ["Rhomboids", "Mid Traps"],
    steps: [
      "Set the machine handles to the rear-delt position (fully forward) and adjust the seat so the handles are at shoulder height.",
      "Sit facing the machine with your chest against the pad.",
      "Grab the handles with arms extended forward and a slight elbow bend.",
      "Exhale and sweep your arms back in a wide arc until your hands are in line with your shoulders.",
      "Inhale and return slowly, keeping tension — don't let the stack slam down."
    ],
    tips: [
      "Keep the elbow bend fixed; the motion comes from the shoulder, like opening a pair of gates.",
      "Think 'lead with the elbows' and squeeze between the shoulder blades at the back.",
      "Chest stays glued to the pad — if it peels off, the weight is too heavy.",
      "Rear delts are weak on almost everyone; expect to use much less weight than on the chest fly."
    ],
    setsReps: "3 sets × 12–15 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="156" y1="126" x2="156" y2="48"/>
<line x1="172" y1="126" x2="172" y2="48"/>
<line x1="156" y1="48" x2="172" y2="48"/>
<line x1="158" y1="90" x2="170" y2="90"/>
<line x1="158" y1="104" x2="170" y2="104"/>
<line x1="158" y1="118" x2="170" y2="118"/>
<line x1="158" y1="76" x2="170" y2="76">
<animate attributeName="y1" values="76;62;76" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="y2" values="76;62;76" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
<line x1="106" y1="52" x2="106" y2="90" stroke-width="5"/>
<line x1="106" y1="90" x2="106" y2="126"/>
<line x1="92" y1="126" x2="92" y2="100"/>
<line x1="80" y1="100" x2="104" y2="100"/>
<line x1="142" y1="50" x2="142" y2="66">
<animate attributeName="x1" values="142;70;142" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="x2" values="142;70;142" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="y1" values="50;48;50" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="y2" values="66;64;66" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="96" cy="34" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<line x1="98" y1="44" x2="94" y2="90"/>
<path d="M94 90 L108 102 L106 124"/>
<path stroke="var(--acc,#a3e635)" d="M98 52 L120 55 L142 58">
<animate attributeName="d" values="M98 52 L120 55 L142 58;M98 52 L86 64 L70 56;M98 52 L120 55 L142 58" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  },
  {
    id: "shoulders-cable-lateral-raise",
    name: "Cable Lateral Raise",
    group: "shoulders",
    equipment: "cable",
    level: 2,
    primary: ["Side Delts"],
    secondary: ["Upper Traps"],
    steps: [
      "Set a cable pulley to the lowest position and attach a single D-handle.",
      "Stand side-on to the machine and grab the handle with the hand farther from it, in front of your hips.",
      "Exhale and raise your arm out to the side until it reaches shoulder height.",
      "Inhale and lower slowly, resisting the cable all the way back across your body.",
      "Finish all reps, then turn around and repeat with the other arm."
    ],
    tips: [
      "The cable keeps tension at the bottom where dumbbells feel weightless — that constant pull is the point, so go slow.",
      "Keep a slight elbow bend and lead with the elbow, not the hand.",
      "Stand tall; lean only slightly away from the stack — don't turn it into a body swing.",
      "Use a very light pin to start; single-arm cable work feels heavier than it looks."
    ],
    setsReps: "3 sets × 12–15 reps per arm",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="22" y1="126" x2="22" y2="52"/>
<line x1="38" y1="126" x2="38" y2="52"/>
<line x1="22" y1="52" x2="38" y2="52"/>
<line x1="24" y1="66" x2="36" y2="66"/>
<line x1="24" y1="82" x2="36" y2="82"/>
<line x1="24" y1="98" x2="36" y2="98"/>
<line x1="24" y1="114" x2="36" y2="114"/>
<circle cx="42" cy="120" r="3" stroke-width="3"/>
</g>
<line x1="44" y1="118" x2="102" y2="88" stroke="var(--equip,#64748b)" stroke-width="2" stroke-linecap="round">
<animate attributeName="x2" values="102;136;151;136;102" keyTimes="0;0.25;0.5;0.75;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="y2" values="88;81;50;81;88" keyTimes="0;0.25;0.5;0.75;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="106" cy="28" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<line x1="106" y1="38" x2="106" y2="86"/>
<path d="M94 122 L106 86 L118 122"/>
<line x1="100" y1="50" x2="96" y2="84"/>
<path stroke="var(--acc,#a3e635)" d="M112 50 L102 88">
<animate attributeName="d" values="M112 50 L102 88;M112 50 L136 81;M112 50 L151 50;M112 50 L136 81;M112 50 L102 88" keyTimes="0;0.25;0.5;0.75;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  },
  {
    id: "shoulders-dumbbell-shrug",
    name: "Dumbbell Shrug",
    group: "shoulders",
    equipment: "dumbbell",
    level: 1,
    primary: ["Upper Traps"],
    secondary: ["Forearms"],
    steps: [
      "Stand tall holding a dumbbell in each hand at your sides, palms facing your body.",
      "Exhale and lift your shoulders straight up toward your ears as high as they'll go.",
      "Hold the squeeze at the top for one full second.",
      "Inhale and lower your shoulders slowly all the way down to a full stretch.",
      "Keep your arms relaxed and straight — they're just hooks holding the weight."
    ],
    tips: [
      "Straight up and down only — rolling the shoulders in circles adds nothing and irritates the joint.",
      "Don't bend your elbows to help; if the biceps kick in, the traps stop doing the work.",
      "Chin level, eyes forward — jutting the head forward strains the neck.",
      "If your grip gives out before your traps, use straps or do higher reps with less weight."
    ],
    setsReps: "3 sets × 12–15 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="100" cy="26" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<line x1="100" y1="38" x2="100" y2="86"/>
<path d="M88 122 L100 86 L112 122"/>
</g>
<g stroke-linecap="round">
<animateTransform attributeName="transform" type="translate" values="0 0;0 -8;0 0" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<line x1="90" y1="48" x2="110" y2="48" stroke="var(--acc,#a3e635)" stroke-width="6"/>
<line x1="91" y1="50" x2="87" y2="86" stroke="var(--acc,#a3e635)" stroke-width="6"/>
<line x1="109" y1="50" x2="113" y2="86" stroke="var(--acc,#a3e635)" stroke-width="6"/>
<line x1="80" y1="88" x2="94" y2="88" stroke="var(--equip,#64748b)" stroke-width="7"/>
<line x1="106" y1="88" x2="120" y2="88" stroke="var(--equip,#64748b)" stroke-width="7"/>
</g>
</svg>`
  },
  {
    id: "shoulders-cable-upright-row",
    name: "Cable Upright Row",
    group: "shoulders",
    equipment: "cable",
    level: 2,
    primary: ["Side Delts", "Upper Traps"],
    secondary: ["Biceps", "Forearms"],
    steps: [
      "Set the pulley to the lowest position with a straight or EZ bar attachment.",
      "Stand close to the machine, holding the bar at thigh height with hands about shoulder-width apart.",
      "Exhale and pull the bar straight up your body, elbows leading out to the sides.",
      "Stop when the bar reaches mid-chest and your elbows are level with your shoulders.",
      "Inhale and lower slowly back to your thighs."
    ],
    tips: [
      "Safety first: never pull your elbows higher than your shoulders — going chin-high is a common cause of shoulder impingement.",
      "A wider grip is friendlier on the shoulders than a narrow one.",
      "If you feel any pinching in the front of the shoulder, stop and swap this for lateral raises — same muscles, less risk.",
      "Keep the bar close to your body; drifting forward turns it into a swinging front raise."
    ],
    setsReps: "3 sets × 10–12 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="150" y1="126" x2="150" y2="46"/>
<line x1="166" y1="126" x2="166" y2="46"/>
<line x1="150" y1="46" x2="166" y2="46"/>
<line x1="152" y1="90" x2="164" y2="90"/>
<line x1="152" y1="104" x2="164" y2="104"/>
<line x1="152" y1="118" x2="164" y2="118"/>
<line x1="152" y1="74" x2="164" y2="74">
<animate attributeName="y1" values="74;60;74" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="y2" values="74;60;74" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
<circle cx="146" cy="120" r="3" stroke-width="3"/>
</g>
<line x1="144" y1="118" x2="102" y2="84" stroke="var(--equip,#64748b)" stroke-width="2" stroke-linecap="round">
<animate attributeName="x2" values="102;98;102" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="y2" values="84;56;84" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
<circle cx="102" cy="86" r="4" fill="var(--equip,#64748b)" stroke="none">
<animate attributeName="cx" values="102;98;102" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="cy" values="86;58;86" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</circle>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="88" cy="32" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<line x1="88" y1="42" x2="88" y2="90"/>
<path d="M82 124 L88 90 L96 124"/>
<path stroke="var(--acc,#a3e635)" d="M88 50 L96 68 L102 86">
<animate attributeName="d" values="M88 50 L96 68 L102 86;M88 50 L106 44 L98 58;M88 50 L96 68 L102 86" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  }
);

window.GYM_EXERCISES.push(
  {
    id: "shoulders-smith-machine-press",
    name: "Smith Machine Shoulder Press",
    group: "shoulders",
    equipment: "machine",
    level: 1,
    primary: ["Front Delts", "Side Delts"],
    secondary: ["Triceps", "Upper Traps"],
    steps: [
      "Roll an upright bench into the Smith machine and set the backrest one notch short of vertical.",
      "Slide the bench so the bar sits directly above your shoulders — it should pass just in front of your nose, not out in front of you.",
      "Set the safety stops just below ear height, then grip the bar a little wider than shoulder width.",
      "Rotate your wrists back to unhook the bar, exhale, and press it up until your arms are nearly straight.",
      "Inhale and lower under control to about chin level, then rotate the bar forward onto the hooks when the set is done."
    ],
    tips: [
      "Do a practice rep with the empty bar first — the Smith bar re-racks at any height with a wrist flick, which makes it the safest way to press solo.",
      "Bench position is everything: if you have to crane your head back to dodge the bar, slide the bench a couple of centimetres — don't just arch your back.",
      "The bar is counterbalanced and lighter than a normal barbell, so start empty and load small plates evenly on both sleeves.",
      "Keep your lower back against the pad; if your ribs flare and your back arches to finish a rep, strip a plate."
    ],
    setsReps: "3 sets × 8–12 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="128" y1="126" x2="128" y2="10"/>
<line x1="142" y1="126" x2="142" y2="10"/>
<line x1="128" y1="10" x2="142" y2="10"/>
<line x1="90" y1="126" x2="90" y2="100"/>
<line x1="76" y1="100" x2="104" y2="100"/>
<line x1="94" y1="96" x2="90" y2="52"/>
</g>
<g stroke="var(--equip,#64748b)" stroke-linecap="round">
<animateTransform attributeName="transform" type="translate" values="0 0;0 -30;0 0" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<line x1="94" y1="46" x2="130" y2="46" stroke-width="4"/>
<line x1="118" y1="37" x2="118" y2="55" stroke-width="6"/>
<line x1="124" y1="40" x2="124" y2="52" stroke-width="4"/>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<path d="M93 56 L106 66 L100 46">
<animate attributeName="d" values="M93 56 L106 66 L100 46;M93 56 L96 34 L100 16;M93 56 L106 66 L100 46" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
<circle cx="93" cy="38" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<line x1="93" y1="48" x2="93" y2="94"/>
<path d="M93 94 L111 102 L111 124"/>
<path stroke="var(--acc,#a3e635)" d="M93 56 L109 64 L103 46">
<animate attributeName="d" values="M93 56 L109 64 L103 46;M93 56 L99 33 L103 16;M93 56 L109 64 L103 46" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  }
);

window.GYM_EXERCISES.push(
  {
    id: "shoulders-iso-lateral-press",
    name: "Iso-Lateral Shoulder Press",
    group: "shoulders",
    equipment: "machine",
    level: 1,
    primary: ["Front Delts", "Side Delts"],
    secondary: ["Triceps", "Upper Traps"],
    steps: [
      "Load small plates evenly on both lever arms and adjust the seat so the handles start at about shoulder height.",
      "Sit with your back flat against the pad and grab both handles with a full grip.",
      "Exhale and press both handles up — they travel up and slightly inward along the machine's converging arc.",
      "Stop just short of locked elbows, then inhale and lower slowly back to shoulder height.",
      "Keep both arms moving together at the same speed the whole set."
    ],
    tips: [
      "Unlike the pin-loaded shoulder press machine, each arm moves independently — your stronger side can't secretly help the weaker one, which is exactly the point.",
      "The converging path (hands drifting toward each other at the top) is friendlier on the shoulder joints than a straight-up bar path.",
      "The empty lever arms already have some weight, so start with just one small plate per side.",
      "If one arm falls behind, pause and finish the set lighter — don't let the strong side race ahead."
    ],
    setsReps: "3 sets × 8–12 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="152" y1="126" x2="152" y2="36"/>
<line x1="140" y1="126" x2="164" y2="126"/>
<line x1="92" y1="126" x2="92" y2="98"/>
<line x1="78" y1="98" x2="106" y2="98"/>
<line x1="82" y1="94" x2="78" y2="56"/>
</g>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<animateTransform attributeName="transform" type="rotate" values="0 152 36;40 152 36;0 152 36" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<line x1="152" y1="36" x2="114" y2="58"/>
<circle cx="138" cy="44" r="7" stroke-width="3"/>
<circle cx="130" cy="49" r="7" stroke-width="3"/>
<line x1="114" y1="58" x2="114" y2="66" stroke-width="5"/>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="93" cy="40" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<line x1="93" y1="50" x2="93" y2="92"/>
<path d="M93 92 L112 100 L112 122"/>
<path stroke="var(--acc,#a3e635)" d="M93 58 L104 68 L114 60">
<animate attributeName="d" values="M93 58 L104 68 L114 60;M93 58 L101 44 L109 28;M93 58 L104 68 L114 60" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  },
  {
    id: "shoulders-cable-rear-delt-fly",
    name: "Cable Rear-Delt Fly",
    group: "shoulders",
    equipment: "cable",
    level: 2,
    primary: ["Rear Delts"],
    secondary: ["Rhomboids", "Mid Traps"],
    steps: [
      "At the cable crossover, set both pulleys to head height or a notch above — no attachments needed, you grip the cable ends themselves.",
      "Grab the left cable with your right hand and the right cable with your left, so your arms are crossed in front of your face.",
      "Step back half a step, stand tall, and with almost-straight elbows sweep both hands out and back until they line up with your shoulders.",
      "Squeeze between your shoulder blades for a second at the back.",
      "Inhale and let your arms come slowly back to the crossed start — don't let the stacks slam."
    ],
    tips: [
      "This is the free-space version of the reverse pec deck: same muscles, but the cables let you set the exact height and arc that feels right.",
      "Keep the pin tiny — rear delts are small, and this move is about the squeeze, not the stack.",
      "Don't turn it into a row: elbows stay high and nearly straight, hands sweep out like you're opening curtains.",
      "If the plates clank at the start of every rep, you're releasing too fast — resist the way back in."
    ],
    setsReps: "3 sets × 12–15 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="22" y1="126" x2="22" y2="30"/>
<line x1="38" y1="126" x2="38" y2="30"/>
<line x1="22" y1="30" x2="38" y2="30"/>
<line x1="24" y1="84" x2="36" y2="84"/>
<line x1="24" y1="98" x2="36" y2="98"/>
<line x1="24" y1="112" x2="36" y2="112"/>
<line x1="24" y1="70" x2="36" y2="70">
<animate attributeName="y1" values="70;56;70" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="y2" values="70;56;70" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
<circle cx="43" cy="36" r="3" stroke-width="3"/>
</g>
<line x1="45" y1="38" x2="142" y2="46" stroke="var(--equip,#64748b)" stroke-width="2" stroke-linecap="round">
<animate attributeName="x2" values="142;114;84;114;142" keyTimes="0;0.25;0.5;0.75;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="y2" values="46;50;52;50;46" keyTimes="0;0.25;0.5;0.75;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="105" cy="30" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<line x1="105" y1="40" x2="105" y2="86"/>
<path d="M93 122 L105 86 L117 122"/>
<path stroke="var(--acc,#a3e635)" d="M105 50 L124 48 L142 46">
<animate attributeName="d" values="M105 50 L124 48 L142 46;M105 50 L111 54 L114 50;M105 50 L94 54 L84 52;M105 50 L111 54 L114 50;M105 50 L124 48 L142 46" keyTimes="0;0.25;0.5;0.75;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  },
  {
    id: "shoulders-single-arm-cable-front-raise",
    name: "Single-Arm Cable Front Raise",
    group: "shoulders",
    equipment: "cable",
    level: 1,
    primary: ["Front Delts"],
    secondary: ["Upper Chest", "Core"],
    steps: [
      "Set a pulley to the lowest position, attach a D-handle, and face away from the machine.",
      "Hold the handle beside your thigh and take one step forward so the cable is taut behind you.",
      "Exhale and raise your arm straight out in front of you until your hand reaches eye level.",
      "Pause briefly, then inhale and lower slowly, resisting the cable's pull all the way back down.",
      "Finish the set, then switch hands."
    ],
    tips: [
      "Because the cable pulls from behind and below, the front delt works through the whole arc — a dumbbell feels weightless at the bottom, this never does.",
      "Keep a slight elbow bend and stop at eye level; going higher mostly shifts the work to your traps.",
      "Brace your core and squeeze your glutes so the cable can't tug you into an arched back."
    ],
    setsReps: "3 sets × 10–12 reps per arm",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="22" y1="126" x2="22" y2="46"/>
<line x1="38" y1="126" x2="38" y2="46"/>
<line x1="22" y1="46" x2="38" y2="46"/>
<line x1="24" y1="70" x2="36" y2="70"/>
<line x1="24" y1="84" x2="36" y2="84"/>
<line x1="24" y1="98" x2="36" y2="98"/>
<line x1="24" y1="112" x2="36" y2="112"/>
<circle cx="43" cy="118" r="3" stroke-width="3"/>
</g>
<line x1="45" y1="118" x2="104" y2="88" stroke="var(--equip,#64748b)" stroke-width="2" stroke-linecap="round">
<animate attributeName="x2" values="104;132;137;132;104" keyTimes="0;0.25;0.5;0.75;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="y2" values="88;71;40;71;88" keyTimes="0;0.25;0.5;0.75;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="100" cy="28" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<line x1="100" y1="38" x2="100" y2="86"/>
<path d="M88 122 L100 86 L112 122"/>
<line x1="97" y1="50" x2="93" y2="84"/>
</g>
<g stroke-linecap="round">
<animateTransform attributeName="transform" type="rotate" values="0 100 50;-100 100 50;0 100 50" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<line x1="100" y1="50" x2="104" y2="88" stroke="var(--acc,#a3e635)" stroke-width="6"/>
<circle cx="104" cy="89" r="4" fill="var(--equip,#64748b)" stroke="none"/>
</g>
</svg>`
  },
  {
    id: "shoulders-smith-machine-shrug",
    name: "Smith Machine Shrug",
    group: "shoulders",
    equipment: "machine",
    level: 1,
    primary: ["Upper Traps"],
    secondary: ["Forearms"],
    steps: [
      "Set the Smith bar on its hooks at about mid-thigh height and load small plates evenly.",
      "Stand tall facing the bar with feet hip-width, grip it just outside your thighs, and rotate your wrists to unhook it.",
      "Exhale and shrug your shoulders straight up toward your ears as high as they'll go — arms stay straight.",
      "Hold the top squeeze for a full second, then inhale and lower slowly to a complete stretch.",
      "Rotate the bar back onto the hooks when the set is done."
    ],
    tips: [
      "The rails lock the bar into a perfectly vertical path, so you can go heavier here than with dumbbell shrugs without worrying about balance.",
      "Straight up and down only — rolling the shoulders in circles adds nothing and irritates the joint.",
      "Stand close enough that the bar brushes your thighs; if it hangs out in front it drags you forward.",
      "Don't bend the elbows to help — your arms are just hooks holding the bar."
    ],
    setsReps: "3 sets × 12–15 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="128" y1="126" x2="128" y2="10"/>
<line x1="142" y1="126" x2="142" y2="10"/>
<line x1="128" y1="10" x2="142" y2="10"/>
</g>
<g stroke-linecap="round">
<animateTransform attributeName="transform" type="translate" values="0 0;0 -9;0 0" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<line x1="98" y1="88" x2="136" y2="88" stroke="var(--equip,#64748b)" stroke-width="4"/>
<line x1="126" y1="79" x2="126" y2="97" stroke="var(--equip,#64748b)" stroke-width="6"/>
<line x1="132" y1="82" x2="132" y2="94" stroke="var(--equip,#64748b)" stroke-width="4"/>
<line x1="87" y1="46" x2="105" y2="46" stroke="var(--acc,#a3e635)" stroke-width="6"/>
<line x1="90" y1="48" x2="98" y2="86" stroke="var(--acc,#a3e635)" stroke-width="6"/>
<line x1="103" y1="48" x2="105" y2="86" stroke="var(--acc,#a3e635)" stroke-width="6"/>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="96" cy="26" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<line x1="96" y1="38" x2="96" y2="86"/>
<path d="M84 122 L96 86 L108 122"/>
</g>
</svg>`
  },
  {
    id: "shoulders-landmine-single-arm-press",
    name: "Landmine Single-Arm Press",
    group: "shoulders",
    equipment: "machine",
    level: 1,
    primary: ["Front Delts", "Upper Chest"],
    secondary: ["Triceps", "Core"],
    steps: [
      "Wedge one end of a barbell into the landmine sleeve and load a light plate on the free end.",
      "Stand facing the anchored end with feet staggered, and hold the very end of the bar in one hand at shoulder height.",
      "Exhale and press the bar up and forward until your arm is straight — the end travels in a smooth arc, not straight up.",
      "Inhale and lower it back to your shoulder under control.",
      "Do all reps, then switch arms."
    ],
    tips: [
      "The 45-degree path is the most shoulder-friendly way to learn pressing — if straight-overhead pressing feels pinchy, start here.",
      "Follow the bar's natural arc up and forward; don't fight it into a vertical line.",
      "Keep your ribs down and squeeze your glutes so your lower back doesn't arch as you press.",
      "No landmine sleeve at your gym? Wedging the bar into a corner on a folded towel works the same."
    ],
    setsReps: "3 sets × 8–10 reps per arm",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<line x1="22" y1="125" x2="38" y2="117" stroke="var(--equip,#64748b)" stroke-width="5" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-linecap="round">
<animateTransform attributeName="transform" type="rotate" values="0 30 122;-14 30 122;0 30 122" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<line x1="30" y1="122" x2="118" y2="58" stroke-width="4"/>
<circle cx="104" cy="68" r="8" stroke-width="3"/>
<circle cx="110" cy="63" r="6" stroke-width="3"/>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="138" cy="30" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<line x1="138" y1="40" x2="138" y2="88"/>
<path d="M128 124 L138 88 L150 124"/>
<line x1="140" y1="52" x2="146" y2="84"/>
<path stroke="var(--acc,#a3e635)" d="M138 50 L128 64 L118 59">
<animate attributeName="d" values="M138 50 L128 64 L118 59;M138 50 L122 50 L100 39;M138 50 L128 64 L118 59" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  },
  {
    id: "shoulders-cable-shoulder-press",
    name: "Cable Shoulder Press",
    group: "shoulders",
    equipment: "cable",
    level: 1,
    primary: ["Front Delts", "Side Delts"],
    secondary: ["Triceps", "Core"],
    steps: [
      "Set both pulleys of the functional trainer to their lowest position and clip on D-handles.",
      "Grab a handle in each hand and bring them up to shoulder height, standing tall between the pulleys (or sit on a bench placed in the middle).",
      "Exhale and press both handles straight up overhead until your arms are nearly straight.",
      "Inhale and lower slowly back to shoulder height, keeping tension on the cables the whole way.",
      "Keep your ribs down and core braced for every rep."
    ],
    tips: [
      "Unlike the shoulder press machine, the cables pull from below the entire time — there's no rest at the bottom, so pick a lighter weight than you'd pin on the machine.",
      "The handles will wobble at first; press them along a steady path just in front of your ears.",
      "If standing feels shaky, start seated — the wobble is your stabilizers learning, and it improves fast."
    ],
    setsReps: "3 sets × 10–12 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="162" y1="126" x2="162" y2="16"/>
<line x1="178" y1="126" x2="178" y2="16"/>
<line x1="162" y1="16" x2="178" y2="16"/>
<line x1="164" y1="84" x2="176" y2="84"/>
<line x1="164" y1="98" x2="176" y2="98"/>
<line x1="164" y1="112" x2="176" y2="112"/>
<line x1="164" y1="70" x2="176" y2="70">
<animate attributeName="y1" values="70;56;70" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="y2" values="70;56;70" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
<circle cx="158" cy="100" r="3" stroke-width="3"/>
</g>
<line x1="156" y1="98" x2="110" y2="48" stroke="var(--equip,#64748b)" stroke-width="2" stroke-linecap="round">
<animate attributeName="x2" values="110;102;110" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="y2" values="48;18;48" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
<circle cx="110" cy="48" r="4" fill="var(--equip,#64748b)" stroke="none">
<animate attributeName="cx" values="110;102;110" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="cy" values="48;18;48" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</circle>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<path d="M96 58 L105 66 L107 50">
<animate attributeName="d" values="M96 58 L105 66 L107 50;M96 58 L99 36 L100 18;M96 58 L105 66 L107 50" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
<circle cx="96" cy="32" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<line x1="96" y1="42" x2="96" y2="88"/>
<path d="M86 124 L96 88 L108 124"/>
<path stroke="var(--acc,#a3e635)" d="M96 58 L108 66 L110 48">
<animate attributeName="d" values="M96 58 L108 66 L110 48;M96 58 L101 36 L102 18;M96 58 L108 66 L110 48" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  },
  {
    id: "shoulders-cable-y-raise",
    name: "Cable Y-Raise",
    group: "shoulders",
    equipment: "cable",
    level: 2,
    primary: ["Side Delts", "Lower Traps"],
    secondary: ["Rear Delts", "Serratus Anterior"],
    steps: [
      "Set both pulleys to the lowest position and grab the left cable with your right hand, the right cable with your left, so the cables cross in front of you.",
      "Step back half a step and stand tall with your hands in front of your hips.",
      "Exhale and sweep both arms up and out into a wide Y, thumbs pointing up, until your hands are above shoulder height.",
      "Hold the Y for one second, then inhale and lower slowly back to the start."
    ],
    tips: [
      "This one is shoulder medicine: the Y angle hits the lower traps, which keep your shoulder blades moving well for every press you do.",
      "Go very light — if you can't hold the top position for a second, drop the pin down.",
      "Thumbs up the whole way; turning palms down changes the exercise and can pinch the shoulder.",
      "Keep your ribs down — don't arch your back to fake extra height at the top."
    ],
    setsReps: "3 sets × 12–15 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="22" y1="126" x2="22" y2="46"/>
<line x1="38" y1="126" x2="38" y2="46"/>
<line x1="22" y1="46" x2="38" y2="46"/>
<line x1="24" y1="84" x2="36" y2="84"/>
<line x1="24" y1="98" x2="36" y2="98"/>
<line x1="24" y1="112" x2="36" y2="112"/>
<line x1="24" y1="70" x2="36" y2="70">
<animate attributeName="y1" values="70;58;70" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="y2" values="70;58;70" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
<circle cx="43" cy="118" r="3" stroke-width="3"/>
</g>
<line x1="45" y1="118" x2="110" y2="84" stroke="var(--equip,#64748b)" stroke-width="2" stroke-linecap="round">
<animate attributeName="x2" values="110;139;130;139;110" keyTimes="0;0.25;0.5;0.75;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="y2" values="84;59;22;59;84" keyTimes="0;0.25;0.5;0.75;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="104" cy="30" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<line x1="104" y1="40" x2="104" y2="86"/>
<path d="M92 122 L104 86 L116 122"/>
</g>
<g stroke-linecap="round">
<animateTransform attributeName="transform" type="rotate" values="0 104 48;-125 104 48;0 104 48" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<line x1="101" y1="48" x2="105" y2="84" stroke="var(--fig,#cbd5e1)" stroke-width="6"/>
<line x1="104" y1="48" x2="110" y2="84" stroke="var(--acc,#a3e635)" stroke-width="6"/>
<circle cx="110" cy="85" r="4" fill="var(--equip,#64748b)" stroke="none"/>
</g>
</svg>`
  },
  {
    id: "shoulders-dumbbell-rear-delt-fly",
    name: "Dumbbell Rear-Delt Fly",
    group: "shoulders",
    equipment: "dumbbell",
    level: 1,
    primary: ["Rear Delts"],
    secondary: ["Rhomboids", "Mid Traps"],
    steps: [
      "Hold light dumbbells and hinge forward at the hips until your chest faces the floor, back flat, knees soft.",
      "Let the dumbbells hang straight down under your shoulders, palms facing each other, elbows slightly bent.",
      "Exhale and raise both arms out to the sides until they're level with your back.",
      "Pause for a second at the top, then inhale and lower slowly without letting the weights swing."
    ],
    tips: [
      "The classic rear-delt staple — same target as the reverse pec deck, but here your lower back holds the hinge, so keep the dumbbells light.",
      "If your torso bobs up and down to lift the weight, rest your chest on an incline bench and fly from there.",
      "Lead with your elbows and pinkies, not your thumbs — it keeps the work on the rear delts.",
      "Rear delts respond to smooth reps, not big weights: 12–15 clean ones beat 8 ugly ones."
    ],
    setsReps: "3 sets × 12–15 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="66" cy="46" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<line x1="76" y1="54" x2="110" y2="86"/>
<path d="M102 124 L110 86 L120 124"/>
</g>
<g stroke-linecap="round">
<animateTransform attributeName="transform" type="rotate" values="0 84 56;-70 84 56;0 84 56" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<line x1="84" y1="56" x2="82" y2="90" stroke="var(--fig,#cbd5e1)" stroke-width="6"/>
<line x1="75" y1="91" x2="89" y2="91" stroke="var(--equip,#64748b)" stroke-width="7"/>
</g>
<g stroke-linecap="round">
<animateTransform attributeName="transform" type="rotate" values="0 80 58;-75 80 58;0 80 58" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<line x1="80" y1="58" x2="78" y2="92" stroke="var(--acc,#a3e635)" stroke-width="6"/>
<line x1="71" y1="93" x2="85" y2="93" stroke="var(--equip,#64748b)" stroke-width="7"/>
</g>
</svg>`
  },
  {
    id: "shoulders-arnold-press",
    name: "Arnold Press",
    group: "shoulders",
    equipment: "dumbbell",
    level: 2,
    primary: ["Front Delts", "Side Delts"],
    secondary: ["Triceps", "Upper Traps"],
    steps: [
      "Sit on an upright bench holding dumbbells at chin height in front of you, palms facing your face, elbows tucked in.",
      "Exhale and press up while rotating your palms outward — your elbows sweep out to the sides as the palms turn to face forward.",
      "Finish with arms nearly straight overhead, palms facing away from you.",
      "Inhale and reverse the motion, rotating your palms back toward your face as the dumbbells return to chin height.",
      "Make the whole rep one smooth corkscrew, not two separate moves."
    ],
    tips: [
      "The rotation works the front delts through a longer arc than a regular press — use noticeably less weight than your normal dumbbell overhead press.",
      "Keep the dumbbells close to your face at the bottom; letting them drift forward strains the lower back.",
      "If your shoulders click or pinch during the rotation, stick with the standard dumbbell press — no exercise is mandatory."
    ],
    setsReps: "3 sets × 8–10 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="98" y1="126" x2="98" y2="100"/>
<line x1="84" y1="100" x2="112" y2="100"/>
<line x1="88" y1="96" x2="84" y2="52"/>
</g>
<circle cx="118" cy="42" r="6" fill="var(--equip,#64748b)" stroke="none">
<animate attributeName="cx" values="118;106;100;106;118" keyTimes="0;0.25;0.5;0.75;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="cy" values="42;44;14;44;42" keyTimes="0;0.25;0.5;0.75;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1"/>
</circle>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<path d="M95 56 L102 66 L112 46">
<animate attributeName="d" values="M95 56 L102 66 L112 46;M95 56 L101 68 L103 48;M95 56 L96 35 L97 20;M95 56 L101 68 L103 48;M95 56 L102 66 L112 46" keyTimes="0;0.25;0.5;0.75;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
<circle cx="95" cy="38" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<line x1="95" y1="48" x2="95" y2="94"/>
<path d="M95 94 L113 102 L113 124"/>
<path stroke="var(--acc,#a3e635)" d="M95 56 L104 64 L116 44">
<animate attributeName="d" values="M95 56 L104 64 L116 44;M95 56 L103 66 L105 46;M95 56 L98 34 L99 18;M95 56 L103 66 L105 46;M95 56 L104 64 L116 44" keyTimes="0;0.25;0.5;0.75;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  },
  {
    id: "shoulders-leaning-cable-lateral-raise",
    name: "Leaning Single-Arm Cable Lateral Raise",
    group: "shoulders",
    equipment: "cable",
    level: 2,
    primary: ["Side Delts"],
    secondary: ["Upper Traps"],
    steps: [
      "Set a pulley to the lowest position with a D-handle, stand side-on right next to the machine, and grab the frame with your inside hand.",
      "Hold the handle in your outside hand, then lean your whole body away from the machine until your inside arm is straight.",
      "Exhale and raise the handle out to the side up to shoulder height, elbow slightly bent.",
      "Inhale and lower slowly, resisting the cable through the entire arc.",
      "Finish the set, turn around, and repeat on the other side."
    ],
    tips: [
      "The lean is the whole trick: it keeps tension on the side delt from the very first inch of the rep, where a normal lateral raise feels weightless.",
      "Keep your body straight like a plank and lean from your ankles — feet stay close to the machine's base.",
      "Go lighter than your dumbbell lateral raise; the lean plus the cable makes every rep harder.",
      "Torso stays still — if you're heaving the weight up, drop the pin."
    ],
    setsReps: "3 sets × 12–15 reps per arm",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="28" y1="126" x2="28" y2="36"/>
<line x1="42" y1="126" x2="42" y2="36"/>
<line x1="28" y1="36" x2="42" y2="36"/>
<line x1="30" y1="76" x2="40" y2="76"/>
<line x1="30" y1="90" x2="40" y2="90"/>
<line x1="30" y1="104" x2="40" y2="104"/>
<line x1="30" y1="62" x2="40" y2="62">
<animate attributeName="y1" values="62;50;62" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="y2" values="62;50;62" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
<line x1="42" y1="52" x2="56" y2="50"/>
<circle cx="46" cy="118" r="3" stroke-width="3"/>
</g>
<line x1="48" y1="118" x2="82" y2="86" stroke="var(--equip,#64748b)" stroke-width="2" stroke-linecap="round">
<animate attributeName="x2" values="82;112;126;112;82" keyTimes="0;0.25;0.5;0.75;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="y2" values="86;78;51;78;86" keyTimes="0;0.25;0.5;0.75;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="91" cy="36" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<line x1="88" y1="46" x2="72" y2="92"/>
<path d="M62 124 L72 92 L80 124"/>
<path d="M86 48 L70 54 L57 51"/>
</g>
<g stroke-linecap="round">
<animateTransform attributeName="transform" type="rotate" values="0 88 48;-95 88 48;0 88 48" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<line x1="88" y1="48" x2="82" y2="86" stroke="var(--acc,#a3e635)" stroke-width="6"/>
<circle cx="82" cy="87" r="4" fill="var(--equip,#64748b)" stroke="none"/>
</g>
</svg>`
  }
);
