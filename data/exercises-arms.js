// data/exercises-arms.js
window.GYM_EXERCISES = window.GYM_EXERCISES || [];
window.GYM_EXERCISES.push(
  {
    id: "arms-preacher-curl-machine",
    name: "Preacher Curl Machine",
    group: "arms",
    equipment: "machine",
    level: 1,
    primary: ["Biceps"],
    secondary: ["Forearms"],
    steps: [
      "Set the seat height so your armpits rest snugly over the top of the sloped pad.",
      "Grip the handles palms-up with arms almost fully extended down the pad.",
      "Breathe out and curl the handles up until your forearms are just short of vertical.",
      "Squeeze your biceps for one second at the top.",
      "Breathe in and lower for a slow 2-3 seconds until your arms are nearly straight again."
    ],
    tips: [
      "Keep your upper arms glued to the pad the whole set - if your elbows lift off, you're cheating.",
      "Don't slam into a full lockout at the bottom; keep a tiny elbow bend to protect the joint.",
      "If your wrists ache, lighten the load - the pad isolates the biceps, so it needs less weight than you think."
    ],
    setsReps: "3 sets × 10–12 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="50" y1="92" x2="84" y2="92"/>
<line x1="66" y1="92" x2="66" y2="126"/>
<line x1="86" y1="58" x2="112" y2="80"/>
<line x1="99" y1="69" x2="99" y2="126"/>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="79" cy="41" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<line x1="66" y1="90" x2="76" y2="52"/>
<path d="M66 90 L88 92 L86 124"/>
<line x1="76" y1="52" x2="98" y2="66"/>
</g>
<g stroke="var(--acc,#a3e635)" stroke-width="6" stroke-linecap="round">
<animateTransform attributeName="transform" type="rotate" values="0 98 66;-100 98 66;0 98 66" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<line x1="98" y1="66" x2="112" y2="88"/>
<line x1="107" y1="92" x2="117" y2="86" stroke="var(--equip,#64748b)" stroke-width="4"/>
</g>
</svg>`
  },
  {
    id: "arms-dumbbell-curl",
    name: "Dumbbell Curl",
    group: "arms",
    equipment: "dumbbell",
    level: 1,
    primary: ["Biceps"],
    secondary: ["Forearms"],
    steps: [
      "Stand tall with a dumbbell in each hand, palms facing forward, arms hanging at your sides.",
      "Pin your elbows to your ribs, breathe out, and curl one dumbbell up toward your shoulder.",
      "Squeeze at the top, then lower it under control for 2-3 seconds.",
      "Alternate arms each rep, or curl both together - just never swing the weight up."
    ],
    tips: [
      "If you need to rock your hips or lean back to lift it, the dumbbell is too heavy.",
      "Only the forearm moves - your elbow should stay in the same spot in space all rep.",
      "Nearly straighten your arm at the bottom of every rep; half reps build half a biceps."
    ],
    setsReps: "3 sets × 10–12 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="98" cy="38" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<line x1="92" y1="86" x2="96" y2="50"/>
<path d="M92 86 L97 106 L95 126"/>
<path d="M92 86 L87 106 L85 126"/>
<path d="M96 50 L93 75 L91 97"/>
<line x1="96" y1="50" x2="100" y2="74"/>
</g>
<circle cx="91" cy="101" r="5" stroke="var(--equip,#64748b)" stroke-width="4"/>
<g stroke="var(--acc,#a3e635)" stroke-width="6" stroke-linecap="round">
<animateTransform attributeName="transform" type="rotate" values="0 100 74;-115 100 74;0 100 74" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<line x1="100" y1="74" x2="102" y2="98"/>
<circle cx="102" cy="102" r="5" stroke="var(--equip,#64748b)" stroke-width="4"/>
</g>
</svg>`
  },
  {
    id: "arms-hammer-curl",
    name: "Hammer Curl",
    group: "arms",
    equipment: "dumbbell",
    level: 1,
    primary: ["Biceps", "Forearms"],
    secondary: [],
    steps: [
      "Hold a dumbbell in each hand at your sides with palms facing your body, like holding hammers.",
      "Keep the thumbs-up grip and curl the dumbbells to shoulder height as you exhale.",
      "Pause briefly at the top, then lower slowly back to your sides.",
      "Keep your elbows tucked in and your torso completely still throughout."
    ],
    tips: [
      "The palms never rotate - thumbs point up for the entire rep, top to bottom.",
      "You can usually go a little heavier than a regular curl, but earn it with strict form first.",
      "Lower on a slow 3-count; the way down builds just as much arm as the way up."
    ],
    setsReps: "3 sets × 10–12 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="92" cy="38" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<line x1="86" y1="86" x2="90" y2="50"/>
<path d="M86 86 L91 106 L89 126"/>
<path d="M86 86 L81 106 L79 126"/>
<line x1="90" y1="50" x2="94" y2="76"/>
</g>
<g stroke="var(--acc,#a3e635)" stroke-width="6" stroke-linecap="round">
<animateTransform attributeName="transform" type="rotate" values="0 94 76;-115 94 76;0 94 76" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<line x1="94" y1="76" x2="96" y2="100"/>
<g stroke="var(--equip,#64748b)" stroke-width="4">
<line x1="95" y1="90" x2="97" y2="110"/>
<line x1="90" y1="90" x2="100" y2="90"/>
<line x1="92" y1="110" x2="102" y2="110"/>
</g>
</g>
</svg>`
  },
  {
    id: "arms-cable-curl",
    name: "Cable Biceps Curl",
    group: "arms",
    equipment: "cable",
    level: 1,
    primary: ["Biceps"],
    secondary: ["Forearms"],
    steps: [
      "Clip a straight or EZ bar to the lowest pulley and set a light pin weight to start.",
      "Grab the bar palms-up, take half a step back, and stand tall with a slight knee bend.",
      "Exhale and curl the bar to your chest, elbows pinned at your sides.",
      "Lower slowly until your arms are almost straight - feel the cable pulling the whole way down."
    ],
    tips: [
      "The cable keeps tension even at the bottom - don't rest by letting the stack touch down between reps.",
      "Stand far enough back that the plates never clank at the bottom of a rep.",
      "If you find yourself leaning back to finish reps, move the pin up a few plates."
    ],
    setsReps: "3 sets × 12–15 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="150" y1="126" x2="150" y2="28"/>
<line x1="176" y1="126" x2="176" y2="28"/>
<line x1="150" y1="28" x2="176" y2="28"/>
<circle cx="150" cy="118" r="3"/>
</g>
<line x1="154" y1="106" x2="172" y2="106" stroke="var(--equip,#64748b)" stroke-width="12">
<animate attributeName="y1" values="106;94;106" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="y2" values="106;94;106" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
<line x1="150" y1="118" x2="98" y2="96" stroke="var(--equip,#64748b)" stroke-width="2.5">
<animate attributeName="x2" values="98;112;98" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="y2" values="96;62;96" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="90" cy="39" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<line x1="84" y1="86" x2="88" y2="50"/>
<path d="M84 86 L89 106 L87 126"/>
<path d="M84 86 L79 106 L77 126"/>
<line x1="88" y1="50" x2="92" y2="74"/>
</g>
<g stroke="var(--acc,#a3e635)" stroke-width="6" stroke-linecap="round">
<animateTransform attributeName="transform" type="rotate" values="0 92 74;-105 92 74;0 92 74" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<line x1="92" y1="74" x2="98" y2="96"/>
<line x1="93" y1="100" x2="103" y2="95" stroke="var(--equip,#64748b)" stroke-width="4"/>
</g>
</svg>`
  },
  {
    id: "arms-ez-bar-curl",
    name: "EZ-Bar Curl",
    group: "arms",
    equipment: "barbell",
    level: 1,
    primary: ["Biceps"],
    secondary: ["Forearms"],
    steps: [
      "Grip the EZ bar on the angled sections, hands about shoulder-width, palms tilted slightly inward.",
      "Stand tall with elbows tucked to your sides and the bar resting on your thighs.",
      "Exhale and curl the bar up to your upper chest without swinging your body.",
      "Squeeze, then lower for a slow 2-3 seconds until your arms are nearly straight."
    ],
    tips: [
      "The zig-zag bends are the point - they take stress off your wrists compared with a straight bar.",
      "Brace your abs and keep your body a straight line; no bouncing the bar off your hips.",
      "Start with the empty bar to groove the form - most EZ bars weigh about 7-10 kg."
    ],
    setsReps: "3 sets × 10–12 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="102" cy="39" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<line x1="96" y1="86" x2="100" y2="50"/>
<path d="M96 86 L101 106 L99 126"/>
<path d="M96 86 L91 106 L89 126"/>
<line x1="100" y1="50" x2="102" y2="78"/>
</g>
<g stroke="var(--acc,#a3e635)" stroke-width="6" stroke-linecap="round">
<animateTransform attributeName="transform" type="rotate" values="0 102 78;-110 102 78;0 102 78" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<line x1="102" y1="78" x2="105" y2="100"/>
<path d="M90 101 l10 0 l3 -4 l4 4 l10 0" stroke="var(--equip,#64748b)" stroke-width="4"/>
</g>
</svg>`
  },
  {
    id: "arms-triceps-pushdown",
    name: "Triceps Pushdown (Rope)",
    group: "arms",
    equipment: "cable",
    level: 1,
    primary: ["Triceps"],
    secondary: [],
    steps: [
      "Clip the rope to the highest pulley and stand facing the machine, one small step back.",
      "Grip the rope ends with palms facing each other, elbows bent and pinned to your sides.",
      "Exhale and push the rope down until your arms are straight, pulling the two ends apart at the bottom.",
      "Pause, then let your hands rise slowly to chest height - no higher - keeping your elbows still."
    ],
    tips: [
      "Your elbows are the hinge: if they drift forward or flare out, the weight is too heavy.",
      "Lean forward slightly and stagger one foot back so the stack doesn't pull you around.",
      "Squeeze the triceps hard for one second at lockout - that squeeze is the money moment."
    ],
    setsReps: "3 sets × 12–15 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="148" y1="126" x2="148" y2="26"/>
<line x1="176" y1="126" x2="176" y2="26"/>
<line x1="148" y1="26" x2="176" y2="26"/>
<circle cx="149" cy="31" r="3"/>
</g>
<line x1="152" y1="104" x2="172" y2="104" stroke="var(--equip,#64748b)" stroke-width="12">
<animate attributeName="y1" values="104;90;104" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="y2" values="104;90;104" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
<line x1="149" y1="31" x2="112" y2="60" stroke="var(--equip,#64748b)" stroke-width="2.5">
<animate attributeName="x2" values="112;114;112" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="y2" values="60;98;60" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
<path d="M112 60 l6 7 M112 60 l-1 9" stroke="var(--equip,#64748b)" stroke-width="3" stroke-linecap="round">
<animate attributeName="d" values="M112 60 l6 7 M112 60 l-1 9;M114 98 l6 7 M114 98 l-1 9;M112 60 l6 7 M112 60 l-1 9" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="98" cy="42" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<line x1="90" y1="88" x2="96" y2="53"/>
<path d="M90 88 L95 108 L93 126"/>
<path d="M90 88 L85 108 L83 126"/>
<line x1="96" y1="53" x2="99" y2="76"/>
</g>
<path d="M99 76 L112 60" stroke="var(--acc,#a3e635)" stroke-width="6" stroke-linecap="round">
<animate attributeName="d" values="M99 76 L112 60;M99 76 L114 98;M99 76 L112 60" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</svg>`
  },
  {
    id: "arms-overhead-triceps-extension",
    name: "Overhead Dumbbell Triceps Extension",
    group: "arms",
    equipment: "dumbbell",
    level: 2,
    primary: ["Triceps"],
    secondary: [],
    steps: [
      "Sit on an upright bench holding one dumbbell with both palms cupped under the top plate.",
      "Press it overhead until your arms are straight and your biceps are beside your ears.",
      "Bend only at the elbows to lower the dumbbell slowly behind your head.",
      "Stop when you feel a big triceps stretch, then exhale and press back up to straight arms."
    ],
    tips: [
      "Keep your elbows pointing forward and close to your head - don't let them flare out sideways.",
      "Choose a lighter dumbbell than you think; the stretched bottom position is very demanding.",
      "Brace your abs and keep ribs down so your lower back doesn't arch off the pad."
    ],
    setsReps: "3 sets × 10–12 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="76" y1="96" x2="112" y2="96"/>
<line x1="94" y1="96" x2="94" y2="126"/>
<line x1="108" y1="94" x2="112" y2="66"/>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="98" cy="46" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<line x1="92" y1="94" x2="96" y2="58"/>
<path d="M92 94 L114 98 L118 124"/>
<line x1="96" y1="58" x2="100" y2="36"/>
</g>
<path d="M100 36 L80 44" stroke="var(--acc,#a3e635)" stroke-width="6" stroke-linecap="round">
<animate attributeName="d" values="M100 36 L80 44;M100 36 L104 15;M100 36 L80 44" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
<line x1="77" y1="38" x2="83" y2="51" stroke="var(--equip,#64748b)" stroke-width="5" stroke-linecap="round">
<animate attributeName="x1" values="77;97;77" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="y1" values="38;14;38" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="x2" values="83;111;83" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="y2" values="51;16;51" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
</svg>`
  },
  {
    id: "arms-triceps-dip-machine",
    name: "Triceps Dip Machine",
    group: "arms",
    equipment: "machine",
    level: 1,
    primary: ["Triceps"],
    secondary: ["Chest", "Front Deltoids"],
    steps: [
      "Adjust the seat so the handles line up with your lower chest when you sit down.",
      "Sit tall with your back on the pad, grip the handles, and exhale as you press down until your arms are fully straight.",
      "Pause, then bend your elbows to let the handles rise until your elbows reach about 90 degrees.",
      "Repeat smoothly - no bouncing out of the top or bottom."
    ],
    tips: [
      "Elbows point back, not out to the sides - imagine brushing your ribs with your arms.",
      "Keep your shoulders down and back; don't shrug up toward your ears as you press.",
      "This machine gives you the dip movement without lifting your whole bodyweight - a perfect first triceps builder."
    ],
    setsReps: "3 sets × 10–12 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="56" y1="92" x2="90" y2="92"/>
<line x1="73" y1="92" x2="73" y2="126"/>
<line x1="56" y1="92" x2="52" y2="56"/>
<line x1="132" y1="126" x2="132" y2="44"/>
<circle cx="132" cy="54" r="3"/>
</g>
<line x1="132" y1="54" x2="104" y2="58" stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<animate attributeName="x2" values="104;94;104" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="y2" values="58;84;58" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="82" cy="43" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<line x1="72" y1="90" x2="80" y2="54"/>
<path d="M72 90 L96 94 L98 124"/>
</g>
<path d="M80 54 L89 66 L104 58" stroke="var(--acc,#a3e635)" stroke-width="6" stroke-linecap="round">
<animate attributeName="d" values="M80 54 L89 66 L104 58;M80 54 L85 68 L94 84;M80 54 L89 66 L104 58" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</svg>`
  },
  {
    id: "arms-skull-crusher",
    name: "Skull Crusher (Lying Triceps Extension)",
    group: "arms",
    equipment: "barbell",
    level: 2,
    primary: ["Triceps"],
    secondary: [],
    steps: [
      "Lie on a flat bench holding an EZ bar with a narrow overhand grip, arms straight above your chest.",
      "Keep your upper arms vertical and still, and bend your elbows to lower the bar toward your forehead.",
      "Stop just above - or slightly behind - your head, then exhale and straighten your arms back up.",
      "Keep every rep slow and controlled; the exercise earns its name if you rush it."
    ],
    tips: [
      "Only the forearms move - if your upper arms sway back and forth, you've turned it into a strange press.",
      "Lowering slightly behind the head (not to the nose) is easier on the elbows and stretches the triceps more.",
      "Stay modest with the weight or use a spotter - you never want to fail suddenly on this lift."
    ],
    setsReps: "3 sets × 10–12 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="48" y1="94" x2="126" y2="94"/>
<line x1="58" y1="94" x2="58" y2="126"/>
<line x1="112" y1="94" x2="112" y2="126"/>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="56" cy="84" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<line x1="68" y1="86" x2="104" y2="88"/>
<path d="M104 88 L124 100 L128 124"/>
<line x1="70" y1="86" x2="70" y2="62"/>
</g>
<path d="M70 62 L74 40" stroke="var(--acc,#a3e635)" stroke-width="6" stroke-linecap="round">
<animate attributeName="d" values="M70 62 L74 40;M70 62 L50 50;M70 62 L74 40" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
<circle cx="74" cy="40" r="5" stroke="var(--equip,#64748b)" stroke-width="4">
<animate attributeName="cx" values="74;50;74" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="cy" values="40;50;40" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</circle>
</svg>`
  },
  {
    id: "arms-close-grip-bench-press",
    name: "Close-Grip Bench Press",
    group: "arms",
    equipment: "barbell",
    level: 2,
    primary: ["Triceps"],
    secondary: ["Chest", "Front Deltoids"],
    steps: [
      "Lie on a bench and grip the bar just inside shoulder width - hands do NOT need to touch.",
      "Unrack and hold the bar over your lower chest with wrists stacked straight over your elbows.",
      "Inhale and lower the bar to your lower chest with elbows tucked about 45 degrees from your body.",
      "Exhale and press back up to straight arms, keeping the tucked elbow position."
    ],
    tips: [
      "A super-narrow grip strains the wrists - 'just inside shoulder width' is close enough.",
      "Tucked elbows shift the work onto the triceps; flaring them turns it back into a chest press.",
      "Use noticeably less weight than your regular bench, and press with a spotter or safety bars."
    ],
    setsReps: "3 sets × 8–10 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="48" y1="96" x2="128" y2="96"/>
<line x1="58" y1="96" x2="58" y2="126"/>
<line x1="116" y1="96" x2="116" y2="126"/>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="57" cy="86" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<line x1="70" y1="88" x2="106" y2="90"/>
<path d="M106 90 L126 102 L130 124"/>
</g>
<path d="M72 88 L76 66 L78 46" stroke="var(--acc,#a3e635)" stroke-width="6" stroke-linecap="round">
<animate attributeName="d" values="M72 88 L76 66 L78 46;M72 88 L90 88 L92 68;M72 88 L76 66 L78 46" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
<line x1="65" y1="46" x2="91" y2="46" stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<animate attributeName="x1" values="65;80;65" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="y1" values="46;68;46" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="x2" values="91;106;91" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="y2" values="46;68;46" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
<circle cx="78" cy="46" r="6" stroke="var(--equip,#64748b)" stroke-width="4">
<animate attributeName="cx" values="78;92;78" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="cy" values="46;68;46" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</circle>
</svg>`
  }
);

