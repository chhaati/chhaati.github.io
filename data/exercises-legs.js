// data/exercises-legs.js
window.GYM_EXERCISES = window.GYM_EXERCISES || [];
window.GYM_EXERCISES.push(
  {
    id: "legs-leg-press",
    name: "Leg Press Machine",
    group: "legs",
    equipment: "machine",
    level: 1,
    primary: ["Quads", "Glutes"],
    secondary: ["Hamstrings", "Calves"],
    steps: [
      "Adjust the seat so your knees are bent to about 90 degrees when your feet rest flat on the platform.",
      "Place feet shoulder-width apart in the middle of the platform, toes pointed slightly out.",
      "Grip the side handles, exhale, and push the platform away by driving through your whole foot.",
      "Stop just short of locking your knees, then inhale and bend your knees to return with control.",
      "Lower until your knees reach about 90 degrees, then press again."
    ],
    tips: [
      "Never let your lower back or hips curl off the seat pad at the bottom — shorten the range instead.",
      "Push through your heels, not your toes, and keep knees tracking in line with your feet.",
      "Do not slam the weight stack down between reps; keep constant tension.",
      "Start light: this machine lets you lift a lot, but form comes first."
    ],
    setsReps: "3 sets × 10–12 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="34" y1="54" x2="34" y2="106"/>
<line x1="34" y1="106" x2="64" y2="106"/>
<line x1="42" y1="106" x2="42" y2="126"/>
<line x1="88" y1="112" x2="170" y2="112"/>
<line x1="150" y1="66" x2="150" y2="108">
<animate attributeName="x1" values="150;116;150" dur="2.2s" repeatCount="indefinite" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="x2" values="150;116;150" dur="2.2s" repeatCount="indefinite" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="46" cy="48" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<path d="M46 58 L52 98"/>
<path d="M48 64 L64 88"/>
<path stroke="var(--acc,#a3e635)" d="M52 98 L100 86 L144 98">
<animate attributeName="d" values="M52 98 L100 86 L144 98;M52 98 L82 72 L110 96;M52 98 L100 86 L144 98" dur="2.2s" repeatCount="indefinite" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  },
  {
    id: "legs-leg-extension",
    name: "Leg Extension Machine",
    group: "legs",
    equipment: "machine",
    level: 1,
    primary: ["Quads"],
    secondary: [],
    steps: [
      "Adjust the backrest so the machine's pivot point lines up with your knee joint.",
      "Set the ankle pad so it rests on your shins just above your feet, and sit back fully.",
      "Grip the side handles, exhale, and straighten your legs until they are almost fully extended.",
      "Squeeze your quads for one second at the top.",
      "Inhale and lower the pad slowly over 2–3 seconds without letting the stack touch down."
    ],
    tips: [
      "If the pad hits your feet or your knees hang past the seat edge, the seat needs adjusting.",
      "Do not swing or kick the weight up — slow and controlled beats heavy every time.",
      "Keep your back and hips pressed into the seat throughout the set."
    ],
    setsReps: "3 sets × 10–12 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="60" y1="46" x2="60" y2="96"/>
<line x1="60" y1="96" x2="98" y2="96"/>
<line x1="66" y1="96" x2="66" y2="126"/>
<line x1="94" y1="96" x2="94" y2="126"/>
<line x1="152" y1="88" x2="152" y2="126"/>
<line x1="166" y1="88" x2="166" y2="126"/>
<line x1="152" y1="88" x2="166" y2="88"/>
<line x1="148" y1="118" x2="170" y2="118">
<animate attributeName="y1" values="118;98;118" dur="2.2s" repeatCount="indefinite" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="y2" values="118;98;118" dur="2.2s" repeatCount="indefinite" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="74" cy="42" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<path d="M74 52 L78 90"/>
<path d="M75 58 L66 86"/>
<path d="M78 90 L106 90"/>
<g>
<path stroke="var(--acc,#a3e635)" d="M106 90 L106 116"/>
<line stroke="var(--equip,#64748b)" stroke-width="4" x1="100" y1="114" x2="114" y2="114"/>
<animateTransform attributeName="transform" type="rotate" values="0 106 90;-80 106 90;0 106 90" dur="2.2s" repeatCount="indefinite" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</g>
</g>
</svg>`
  },
  {
    id: "legs-seated-leg-curl",
    name: "Seated Leg Curl Machine",
    group: "legs",
    equipment: "machine",
    level: 1,
    primary: ["Hamstrings"],
    secondary: ["Calves"],
    steps: [
      "Adjust the seat so your knee joint lines up with the machine's pivot point.",
      "Lower the thigh pad snugly onto your thighs and place the ankle pad on the back of your lower calves.",
      "Grip the handles, exhale, and curl your heels down and under you as far as comfortable.",
      "Pause briefly at the bottom with your hamstrings fully squeezed.",
      "Inhale and let your legs straighten slowly, stopping before the stack touches down."
    ],
    tips: [
      "Keep your hips glued to the seat — lifting them means the weight is too heavy.",
      "The lowering (straightening) phase should take 2–3 seconds; do not let the pad yank your legs up.",
      "Point your toes toward your shins to keep the work on your hamstrings."
    ],
    setsReps: "3 sets × 10–12 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="56" y1="44" x2="56" y2="94"/>
<line x1="56" y1="94" x2="94" y2="94"/>
<line x1="62" y1="94" x2="62" y2="126"/>
<line x1="90" y1="94" x2="90" y2="126"/>
<line x1="84" y1="78" x2="100" y2="78"/>
<line x1="152" y1="88" x2="152" y2="126"/>
<line x1="152" y1="88" x2="166" y2="88"/>
<line x1="166" y1="88" x2="166" y2="126"/>
<line x1="148" y1="118" x2="170" y2="118">
<animate attributeName="y1" values="118;100;118" dur="2.2s" repeatCount="indefinite" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="y2" values="118;100;118" dur="2.2s" repeatCount="indefinite" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="70" cy="40" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<path d="M70 50 L76 88"/>
<path d="M71 56 L84 74"/>
<path d="M76 88 L104 88"/>
<g>
<path stroke="var(--acc,#a3e635)" d="M104 88 L132 92"/>
<line stroke="var(--equip,#64748b)" stroke-width="4" x1="130" y1="86" x2="130" y2="98"/>
<animateTransform attributeName="transform" type="rotate" values="0 104 88;78 104 88;0 104 88" dur="2.2s" repeatCount="indefinite" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</g>
</g>
</svg>`
  },
  {
    id: "legs-hip-abduction",
    name: "Hip Abduction Machine",
    group: "legs",
    equipment: "machine",
    level: 1,
    primary: ["Glutes"],
    secondary: ["Outer Thighs"],
    steps: [
      "Sit tall with your back against the pad and place the outside of your knees against the pads.",
      "Select a weight you can move without jerking, and grip the handles at your sides.",
      "Exhale and press your knees apart as far as comfortable.",
      "Pause for one second at the widest point, squeezing the sides of your glutes.",
      "Inhale and let your knees come back together slowly, without letting the stack slam."
    ],
    tips: [
      "Keep your back against the pad — leaning forward shifts the work away from your glutes.",
      "Use the adjustment lever to start the pads at a comfortable, not extreme, width.",
      "Slow reps with a pause beat fast, bouncy reps here."
    ],
    setsReps: "3 sets × 12–15 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="82" y1="96" x2="118" y2="96"/>
<line x1="100" y1="96" x2="100" y2="126"/>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="100" cy="38" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<path d="M100 48 L100 88"/>
<path d="M97 54 L82 78"/>
<path d="M103 54 L118 78"/>
<g>
<path stroke="var(--acc,#a3e635)" d="M100 88 L86 102 L82 122"/>
<line stroke="var(--equip,#64748b)" stroke-width="4" x1="78" y1="94" x2="82" y2="106"/>
<animateTransform attributeName="transform" type="rotate" values="0 100 88;30 100 88;0 100 88" dur="2.2s" repeatCount="indefinite" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</g>
<g>
<path stroke="var(--acc,#a3e635)" d="M100 88 L114 102 L118 122"/>
<line stroke="var(--equip,#64748b)" stroke-width="4" x1="122" y1="94" x2="118" y2="106"/>
<animateTransform attributeName="transform" type="rotate" values="0 100 88;-30 100 88;0 100 88" dur="2.2s" repeatCount="indefinite" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</g>
</g>
</svg>`
  },
  {
    id: "legs-hip-adduction",
    name: "Hip Adduction Machine",
    group: "legs",
    equipment: "machine",
    level: 1,
    primary: ["Inner Thighs"],
    secondary: [],
    steps: [
      "Sit tall with your back against the pad and place the inside of your knees against the pads.",
      "Use the adjustment lever to set a starting width that gives a light stretch, not pain.",
      "Exhale and squeeze your knees together until the pads almost touch.",
      "Hold the squeeze for one second.",
      "Inhale and open back to the start position slowly and under control."
    ],
    tips: [
      "Start with a narrow range and modest weight — inner thighs strain easily when cold.",
      "Do not let the weight pull your legs apart quickly on the way back.",
      "Sit upright with hips back in the seat for every rep."
    ],
    setsReps: "3 sets × 12–15 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="82" y1="96" x2="118" y2="96"/>
<line x1="100" y1="96" x2="100" y2="126"/>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="100" cy="38" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<path d="M100 48 L100 88"/>
<path d="M97 54 L82 78"/>
<path d="M103 54 L118 78"/>
<g>
<path stroke="var(--acc,#a3e635)" d="M100 88 L80 98 L70 116"/>
<line stroke="var(--equip,#64748b)" stroke-width="4" x1="86" y1="94" x2="90" y2="106"/>
<animateTransform attributeName="transform" type="rotate" values="0 100 88;-22 100 88;0 100 88" dur="2.2s" repeatCount="indefinite" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</g>
<g>
<path stroke="var(--acc,#a3e635)" d="M100 88 L120 98 L130 116"/>
<line stroke="var(--equip,#64748b)" stroke-width="4" x1="114" y1="94" x2="110" y2="106"/>
<animateTransform attributeName="transform" type="rotate" values="0 100 88;22 100 88;0 100 88" dur="2.2s" repeatCount="indefinite" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</g>
</g>
</svg>`
  },
  {
    id: "legs-seated-calf-raise",
    name: "Seated Calf Raise Machine",
    group: "legs",
    equipment: "machine",
    level: 1,
    primary: ["Calves"],
    secondary: [],
    steps: [
      "Sit down and place the balls of your feet on the foot platform, heels hanging off.",
      "Adjust the knee pads so they sit snugly on your lower thighs, then release the safety catch.",
      "Inhale and lower your heels as far as comfortable to feel a deep calf stretch.",
      "Exhale and press up onto your toes as high as you can.",
      "Pause one second at the top, then lower slowly."
    ],
    tips: [
      "Full range of motion matters more than weight — deep stretch, high squeeze.",
      "Do not bounce out of the bottom; pause briefly in the stretched position.",
      "Keep the balls of both feet firmly on the platform the whole set."
    ],
    setsReps: "3 sets × 12–15 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="46" y1="98" x2="86" y2="98"/>
<line x1="52" y1="98" x2="52" y2="126"/>
<line x1="80" y1="98" x2="80" y2="126"/>
<line x1="100" y1="118" x2="122" y2="118"/>
<line x1="110" y1="118" x2="110" y2="126"/>
<line x1="84" y1="84" x2="108" y2="84">
<animate attributeName="y1" values="84;74;84" dur="2.2s" repeatCount="indefinite" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="y2" values="84;74;84" dur="2.2s" repeatCount="indefinite" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="59" cy="44" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<path d="M60 54 L64 94"/>
<path d="M62 60 L86 80"/>
<path stroke="var(--acc,#a3e635)" d="M64 94 L98 92 L100 121 L114 119">
<animate attributeName="d" values="M64 94 L98 92 L100 121 L114 119;M64 94 L96 82 L100 108 L114 119;M64 94 L98 92 L100 121 L114 119" dur="2.2s" repeatCount="indefinite" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  },
  {
    id: "legs-standing-calf-raise",
    name: "Standing Calf Raise",
    group: "legs",
    equipment: "machine",
    level: 1,
    primary: ["Calves"],
    secondary: [],
    steps: [
      "Step under the shoulder pads and place the balls of your feet on the block, heels hanging off.",
      "Stand up straight to lift the weight, keeping knees straight but not locked.",
      "Inhale and lower your heels below the block until you feel a full calf stretch.",
      "Exhale and rise up onto your toes as high as possible.",
      "Squeeze at the top for one second, then lower slowly."
    ],
    tips: [
      "Adjust the pad height so you can stand up straight without hunching or tip-toeing to load it.",
      "Keep your body in a straight line — do not bend at the hips or bounce.",
      "No machine? The same movement works holding a dumbbell while standing on a step."
    ],
    setsReps: "3 sets × 12–15 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="64" y1="126" x2="64" y2="34"/>
<line x1="64" y1="34" x2="90" y2="42"/>
<line x1="90" y1="122" x2="124" y2="122"/>
<line x1="106" y1="122" x2="106" y2="126"/>
<line x1="86" y1="46" x2="114" y2="46">
<animate attributeName="y1" values="46;37;46" dur="2.2s" repeatCount="indefinite" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="y2" values="46;37;46" dur="2.2s" repeatCount="indefinite" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<g>
<circle cx="100" cy="32" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<path d="M100 42 L100 84"/>
<path d="M98 48 L84 52"/>
<path stroke="var(--acc,#a3e635)" d="M100 84 L99 104 L98 119"/>
<animateTransform attributeName="transform" type="translate" values="0 0;0 -9;0 0" dur="2.2s" repeatCount="indefinite" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</g>
<path stroke="var(--acc,#a3e635)" d="M98 121 L114 121">
<animate attributeName="d" values="M98 121 L114 121;M98 112 L114 121;M98 121 L114 121" dur="2.2s" repeatCount="indefinite" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  },
  {
    id: "legs-goblet-squat",
    name: "Goblet Squat",
    group: "legs",
    equipment: "dumbbell",
    level: 1,
    primary: ["Quads", "Glutes"],
    secondary: ["Core", "Hamstrings"],
    steps: [
      "Hold one dumbbell vertically against your chest with both hands, elbows pointing down.",
      "Stand with feet shoulder-width apart, toes turned slightly out.",
      "Inhale, brace your core, and sit down between your heels until your thighs are about parallel.",
      "Keep your chest up and elbows inside your knees at the bottom.",
      "Exhale and drive through your whole foot to stand back up."
    ],
    tips: [
      "The weight at your chest acts as a counterbalance — this is the best squat to learn first.",
      "Heels stay flat; if they lift, shorten your depth or widen your stance.",
      "Look straight ahead, not at the floor, to keep your back neutral."
    ],
    setsReps: "3 sets × 8–12 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<circle r="5" stroke="var(--equip,#64748b)" stroke-width="4" cx="110" cy="61">
<animate attributeName="cx" values="110;104;110" dur="2.2s" repeatCount="indefinite" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="cy" values="61;85;61" dur="2.2s" repeatCount="indefinite" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</circle>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="96" cy="30" r="9" fill="var(--fig,#cbd5e1)" stroke="none">
<animate attributeName="cx" values="96;89;96" dur="2.2s" repeatCount="indefinite" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="cy" values="30;55;30" dur="2.2s" repeatCount="indefinite" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</circle>
<path d="M96 40 L100 78">
<animate attributeName="d" values="M96 40 L100 78;M90 64 L96 100;M96 40 L100 78" dur="2.2s" repeatCount="indefinite" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
<path d="M96 46 L108 58">
<animate attributeName="d" values="M96 46 L108 58;M90 70 L102 82;M96 46 L108 58" dur="2.2s" repeatCount="indefinite" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
<path stroke="var(--acc,#a3e635)" d="M100 78 L104 102 L98 124">
<animate attributeName="d" values="M100 78 L104 102 L98 124;M96 100 L114 110 L98 124;M100 78 L104 102 L98 124" dur="2.2s" repeatCount="indefinite" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  },
  {
    id: "legs-barbell-back-squat",
    name: "Barbell Back Squat",
    group: "legs",
    equipment: "barbell",
    level: 2,
    primary: ["Quads", "Glutes"],
    secondary: ["Hamstrings", "Core", "Lower Back"],
    steps: [
      "Set the rack so the bar sits at upper-chest height, then duck under and rest it on your upper traps — not your neck.",
      "Grip the bar just outside your shoulders, stand up to unrack it, and take two small steps back.",
      "Set feet shoulder-width, inhale deep, and brace your core like you are about to be poked.",
      "Sit back and down until your thighs are about parallel, knees tracking over your toes.",
      "Drive up through your whole foot, exhaling near the top."
    ],
    tips: [
      "Learn the movement with an empty bar (20 kg) before adding plates.",
      "Keep your heels down and your chest up — if you tip forward, the weight is too heavy.",
      "Always set the rack's safety arms just below your bottom position.",
      "Take a fresh breath and re-brace before every rep."
    ],
    setsReps: "3 sets × 5–8 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="54" y1="70" x2="54" y2="126"/>
<line x1="146" y1="70" x2="146" y2="126"/>
<line x1="58" y1="38" x2="142" y2="38">
<animate attributeName="y1" values="38;64;38" dur="2.2s" repeatCount="indefinite" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="y2" values="38;64;38" dur="2.2s" repeatCount="indefinite" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
<circle r="10" cx="66" cy="38">
<animate attributeName="cy" values="38;64;38" dur="2.2s" repeatCount="indefinite" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</circle>
<circle r="10" cx="134" cy="38">
<animate attributeName="cy" values="38;64;38" dur="2.2s" repeatCount="indefinite" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</circle>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="100" cy="26" r="9" fill="var(--fig,#cbd5e1)" stroke="none">
<animate attributeName="cx" values="100;93;100" dur="2.2s" repeatCount="indefinite" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="cy" values="26;52;26" dur="2.2s" repeatCount="indefinite" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</circle>
<path d="M100 40 L102 76">
<animate attributeName="d" values="M100 40 L102 76;M94 66 L98 100;M100 40 L102 76" dur="2.2s" repeatCount="indefinite" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
<path d="M100 44 L114 39">
<animate attributeName="d" values="M100 44 L114 39;M94 70 L108 65;M100 44 L114 39" dur="2.2s" repeatCount="indefinite" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
<path stroke="var(--acc,#a3e635)" d="M102 76 L106 100 L100 124">
<animate attributeName="d" values="M102 76 L106 100 L100 124;M98 100 L114 110 L100 124;M102 76 L106 100 L100 124" dur="2.2s" repeatCount="indefinite" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  },
  {
    id: "legs-romanian-deadlift",
    name: "Romanian Deadlift",
    group: "legs",
    equipment: "barbell",
    level: 2,
    primary: ["Hamstrings", "Glutes"],
    secondary: ["Lower Back", "Core"],
    steps: [
      "Stand holding the bar at hip level with an overhand grip, hands shoulder-width, feet hip-width.",
      "Soften your knees slightly and keep them at that bend for the whole rep.",
      "Inhale and push your hips straight back, sliding the bar down your thighs with a flat back.",
      "Lower until you feel a strong hamstring stretch, usually just below the knees.",
      "Exhale and drive your hips forward to stand tall — do not lean back at the top."
    ],
    tips: [
      "This is a hip hinge, not a squat — hips go back, shins stay vertical.",
      "Keep the bar dragging lightly against your legs the entire time.",
      "If your lower back rounds, stop the descent higher — flexibility improves over time.",
      "Start light with a barbell or two dumbbells to groove the hinge."
    ],
    setsReps: "3 sets × 8–10 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<circle r="9" stroke="var(--equip,#64748b)" stroke-width="4" cx="97" cy="93">
<animate attributeName="cx" values="97;89;97" dur="2.2s" repeatCount="indefinite" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="cy" values="93;104;93" dur="2.2s" repeatCount="indefinite" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</circle>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="95" cy="32" r="9" fill="var(--fig,#cbd5e1)" stroke="none">
<animate attributeName="cx" values="95;77;95" dur="2.2s" repeatCount="indefinite" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="cy" values="32;49;32" dur="2.2s" repeatCount="indefinite" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</circle>
<path stroke="var(--acc,#a3e635)" d="M100 80 L96 42">
<animate attributeName="d" values="M100 80 L96 42;M108 78 L84 56;M100 80 L96 42" dur="2.2s" repeatCount="indefinite" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
<path d="M96 46 L96 88">
<animate attributeName="d" values="M96 46 L96 88;M84 58 L88 98;M96 46 L96 88" dur="2.2s" repeatCount="indefinite" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
<path d="M100 80 L102 102 L100 124">
<animate attributeName="d" values="M100 80 L102 102 L100 124;M108 78 L107 103 L101 124;M100 80 L102 102 L100 124" dur="2.2s" repeatCount="indefinite" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  },
  {
    id: "legs-walking-lunge",
    name: "Walking Lunge",
    group: "legs",
    equipment: "bodyweight",
    level: 1,
    primary: ["Quads", "Glutes"],
    secondary: ["Hamstrings", "Core"],
    steps: [
      "Stand tall with feet hip-width apart and hands on hips or at your sides.",
      "Take a big step forward and plant your whole front foot on the floor.",
      "Inhale and lower straight down until both knees are bent to about 90 degrees, back knee just above the floor.",
      "Exhale and push through your front heel to stand, bringing the back foot through into the next step.",
      "Keep alternating legs as you walk forward."
    ],
    tips: [
      "Keep your torso upright — drop your hips down, do not lean forward onto the front knee.",
      "A slightly wider stance side-to-side helps with balance at first.",
      "Master bodyweight lunges before holding dumbbells."
    ],
    setsReps: "3 sets × 10 steps per leg",
    trackMode: "reps",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<g>
<circle cx="100" cy="32" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<path d="M100 42 L100 82"/>
<path d="M100 50 L114 68"/>
<path d="M100 50 L88 66"/>
<animateTransform attributeName="transform" type="translate" values="0 0;0 18;0 0" dur="2.2s" repeatCount="indefinite" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</g>
<path stroke="var(--acc,#a3e635)" d="M100 82 L124 98 L126 124">
<animate attributeName="d" values="M100 82 L124 98 L126 124;M100 100 L126 108 L126 124;M100 82 L124 98 L126 124" dur="2.2s" repeatCount="indefinite" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
<path d="M100 82 L86 104 L74 124">
<animate attributeName="d" values="M100 82 L86 104 L74 124;M100 100 L90 118 L78 124;M100 82 L86 104 L74 124" dur="2.2s" repeatCount="indefinite" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  },
  {
    id: "legs-hip-thrust",
    name: "Barbell Hip Thrust",
    group: "legs",
    equipment: "barbell",
    level: 2,
    primary: ["Glutes"],
    secondary: ["Hamstrings", "Core"],
    steps: [
      "Sit on the floor with your upper back against a sturdy bench and roll the padded bar over your hips.",
      "Plant feet flat, hip-width apart, so your shins are vertical when your hips are up.",
      "Tuck your chin, brace your core, and exhale as you drive your hips up through your heels.",
      "Stop when your body is a straight line from shoulders to knees — squeeze your glutes hard for one second.",
      "Inhale and lower your hips with control, then repeat."
    ],
    tips: [
      "Always use a bar pad or folded mat — the bar on bare hips hurts.",
      "Do not arch your lower back at the top; ribs down, squeeze glutes to finish.",
      "Eyes forward (not at the ceiling) keeps your neck and spine in a safe position.",
      "Many gyms have a hip thrust machine — same movement, easier setup."
    ],
    setsReps: "3 sets × 8–12 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="26" y1="92" x2="60" y2="92"/>
<line x1="32" y1="92" x2="32" y2="126"/>
<line x1="54" y1="92" x2="54" y2="126"/>
<circle r="10" cx="94" cy="102">
<animate attributeName="cy" values="102;76;102" dur="2.2s" repeatCount="indefinite" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</circle>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="42" cy="86" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<path stroke="var(--acc,#a3e635)" d="M58 92 L94 112">
<animate attributeName="d" values="M58 92 L94 112;M58 92 L94 86;M58 92 L94 112" dur="2.2s" repeatCount="indefinite" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
<path d="M60 94 L84 104">
<animate attributeName="d" values="M60 94 L84 104;M60 94 L84 82;M60 94 L84 104" dur="2.2s" repeatCount="indefinite" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
<path d="M94 112 L118 102 L120 124">
<animate attributeName="d" values="M94 112 L118 102 L120 124;M94 86 L116 98 L120 124;M94 112 L118 102 L120 124" dur="2.2s" repeatCount="indefinite" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  },
  {
    id: "legs-glute-kickback-cable",
    name: "Cable Glute Kickback",
    group: "legs",
    equipment: "cable",
    level: 1,
    primary: ["Glutes"],
    secondary: ["Hamstrings"],
    steps: [
      "Set the pulley to the lowest position and strap the ankle cuff to one ankle.",
      "Face the machine, step back so the cable is taut, and hold the frame with both hands.",
      "Hinge slightly forward, brace your core, and exhale as you sweep the working leg straight back and up.",
      "Squeeze your glute at the top for one second without arching your lower back.",
      "Inhale and return your leg with control; finish all reps, then switch legs."
    ],
    tips: [
      "Small, controlled range — the movement comes from the hip, not from arching the back.",
      "Keep your hips square to the machine; do not rotate them open as the leg lifts.",
      "Light weight and higher reps work best for this isolation move."
    ],
    setsReps: "3 sets × 12–15 reps per leg",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="24" y1="40" x2="24" y2="126"/>
<line x1="40" y1="40" x2="40" y2="126"/>
<line x1="24" y1="40" x2="40" y2="40"/>
<line x1="24" y1="84" x2="40" y2="84"/>
</g>
<line stroke="var(--equip,#64748b)" stroke-width="3" stroke-linecap="round" x1="42" y1="118" x2="90" y2="120">
<animate attributeName="x2" values="90;134;90" dur="2.2s" repeatCount="indefinite" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="y2" values="120;104;120" dur="2.2s" repeatCount="indefinite" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="77" cy="39" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<path d="M80 48 L94 86"/>
<path d="M82 54 L58 68"/>
<path d="M94 86 L96 106 L94 124"/>
<path stroke="var(--acc,#a3e635)" d="M94 86 L98 104 L90 120">
<animate attributeName="d" values="M94 86 L98 104 L90 120;M94 86 L114 96 L134 104;M94 86 L98 104 L90 120" dur="2.2s" repeatCount="indefinite" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  }
);
