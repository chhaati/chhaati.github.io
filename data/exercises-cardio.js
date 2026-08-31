// data/exercises-cardio.js
window.GYM_EXERCISES = window.GYM_EXERCISES || [];
window.GYM_EXERCISES.push(
  {
    id: "cardio-treadmill-jog",
    name: "Treadmill Walk / Jog",
    group: "cardio",
    equipment: "cardio-machine",
    level: 1,
    primary: ["Quads", "Hamstrings"],
    secondary: ["Calves", "Glutes"],
    steps: [
      "Straddle the belt, clip the red safety key to your shirt, and press Quick Start on the console.",
      "Step on and walk at an easy pace for 3-5 minutes to warm up before touching the speed button.",
      "Raise the speed in small steps; jog tall with eyes forward, not down at the belt.",
      "Swing relaxed arms at your sides - hold the rails only if you feel unsteady.",
      "To finish, lower the speed back to a walk for 2-3 minutes, then press Stop and step off."
    ],
    tips: [
      "Stay in the middle of the belt; drifting toward the back means the speed is too high.",
      "Land with your feet under your hips in short, quick steps - avoid reaching far out front.",
      "Breathe in rhythm (in for 2 steps, out for 2); if you cannot speak a sentence, slow down.",
      "Never step off a moving belt - bring it to a stop first."
    ],
    setsReps: "20-30 min easy pace",
    trackMode: "time",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="52" y1="119" x2="170" y2="119"/>
<line x1="60" y1="118" x2="48" y2="54"/>
<line x1="48" y1="54" x2="70" y2="50"/>
</g>
<line x1="56" y1="119" x2="166" y2="119" stroke="var(--floor,#334155)" stroke-width="2" stroke-linecap="round" stroke-dasharray="6 8">
<animate attributeName="stroke-dashoffset" values="0;-14" dur="0.7s" repeatCount="indefinite"/>
</line>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="112" cy="30" r="9" fill="var(--fig,#cbd5e1)" stroke="none">
<animate attributeName="cy" values="30;27;30" keyTimes="0;0.5;1" dur="0.4s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</circle>
<line x1="114" y1="40" x2="118" y2="70"/>
<path d="M114 42 L122 56 L132 64">
<animate attributeName="d" values="M114 42 L122 56 L132 64;M114 42 L104 54 L94 46;M114 42 L122 56 L132 64" keyTimes="0;0.5;1" dur="0.8s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
<path d="M118 70 L128 94 L134 106">
<animate attributeName="d" values="M118 70 L128 94 L134 106;M118 70 L108 92 L104 116;M118 70 L128 94 L134 106" keyTimes="0;0.5;1" dur="0.8s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
<path stroke="var(--acc,#a3e635)" d="M114 42 L104 54 L94 46">
<animate attributeName="d" values="M114 42 L104 54 L94 46;M114 42 L122 56 L132 64;M114 42 L104 54 L94 46" keyTimes="0;0.5;1" dur="0.8s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
<path stroke="var(--acc,#a3e635)" d="M118 70 L108 92 L104 116">
<animate attributeName="d" values="M118 70 L108 92 L104 116;M118 70 L128 94 L134 106;M118 70 L108 92 L104 116" keyTimes="0;0.5;1" dur="0.8s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  },
  {
    id: "cardio-stationary-bike",
    name: "Stationary Bike",
    group: "cardio",
    equipment: "cardio-machine",
    level: 1,
    primary: ["Quads"],
    secondary: ["Hamstrings", "Glutes", "Calves"],
    steps: [
      "Set the seat height so your knee keeps a slight bend when the pedal is at the very bottom.",
      "Sit tall, slide your feet into the pedal straps, and start pedaling - the console wakes up; pick Quick Start.",
      "Add resistance until your legs feel light, steady work at about 60-90 pedal turns per minute.",
      "Rest your hands lightly on the bars with shoulders down and knees tracking straight ahead.",
      "Finish with 2-3 easy minutes at low resistance before stopping."
    ],
    tips: [
      "Quick seat check: standing next to the bike, the saddle should sit about level with your hip.",
      "Knees aching at the front means the seat is too low; hips rocking side to side means too high.",
      "Think of pedaling in smooth circles - push over the top and pull through the bottom, not just stomping down.",
      "Do not white-knuckle the handlebars; a death grip wastes energy and tenses your neck."
    ],
    setsReps: "20-30 min steady",
    trackMode: "time",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="58" y1="123" x2="152" y2="123"/>
<line x1="130" y1="123" x2="124" y2="80"/>
<line x1="114" y1="78" x2="134" y2="78"/>
<line x1="76" y1="123" x2="84" y2="58"/>
<line x1="84" y1="58" x2="98" y2="64"/>
<circle cx="76" cy="102" r="15"/>
</g>
<line x1="108" y1="90" x2="108" y2="114" stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<animateTransform attributeName="transform" type="rotate" from="0 108 102" to="360 108 102" dur="1.6s" repeatCount="indefinite"/>
</line>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<path d="M122 78 L104 94 L108 114">
<animate attributeName="d" values="M122 78 L104 94 L108 114;M122 78 L99 72 L108 90;M122 78 L104 94 L108 114" keyTimes="0;0.5;1" dur="1.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
<line x1="124" y1="76" x2="104" y2="50"/>
<path d="M104 52 L96 60 L88 62"/>
<circle cx="99" cy="41" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<path stroke="var(--acc,#a3e635)" d="M122 78 L99 72 L108 90">
<animate attributeName="d" values="M122 78 L99 72 L108 90;M122 78 L104 94 L108 114;M122 78 L99 72 L108 90" keyTimes="0;0.5;1" dur="1.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  },
  {
    id: "cardio-elliptical",
    name: "Elliptical Trainer",
    group: "cardio",
    equipment: "cardio-machine",
    level: 1,
    primary: ["Quads", "Glutes"],
    secondary: ["Hamstrings", "Calves"],
    steps: [
      "Hold the fixed center bars, step onto the pedals one foot at a time, and let the machine settle.",
      "Press Quick Start and begin striding forward with your whole foot flat on each pedal.",
      "Move your hands to the long moving handles and push-pull them in rhythm with your legs.",
      "Stand tall with a soft bend in the knees - do not lock them out or bounce on your toes.",
      "Add resistance until the stride feels smooth and controlled rather than floppy."
    ],
    tips: [
      "Keep your heels down; striding on tiptoes burns out the calves and makes feet go numb.",
      "Do not slump your weight onto the handles - your legs should do most of the work.",
      "If the motion feels jerky, add a little resistance; too little lets momentum take over."
    ],
    setsReps: "20-30 min steady",
    trackMode: "time",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="48" y1="123" x2="162" y2="123"/>
<circle cx="64" cy="106" r="13"/>
<line x1="64" y1="94" x2="58" y2="44"/>
<line x1="58" y1="44" x2="78" y2="40"/>
</g>
<line x1="60" y1="48" x2="88" y2="85" stroke="var(--equip,#64748b)" stroke-width="3" stroke-linecap="round">
<animate attributeName="x2" values="88;74;88" keyTimes="0;0.5;1" dur="2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="y2" values="85;92;85" keyTimes="0;0.5;1" dur="2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
<line x1="88" y1="106" x2="108" y2="106" stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<animateTransform attributeName="transform" type="translate" values="0 0;34 -8;0 0" keyTimes="0;0.5;1" dur="2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
<line x1="60" y1="48" x2="74" y2="92" stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<animate attributeName="x2" values="74;88;74" keyTimes="0;0.5;1" dur="2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="y2" values="92;85;92" keyTimes="0;0.5;1" dur="2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
<line x1="122" y1="98" x2="142" y2="98" stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<animateTransform attributeName="transform" type="translate" values="0 0;-34 8;0 0" keyTimes="0;0.5;1" dur="2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<path d="M112 46 L100 62 L86 80">
<animate attributeName="d" values="M112 46 L100 62 L86 80;M112 46 L98 64 L78 84;M112 46 L100 62 L86 80" keyTimes="0;0.5;1" dur="2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
<path d="M118 68 L110 88 L100 103">
<animate attributeName="d" values="M118 68 L110 88 L100 103;M118 68 L132 80 L134 95;M118 68 L110 88 L100 103" keyTimes="0;0.5;1" dur="2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
<line x1="112" y1="44" x2="118" y2="68"/>
<circle cx="108" cy="32" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<path stroke="var(--acc,#a3e635)" d="M112 46 L98 64 L78 84">
<animate attributeName="d" values="M112 46 L98 64 L78 84;M112 46 L100 62 L86 80;M112 46 L98 64 L78 84" keyTimes="0;0.5;1" dur="2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
<path stroke="var(--acc,#a3e635)" d="M118 68 L132 80 L134 95">
<animate attributeName="d" values="M118 68 L132 80 L134 95;M118 68 L110 88 L100 103;M118 68 L132 80 L134 95" keyTimes="0;0.5;1" dur="2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  },
  {
    id: "cardio-rowing-machine",
    name: "Rowing Machine (Erg)",
    group: "cardio",
    equipment: "cardio-machine",
    level: 2,
    primary: ["Lats", "Quads"],
    secondary: ["Hamstrings", "Biceps", "Core"],
    steps: [
      "Sit down and strap your feet in so the strap crosses the widest part of your shoe.",
      "Set the damper to 3-5, grab the handle with straight arms, and slide forward: knees bent, shins vertical.",
      "Drive: push hard with the legs first, then lean back slightly, then pull the handle to your lower ribs.",
      "Recover in reverse - arms straighten, body hinges forward, then knees bend - about twice as slow as the drive.",
      "The monitor starts on your first pull; row smooth and watch your split time, not the slide speed."
    ],
    tips: [
      "The order is everything: legs-body-arms on the drive, arms-body-legs on the way forward.",
      "Keep the handle moving in a flat line; a scooping path means your arms bent too early.",
      "Damper 10 is not 'more cardio' - it just feels heavier. Beginners row better at 3-5.",
      "Exhale on the drive, inhale on the recovery."
    ],
    setsReps: "3 × 5 min easy",
    trackMode: "time",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="38" y1="114" x2="170" y2="114"/>
<line x1="156" y1="114" x2="162" y2="124"/>
<line x1="52" y1="113" x2="52" y2="124"/>
<circle cx="52" cy="97" r="16"/>
<line x1="76" y1="110" x2="86" y2="92"/>
</g>
<line x1="40" y1="97" x2="64" y2="97" stroke="var(--equip,#64748b)" stroke-width="3" stroke-linecap="round">
<animateTransform attributeName="transform" type="rotate" from="0 52 97" to="360 52 97" dur="2.4s" repeatCount="indefinite"/>
</line>
<line x1="68" y1="95" x2="88" y2="88" stroke="var(--equip,#64748b)" stroke-width="3" stroke-linecap="round">
<animate attributeName="x2" values="88;130;88" keyTimes="0;0.5;1" dur="2.4s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="y2" values="88;82;88" keyTimes="0;0.5;1" dur="2.4s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
<line x1="94" y1="107" x2="110" y2="107" stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<animateTransform attributeName="transform" type="translate" values="0 0;32 0;0 0" keyTimes="0;0.5;1" dur="2.4s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<path d="M102 100 L94 66">
<animate attributeName="d" values="M102 100 L94 66;M134 98 L144 62;M102 100 L94 66" keyTimes="0;0.5;1" dur="2.4s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
<circle cx="91" cy="56" r="9" fill="var(--fig,#cbd5e1)" stroke="none">
<animate attributeName="cx" values="91;145;91" keyTimes="0;0.5;1" dur="2.4s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="cy" values="56;53;56" keyTimes="0;0.5;1" dur="2.4s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</circle>
<path stroke="var(--acc,#a3e635)" d="M102 100 L88 78 L82 98">
<animate attributeName="d" values="M102 100 L88 78 L82 98;M134 98 L107 92 L82 98;M102 100 L88 78 L82 98" keyTimes="0;0.5;1" dur="2.4s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
<path stroke="var(--acc,#a3e635)" d="M94 68 L90 78 L88 88">
<animate attributeName="d" values="M94 68 L90 78 L88 88;M144 64 L142 76 L130 82;M94 68 L90 78 L88 88" keyTimes="0;0.5;1" dur="2.4s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  },
  {
    id: "cardio-stair-climber",
    name: "Stair Climber",
    group: "cardio",
    equipment: "cardio-machine",
    level: 1,
    primary: ["Glutes", "Quads"],
    secondary: ["Calves", "Hamstrings"],
    steps: [
      "Hold the rails, step onto the two lowest steps, and press Quick Start at a slow level (3-5).",
      "Take full steps, planting your whole foot on each stair as it arrives.",
      "Stand tall with a slight lean forward from the hips; rest fingertips on the rails for balance only.",
      "Raise the level once you can climb hands-free for a minute at a time.",
      "To finish, press Stop and wait for the stairs to halt before stepping off."
    ],
    tips: [
      "Do not prop your body weight on the rails - it can cut the workout's effect nearly in half.",
      "Quick tiptoe taps burn out your calves; slower full-foot steps work the glutes and last longer.",
      "Look forward, not down at your feet - the steps arrive at a steady rhythm you can trust."
    ],
    setsReps: "15-20 min steady",
    trackMode: "time",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<path d="M146 122 L146 108 L118 108 L118 92 L98 92 L98 76 L78 76"/>
<line x1="96" y1="74" x2="82" y2="30"/>
<line x1="82" y1="30" x2="96" y2="26"/>
</g>
<line x1="98" y1="56" x2="142" y2="86" stroke="var(--equip,#64748b)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="107" cy="29" r="9" fill="var(--fig,#cbd5e1)" stroke="none">
<animate attributeName="cy" values="29;26;29" keyTimes="0;0.5;1" dur="0.8s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</circle>
<line x1="110" y1="38" x2="116" y2="64"/>
<path d="M110 40 L102 52 L94 46">
<animate attributeName="d" values="M110 40 L102 52 L94 46;M110 40 L116 54 L124 50;M110 40 L102 52 L94 46" keyTimes="0;0.5;1" dur="1.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
<path d="M116 64 L119 84 L122 104">
<animate attributeName="d" values="M116 64 L119 84 L122 104;M116 64 L100 76 L108 90;M116 64 L119 84 L122 104" keyTimes="0;0.5;1" dur="1.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
<path stroke="var(--acc,#a3e635)" d="M110 40 L116 54 L124 50">
<animate attributeName="d" values="M110 40 L116 54 L124 50;M110 40 L102 52 L94 46;M110 40 L116 54 L124 50" keyTimes="0;0.5;1" dur="1.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
<path stroke="var(--acc,#a3e635)" d="M116 64 L100 76 L108 90">
<animate attributeName="d" values="M116 64 L100 76 L108 90;M116 64 L119 84 L122 104;M116 64 L100 76 L108 90" keyTimes="0;0.5;1" dur="1.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  },
  {
    id: "cardio-jump-rope",
    name: "Jump Rope",
    group: "cardio",
    equipment: "bodyweight",
    level: 2,
    primary: ["Calves"],
    secondary: ["Quads", "Shoulders", "Core"],
    steps: [
      "Size the rope: stand on its middle - the handles should reach up to about your armpits.",
      "Tuck your elbows to your ribs with hands slightly forward; spin the rope from the wrists, not the arms.",
      "Jump just 2-3 cm off the floor with soft knees, landing quietly on the balls of your feet.",
      "Keep a steady bounce rhythm with chest up and eyes ahead.",
      "If you trip, just reset and restart at the same rhythm - 30 seconds at a time adds up fast."
    ],
    tips: [
      "Jump on a mat or wooden floor rather than concrete to spare your shins.",
      "Big high jumps waste energy and cause trips - stay low and springy.",
      "Breathe steadily through the nose and mouth; holding your breath makes you gas out early."
    ],
    setsReps: "5 × 30-60s",
    trackMode: "time",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g>
<animateTransform attributeName="transform" type="translate" values="0 0;0 -10;0 0" keyTimes="0;0.5;1" dur="0.9s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<path d="M118 72 Q100 -44 82 72" stroke="var(--acc,#a3e635)" stroke-width="3" stroke-linecap="round">
<animate attributeName="d" values="M118 72 Q100 -44 82 72;M118 72 Q100 170 82 72;M118 72 Q100 -44 82 72" keyTimes="0;0.5;1" dur="0.9s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="100" cy="31" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<line x1="100" y1="40" x2="100" y2="74"/>
<path d="M100 48 L90 60 L82 70"/>
<path d="M100 48 L110 60 L118 70"/>
<path d="M100 74 L106 98 L108 121">
<animate attributeName="d" values="M100 74 L106 98 L108 121;M100 74 L110 92 L104 108;M100 74 L106 98 L108 121" keyTimes="0;0.5;1" dur="0.9s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
<path stroke="var(--acc,#a3e635)" d="M100 74 L96 98 L94 121">
<animate attributeName="d" values="M100 74 L96 98 L94 121;M100 74 L92 92 L96 108;M100 74 L96 98 L94 121" keyTimes="0;0.5;1" dur="0.9s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</g>
</svg>`
  },
  {
    id: "cardio-incline-treadmill-walk",
    name: "Incline Treadmill Walk",
    group: "cardio",
    equipment: "cardio-machine",
    level: 1,
    primary: ["Glutes", "Calves"],
    secondary: ["Hamstrings", "Quads"],
    steps: [
      "Clip on the safety key, press Quick Start, and walk 2 minutes on the flat to warm up.",
      "Raise the incline to 5-8% while keeping the speed at a brisk walk.",
      "Lean slightly into the hill from the ankles; push through your heels and squeeze the glutes.",
      "Pump your arms naturally - try not to hang on to the console or side rails.",
      "Bring the incline back to flat for the last 2-3 minutes, then press Stop."
    ],
    tips: [
      "Holding the rails and leaning back erases most of the incline's benefit - lower the grade instead.",
      "You should manage short sentences out loud; if not, drop the speed before the incline.",
      "Calves feel it first - start at a low grade and add 1% every few minutes as they warm up."
    ],
    setsReps: "20-30 min at 5-10% incline",
    trackMode: "time",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="55" y1="100" x2="168" y2="122"/>
<line x1="62" y1="102" x2="62" y2="124"/>
<line x1="66" y1="101" x2="50" y2="38"/>
<line x1="50" y1="38" x2="72" y2="34"/>
</g>
<line x1="58" y1="101" x2="164" y2="121" stroke="var(--floor,#334155)" stroke-width="2" stroke-linecap="round" stroke-dasharray="6 8">
<animate attributeName="stroke-dashoffset" values="0;-14" dur="0.9s" repeatCount="indefinite"/>
</line>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="107" cy="30" r="9" fill="var(--fig,#cbd5e1)" stroke="none">
<animate attributeName="cy" values="30;28;30" keyTimes="0;0.5;1" dur="0.7s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</circle>
<line x1="110" y1="40" x2="118" y2="66"/>
<path d="M110 42 L102 56 L94 50">
<animate attributeName="d" values="M110 42 L102 56 L94 50;M110 42 L118 58 L126 54;M110 42 L102 56 L94 50" keyTimes="0;0.5;1" dur="1.4s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
<path d="M118 66 L126 90 L132 113">
<animate attributeName="d" values="M118 66 L126 90 L132 113;M118 66 L108 88 L102 109;M118 66 L126 90 L132 113" keyTimes="0;0.5;1" dur="1.4s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
<path stroke="var(--acc,#a3e635)" d="M110 42 L118 58 L126 54">
<animate attributeName="d" values="M110 42 L118 58 L126 54;M110 42 L102 56 L94 50;M110 42 L118 58 L126 54" keyTimes="0;0.5;1" dur="1.4s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
<path stroke="var(--acc,#a3e635)" d="M118 66 L108 88 L102 109">
<animate attributeName="d" values="M118 66 L108 88 L102 109;M118 66 L126 90 L132 113;M118 66 L108 88 L102 109" keyTimes="0;0.5;1" dur="1.4s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  },
  {
    id: "cardio-air-bike",
    name: "Assault / Air Bike",
    group: "cardio",
    equipment: "cardio-machine",
    level: 2,
    primary: ["Quads", "Shoulders"],
    secondary: ["Chest", "Back", "Core"],
    steps: [
      "Set the seat so your knee stays slightly bent at the bottom of the pedal stroke, then sit tall.",
      "Grip the moving handles about halfway up; the console wakes when you pedal - pick a time or interval mode.",
      "Drive with the legs while pushing and pulling the handles - the harder you go, the harder the fan resists.",
      "Keep your torso steady and core braced; power comes from the limbs, not from rocking side to side.",
      "Pace it: short hard bursts, then spin easy until your breathing settles."
    ],
    tips: [
      "There are no resistance dials - your own effort is the resistance, so it scales with you forever.",
      "Push and pull evenly with both arms to spare your lower back.",
      "Start with 15-20 second efforts; the air bike punishes over-enthusiasm very quickly."
    ],
    setsReps: "6 × 20s hard / 40s easy",
    trackMode: "time",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="52" y1="123" x2="156" y2="123"/>
<line x1="128" y1="123" x2="126" y2="82"/>
<line x1="114" y1="80" x2="134" y2="80"/>
<circle cx="72" cy="95" r="19"/>
</g>
<line x1="72" y1="114" x2="72" y2="123" stroke="var(--equip,#64748b)" stroke-width="3" stroke-linecap="round"/>
<line x1="76" y1="97" x2="106" y2="102" stroke="var(--equip,#64748b)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="3" stroke-linecap="round">
<line x1="72" y1="78" x2="72" y2="112"/>
<line x1="55" y1="95" x2="89" y2="95"/>
<animateTransform attributeName="transform" type="rotate" from="0 72 95" to="360 72 95" dur="0.8s" repeatCount="indefinite"/>
</g>
<line x1="100" y1="88" x2="112" y2="58" stroke="var(--equip,#64748b)" stroke-width="3" stroke-linecap="round">
<animate attributeName="x2" values="112;92;112" keyTimes="0;0.5;1" dur="1.4s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="y2" values="58;54;58" keyTimes="0;0.5;1" dur="1.4s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
<line x1="100" y1="88" x2="92" y2="54" stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<animate attributeName="x2" values="92;112;92" keyTimes="0;0.5;1" dur="1.4s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="y2" values="54;58;54" keyTimes="0;0.5;1" dur="1.4s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
<line x1="108" y1="91" x2="108" y2="113" stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<animateTransform attributeName="transform" type="rotate" from="0 108 102" to="360 108 102" dur="1.4s" repeatCount="indefinite"/>
</line>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<path d="M108 52 L114 64 L112 58">
<animate attributeName="d" values="M108 52 L114 64 L112 58;M108 52 L98 62 L92 55;M108 52 L114 64 L112 58" keyTimes="0;0.5;1" dur="1.4s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
<path d="M124 78 L105 93 L108 113">
<animate attributeName="d" values="M124 78 L105 93 L108 113;M124 78 L101 72 L108 91;M124 78 L105 93 L108 113" keyTimes="0;0.5;1" dur="1.4s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
<line x1="108" y1="50" x2="124" y2="78"/>
<circle cx="102" cy="39" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<path stroke="var(--acc,#a3e635)" d="M108 52 L98 62 L92 55">
<animate attributeName="d" values="M108 52 L98 62 L92 55;M108 52 L114 64 L112 58;M108 52 L98 62 L92 55" keyTimes="0;0.5;1" dur="1.4s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
<path stroke="var(--acc,#a3e635)" d="M124 78 L101 72 L108 91">
<animate attributeName="d" values="M124 78 L101 72 L108 91;M124 78 L105 93 L108 113;M124 78 L101 72 L108 91" keyTimes="0;0.5;1" dur="1.4s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
</svg>`
  }
);