window.GYM_EXERCISES.push(
  {
    id: "arms-seated-biceps-curl-machine",
    name: "Seated Biceps Curl Machine",
    group: "arms",
    equipment: "machine",
    level: 1,
    primary: ["Biceps"],
    secondary: ["Forearms"],
    steps: [
      "Set the seat height so your upper arms lie flat down the arm pad and your armpits sit snugly over its top edge.",
      "Put the pin in a light plate to start - you can always move it down one plate next set.",
      "Grip the handles palms-up with your arms nearly straight and your chest against the pad.",
      "Breathe out and curl the handles up until your forearms pass vertical, then squeeze for one second.",
      "Breathe in and lower for a slow 2-3 seconds, stopping just before the stack touches down."
    ],
    tips: [
      "Line your elbows up with the machine's pivot bolt - most machines mark it with a sticker; if you can't, adjust the seat, not your grip.",
      "If your chest peels off the pad or your shoulders shrug, the pin is one plate too heavy.",
      "Keep a whisper of tension at the bottom - letting the plates clank down turns one set into ten singles."
    ],
    setsReps: "3 sets × 10–12 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="150" y1="126" x2="150" y2="40"/>
<line x1="176" y1="126" x2="176" y2="40"/>
<line x1="150" y1="40" x2="176" y2="40"/>
<line x1="40" y1="92" x2="72" y2="92"/>
<line x1="56" y1="92" x2="56" y2="126"/>
<line x1="40" y1="92" x2="36" y2="58"/>
<line x1="82" y1="60" x2="104" y2="78"/>
</g>
<line x1="154" y1="106" x2="172" y2="106" stroke="var(--equip,#64748b)" stroke-width="12">
<animate attributeName="y1" values="106;94;106" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="y2" values="106;94;106" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="70" cy="40" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<line x1="64" y1="90" x2="72" y2="52"/>
<path d="M64 90 L88 94 L90 124"/>
<line x1="72" y1="52" x2="96" y2="70"/>
</g>
<g stroke="var(--acc,#a3e635)" stroke-width="6" stroke-linecap="round">
<animateTransform attributeName="transform" type="rotate" values="0 96 70;-100 96 70;0 96 70" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<line x1="96" y1="70" x2="110" y2="88"/>
<line x1="105" y1="92" x2="115" y2="86" stroke="var(--equip,#64748b)" stroke-width="4"/>
</g>
</svg>`
  },
  {
    id: "arms-incline-dumbbell-curl",
    name: "Incline Dumbbell Curl",
    group: "arms",
    equipment: "dumbbell",
    level: 2,
    primary: ["Biceps"],
    secondary: ["Forearms"],
    steps: [
      "Set an adjustable bench to about 45-60 degrees and sit back with your head and upper back on the pad.",
      "Let both arms hang straight down with a dumbbell in each hand, palms facing forward.",
      "Exhale and curl the dumbbells up, keeping your elbows pointing at the floor behind you.",
      "Lower for a slow 3 seconds until your arms hang completely straight - that deep stretch is the whole point."
    ],
    tips: [
      "Go noticeably lighter than your standing curl; the stretched start position is much harder.",
      "Don't let your elbows drift forward at the top - they stay behind your torso the entire set.",
      "Keep your shoulders pinned to the pad; if they roll forward, set the bench one notch more upright."
    ],
    setsReps: "3 sets × 8–12 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="74" y1="94" x2="108" y2="50"/>
<line x1="58" y1="98" x2="74" y2="94"/>
<line x1="64" y1="98" x2="64" y2="126"/>
<line x1="92" y1="72" x2="92" y2="126"/>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="112" cy="42" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<line x1="80" y1="88" x2="104" y2="56"/>
<path d="M80 88 L62 98 L60 124"/>
<line x1="104" y1="56" x2="108" y2="80"/>
</g>
<g stroke="var(--acc,#a3e635)" stroke-width="6" stroke-linecap="round">
<animateTransform attributeName="transform" type="rotate" values="0 108 80;-110 108 80;0 108 80" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<line x1="108" y1="80" x2="110" y2="102"/>
<circle cx="110" cy="106" r="5" stroke="var(--equip,#64748b)" stroke-width="4"/>
</g>
</svg>`
  },
  {
    id: "arms-concentration-curl",
    name: "Concentration Curl",
    group: "arms",
    equipment: "dumbbell",
    level: 1,
    primary: ["Biceps"],
    secondary: [],
    steps: [
      "Sit on the end of a bench with your feet wide and a single light dumbbell in one hand.",
      "Lean forward and brace the back of that upper arm against your inner thigh, arm hanging straight down.",
      "Exhale and curl the dumbbell up toward your shoulder without the upper arm ever leaving your thigh.",
      "Squeeze at the top, lower slowly to a full hang, finish all reps, then switch arms."
    ],
    tips: [
      "Your thigh is a built-in cheat detector - if the upper arm loses contact, the rep doesn't count.",
      "Rotate your pinky slightly toward the ceiling at the top for a harder biceps squeeze.",
      "This is a light-dumbbell move; pick a weight you can curl without any shoulder shrug or lean-back."
    ],
    setsReps: "3 sets × 10–12 reps each arm",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="96" y1="94" x2="134" y2="94"/>
<line x1="114" y1="94" x2="114" y2="126"/>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="78" cy="46" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<line x1="102" y1="90" x2="84" y2="58"/>
<path d="M102 90 L74 94 L72 124"/>
<path d="M102 90 L88 98 L86 124"/>
<line x1="84" y1="58" x2="78" y2="82"/>
</g>
<g stroke="var(--acc,#a3e635)" stroke-width="6" stroke-linecap="round">
<animateTransform attributeName="transform" type="rotate" values="0 78 82;-105 78 82;0 78 82" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<line x1="78" y1="82" x2="80" y2="104"/>
<circle cx="80" cy="108" r="5" stroke="var(--equip,#64748b)" stroke-width="4"/>
</g>
</svg>`
  },
  {
    id: "arms-cable-rope-hammer-curl",
    name: "Cable Rope Hammer Curl",
    group: "arms",
    equipment: "cable",
    level: 1,
    primary: ["Biceps", "Forearms"],
    secondary: [],
    steps: [
      "Clip the rope attachment to the lowest pulley and set a light pin in the stack.",
      "Grab the rope ends with a thumbs-up grip and take a small step back so the cable is taut.",
      "Stand tall, pin your elbows to your sides, exhale and curl the rope up toward your shoulders.",
      "Keep the thumbs-up grip the whole rep and lower slowly until your arms are nearly straight."
    ],
    tips: [
      "The rope keeps your wrists in a comfortable neutral position - don't twist your palms up at any point.",
      "Stand far enough back that the plates never touch down between reps; constant tension is the advantage of cables.",
      "If your elbows drift forward or your hips rock, move the pin up a plate or two."
    ],
    setsReps: "3 sets × 12–15 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="150" y1="126" x2="150" y2="28"/>
<line x1="176" y1="126" x2="176" y2="28"/>
<line x1="150" y1="28" x2="176" y2="28"/>
<circle cx="150" cy="118" r="3"/>
</g>
<line x1="154" y1="106" x2="172" y2="106" stroke="var(--equip,#64748b)" stroke-width="12">
<animate attributeName="y1" values="106;94;106" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="y2" values="106;94;106" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
<line x1="150" y1="118" x2="98" y2="96" stroke="var(--equip,#64748b)" stroke-width="2.5">
<animate attributeName="x2" values="98;112;98" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="y2" values="96;62;96" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="90" cy="39" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<line x1="84" y1="86" x2="88" y2="50"/>
<path d="M84 86 L89 106 L87 126"/>
<path d="M84 86 L79 106 L77 126"/>
<line x1="88" y1="50" x2="92" y2="74"/>
</g>
<g stroke="var(--acc,#a3e635)" stroke-width="6" stroke-linecap="round">
<animateTransform attributeName="transform" type="rotate" values="0 92 74;-105 92 74;0 92 74" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<line x1="92" y1="74" x2="98" y2="96"/>
<path d="M98 96 l5 6 M98 96 l-2 8" stroke="var(--equip,#64748b)" stroke-width="3"/>
</g>
</svg>`
  },
  {
    id: "arms-seated-triceps-extension-machine",
    name: "Seated Triceps Extension Machine",
    group: "arms",
    equipment: "machine",
    level: 1,
    primary: ["Triceps"],
    secondary: [],
    steps: [
      "Adjust the seat so your elbows line up with the machine's pivot bolt when your upper arms rest on the pad.",
      "Put the pin in a light plate, sit with your back against the backrest, and grip the handles with bent elbows.",
      "Breathe out and press the handles down and forward until your arms are completely straight.",
      "Squeeze the triceps for one second, then bend your elbows slowly to bring the stack back without letting it slam."
    ],
    tips: [
      "Your upper arms stay glued to the pad - if your elbows lift or wing outward, take a plate off the pin.",
      "Keep your shoulders down away from your ears; shrugging steals the work from your triceps.",
      "The straight-arm squeeze is the rep - rushing through lockout wastes the best part of the machine."
    ],
    setsReps: "3 sets × 10–12 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="150" y1="126" x2="150" y2="40"/>
<line x1="176" y1="126" x2="176" y2="40"/>
<line x1="150" y1="40" x2="176" y2="40"/>
<line x1="42" y1="92" x2="74" y2="92"/>
<line x1="58" y1="92" x2="58" y2="126"/>
<line x1="42" y1="92" x2="38" y2="58"/>
<line x1="84" y1="58" x2="106" y2="76"/>
</g>
<line x1="154" y1="106" x2="172" y2="106" stroke="var(--equip,#64748b)" stroke-width="12">
<animate attributeName="y1" values="106;92;106" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="y2" values="106;92;106" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="72" cy="40" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<line x1="66" y1="90" x2="74" y2="52"/>
<path d="M66 90 L90 94 L92 124"/>
<line x1="74" y1="52" x2="98" y2="66"/>
</g>
<g stroke="var(--acc,#a3e635)" stroke-width="6" stroke-linecap="round">
<animateTransform attributeName="transform" type="rotate" values="0 98 66;100 98 66;0 98 66" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<line x1="98" y1="66" x2="104" y2="46"/>
<line x1="99" y1="44" x2="109" y2="48" stroke="var(--equip,#64748b)" stroke-width="4"/>
</g>
</svg>`
  },
  {
    id: "arms-dumbbell-kickback",
    name: "Dumbbell Kickback",
    group: "arms",
    equipment: "dumbbell",
    level: 1,
    primary: ["Triceps"],
    secondary: [],
    steps: [
      "Place your left knee and left hand on a flat bench, right foot on the floor, back flat like a table.",
      "Hold a light dumbbell in your right hand and lift that upper arm until it runs parallel to the floor along your ribs.",
      "Exhale and straighten your arm behind you - only the forearm swings, the upper arm stays frozen.",
      "Hold the straight-arm squeeze for one second, lower slowly, finish the set, then switch sides."
    ],
    tips: [
      "If your upper arm drops during the set, the dumbbell is too heavy - this move only works light.",
      "Look down at the bench, not up at the mirror, to keep your neck and lower back in a straight line.",
      "The one-second squeeze at full extension IS the exercise; a floppy swing back and forth does nothing."
    ],
    setsReps: "3 sets × 12–15 reps each arm",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="96" y1="94" x2="156" y2="94"/>
<line x1="106" y1="94" x2="106" y2="126"/>
<line x1="146" y1="94" x2="146" y2="126"/>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="142" cy="46" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<line x1="94" y1="62" x2="128" y2="56"/>
<line x1="126" y1="58" x2="122" y2="92"/>
<path d="M94 62 L104 88 L120 90"/>
<path d="M94 62 L92 96 L90 124"/>
<line x1="128" y1="56" x2="108" y2="64"/>
</g>
<g stroke="var(--acc,#a3e635)" stroke-width="6" stroke-linecap="round">
<animateTransform attributeName="transform" type="rotate" values="0 108 64;95 108 64;0 108 64" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<line x1="108" y1="64" x2="106" y2="86"/>
<circle cx="106" cy="90" r="5" stroke="var(--equip,#64748b)" stroke-width="4"/>
</g>
</svg>`
  },
  {
    id: "arms-bench-dips",
    name: "Bench Dips",
    group: "arms",
    equipment: "bodyweight",
    level: 1,
    primary: ["Triceps"],
    secondary: ["Chest", "Front Deltoids"],
    steps: [
      "Sit on the edge of a bench with your hands beside your hips, fingers pointing forward, gripping the edge.",
      "Walk your feet out and slide your hips just off the bench, legs out in front with heels on the floor.",
      "Inhale and bend your elbows to lower your hips toward the floor until your elbows reach about 90 degrees.",
      "Exhale and press back up to straight arms, keeping your hips brushing close to the bench the whole way."
    ],
    tips: [
      "Hips stay close to the bench - drifting forward turns the dip into a shoulder-grinder.",
      "Elbows point straight back behind you, never flared out to the sides.",
      "Too hard? Bend your knees and bring your feet closer. Too easy? Straighten your legs fully or rest your heels on a second bench.",
      "Stop above 90 degrees if the front of your shoulders complains - depth is earned, not forced."
    ],
    setsReps: "3 sets × 8–12 reps",
    trackMode: "reps",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="44" y1="84" x2="80" y2="84"/>
<line x1="52" y1="84" x2="52" y2="126"/>
<line x1="74" y1="84" x2="74" y2="126"/>
</g>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="94" cy="40" r="9" fill="var(--fig,#cbd5e1)" stroke="none">
<animate attributeName="cy" values="40;56;40" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</circle>
<path d="M90 54 L96 80">
<animate attributeName="d" values="M90 54 L96 80;M90 70 L96 94;M90 54 L96 80" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
<path d="M96 80 L126 102 L152 122">
<animate attributeName="d" values="M96 80 L126 102 L152 122;M96 94 L126 108 L152 122;M96 80 L126 102 L152 122" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
<path d="M96 80 L120 106 L146 124">
<animate attributeName="d" values="M96 80 L120 106 L146 124;M96 94 L120 110 L146 124;M96 80 L120 106 L146 124" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</g>
<path d="M90 54 L83 70 L77 84" stroke="var(--acc,#a3e635)" stroke-width="6" stroke-linecap="round">
<animate attributeName="d" values="M90 54 L83 70 L77 84;M90 70 L94 84 L77 84;M90 54 L83 70 L77 84" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</svg>`
  }
);

window.GYM_EXERCISES.push(
  {
    id: "arms-single-arm-cable-curl",
    name: "Single-Arm Cable Curl",
    group: "arms",
    equipment: "cable",
    level: 1,
    primary: ["Biceps"],
    secondary: ["Forearms"],
    steps: [
      "Set the pulley to its lowest position and clip on a single D-handle.",
      "Grab the handle palm up, then take one small step back so the cable is taut while your arm hangs straight down.",
      "Pin your elbow against your side and exhale as you curl the handle all the way up to your shoulder.",
      "Inhale and lower for a slow 2-3 count until your arm is fully straight, then repeat. Do all reps, then switch arms."
    ],
    tips: [
      "The one mistake to avoid: letting your elbow drift forward. If the elbow moves, your shoulder is lifting the weight, not your biceps.",
      "Unlike a dumbbell curl, the cable never goes slack at the bottom - there is no resting spot, so pick a lighter weight than you'd curl with a dumbbell.",
      "Rest your free hand on your hip or the machine frame so the stack can't twist you sideways.",
      "Stand tall and squeeze at the top for one second - no leaning back to swing it up."
    ],
    setsReps: "3 sets × 10–12 reps per arm",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="148" y1="126" x2="148" y2="26"/>
<line x1="176" y1="126" x2="176" y2="26"/>
<line x1="148" y1="26" x2="176" y2="26"/>
<circle cx="149" cy="116" r="3"/>
</g>
<line x1="152" y1="104" x2="172" y2="104" stroke="var(--equip,#64748b)" stroke-width="12">
<animate attributeName="y1" values="104;92;104" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="y2" values="104;92;104" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
<line x1="149" y1="116" x2="112" y2="96" stroke="var(--equip,#64748b)" stroke-width="2.5">
<animate attributeName="x2" values="112;106;112" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="y2" values="96;58;96" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="98" cy="42" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<line x1="90" y1="88" x2="96" y2="53"/>
<path d="M90 88 L95 108 L93 126"/>
<path d="M90 88 L85 108 L83 126"/>
<line x1="96" y1="53" x2="99" y2="76"/>
</g>
<path d="M99 76 L112 96" stroke="var(--acc,#a3e635)" stroke-width="6" stroke-linecap="round">
<animate attributeName="d" values="M99 76 L112 96;M99 76 L106 58;M99 76 L112 96" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</svg>`
  },
  {
    id: "arms-overhead-cable-triceps-extension",
    name: "Overhead Cable Triceps Extension",
    group: "arms",
    equipment: "cable",
    level: 2,
    primary: ["Triceps"],
    secondary: ["Core"],
    steps: [
      "Clip a rope to a low-to-mid pulley, grab both ends, and turn to face away from the machine.",
      "Step forward into a staggered stance and hinge slightly forward, bringing your hands behind your head with elbows bent and pointing up beside your ears.",
      "Exhale and extend your arms until they are straight up and slightly forward, keeping your elbows in the same spot the whole time.",
      "Inhale and bend your elbows to lower your hands behind your head until you feel a deep stretch down the back of your arms."
    ],
    tips: [
      "This is THE long-head stretch move: the overhead position stretches the biggest part of the triceps. That deep stretch at the bottom is the point - don't cut it short.",
      "Elbows stay narrow, beside your ears. The most common mistake is letting them flare out wide, which takes the triceps out of the movement.",
      "Unlike the overhead dumbbell version, the cable keeps tension on the triceps even in the bottom stretch - so go lighter than you think.",
      "Brace your abs and keep the staggered stance solid so the stack can't pull you backward."
    ],
    setsReps: "3 sets × 10–12 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="24" y1="126" x2="24" y2="26"/>
<line x1="52" y1="126" x2="52" y2="26"/>
<line x1="24" y1="26" x2="52" y2="26"/>
<circle cx="51" cy="112" r="3"/>
</g>
<line x1="28" y1="104" x2="48" y2="104" stroke="var(--equip,#64748b)" stroke-width="12">
<animate attributeName="y1" values="104;90;104" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="y2" values="104;90;104" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
<line x1="51" y1="112" x2="100" y2="32" stroke="var(--equip,#64748b)" stroke-width="2.5">
<animate attributeName="x2" values="100;124;100" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="y2" values="32;18;32" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="114" cy="42" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<line x1="96" y1="90" x2="108" y2="56"/>
<path d="M96 90 L116 106 L120 126"/>
<path d="M96 90 L84 108 L74 126"/>
<line x1="108" y1="56" x2="120" y2="40"/>
</g>
<path d="M120 40 L100 32" stroke="var(--acc,#a3e635)" stroke-width="6" stroke-linecap="round">
<animate attributeName="d" values="M120 40 L100 32;M120 40 L124 18;M120 40 L100 32" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</svg>`
  },
  {
    id: "arms-reverse-grip-triceps-pushdown",
    name: "Reverse-Grip Triceps Pushdown",
    group: "arms",
    equipment: "cable",
    level: 1,
    primary: ["Triceps"],
    secondary: ["Forearms"],
    steps: [
      "Attach a straight bar to the highest pulley and grip it palms UP (underhand), hands about shoulder-width apart.",
      "Take one small step back, pin your elbows to your sides, and start with the bar around chest height.",
      "Exhale and push the bar straight down until your arms are fully locked out at your thighs.",
      "Squeeze the triceps for a second, then inhale and let the bar rise under control back to chest height - your elbows never move."
    ],
    tips: [
      "Same movement as the rope pushdown, but the palms-up grip forces your elbows to stay tucked and shifts emphasis toward the inner (medial) head of the triceps.",
      "Your grip gives out before your triceps do here, so go noticeably lighter than your rope-pushdown weight.",
      "Keep your wrists straight and locked - don't let the bar roll your fingers open on the way up.",
      "The most common mistake: shrugging your shoulders and leaning on the bar. Stand tall and let only your forearms move."
    ],
    setsReps: "3 sets × 12–15 reps",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="148" y1="126" x2="148" y2="26"/>
<line x1="176" y1="126" x2="176" y2="26"/>
<line x1="148" y1="26" x2="176" y2="26"/>
<circle cx="149" cy="31" r="3"/>
</g>
<line x1="152" y1="104" x2="172" y2="104" stroke="var(--equip,#64748b)" stroke-width="12">
<animate attributeName="y1" values="104;90;104" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="y2" values="104;90;104" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
<line x1="149" y1="31" x2="112" y2="60" stroke="var(--equip,#64748b)" stroke-width="2.5">
<animate attributeName="x2" values="112;114;112" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="y2" values="60;98;60" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
<line x1="104" y1="60" x2="124" y2="60" stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<animate attributeName="x1" values="104;106;104" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="y1" values="60;98;60" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="x2" values="124;126;124" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="y2" values="60;98;60" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="98" cy="42" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<line x1="90" y1="88" x2="96" y2="53"/>
<path d="M90 88 L95 108 L93 126"/>
<path d="M90 88 L85 108 L83 126"/>
<line x1="96" y1="53" x2="99" y2="76"/>
</g>
<path d="M99 76 L112 60" stroke="var(--acc,#a3e635)" stroke-width="6" stroke-linecap="round">
<animate attributeName="d" values="M99 76 L112 60;M99 76 L114 98;M99 76 L112 60" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</svg>`
  },
  {
    id: "arms-bayesian-cable-curl",
    name: "Bayesian Cable Curl",
    group: "arms",
    equipment: "cable",
    level: 2,
    primary: ["Biceps"],
    secondary: ["Forearms"],
    steps: [
      "Set the pulley to its lowest position with a single D-handle, grab it palm forward, and turn to face away from the machine.",
      "Take one or two steps forward into a staggered stance so the cable pulls your straight arm slightly behind your body.",
      "Keeping your upper arm back beside (or just behind) your torso, exhale and curl the handle up and forward toward your shoulder.",
      "Inhale and lower slowly until your arm is fully straight behind you again - that stretched bottom position is the whole point."
    ],
    tips: [
      "The difference from a regular cable curl: facing away puts the biceps' long head on stretch AND under cable tension for the entire rep - nowhere to hide, so go light.",
      "The one mistake to avoid: letting your elbow swing forward as you curl. The upper arm stays pinned back; only the forearm moves.",
      "Step far enough forward that the cable still pulls when your arm hangs straight - if it goes slack at the bottom, you are standing too close.",
      "Lean your torso slightly forward and brace; do all reps on one arm, then switch."
    ],
    setsReps: "3 sets × 10–12 reps per arm",
    trackMode: "weight",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" fill="none">
<line x1="12" y1="126" x2="188" y2="126" stroke="var(--floor,#334155)" stroke-width="3" stroke-linecap="round"/>
<g stroke="var(--equip,#64748b)" stroke-width="4" stroke-linecap="round">
<line x1="24" y1="126" x2="24" y2="26"/>
<line x1="52" y1="126" x2="52" y2="26"/>
<line x1="24" y1="26" x2="52" y2="26"/>
<circle cx="51" cy="112" r="3"/>
</g>
<line x1="28" y1="104" x2="48" y2="104" stroke="var(--equip,#64748b)" stroke-width="12">
<animate attributeName="y1" values="104;92;104" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="y2" values="104;92;104" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
<line x1="51" y1="112" x2="84" y2="94" stroke="var(--equip,#64748b)" stroke-width="2.5">
<animate attributeName="x2" values="84;112;84" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
<animate attributeName="y2" values="94;64;94" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</line>
<g stroke="var(--fig,#cbd5e1)" stroke-width="6" stroke-linecap="round">
<circle cx="108" cy="41" r="9" fill="var(--fig,#cbd5e1)" stroke="none"/>
<line x1="98" y1="90" x2="104" y2="55"/>
<path d="M98 90 L114 108 L118 126"/>
<path d="M98 90 L86 108 L78 126"/>
<line x1="104" y1="55" x2="98" y2="78"/>
</g>
<path d="M98 78 L84 94" stroke="var(--acc,#a3e635)" stroke-width="6" stroke-linecap="round">
<animate attributeName="d" values="M98 78 L84 94;M98 78 L112 64;M98 78 L84 94" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
</path>
</svg>`
  }
);
