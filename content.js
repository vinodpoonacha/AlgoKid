/* Algo Kid — content data (extracted from index.html at v26)
   Base worlds & topics. Loaded before the logic blocks that consume window.__CONTENT__.
   Later patch blocks in index.html still extend/fix this object. */

/* ---- content block 6 ---- */
window.__CONTENT__ = {
  /* ================= ALGORITHMS ================= */
  algorithms:{ title:"Algorithms", subtitle:"Think like a computer!", emoji:"🧩", color:"#7C5CFC", topics:[
    { id:"sequence", title:"Step by Step", emoji:"👣", color:"#7C5CFC", questions:[
      {q:"To make a sandwich, what do you do FIRST?",big:"🥪",options:[{t:"Get the bread",d:"🍞"},{t:"Take a big bite",d:"😋"},{t:"Wash the plate",d:"🧽"}],correct:0},
      {q:"Which happens FIRST in the day?",big:"🌞",options:[{t:"Wake up",d:"😃"},{t:"Go to sleep",d:"😴"}],correct:0},
      {q:"Wearing shoes: what comes first?",big:"👟",options:[{t:"Put on socks",d:"🧦",ic:"sock"},{t:"Tie the laces",d:"🎀",ic:"lace"}],correct:0},
      {q:"Planting a seed: what comes first?",big:"🌱",options:[{t:"Dig a hole",d:"🕳️"},{t:"Pick the flower",d:"🌸"}],correct:0},
      {q:"Brushing teeth: what comes first?",big:"🪥",options:[{t:"Put on toothpaste",d:"🧴"},{t:"Rinse your mouth",d:"💧"}],correct:0},
      {q:"Which comes LAST when baking a cake?",big:"🎂",options:[{t:"Eat the cake",d:"😋"},{t:"Mix the batter",d:"🥣"}],correct:0},
      {q:"Getting ready for school, what is FIRST?",big:"🎒",options:[{t:"Wake up",d:"⏰"},{t:"Walk to class",d:"🏫"}],correct:0},
      {q:"To drink juice, what comes first?",big:"🧃",options:[{t:"Open the box",d:"📦"},{t:"Throw it away",d:"🗑️"}],correct:0},
      {q:"Washing hands: what is the LAST step?",big:"🧼",options:[{t:"Dry your hands",d:"🤲"},{t:"Turn on the tap",d:"🚰"}],correct:0},
      {q:"To fly a kite, what comes first?",big:"🪁",options:[{t:"Hold the string",d:"🧵"},{t:"Wind it up to stop",d:"🛑"}],correct:0}
    ]},
    { id:"pattern", title:"Patterns", emoji:"🔁", color:"#6D6BFC", questions:[
      {q:"What comes next?",big:"🔴 🔵 🔴 🔵 ❓",options:[{t:"Red",d:"🔴"},{t:"Blue",d:"🔵"},{t:"Green",d:"🟢"}],correct:0},
      {q:"What comes next?",big:"⭐ 🌙 ⭐ 🌙 ❓",options:[{t:"Star",d:"⭐"},{t:"Moon",d:"🌙"}],correct:0},
      {q:"What comes next?",big:"🐶 🐱 🐶 🐱 ❓",options:[{t:"Dog",d:"🐶"},{t:"Cat",d:"🐱"}],correct:0},
      {q:"What comes next?",big:"🔺 🔺 🟦 🔺 🔺 ❓",options:[{t:"Blue square",d:"🟦"},{t:"Triangle",d:"🔺"}],correct:0},
      {q:"What comes next?",big:"🍎 🍎 🍌 🍎 🍎 ❓",options:[{t:"Banana",d:"🍌"},{t:"Apple",d:"🍎"}],correct:0},
      {q:"Small, big, small — what's next?",big:"🐜 🐘 🐜 ❓",options:[{t:"Big elephant",d:"🐘"},{t:"Small ant",d:"🐜"}],correct:0},
      {q:"What comes next?",big:"1️⃣ 2️⃣ 3️⃣ 1️⃣ 2️⃣ ❓",options:[{t:"Three",d:"3️⃣"},{t:"One",d:"1️⃣"}],correct:0},
      {q:"What comes next?",big:"👏 🦶 👏 🦶 ❓",options:[{t:"Clap",d:"👏"},{t:"Stomp",d:"🦶"}],correct:0},
      {q:"ABB pattern — what's next?",big:"🟥 🟨 🟨 🟥 🟨 ❓",options:[{t:"Yellow",d:"🟨"},{t:"Red",d:"🟥"}],correct:0},
      {q:"What comes next?",big:"🌸🌸🌸 🍃 🌸🌸🌸 ❓",options:[{t:"Leaf",d:"🍃"},{t:"Flower",d:"🌸"}],correct:0},
      {q:"Which shape is MISSING?",big:"⬛ ❓ ⬛ 🔺 ⬛ 🔺",options:[{t:"Triangle",d:"🔺"},{t:"Square",d:"⬛"}],correct:0},
      {q:"What comes next?",big:"🚗 🚕 🚗 🚕 ❓",options:[{t:"Blue car",d:"🚗"},{t:"Taxi",d:"🚕"}],correct:0}
    ]},
    { id:"sort", title:"Sorting Sizes", emoji:"📏", color:"#4CC0B0", questions:[
      {q:"Which is the BIGGEST?",big:"🐘 🐭 🐜",options:[{t:"Elephant",d:"🐘"},{t:"Mouse",d:"🐭"},{t:"Ant",d:"🐜"}],correct:0},
      {q:"Which is the SMALLEST?",big:"🌳 🌷 🍄",options:[{t:"Tree",d:"🌳"},{t:"Mushroom",d:"🍄"},{t:"Flower",d:"🌷"}],correct:2},
      {q:"Which is the TALLEST?",big:"🦒 🐕 🐈",options:[{t:"Giraffe",d:"🦒"},{t:"Dog",d:"🐕"},{t:"Cat",d:"🐈"}],correct:0},
      {q:"Small to big — which comes FIRST (smallest)?",big:"🐘 🐈 🐕",options:[{t:"Cat",d:"🐈"},{t:"Elephant",d:"🐘"}],correct:0},
      {q:"Which is the SHORTEST?",big:"📏 ✏️ 🖍️",options:[{t:"Crayon",d:"🖍️"},{t:"Ruler",d:"📏"}],correct:0},
      {q:"Which is the HEAVIEST?",big:"🪨 🪶",options:[{t:"Rock",d:"🪨"},{t:"Feather",d:"🪶"}],correct:0},
      {q:"Which is the LONGEST?",big:"🐍 🐛 🐌",options:[{t:"Snake",d:"🐍"},{t:"Worm",d:"🐛"},{t:"Snail",d:"🐌"}],correct:0},
      {q:"Which holds the MOST?",big:"🛁 🥛",options:[{t:"Bathtub",d:"🛁"},{t:"Glass",d:"🥛"}],correct:0},
      {q:"Big to small — which is LAST?",big:"🍉 🍎 🍒",options:[{t:"Cherry",d:"🍒"},{t:"Watermelon",d:"🍉"}],correct:0},
      {q:"Which is the WIDEST?",big:"🚌 🚲",options:[{t:"Bus",d:"🚌"},{t:"Bicycle",d:"🚲"}],correct:0}
    ]},
    { id:"loop", title:"Loops (Repeat)", emoji:"♾️", color:"#F0A03C", questions:[
      {q:"A loop means doing something...?",big:"🔁",options:[{t:"Again and again",d:"🔁"},{t:"Only once",d:"1️⃣"},{t:"Never",d:"🚫"}],correct:0},
      {q:"Clap, clap, clap. How many claps?",big:"👏 👏 👏",options:[{t:"Three",d:"3️⃣"},{t:"Two",d:"2️⃣"}],correct:0},
      {q:"The wheel goes round and round. That is a...?",big:"🎡",options:[{t:"Loop",d:"🔁"},{t:"Line",d:"➖"}],correct:0},
      {q:"Which shows 4 jumps?",big:"🦘",options:[{t:"Jump jump jump jump",d:"4️⃣"},{t:"Jump jump",d:"2️⃣"}],correct:0},
      {q:"Every day the sun rises. That happens...?",big:"🌅",options:[{t:"Again and again",d:"🔁"},{t:"Once ever",d:"1️⃣"}],correct:0},
      {q:"The rabbit repeats 'hop' 3 times. How many hops in all?",big:"🐰 → 🦘 🦘 🦘",options:[{t:"Three hops",d:"3️⃣"},{t:"Five hops",d:"5️⃣"}],correct:0},
      {q:"A song's chorus repeats. That is like a...?",big:"🎵",options:[{t:"Loop",d:"🔁"},{t:"Stop",d:"🛑"}],correct:0},
      {q:"Brush teeth every morning AND night — how many times a day?",big:"🪥",options:[{t:"Two times",d:"2️⃣"},{t:"One time",d:"1️⃣"}],correct:0}
    ]},
    { id:"ifthen", title:"If — Then Logic", emoji:"🤔", color:"#EC4899", questions:[
      {q:"IF it rains, THEN take an...?",big:"🌧️",options:[{t:"Umbrella",d:"☂️"},{t:"Sunglasses",d:"🕶️"}],correct:0},
      {q:"IF the light is red, THEN you...?",big:"🚦",options:[{t:"Stop",d:"🛑"},{t:"Run fast",d:"🏃"}],correct:0},
      {q:"IF you are sleepy, THEN go to...?",big:"😴",options:[{t:"Bed",d:"🛏️"},{t:"The park",d:"🛝"}],correct:0},
      {q:"IF it is cold, THEN wear a...?",big:"❄️",options:[{t:"Warm jacket",d:"🧥"},{t:"Swimsuit",d:"🩱"}],correct:0},
      {q:"IF you are hungry, THEN you...?",big:"🍽️",options:[{t:"Eat food",d:"🍎"},{t:"Sleep",d:"😴"}],correct:0},
      {q:"IF light is green, THEN cars can...?",big:"🟢",options:[{t:"Go",d:"➡️"},{t:"Stop",d:"🛑"}],correct:0},
      {q:"IF your hands are dirty, THEN you...?",big:"🖐️",options:[{t:"Wash them",d:"🧼"},{t:"Eat",d:"🍕"}],correct:0},
      {q:"IF the ball comes to you, THEN you...?",big:"⚽",options:[{t:"Catch or kick it",d:"🥅"},{t:"Close your eyes",d:"🙈"}],correct:0},
      {q:"IF it is dark, THEN turn on the...?",big:"🌚",options:[{t:"Light",d:"💡"},{t:"Fan",d:"🌀"}],correct:0},
      {q:"IF you break a toy, THEN you should...?",big:"🧸",options:[{t:"Tell a grown-up",d:"🧑"},{t:"Hide it",d:"🙈"}],correct:0}
    ]},
    { id:"direction", title:"Which Way?", emoji:"🧭", color:"#3B9BE0", questions:[
      {q:"The arrow points which way?",big:"➡️",options:[{t:"Right",d:"👉"},{t:"Left",d:"👈"}],correct:0},
      {q:"The arrow points which way?",big:"⬆️",options:[{t:"Up",d:"☝️"},{t:"Down",d:"👇"}],correct:0},
      {q:"To go UP the stairs you go...?",big:"🪜",options:[{t:"Up",d:"⬆️"},{t:"Down",d:"⬇️"}],correct:0},
      {q:"The bird flies which way?",big:"🐦⬆️",options:[{t:"Up in the sky",d:"⬆️"},{t:"Down a hole",d:"⬇️"}],correct:0},
      {q:"Which way does 👉 point?",big:"👉",options:[{t:"Right",d:"➡️"},{t:"Left",d:"⬅️"}],correct:0},
      {q:"The fish swims which way?",big:"🐟⬇️",options:[{t:"Down into water",d:"⬇️"},{t:"Up to the moon",d:"🌙"}],correct:0},
      {q:"To reach the top of a hill you go...?",big:"⛰️",options:[{t:"Up",d:"⬆️"},{t:"Down",d:"⬇️"}],correct:0},
      {q:"Turn the page to the RIGHT means...?",big:"📖",options:[{t:"Go forward",d:"➡️"},{t:"Go back",d:"⬅️"}],correct:0}
    ]},
    { id:"order-count", title:"Order Game", emoji:"🎮", color:"#7C5CFC", type:"order", rounds:[
      {q:"Tap the numbers 1 to 5 in order!",items:[{d:"1",v:1},{d:"2",v:2},{d:"3",v:3},{d:"4",v:4},{d:"5",v:5}]},
      {q:"Tap from smallest to biggest animal!",items:[{d:"🐜",v:1,say:"tiny ant"},{d:"🐭",v:2,say:"mouse"},{d:"🐶",v:3,say:"dog"},{d:"🐘",v:4,say:"big elephant"}]},
      {q:"Tap 6, 7, 8, 9 in order!",items:[{d:"6",v:6},{d:"7",v:7},{d:"8",v:8},{d:"9",v:9}]},
      {q:"Tap from shortest to tallest!",items:[{d:"🐈",v:1,say:"short cat"},{d:"🐕",v:2,say:"dog"},{d:"🦒",v:3,say:"tall giraffe"}]},
      {q:"Tap the day steps in order!",items:[{d:"🌅",v:1,say:"morning"},{d:"☀️",v:2,say:"noon"},{d:"🌆",v:3,say:"evening"},{d:"🌙",v:4,say:"night"}]}
    ]}
  ]},

  /* ================= DATA STRUCTURES ================= */
  data:{ title:"Data Boxes", subtitle:"How we store things!", emoji:"📦", color:"#14B8A6", topics:[
    { id:"stack", title:"Stacks", emoji:"🥞", color:"#14B8A6", questions:[
      {q:"Plates are stacked. Which do you take first?",scene:"plates",options:[{t:"The top one",d:"⬆️🍽️",hi:"top"},{t:"The bottom one",d:"⬇️🍽️",hi:"bottom"}],correct:0},
      {q:"You pile books. The LAST book goes...?",scene:"books",options:[{t:"On top",d:"⬆️",hi:"top"},{t:"At the bottom",d:"⬇️",hi:"bottom"}],correct:0},
      {q:"Pancakes are stacked. Which is eaten first?",scene:"pancakes",options:[{t:"The top pancake",d:"⬆️",hi:"top"},{t:"The bottom pancake",d:"⬇️",hi:"bottom"}],correct:0},
      {q:"In a stack we take from the...?",big:"📦",options:[{t:"Top",d:"⬆️"},{t:"Middle",d:"↔️"}],correct:0},
      {q:"Stack 3 blocks. Which went on LAST?",big:"🧱",options:[{t:"Top block",d:"⬆️"},{t:"Bottom block",d:"⬇️"}],correct:0},
      {q:"A stack of cups: to reach the bottom cup you must move...?",big:"🥤",options:[{t:"The top cups first",d:"⬆️"},{t:"Nothing",d:"🚫"}],correct:0},
      {q:"The word for adding to the top of a stack is...?",big:"⬆️📦",options:[{t:"Push (put on top)",d:"⬆️"},{t:"Throw away",d:"🗑️"}],correct:0},
      {q:"Taking the top item off a stack is called...?",big:"⬆️📦",options:[{t:"Pop (take the top)",d:"👆"},{t:"Bury it",d:"⬇️"}],correct:0}
    ]},
    { id:"queue", title:"Queues (Lines)", emoji:"🚶", color:"#3B82F6", questions:[
      {q:"Kids line up for the slide. Who goes first?",scene:"queue",options:[{t:"First in line",d:"1️⃣",hi:"first"},{t:"Last in line",d:"🔚",hi:"last"}],correct:0},
      {q:"At the ice cream stall, who is served first?",scene:"queue",options:[{t:"Person in front",d:"🥇",hi:"first"},{t:"Person at back",d:"🔚",hi:"last"}],correct:0},
      {q:"A new kid joins the line. Where do they stand?",big:"🚶",options:[{t:"At the back",d:"🔚"},{t:"In front",d:"1️⃣"}],correct:0},
      {q:"In a line, the FIRST person leaves...?",big:"🚌",options:[{t:"First",d:"1️⃣"},{t:"Last",d:"🔚"}],correct:0},
      {q:"Who waits the LONGEST in a line?",big:"⏳",options:[{t:"The last person",d:"🔚"},{t:"The first person",d:"1️⃣"}],correct:0},
      {q:"A queue works like: first in, first...?",big:"➡️",options:[{t:"Out",d:"🚪"},{t:"Back",d:"🔙"}],correct:0},
      {q:"3 cars wait at a toll. Which passes first?",big:"🚗🚗🚗",options:[{t:"The front car",d:"1️⃣"},{t:"The back car",d:"🔚"}],correct:0},
      {q:"Fair lines help us take...?",big:"🤝",options:[{t:"Turns",d:"🔄"},{t:"Everything at once",d:"❌"}],correct:0}
    ]},
    { id:"group", title:"Grouping (Sets)", emoji:"🧺", color:"#EC4899", questions:[
      {q:"Which does NOT belong with fruits?",big:"🍎 🍌 🍇 🚗",options:[{t:"The car",d:"🚗"},{t:"The banana",d:"🍌"},{t:"The apple",d:"🍎"}],correct:0},
      {q:"Which is a fruit?",big:"🍓 ⚽ 🚕",options:[{t:"Strawberry",d:"🍓"},{t:"Football",d:"⚽"},{t:"Taxi",d:"🚕"}],correct:0},
      {q:"Which belongs with animals?",big:"🐄 🌈 ☂️",options:[{t:"Cow",d:"🐄"},{t:"Rainbow",d:"🌈"},{t:"Umbrella",d:"☂️"}],correct:0},
      {q:"Which is a vehicle?",big:"🚌 🍎 🐟",options:[{t:"Bus",d:"🚌"},{t:"Apple",d:"🍎"},{t:"Fish",d:"🐟"}],correct:0},
      {q:"Which does NOT belong with clothes?",big:"👕 👖 🍕",options:[{t:"Pizza",d:"🍕"},{t:"Shirt",d:"👕"}],correct:0},
      {q:"Which one is a toy?",big:"🧸 🥦 🔑",options:[{t:"Teddy",d:"🧸"},{t:"Broccoli",d:"🥦"},{t:"Key",d:"🔑"}],correct:0},
      {q:"Which belongs with things in the sky?",big:"☁️ 🪑 🍞",options:[{t:"Cloud",d:"☁️"},{t:"Chair",d:"🪑"},{t:"Bread",d:"🍞"}],correct:0},
      {q:"Which does NOT belong with the sea?",big:"🐠 🐙 🐘",options:[{t:"Elephant",d:"🐘"},{t:"Octopus",d:"🐙"}],correct:0},
      {q:"Which belongs in the kitchen?",big:"🍳 🛏️ 🎸",options:[{t:"Frying pan",d:"🍳"},{t:"Bed",d:"🛏️"},{t:"Guitar",d:"🎸"}],correct:0}
    ]},
    { id:"position", title:"Positions", emoji:"🔢", color:"#F0A03C", questions:[
      {q:"Which animal is SECOND?",big:"🐶 🐱 🐭 🐰",options:[{t:"Cat",d:"🐱"},{t:"Dog",d:"🐶"},{t:"Rabbit",d:"🐰"}],correct:0},
      {q:"Which fruit is FIRST?",big:"🍎 🍊 🍇",options:[{t:"Apple",d:"🍎"},{t:"Grapes",d:"🍇"}],correct:0},
      {q:"Which star is LAST?",big:"⭐ ⭐ 🌟",options:[{t:"Gold star",d:"🌟"},{t:"First star",d:"⭐"}],correct:0},
      {q:"Which is THIRD?",big:"🔵 🟢 🔴 🟡",options:[{t:"Red",d:"🔴"},{t:"Green",d:"🟢"},{t:"Blue",d:"🔵"}],correct:0},
      {q:"Who is in the MIDDLE?",big:"🧒 👦 🧒",options:[{t:"The middle child",d:"👦"},{t:"The first",d:"1️⃣"}],correct:0},
      {q:"Which car is FIRST in the race?",big:"🏎️ 🚗 🚙",options:[{t:"Race car in front",d:"🏎️"},{t:"Last car",d:"🚙"}],correct:0},
      {q:"Which is FOURTH?",big:"🍎 🍌 🍇 🍓 🍊",options:[{t:"Strawberry",d:"🍓"},{t:"Grapes",d:"🍇"}],correct:0},
      {q:"On the podium, who is the WINNER (first)?",big:"🥇🥈🥉",options:[{t:"Gold medal",d:"🥇"},{t:"Bronze medal",d:"🥉"}],correct:0}
    ]},
    { id:"count-boxes", title:"Counting Boxes", emoji:"🧮", color:"#4CC0B0", questions:[
      {q:"How many balls?",big:"⚽ ⚽ ⚽ ⚽",options:[{t:"Four",d:"4"},{t:"Three",d:"3"},{t:"Five",d:"5"}],correct:0},
      {q:"How many apples?",big:"🍎 🍎",options:[{t:"Two",d:"2"},{t:"One",d:"1"}],correct:0},
      {q:"How many stars?",big:"⭐ ⭐ ⭐ ⭐ ⭐",options:[{t:"Five",d:"5"},{t:"Four",d:"4"},{t:"Six",d:"6"}],correct:0},
      {q:"Which box has MORE?",big:"🍬🍬 · 🍬🍬🍬🍬",options:[{t:"The box with four",d:"4️⃣"},{t:"The box with two",d:"2️⃣"}],correct:0},
      {q:"Which box has FEWER?",big:"🐟🐟🐟 · 🐟",options:[{t:"The box with one",d:"1️⃣"},{t:"The box with three",d:"3️⃣"}],correct:0},
      {q:"How many fingers? ✋",big:"✋",options:[{t:"Five",d:"5"},{t:"Four",d:"4"}],correct:0},
      {q:"How many wheels?",big:"🚲",options:[{t:"Two",d:"2"},{t:"Four",d:"4"}],correct:0},
      {q:"How many eyes do you have?",big:"👀",options:[{t:"Two",d:"2"},{t:"One",d:"1"}],correct:0}
    ]},
    { id:"mem-numq", title:"Memory: Number Match", emoji:"🧠", color:"#8B5CF6", type:"memory", intro:"Match the number to how many!", pairs:[
      {0:"1",1:"🍎",say:"one",say2:"one apple"},
      {0:"2",1:"🍌🍌",say:"two",say2:"two bananas"},
      {0:"3",1:"⭐⭐⭐",say:"three",say2:"three stars"},
      {0:"4",1:"🐟🐟🐟🐟",say:"four",say2:"four fish"}
    ]},
    { id:"tap-count", title:"Tap the Right Number", emoji:"👆", color:"#F0A03C", type:"tapcount", rounds:[
      {q:"Tap 3 apples!",emoji:"🍎",n:3,total:6},
      {q:"Tap 2 stars!",emoji:"⭐",n:2,total:6},
      {q:"Tap 5 balls!",emoji:"⚽",n:5,total:8},
      {q:"Tap 4 flowers!",emoji:"🌸",n:4,total:7}
    ]}
  ]},

  /* ================= OLYMPIAD ================= */
  olympiad:{ title:"Olympiad", subtitle:"Math · Science · English · Reasoning", emoji:"🏆", color:"#F5A623", topics:[
    /* -------- MATH -------- */
    { group:"🔢 Math", id:"counting", title:"Counting", emoji:"🔢", color:"#3B82F6", questions:[
      {q:"Count the apples. How many?",big:"🍎 🍎 🍎",options:[{t:"Three",d:"3"},{t:"Two",d:"2"},{t:"Four",d:"4"}],correct:0},
      {q:"How many ducks?",big:"🦆 🦆 🦆 🦆",options:[{t:"Four",d:"4"},{t:"Five",d:"5"},{t:"Three",d:"3"}],correct:0},
      {q:"How many candles?",big:"🕯️🕯️🕯️🕯️🕯️",options:[{t:"Five",d:"5"},{t:"Six",d:"6"}],correct:0},
      {q:"Count by twos: 2, 4, ...?",big:"2 · 4 · ❓",options:[{t:"Six",d:"6"},{t:"Five",d:"5"}],correct:0},
      {q:"How many wheels on a car?",big:"🚗",options:[{t:"Four",d:"4"},{t:"Two",d:"2"}],correct:0},
      {q:"How many is one dozen?",big:"🥚×12",options:[{t:"Twelve",d:"12"},{t:"Ten",d:"10"}],correct:0},
      {q:"How many fingers on TWO hands?",big:"🙌",options:[{t:"Ten",d:"10"},{t:"Five",d:"5"}],correct:0},
      {q:"Count backwards: 3, 2, ...?",big:"3 · 2 · ❓",options:[{t:"One",d:"1"},{t:"Four",d:"4"}],correct:0},
      {q:"How many legs does a dog have?",big:"🐕",options:[{t:"Four",d:"4"},{t:"Two",d:"2"}],correct:0},
      {q:"Count by tens: 10, 20, ...?",big:"10 · 20 · ❓",options:[{t:"Thirty",d:"30"},{t:"Twenty-one",d:"21"}],correct:0}
    ]},
    { group:"🔢 Math", id:"addsub", title:"Add & Take Away", emoji:"➕", color:"#3B82F6", questions:[
      {q:"Two plus one?",big:"2 ➕ 1 = ❓",options:[{t:"Three",d:"3"},{t:"Five",d:"5"},{t:"One",d:"1"}],correct:0},
      {q:"Three plus two?",big:"3 ➕ 2 = ❓",options:[{t:"Five",d:"5"},{t:"Four",d:"4"},{t:"Six",d:"6"}],correct:0},
      {q:"4 balloons, 1 pops. How many left?",big:"🎈🎈🎈🎈 ➖1",options:[{t:"Three",d:"3"},{t:"Five",d:"5"}],correct:0},
      {q:"One plus one?",big:"1 ➕ 1 = ❓",options:[{t:"Two",d:"2"},{t:"Three",d:"3"}],correct:0},
      {q:"5 cookies, eat 2. How many left?",big:"🍪×5 ➖2",options:[{t:"Three",d:"3"},{t:"Two",d:"2"}],correct:0},
      {q:"Zero plus four?",big:"0 ➕ 4 = ❓",options:[{t:"Four",d:"4"},{t:"Zero",d:"0"}],correct:0},
      {q:"Four plus three?",big:"4 ➕ 3 = ❓",options:[{t:"Seven",d:"7"},{t:"Six",d:"6"}],correct:0},
      {q:"6 take away 3?",big:"6 ➖ 3 = ❓",options:[{t:"Three",d:"3"},{t:"Two",d:"2"}],correct:0},
      {q:"Five plus five?",big:"5 ➕ 5 = ❓",options:[{t:"Ten",d:"10"},{t:"Nine",d:"9"}],correct:0},
      {q:"10 take away 1?",big:"10 ➖ 1 = ❓",options:[{t:"Nine",d:"9"},{t:"Eleven",d:"11"}],correct:0},
      {q:"Double 3 (3 + 3)?",big:"3 ➕ 3 = ❓",options:[{t:"Six",d:"6"},{t:"Five",d:"5"}],correct:0},
      {q:"7 take away 4?",big:"7 ➖ 4 = ❓",options:[{t:"Three",d:"3"},{t:"Four",d:"4"}],correct:0}
    ]},
    { group:"🔢 Math", id:"shapes", title:"Shapes", emoji:"🔷", color:"#3B82F6", questions:[
      {q:"Which shape is a circle?",big:"⭕ 🔺 ⬛",options:[{t:"Circle",d:"⭕"},{t:"Triangle",d:"🔺"},{t:"Square",d:"⬛"}],correct:0},
      {q:"How many sides has a triangle?",big:"🔺",options:[{t:"Three",d:"3"},{t:"Four",d:"4"}],correct:0},
      {q:"How many sides has a square?",big:"⬛",options:[{t:"Four",d:"4"},{t:"Three",d:"3"}],correct:0},
      {q:"Which is round like a ball?",big:"⚽",options:[{t:"Circle",d:"⭕"},{t:"Square",d:"⬛"}],correct:0},
      {q:"A window is often a...?",big:"🪟",options:[{t:"Square",d:"⬛"},{t:"Circle",d:"⭕"}],correct:0},
      {q:"Which shape has NO corners?",big:"⭕ vs ⬛",options:[{t:"Circle",d:"⭕"},{t:"Square",d:"⬛"}],correct:0},
      {q:"A slice of pizza looks like a...?",big:"🍕",options:[{t:"Triangle",d:"🔺"},{t:"Circle",d:"⭕"}],correct:0},
      {q:"How many corners has a square?",big:"⬛",options:[{t:"Four",d:"4"},{t:"Three",d:"3"}],correct:0},
      {q:"Which shape is a star?",big:"⭐ ⬛ ⭕",options:[{t:"Star",d:"⭐"},{t:"Square",d:"⬛"}],correct:0},
      {q:"A ball is shaped like a...?",big:"🏀",options:[{t:"Sphere (round ball)",d:"⚫"},{t:"Box",d:"📦"}],correct:0}
    ]},
    { group:"🔢 Math", id:"numorder", title:"Number Order", emoji:"🔢", color:"#3B82F6", questions:[
      {q:"What comes AFTER 4?",big:"4 ➡️ ❓",options:[{t:"Five",d:"5"},{t:"Three",d:"3"}],correct:0},
      {q:"What comes BEFORE 7?",big:"❓ ⬅️ 7",options:[{t:"Six",d:"6"},{t:"Eight",d:"8"}],correct:0},
      {q:"Bigger: 5 or 3?",big:"5 ❓ 3",options:[{t:"Five",d:"5"},{t:"Three",d:"3"}],correct:0},
      {q:"Smaller: 8 or 2?",big:"8 ❓ 2",options:[{t:"Two",d:"2"},{t:"Eight",d:"8"}],correct:0},
      {q:"What comes BETWEEN 5 and 7?",big:"5 · ❓ · 7",options:[{t:"Six",d:"6"},{t:"Eight",d:"8"}],correct:0},
      {q:"Which is BIGGEST?",big:"3 · 9 · 5",options:[{t:"Nine",d:"9"},{t:"Five",d:"5"},{t:"Three",d:"3"}],correct:0},
      {q:"What comes AFTER 9?",big:"9 ➡️ ❓",options:[{t:"Ten",d:"10"},{t:"Eight",d:"8"}],correct:0},
      {q:"Which is SMALLEST?",big:"6 · 2 · 8",options:[{t:"Two",d:"2"},{t:"Six",d:"6"}],correct:0},
      {q:"Put in order: which is FIRST (smallest)?",big:"7 · 1 · 4",options:[{t:"One",d:"1"},{t:"Seven",d:"7"}],correct:0},
      {q:"What comes BETWEEN 8 and 10?",big:"8 · ❓ · 10",options:[{t:"Nine",d:"9"},{t:"Seven",d:"7"}],correct:0}
    ]},
    { group:"🔢 Math", id:"placevalue", title:"Tens & Ones", emoji:"🔟", color:"#3B82F6", questions:[
      {q:"How many tens in 10?",big:"🔟",options:[{t:"One ten",d:"1"},{t:"Two tens",d:"2"}],correct:0},
      {q:"1 ten and 2 ones make...?",big:"🔟 + 1 1",options:[{t:"Twelve",d:"12"},{t:"Twenty-one",d:"21"}],correct:0},
      {q:"The number 15 has how many tens?",big:"15",options:[{t:"One ten",d:"1"},{t:"Five tens",d:"5"}],correct:0},
      {q:"2 tens make...?",big:"🔟🔟",options:[{t:"Twenty",d:"20"},{t:"Twelve",d:"12"}],correct:0},
      {q:"In 13, the ones digit is...?",big:"1 3",options:[{t:"Three",d:"3"},{t:"One",d:"1"}],correct:0},
      {q:"Which number is a 'teen'?",big:"❓",options:[{t:"Fourteen",d:"14"},{t:"Forty",d:"40"}],correct:0}
    ]},
    { group:"🔢 Math", id:"measuremoney", title:"Measure & Money", emoji:"📏", color:"#3B82F6", questions:[
      {q:"Which is LONGER?",big:"🚂 vs 🚗",options:[{t:"Train",d:"🚂"},{t:"Car",d:"🚗"}],correct:0},
      {q:"Which is HEAVIER?",big:"🐘 vs 🐁",options:[{t:"Elephant",d:"🐘"},{t:"Mouse",d:"🐁"}],correct:0},
      {q:"Which holds MORE water?",big:"🪣 vs 🥤",options:[{t:"Bucket",d:"🪣"},{t:"Cup",d:"🥤"}],correct:0},
      {q:"We buy things using...?",big:"🛒",options:[{t:"Money",d:"💰"},{t:"Toys",d:"🧸"}],correct:0},
      {q:"Which is LIGHTER?",big:"🎈 vs 📚",options:[{t:"Balloon",d:"🎈"},{t:"Books",d:"📚"}],correct:0},
      {q:"Which is SHORTER?",big:"🖍️ vs 📏",options:[{t:"Crayon",d:"🖍️"},{t:"Ruler",d:"📏"}],correct:0},
      {q:"Which is the coldest?",big:"🧊 vs ☕",options:[{t:"Ice",d:"🧊"},{t:"Hot tea",d:"☕"}],correct:0},
      {q:"Which coin is worth more, if one is bigger value?",big:"🪙",options:[{t:"We use money to pay",d:"💵"},{t:"We use leaves",d:"🍃"}],correct:0},
      {q:"Which is FASTER?",big:"🐆 vs 🐢",options:[{t:"Cheetah",d:"🐆"},{t:"Turtle",d:"🐢"}],correct:0}
    ]},
    { group:"🔢 Math", id:"timedays", title:"Time & Days", emoji:"🕐", color:"#3B82F6", questions:[
      {q:"How many days in a week?",big:"📅",options:[{t:"Seven",d:"7"},{t:"Five",d:"5"}],correct:0},
      {q:"We sleep at...?",big:"🌙",options:[{t:"Night",d:"🌙"},{t:"Noon",d:"☀️"}],correct:0},
      {q:"The sun is highest at...?",big:"☀️",options:[{t:"Noon",d:"🕛"},{t:"Midnight",d:"🌌"}],correct:0},
      {q:"Which comes first, morning or evening?",big:"🌅 · 🌆",options:[{t:"Morning",d:"🌅"},{t:"Evening",d:"🌆"}],correct:0},
      {q:"The clock's SHORT hand shows the...?",big:"🕐",options:[{t:"Hour",d:"⏰"},{t:"Second",d:"⏱️"}],correct:0},
      {q:"How many months in a year?",big:"📆",options:[{t:"Twelve",d:"12"},{t:"Seven",d:"7"}],correct:0},
      {q:"What day comes after Sunday?",big:"📅",options:[{t:"Monday",d:"1️⃣"},{t:"Friday",d:"5️⃣"}],correct:0}
    ]},
    { group:"🔢 Math", id:"numtrain", title:"Number Train 🎮", emoji:"🚂", color:"#3B82F6", type:"order", rounds:[
      {q:"Build the train! Tap 1 to 4 in order.",items:[{d:"1",v:1},{d:"2",v:2},{d:"3",v:3},{d:"4",v:4}]},
      {q:"Tap 5, 6, 7, 8 in order!",items:[{d:"5",v:5},{d:"6",v:6},{d:"7",v:7},{d:"8",v:8}]},
      {q:"Count by twos! Tap 2, 4, 6, 8.",items:[{d:"2",v:2,say:"two"},{d:"4",v:4,say:"four"},{d:"6",v:6,say:"six"},{d:"8",v:8,say:"eight"}]},
      {q:"Tap 7, 8, 9, 10 in order!",items:[{d:"7",v:7},{d:"8",v:8},{d:"9",v:9},{d:"10",v:10}]},
      {q:"Count by tens! Tap 10, 20, 30, 40.",items:[{d:"10",v:10,say:"ten"},{d:"20",v:20,say:"twenty"},{d:"30",v:30,say:"thirty"},{d:"40",v:40,say:"forty"}]}
    ]},

    /* -------- SCIENCE -------- */
    { group:"🔬 Science", id:"animals", title:"Animals", emoji:"🐾", color:"#22C55E", questions:[
      {q:"Which animal says moo?",big:"🐄 🐱 🐶",options:[{t:"Cow",d:"🐄"},{t:"Cat",d:"🐱"},{t:"Dog",d:"🐶"}],correct:0},
      {q:"Which one can fly?",big:"🐦 🐟 🐘",options:[{t:"Bird",d:"🐦"},{t:"Fish",d:"🐟"},{t:"Elephant",d:"🐘"}],correct:0},
      {q:"Which lives in water?",big:"🐟 🐈 🐎",options:[{t:"Fish",d:"🐟"},{t:"Cat",d:"🐈"},{t:"Horse",d:"🐎"}],correct:0},
      {q:"Which animal hops?",big:"🐰 🐢 🐍",options:[{t:"Rabbit",d:"🐰"},{t:"Turtle",d:"🐢"}],correct:0},
      {q:"Which gives us honey?",big:"🐝 🐜 🕷️",options:[{t:"Bee",d:"🐝"},{t:"Ant",d:"🐜"}],correct:0},
      {q:"Who is the king of the jungle?",big:"🦁 🐭 🐇",options:[{t:"Lion",d:"🦁"},{t:"Mouse",d:"🐭"}],correct:0},
      {q:"Which animal has a long trunk?",big:"🐘 🐴 🐐",options:[{t:"Elephant",d:"🐘"},{t:"Horse",d:"🐴"}],correct:0},
      {q:"A baby dog is called a...?",big:"🐕",options:[{t:"Puppy",d:"🐶"},{t:"Kitten",d:"🐱"}],correct:0},
      {q:"Which animal gives us wool?",big:"🐑 🐔 🐖",options:[{t:"Sheep",d:"🐑"},{t:"Hen",d:"🐔"}],correct:0},
      {q:"Which is a bird?",big:"🦜 🐍 🐸",options:[{t:"Parrot",d:"🦜"},{t:"Snake",d:"🐍"},{t:"Frog",d:"🐸"}],correct:0}
    ]},
    { group:"🔬 Science", id:"body", title:"My Body", emoji:"🧍", color:"#22C55E", questions:[
      {q:"We smell with our...?",big:"👃",options:[{t:"Nose",d:"👃"},{t:"Ear",d:"👂"},{t:"Eye",d:"👁️"}],correct:0},
      {q:"We hear with our...?",big:"👂",options:[{t:"Ears",d:"👂"},{t:"Hands",d:"✋"}],correct:0},
      {q:"We see with our...?",big:"👁️",options:[{t:"Eyes",d:"👀"},{t:"Feet",d:"🦶"}],correct:0},
      {q:"We taste with our...?",big:"👅",options:[{t:"Tongue",d:"👅"},{t:"Nose",d:"👃"}],correct:0},
      {q:"How many hands do you have?",big:"🙌",options:[{t:"Two",d:"2"},{t:"One",d:"1"}],correct:0},
      {q:"We walk with our...?",big:"🦵",options:[{t:"Legs and feet",d:"🦶"},{t:"Ears",d:"👂"}],correct:0},
      {q:"Which keeps our body moving — beats inside us?",big:"❤️",options:[{t:"Heart",d:"❤️"},{t:"Hair",d:"💇"}],correct:0}
    ]},
    { group:"🔬 Science", id:"plants", title:"Plants & Nature", emoji:"🌿", color:"#22C55E", questions:[
      {q:"A plant grows from a tiny...?",big:"🌱",options:[{t:"Seed",d:"🌰"},{t:"Stone",d:"🪨"}],correct:0},
      {q:"Plants need this to grow.",big:"🌻",options:[{t:"Water and sunlight",d:"💧☀️"},{t:"Candy",d:"🍬"}],correct:0},
      {q:"Where do apples grow?",big:"🍎",options:[{t:"On a tree",d:"🌳"},{t:"Under the sea",d:"🌊"}],correct:0},
      {q:"Which part is UNDER the ground?",big:"🌱",options:[{t:"Roots",d:"🪴"},{t:"Flower",d:"🌸"}],correct:0},
      {q:"Bees help flowers and make...?",big:"🐝🌸",options:[{t:"Honey",d:"🍯"},{t:"Rain",d:"🌧️"}],correct:0},
      {q:"Which do we eat that grows underground?",big:"🥕",options:[{t:"Carrot",d:"🥕"},{t:"Apple",d:"🍎"}],correct:0},
      {q:"Leaves are usually which colour?",big:"🍃",options:[{t:"Green",d:"🟢"},{t:"Purple",d:"🟣"}],correct:0}
    ]},
    { group:"🔬 Science", id:"living", title:"Living or Not", emoji:"🌱", color:"#22C55E", questions:[
      {q:"Which is a LIVING thing?",big:"🌱 🪨 🚗",options:[{t:"Plant",d:"🌱"},{t:"Rock",d:"🪨"},{t:"Car",d:"🚗"}],correct:0},
      {q:"Which is NOT living?",big:"🐶 🌷 🪑",options:[{t:"Chair",d:"🪑"},{t:"Dog",d:"🐶"},{t:"Flower",d:"🌷"}],correct:0},
      {q:"Living things can...?",big:"🐣",options:[{t:"Grow and eat",d:"🍽️"},{t:"Never change",d:"🚫"}],correct:0},
      {q:"Which can breathe?",big:"🐠 🧱",options:[{t:"Fish",d:"🐠"},{t:"Brick",d:"🧱"}],correct:0},
      {q:"Which needs food?",big:"🐕 ⚽",options:[{t:"Dog",d:"🐕"},{t:"Ball",d:"⚽"}],correct:0},
      {q:"Which is living?",big:"🌳 🚲",options:[{t:"Tree",d:"🌳"},{t:"Bicycle",d:"🚲"}],correct:0},
      {q:"Do living things drink water?",big:"💧",options:[{t:"Yes",d:"✅"},{t:"No",d:"❌"}],correct:0}
    ]},
    { group:"🔬 Science", id:"weather", title:"Weather & Sky", emoji:"☀️", color:"#22C55E", questions:[
      {q:"What does the sun give us?",big:"☀️",options:[{t:"Light and warmth",d:"🔆"},{t:"Snow",d:"❄️"},{t:"Rain",d:"🌧️"}],correct:0},
      {q:"What falls when it rains?",big:"🌧️",options:[{t:"Water drops",d:"💧"},{t:"Sand",d:"🏖️"}],correct:0},
      {q:"The colourful arch after rain is a...?",big:"🌈",options:[{t:"Rainbow",d:"🌈"},{t:"Cloud",d:"☁️"}],correct:0},
      {q:"What do you wear on a snowy day?",big:"❄️",options:[{t:"Warm coat",d:"🧥"},{t:"Swimsuit",d:"🩱"}],correct:0},
      {q:"The moon comes out at...?",big:"🌙",options:[{t:"Night",d:"🌌"},{t:"Noon",d:"☀️"}],correct:0},
      {q:"Which season is coldest?",big:"❄️",options:[{t:"Winter",d:"⛄"},{t:"Summer",d:"🏖️"}],correct:0},
      {q:"Thunder comes with...?",big:"⛈️",options:[{t:"Lightning",d:"⚡"},{t:"Rainbows only",d:"🌈"}],correct:0}
    ]},
    { group:"🔬 Science", id:"foodhealth", title:"Food & Health", emoji:"🍎", color:"#22C55E", questions:[
      {q:"Which do we drink to stay healthy?",big:"💧 🔥",options:[{t:"Water",d:"💧"},{t:"Fire",d:"🔥"}],correct:0},
      {q:"Which is a healthy snack?",big:"🍎 🍭",options:[{t:"Apple",d:"🍎"},{t:"Lollipop",d:"🍭"}],correct:0},
      {q:"We should brush our teeth...?",big:"🪥",options:[{t:"Every day",d:"🔁"},{t:"Never",d:"🚫"}],correct:0},
      {q:"Which gives energy to play?",big:"🥗",options:[{t:"Good food",d:"🍎"},{t:"Toys",d:"🧸"}],correct:0},
      {q:"Before eating we wash our...?",big:"🧼",options:[{t:"Hands",d:"✋"},{t:"Shoes",d:"👟"}],correct:0},
      {q:"Which helps us grow strong?",big:"🥛",options:[{t:"Milk",d:"🥛"},{t:"Soda",d:"🥤"}],correct:0},
      {q:"Exercise keeps our body...?",big:"🏃",options:[{t:"Healthy and strong",d:"💪"},{t:"Sleepy all day",d:"😴"}],correct:0}
    ]},
    { group:"🔬 Science", id:"earthspace", title:"Earth & Space", emoji:"🌍", color:"#22C55E", questions:[
      {q:"We live on planet...?",big:"🌍",options:[{t:"Earth",d:"🌍"},{t:"Sun",d:"☀️"}],correct:0},
      {q:"Which shines at night?",big:"🌙 ⭐",options:[{t:"Moon and stars",d:"🌙"},{t:"The sun",d:"☀️"}],correct:0},
      {q:"The sun is a giant ball of...?",big:"☀️",options:[{t:"Hot fire and light",d:"🔥"},{t:"Ice",d:"🧊"}],correct:0},
      {q:"Most of Earth is covered by...?",big:"🌊",options:[{t:"Water",d:"💧"},{t:"Sand",d:"🏜️"}],correct:0},
      {q:"Astronauts travel in a...?",big:"🚀",options:[{t:"Rocket",d:"🚀"},{t:"Car",d:"🚗"}],correct:0},
      {q:"Day and night happen because Earth...?",big:"🔄",options:[{t:"Spins around",d:"🌍"},{t:"Stops",d:"🛑"}],correct:0}
    ]},

    /* -------- ENGLISH -------- */
    { group:"🔤 English", id:"alphabet", title:"Alphabet", emoji:"🔤", color:"#EF4444", questions:[
      {q:"Which letter comes after A?",big:"A ➡️ ❓",options:[{t:"B",d:"B"},{t:"C",d:"C"},{t:"D",d:"D"}],correct:0},
      {q:"Which comes after D?",big:"D ➡️ ❓",options:[{t:"E",d:"E"},{t:"F",d:"F"}],correct:0},
      {q:"Which comes BEFORE B?",big:"❓ ⬅️ B",options:[{t:"A",d:"A"},{t:"C",d:"C"}],correct:0},
      {q:"Which is a CAPITAL letter?",big:"A · b · c",options:[{t:"A",d:"A"},{t:"b",d:"b"}],correct:0},
      {q:"Which is a small letter?",big:"m · Q · R",options:[{t:"m",d:"m"},{t:"Q",d:"Q"}],correct:0},
      {q:"First letter of the alphabet?",big:"🔤",options:[{t:"A",d:"A"},{t:"Z",d:"Z"}],correct:0},
      {q:"Last letter of the alphabet?",big:"🔤",options:[{t:"Z",d:"Z"},{t:"A",d:"A"}],correct:0},
      {q:"Which comes after M?",big:"M ➡️ ❓",options:[{t:"N",d:"N"},{t:"L",d:"L"}],correct:0},
      {q:"Match capital B to small...?",big:"B ➡️ ❓",options:[{t:"b",d:"b"},{t:"d",d:"d"}],correct:0},
      {q:"Which comes BEFORE Z?",big:"❓ ⬅️ Z",options:[{t:"Y",d:"Y"},{t:"X",d:"X"}],correct:0}
    ]},
    { group:"🔤 English", id:"sounds", title:"First-Letter Sounds", emoji:"🔊", color:"#EF4444", questions:[
      {q:"Cat starts with?",big:"🐱 = _AT",options:[{t:"C",d:"C"},{t:"B",d:"B"},{t:"S",d:"S"}],correct:0},
      {q:"Apple starts with?",big:"🍎",options:[{t:"A",d:"A"},{t:"E",d:"E"}],correct:0},
      {q:"Dog starts with?",big:"🐶",options:[{t:"D",d:"D"},{t:"B",d:"B"}],correct:0},
      {q:"Sun starts with?",big:"☀️",options:[{t:"S",d:"S"},{t:"M",d:"M"}],correct:0},
      {q:"Ball starts with?",big:"⚽",options:[{t:"B",d:"B"},{t:"P",d:"P"}],correct:0},
      {q:"Fish starts with?",big:"🐟",options:[{t:"F",d:"F"},{t:"V",d:"V"}],correct:0},
      {q:"Moon starts with?",big:"🌙",options:[{t:"M",d:"M"},{t:"N",d:"N"}],correct:0},
      {q:"Tree starts with?",big:"🌳",options:[{t:"T",d:"T"},{t:"D",d:"D"}],correct:0},
      {q:"Egg starts with?",big:"🥚",options:[{t:"E",d:"E"},{t:"A",d:"A"}],correct:0},
      {q:"Kite starts with?",big:"🪁",options:[{t:"K",d:"K"},{t:"C",d:"C"}],correct:0}
    ]},
    { group:"🔤 English", id:"rhymes", title:"Rhyming Words", emoji:"🎵", color:"#EF4444", questions:[
      {q:"Rhymes with CAT?",big:"🐱",options:[{t:"Hat",d:"🎩"},{t:"Dog",d:"🐶"},{t:"Sun",d:"☀️"}],correct:0},
      {q:"Rhymes with STAR?",big:"⭐",options:[{t:"Car",d:"🚗"},{t:"Bed",d:"🛏️"}],correct:0},
      {q:"Rhymes with BEE?",big:"🐝",options:[{t:"Tree",d:"🌳"},{t:"Cup",d:"☕"}],correct:0},
      {q:"Rhymes with DOG?",big:"🐶",options:[{t:"Frog",d:"🐸"},{t:"Fish",d:"🐟"}],correct:0},
      {q:"Rhymes with SUN?",big:"☀️",options:[{t:"Bun",d:"🍞"},{t:"Cat",d:"🐱"}],correct:0},
      {q:"Rhymes with BALL?",big:"⚽",options:[{t:"Wall",d:"🧱"},{t:"Book",d:"📖"}],correct:0},
      {q:"Rhymes with MOUSE?",big:"🐭",options:[{t:"House",d:"🏠"},{t:"Car",d:"🚗"}],correct:0}
    ]},
    { group:"🔤 English", id:"opposites", title:"Opposites", emoji:"↔️", color:"#EF4444", questions:[
      {q:"Opposite of BIG?",big:"🐘 ↔️ ❓",options:[{t:"Small",d:"🐜"},{t:"Tall",d:"📏"}],correct:0},
      {q:"Opposite of HOT?",big:"🔥 ↔️ ❓",options:[{t:"Cold",d:"❄️"},{t:"Fast",d:"💨"}],correct:0},
      {q:"Opposite of UP?",big:"⬆️ ↔️ ❓",options:[{t:"Down",d:"⬇️"},{t:"Left",d:"⬅️"}],correct:0},
      {q:"Opposite of DAY?",big:"☀️ ↔️ ❓",options:[{t:"Night",d:"🌙"},{t:"Sun",d:"☀️"}],correct:0},
      {q:"Opposite of HAPPY?",big:"😀 ↔️ ❓",options:[{t:"Sad",d:"😢"},{t:"Fast",d:"🏃"}],correct:0},
      {q:"Opposite of OPEN?",big:"📖 ↔️ ❓",options:[{t:"Closed",d:"📕"},{t:"Big",d:"🐘"}],correct:0},
      {q:"Opposite of FAST?",big:"🐆 ↔️ ❓",options:[{t:"Slow",d:"🐢"},{t:"Hot",d:"🔥"}],correct:0},
      {q:"Opposite of FULL?",big:"🍶 ↔️ ❓",options:[{t:"Empty",d:"🫙"},{t:"Tall",d:"📏"}],correct:0},
      {q:"Opposite of WET?",big:"💧 ↔️ ❓",options:[{t:"Dry",d:"🏜️"},{t:"Cold",d:"❄️"}],correct:0}
    ]},
    { group:"🔤 English", id:"words", title:"Naming Words", emoji:"📝", color:"#EF4444", questions:[
      {q:"Which is an animal name?",big:"🐘 🍎 🚗",options:[{t:"Elephant",d:"🐘"},{t:"Apple",d:"🍎"},{t:"Car",d:"🚗"}],correct:0},
      {q:"Which is a colour?",big:"🔴",options:[{t:"Red",d:"🔴"},{t:"Run",d:"🏃"}],correct:0},
      {q:"Which is a fruit name?",big:"🍌",options:[{t:"Banana",d:"🍌"},{t:"Table",d:"🪑"}],correct:0},
      {q:"Which names a place?",big:"🏫",options:[{t:"School",d:"🏫"},{t:"Jump",d:"🦘"}],correct:0},
      {q:"Which is a thing to sit on?",big:"🪑",options:[{t:"Chair",d:"🪑"},{t:"Milk",d:"🥛"}],correct:0},
      {q:"Which is a body part?",big:"👂",options:[{t:"Ear",d:"👂"},{t:"Bus",d:"🚌"}],correct:0},
      {q:"Which is a doing word (action)?",big:"🏃",options:[{t:"Run",d:"🏃"},{t:"Apple",d:"🍎"}],correct:0}
    ]},
    { group:"🔤 English", id:"vowels", title:"Vowels", emoji:"🅰️", color:"#EF4444", questions:[
      {q:"Which is a vowel?",big:"A · B · C",options:[{t:"A",d:"A"},{t:"B",d:"B"},{t:"C",d:"C"}],correct:0},
      {q:"Which is a vowel?",big:"D · E · F",options:[{t:"E",d:"E"},{t:"D",d:"D"}],correct:0},
      {q:"Which is a vowel?",big:"I · J · K",options:[{t:"I",d:"I"},{t:"K",d:"K"}],correct:0},
      {q:"How many vowels: A E I O U?",big:"A E I O U",options:[{t:"Five",d:"5"},{t:"Three",d:"3"}],correct:0},
      {q:"Which is a vowel?",big:"O · P · Q",options:[{t:"O",d:"O"},{t:"P",d:"P"}],correct:0},
      {q:"Which is a vowel?",big:"U · T · S",options:[{t:"U",d:"U"},{t:"T",d:"T"}],correct:0},
      {q:"Is B a vowel or consonant?",big:"B",options:[{t:"Consonant (not a vowel)",d:"🔤"},{t:"Vowel",d:"🅰️"}],correct:0}
    ]},
    { group:"🔤 English", id:"plurals", title:"One & Many", emoji:"➕", color:"#EF4444", questions:[
      {q:"One cat, many...?",big:"🐱 ➡️ 🐱🐱",options:[{t:"Cats",d:"🐱🐱"},{t:"Cat",d:"🐱"}],correct:0},
      {q:"One dog, two...?",big:"🐶 ➡️ 🐶🐶",options:[{t:"Dogs",d:"🐶🐶"},{t:"Doges",d:"❌"}],correct:0},
      {q:"Many apples is spelled apple...?",big:"🍎🍎",options:[{t:"Apples (add s)",d:"s"},{t:"Applez",d:"z"}],correct:0},
      {q:"One box, many...?",big:"📦 ➡️ 📦📦",options:[{t:"Boxes",d:"📦📦"},{t:"Boxs",d:"❌"}],correct:0},
      {q:"Which shows MANY?",big:"⭐ vs ⭐⭐⭐",options:[{t:"Three stars",d:"⭐⭐⭐"},{t:"One star",d:"⭐"}],correct:0},
      {q:"One bus, two...?",big:"🚌 ➡️ 🚌🚌",options:[{t:"Buses",d:"🚌🚌"},{t:"Bus",d:"🚌"}],correct:0}
    ]},
    { group:"🔤 English", id:"mem-letters", title:"Memory: Big & Small Letters", emoji:"🧠", color:"#EF4444", type:"memory", intro:"Match big letters to small letters!", pairs:[
      {0:"A",1:"a",say:"big A",say2:"small a"},
      {0:"B",1:"b",say:"big B",say2:"small b"},
      {0:"C",1:"c",say:"big C",say2:"small c"},
      {0:"D",1:"d",say:"big D",say2:"small d"}
    ]},

    /* -------- REASONING -------- */
    { group:"🧠 Reasoning", id:"oddoneout", title:"Odd One Out", emoji:"❓", color:"#8B5CF6", questions:[
      {q:"Find the odd one out.",big:"🍎 🍌 🍊 ⚽",options:[{t:"Football",d:"⚽"},{t:"Banana",d:"🍌"},{t:"Orange",d:"🍊"}],correct:0},
      {q:"Find the odd one out.",big:"🐶 🐱 🐰 🚙",options:[{t:"Car",d:"🚙"},{t:"Cat",d:"🐱"}],correct:0},
      {q:"Find the odd one out.",big:"🔴 🔵 🟢 🍕",options:[{t:"Pizza",d:"🍕"},{t:"Red dot",d:"🔴"}],correct:0},
      {q:"Find the odd one out.",big:"👕 👖 🧦 🍎",options:[{t:"Apple",d:"🍎"},{t:"Shirt",d:"👕"}],correct:0},
      {q:"Find the odd one out.",big:"🚗 🚌 🚲 🐟",options:[{t:"Fish",d:"🐟"},{t:"Bus",d:"🚌"}],correct:0},
      {q:"Find the odd one out.",big:"1️⃣ 2️⃣ 3️⃣ 🅰️",options:[{t:"Letter A",d:"🅰️"},{t:"Two",d:"2️⃣"}],correct:0},
      {q:"Find the odd one out.",big:"🌞 🌙 ⭐ 🍔",options:[{t:"Burger",d:"🍔"},{t:"Moon",d:"🌙"}],correct:0},
      {q:"Find the odd one out.",big:"🐝 🦋 🐞 🐘",options:[{t:"Elephant (not an insect)",d:"🐘"},{t:"Bee",d:"🐝"}],correct:0}
    ]},
    { group:"🧠 Reasoning", id:"series", title:"What Comes Next", emoji:"🔢", color:"#8B5CF6", questions:[
      {q:"What comes next?",big:"🔵 🔵 🔴 🔵 🔵 ❓",options:[{t:"Red",d:"🔴"},{t:"Blue",d:"🔵"}],correct:0},
      {q:"What number is next?",big:"1 · 2 · 3 · ❓",options:[{t:"Four",d:"4"},{t:"Six",d:"6"}],correct:0},
      {q:"What comes next?",big:"🌑 🌓 🌕 ❓",options:[{t:"Moon shape",d:"🌗"},{t:"Star",d:"⭐"}],correct:0},
      {q:"What comes next?",big:"👏👏 👏👏👏 ❓",options:[{t:"Four claps",d:"👏👏👏👏"},{t:"One clap",d:"👏"}],correct:0},
      {q:"What number is next?",big:"2 · 4 · 6 · ❓",options:[{t:"Eight",d:"8"},{t:"Seven",d:"7"}],correct:0},
      {q:"What comes next?",big:"🔺 🔺🔺 🔺🔺🔺 ❓",options:[{t:"Four triangles",d:"🔺🔺🔺🔺"},{t:"One triangle",d:"🔺"}],correct:0},
      {q:"What number is next?",big:"5 · 4 · 3 · ❓",options:[{t:"Two",d:"2"},{t:"Six",d:"6"}],correct:0}
    ]},
    { group:"🧠 Reasoning", id:"analogy", title:"Goes Together", emoji:"➡️", color:"#8B5CF6", questions:[
      {q:"Bird is to sky as fish is to...?",big:"🐦→☁️ , 🐟→❓",options:[{t:"Water",d:"🌊"},{t:"Tree",d:"🌳"}],correct:0},
      {q:"Hand is to glove as foot is to...?",big:"✋→🧤 , 🦶→❓",options:[{t:"Sock",d:"🧦"},{t:"Hat",d:"🎩"}],correct:0},
      {q:"Cow is to milk as bee is to...?",big:"🐄→🥛 , 🐝→❓",options:[{t:"Honey",d:"🍯"},{t:"Water",d:"💧"}],correct:0},
      {q:"Day is to sun as night is to...?",big:"☀️ , ❓",options:[{t:"Moon",d:"🌙"},{t:"Rain",d:"🌧️"}],correct:0},
      {q:"Dog is to puppy as cat is to...?",big:"🐕→🐶 , 🐈→❓",options:[{t:"Kitten",d:"🐱"},{t:"Chick",d:"🐤"}],correct:0},
      {q:"Rain is to umbrella as sun is to...?",big:"🌧️→☂️ , ☀️→❓",options:[{t:"Sunglasses",d:"🕶️"},{t:"Boots",d:"🥾"}],correct:0},
      {q:"Fire is to hot as ice is to...?",big:"🔥→🥵 , 🧊→❓",options:[{t:"Cold",d:"🥶"},{t:"Fast",d:"💨"}],correct:0}
    ]},
    { group:"🧠 Reasoning", id:"samediff", title:"Same & Different", emoji:"🔍", color:"#8B5CF6", questions:[
      {q:"Which two are the SAME?",big:"🍎 🍎 🍌",options:[{t:"The two apples",d:"🍎🍎"},{t:"Apple & banana",d:"🍎🍌"}],correct:0},
      {q:"Which one is DIFFERENT?",big:"⭐ ⭐ 🌙",options:[{t:"The moon",d:"🌙"},{t:"A star",d:"⭐"}],correct:0},
      {q:"Which matches ⬛?",big:"⬛ ➡️ ❓",options:[{t:"Square",d:"⬛"},{t:"Circle",d:"⭕"}],correct:0},
      {q:"Which is the same colour as 🔴?",big:"🔴 ➡️ ❓",options:[{t:"Red heart",d:"❤️"},{t:"Blue heart",d:"💙"}],correct:0},
      {q:"Which is NOT like the others?",big:"🐶 🐶 🐱",options:[{t:"The cat",d:"🐱"},{t:"A dog",d:"🐶"}],correct:0},
      {q:"Which two shapes match?",big:"🔺 🔺 ⭕",options:[{t:"The two triangles",d:"🔺🔺"},{t:"Triangle & circle",d:"🔺⭕"}],correct:0}
    ]},
    { group:"🧠 Reasoning", id:"ranking", title:"Ranking", emoji:"🏅", color:"#8B5CF6", questions:[
      {q:"Who is the TALLEST?",big:"🦒 🐕 🐈",options:[{t:"Giraffe",d:"🦒"},{t:"Cat",d:"🐈"}],correct:0},
      {q:"Which is the FASTEST?",big:"🚀 🚗 🚲",options:[{t:"Rocket",d:"🚀"},{t:"Bicycle",d:"🚲"}],correct:0},
      {q:"Who came FIRST (gold medal)?",big:"🥇🥈🥉",options:[{t:"Gold",d:"🥇"},{t:"Bronze",d:"🥉"}],correct:0},
      {q:"Which is the HEAVIEST?",big:"🐘 🐕 🐜",options:[{t:"Elephant",d:"🐘"},{t:"Ant",d:"🐜"}],correct:0},
      {q:"Which tower is TALLEST?",big:"🧱 🏢 🗼",options:[{t:"The tall tower",d:"🗼"},{t:"One brick",d:"🧱"}],correct:0},
      {q:"Which is the OLDEST usually?",big:"👶 🧒 👵",options:[{t:"Grandma",d:"👵"},{t:"Baby",d:"👶"}],correct:0}
    ]}
  ]}
};

/* ---- content block 7 ---- */
(function(){
  var C = window.__CONTENT__; if(!C) return;
  var AL="#7C5CFC", DA="#14B8A6", MA="#3B82F6", SC="#22C55E", EN="#EF4444", RE="#8B5CF6";

  /* ============ ALGORITHMS · LEVEL 2 ============ */
  C.algorithms.topics.push(
    { level:2, id:"l2-multistep", title:"Multi-Step Plans", emoji:"🗺️", color:AL, questions:[
      {q:"What is the SECOND step of making tea?",big:"1) Boil water 💧<br>2) Add tea 🌿<br>3) Pour in cup ☕",options:[{t:"Add tea",d:"🌿"},{t:"Boil water",d:"💧"},{t:"Pour in cup",d:"☕"}],correct:0},
      {q:"Getting dressed: socks, then shoes, then tie laces. What is LAST?",big:"👟",options:[{t:"Tie laces",d:"🎀"},{t:"Put on socks",d:"🧦"}],correct:0},
      {q:"Planting: 1) dig hole 2) drop seed 3) cover soil 4) water it. What is THIRD?",big:"🌱",options:[{t:"Cover with soil",d:"🟤"},{t:"Water it",d:"💦"},{t:"Dig hole",d:"🕳️"}],correct:0},
      {q:"To post a letter you FIRST need to...?",big:"✉️",options:[{t:"Write the letter",d:"✍️"},{t:"Drop it in the box",d:"📮"}],correct:0},
      {q:"Brush teeth: wet brush → add paste → brush → rinse. What comes right AFTER adding paste?",big:"🪥",options:[{t:"Brush your teeth",d:"😁"},{t:"Rinse",d:"💧"}],correct:0},
      {q:"Baking: mix → pour in tin → bake → eat. What is just BEFORE baking?",big:"🎂",options:[{t:"Pour into tin",d:"🥧"},{t:"Eat it",d:"😋"}],correct:0},
      {q:"Crossing the road: stop → look → listen → walk. What is FIRST?",big:"🚸",options:[{t:"Stop",d:"🛑"},{t:"Walk",d:"🚶"}],correct:0},
      {q:"Which plan is in the RIGHT order?",big:"🥪",options:[{t:"Get bread → add filling → eat",d:"✅"},{t:"Eat → get bread → add filling",d:"❌"}],correct:0}
    ]},
    { level:2, id:"l2-growpattern", title:"Growing Patterns", emoji:"📈", color:AL, questions:[
      {q:"What comes next?",big:"🔴 · 🔴🔴 · 🔴🔴🔴 · ❓",options:[{t:"Four dots",d:"🔴🔴🔴🔴"},{t:"One dot",d:"🔴"}],correct:0},
      {q:"ABC pattern — what's next?",big:"🔺 🟦 🟢 🔺 🟦 ❓",options:[{t:"Green",d:"🟢"},{t:"Triangle",d:"🔺"}],correct:0},
      {q:"What comes next?",big:"⭐ · ⭐⭐ · ⭐⭐⭐ · ❓",options:[{t:"Four stars",d:"⭐⭐⭐⭐"},{t:"Two stars",d:"⭐⭐"}],correct:0},
      {q:"Numbers grow: 2, 4, 6, 8, ❓",big:"2·4·6·8·❓",options:[{t:"Ten",d:"10"},{t:"Nine",d:"9"}],correct:0},
      {q:"What comes next?",big:"🟥 🟨 🟦 🟥 🟨 🟦 ❓",options:[{t:"Red",d:"🟥"},{t:"Blue",d:"🟦"}],correct:0},
      {q:"Shrinking pattern — what's next?",big:"🔵🔵🔵 · 🔵🔵 · ❓",options:[{t:"One circle",d:"🔵"},{t:"Four circles",d:"🔵🔵🔵🔵"}],correct:0},
      {q:"Count by 5: 5, 10, 15, ❓",big:"5·10·15·❓",options:[{t:"Twenty",d:"20"},{t:"Sixteen",d:"16"}],correct:0},
      {q:"How does this pattern grow?",big:"🐤<br>🐤🐤<br>🐤🐤🐤<br>❓",options:[{t:"Add one more each time",d:"➕1"},{t:"Take one away",d:"➖1"}],correct:0}
    ]},
    { level:2, id:"l2-robotcode", title:"Follow the Robot", emoji:"🤖", color:AL, questions:[
      {q:"Robot moves ➡️➡️. It started at 0. Where is it now?",big:"0 ➡️➡️",options:[{t:"At 2",d:"2️⃣"},{t:"At 5",d:"5️⃣"}],correct:0},
      {q:"Robot goes ⬆️⬆️⬆️ up the stairs. How many steps up?",big:"⬆️⬆️⬆️",options:[{t:"Three",d:"3"},{t:"Two",d:"2"}],correct:0},
      {q:"Code: ➡️ then ⬇️. Which way LAST?",big:"➡️⬇️",options:[{t:"Down",d:"⬇️"},{t:"Right",d:"➡️"}],correct:0},
      {q:"Robot repeats 🔁 'hop' 4 times. How many hops?",big:"🔁🐰",options:[{t:"Four",d:"4"},{t:"One",d:"1"}],correct:0},
      {q:"To reach the ⭐, robot at start should go...?",big:"🤖 ➡️➡️ ⭐",options:[{t:"Right",d:"➡️"},{t:"Left",d:"⬅️"}],correct:0},
      {q:"Robot goes ⬆️⬆️ then ⬇️. How many steps up is it now?",big:"⬆️⬆️⬇️",options:[{t:"One up",d:"1️⃣"},{t:"Three up",d:"3️⃣"}],correct:0},
      {q:"Which code makes the robot go up then right?",big:"❓",options:[{t:"⬆️ ➡️",d:"⬆️➡️"},{t:"⬇️ ⬅️",d:"⬇️⬅️"}],correct:0}
    ]},
    { level:2, id:"l2-sort4", title:"Sort 4 in Order 🎮", emoji:"📊", color:AL, type:"order", rounds:[
      {q:"Tap 1 to 6 in order!",items:[{d:"1",v:1},{d:"2",v:2},{d:"3",v:3},{d:"4",v:4},{d:"5",v:5},{d:"6",v:6}]},
      {q:"Smallest to biggest — tap in order!",items:[{d:"🐜",v:1,say:"ant"},{d:"🐭",v:2,say:"mouse"},{d:"🐰",v:3,say:"rabbit"},{d:"🐕",v:4,say:"dog"},{d:"🐘",v:5,say:"elephant"}]},
      {q:"Count by 2 — tap 2,4,6,8,10!",items:[{d:"2",v:2,say:"two"},{d:"4",v:4,say:"four"},{d:"6",v:6,say:"six"},{d:"8",v:8,say:"eight"},{d:"10",v:10,say:"ten"}]},
      {q:"Tap the teen numbers 11 to 14!",items:[{d:"11",v:11},{d:"12",v:12},{d:"13",v:13},{d:"14",v:14}]}
    ]}
  );

  /* ============ DATA · LEVEL 2 ============ */
  C.data.topics.push(
    { level:2, id:"l2-stackpuzzle", title:"Stack & Queue Puzzles", emoji:"🧩", color:DA, questions:[
      {q:"3 plates are stacked. You add 2 more. How many now?",big:"🍽️×3 ➕2",options:[{t:"Five",d:"5"},{t:"Three",d:"3"}],correct:0},
      {q:"5 books stacked. You take 2 off the top. How many left?",big:"📚×5 ➖2",options:[{t:"Three",d:"3"},{t:"Seven",d:"7"}],correct:0},
      {q:"6 kids in line. 2 more join the back. How many in line?",big:"🧒×6 ➕2",options:[{t:"Eight",d:"8"},{t:"Four",d:"4"}],correct:0},
      {q:"4 cars in a queue. Front car drives off. How many left?",big:"🚗×4 ➖1",options:[{t:"Three",d:"3"},{t:"Five",d:"5"}],correct:0},
      {q:"You push 🔴 then 🔵 then 🟢 on a stack. Which comes off FIRST?",big:"🟢⬆️",options:[{t:"Green (top)",d:"🟢"},{t:"Red (bottom)",d:"🔴"}],correct:0},
      {q:"In a queue you push 🐶 🐱 🐰. Which leaves FIRST?",big:"➡️",options:[{t:"Dog (was first)",d:"🐶"},{t:"Rabbit (was last)",d:"🐰"}],correct:0},
      {q:"Stack has 2 blocks. Add 3, then take 1 off top. How many now?",big:"🧱 2➕3➖1",options:[{t:"Four",d:"4"},{t:"Six",d:"6"}],correct:0}
    ]},
    { level:2, id:"l2-sortgroup", title:"Sort into Groups", emoji:"🗂️", color:DA, questions:[
      {q:"Which group does 🍎 belong to?",big:"🍎",options:[{t:"Fruits",d:"🍇"},{t:"Vehicles",d:"🚗"}],correct:0},
      {q:"Which group does 🚌 belong to?",big:"🚌",options:[{t:"Things that go",d:"🚗"},{t:"Animals",d:"🐄"}],correct:0},
      {q:"Sort 🐟: land animal or water animal?",big:"🐟",options:[{t:"Water animal",d:"🌊"},{t:"Land animal",d:"🌳"}],correct:0},
      {q:"Sort 🍌 🍊 🍎 — they are all...?",big:"🍌🍊🍎",options:[{t:"Fruits",d:"🧺"},{t:"Toys",d:"🧸"}],correct:0},
      {q:"Which does NOT go in the 'things that fly' group?",big:"🐦 ✈️ 🚗",options:[{t:"Car",d:"🚗"},{t:"Plane",d:"✈️"}],correct:0},
      {q:"Sort 🥕 🥦 🌽 — they are all...?",big:"🥕🥦🌽",options:[{t:"Vegetables",d:"🥗"},{t:"Animals",d:"🐾"}],correct:0},
      {q:"👕 👖 🧦 belong to the group...?",big:"👕👖🧦",options:[{t:"Clothes",d:"🧺"},{t:"Food",d:"🍎"}],correct:0}
    ]},
    { level:2, id:"l2-tablegrid", title:"Rows & Columns", emoji:"🔲", color:DA, questions:[
      {q:"In a row: 🍎 🍌 🍇. Which is in the MIDDLE?",big:"🍎 🍌 🍇",options:[{t:"Banana",d:"🍌"},{t:"Apple",d:"🍎"}],correct:0},
      {q:"A grid has 2 rows of 2. How many boxes in all?",big:"🔲🔲\n🔲🔲",options:[{t:"Four",d:"4"},{t:"Two",d:"2"}],correct:0},
      {q:"Top row: ⭐⭐⭐. Bottom row: ⭐⭐. Which row has MORE?",big:"⭐⭐⭐\n⭐⭐",options:[{t:"Top row",d:"⬆️"},{t:"Bottom row",d:"⬇️"}],correct:0},
      {q:"Row of 5 seats. You sit in the LAST one. Which seat?",big:"💺💺💺💺💺",options:[{t:"Fifth",d:"5️⃣"},{t:"First",d:"1️⃣"}],correct:0},
      {q:"A grid with 3 rows of 3 has how many boxes?",big:"3 × 3",options:[{t:"Nine",d:"9"},{t:"Six",d:"6"}],correct:0},
      {q:"In column order 🔴 on top, 🔵 below. What is at the BOTTOM?",big:"🔴\n🔵",options:[{t:"Blue",d:"🔵"},{t:"Red",d:"🔴"}],correct:0}
    ]},
    { level:2, id:"l2-mem-homes", title:"Memory: Animal Homes", emoji:"🏠", color:DA, type:"memory", intro:"Match each animal to its home!", pairs:[
      {0:"🐝",1:"🍯",say:"bee",say2:"beehive"},
      {0:"🐦",1:"🪹",say:"bird",say2:"nest"},
      {0:"🐕",1:"🏠",say:"dog",say2:"kennel"},
      {0:"🐴",1:"🏚️",say:"horse",say2:"stable"}
    ]}
  );

  /* ============ OLYMPIAD · LEVEL 2 ============ */
  C.olympiad.topics.push(
    /* ---- MATH L2 ---- */
    { level:2, group:"🔢 Math", id:"l2-teens", title:"Numbers to 20", emoji:"🔢", color:MA, questions:[
      {q:"What comes after 12?",big:"12 ➡️ ❓",options:[{t:"Thirteen",d:"13"},{t:"Eleven",d:"11"}],correct:0},
      {q:"What comes before 15?",big:"❓ ⬅️ 15",options:[{t:"Fourteen",d:"14"},{t:"Sixteen",d:"16"}],correct:0},
      {q:"Which is 'seventeen'?",big:"🔢",options:[{t:"17",d:"17"},{t:"70",d:"70"}],correct:0},
      {q:"What comes between 18 and 20?",big:"18 · ❓ · 20",options:[{t:"Nineteen",d:"19"},{t:"Seventeen",d:"17"}],correct:0},
      {q:"Which is BIGGER, 14 or 19?",big:"14 · 19",options:[{t:"Nineteen",d:"19"},{t:"Fourteen",d:"14"}],correct:0},
      {q:"Count on: 16, 17, 18, ❓",big:"16·17·18·❓",options:[{t:"Nineteen",d:"19"},{t:"Twenty",d:"20"}],correct:0},
      {q:"Which is SMALLER, 11 or 13?",big:"11 · 13",options:[{t:"Eleven",d:"11"},{t:"Thirteen",d:"13"}],correct:0},
      {q:"What number is 1 more than 19?",big:"19 ➕1",options:[{t:"Twenty",d:"20"},{t:"Eighteen",d:"18"}],correct:0}
    ]},
    { level:2, group:"🔢 Math", id:"l2-add20", title:"Add to 20", emoji:"➕", color:MA, questions:[
      {q:"7 + 5 = ?",big:"7 ➕ 5",options:[{t:"Twelve",d:"12"},{t:"Eleven",d:"11"},{t:"Thirteen",d:"13"}],correct:0},
      {q:"8 + 6 = ?",big:"8 ➕ 6",options:[{t:"Fourteen",d:"14"},{t:"Thirteen",d:"13"}],correct:0},
      {q:"9 + 9 = ?",big:"9 ➕ 9",options:[{t:"Eighteen",d:"18"},{t:"Nineteen",d:"19"}],correct:0},
      {q:"6 + 6 = ?",big:"6 ➕ 6",options:[{t:"Twelve",d:"12"},{t:"Ten",d:"10"}],correct:0},
      {q:"10 + 5 = ?",big:"10 ➕ 5",options:[{t:"Fifteen",d:"15"},{t:"Fifty",d:"50"}],correct:0},
      {q:"7 + 7 = ?",big:"7 ➕ 7",options:[{t:"Fourteen",d:"14"},{t:"Twelve",d:"12"}],correct:0},
      {q:"8 + 4 = ?",big:"8 ➕ 4",options:[{t:"Twelve",d:"12"},{t:"Eleven",d:"11"}],correct:0},
      {q:"10 + 10 = ?",big:"10 ➕ 10",options:[{t:"Twenty",d:"20"},{t:"Ten",d:"10"}],correct:0},
      {q:"9 + 4 = ?",big:"9 ➕ 4",options:[{t:"Thirteen",d:"13"},{t:"Fourteen",d:"14"}],correct:0}
    ]},
    { level:2, group:"🔢 Math", id:"l2-sub20", title:"Take Away to 20", emoji:"➖", color:MA, questions:[
      {q:"15 − 5 = ?",big:"15 ➖ 5",options:[{t:"Ten",d:"10"},{t:"Twenty",d:"20"}],correct:0},
      {q:"12 − 4 = ?",big:"12 ➖ 4",options:[{t:"Eight",d:"8"},{t:"Six",d:"6"}],correct:0},
      {q:"18 − 8 = ?",big:"18 ➖ 8",options:[{t:"Ten",d:"10"},{t:"Nine",d:"9"}],correct:0},
      {q:"14 − 7 = ?",big:"14 ➖ 7",options:[{t:"Seven",d:"7"},{t:"Eight",d:"8"}],correct:0},
      {q:"20 − 10 = ?",big:"20 ➖ 10",options:[{t:"Ten",d:"10"},{t:"Zero",d:"0"}],correct:0},
      {q:"11 − 3 = ?",big:"11 ➖ 3",options:[{t:"Eight",d:"8"},{t:"Nine",d:"9"}],correct:0},
      {q:"16 − 6 = ?",big:"16 ➖ 6",options:[{t:"Ten",d:"10"},{t:"Twelve",d:"12"}],correct:0},
      {q:"13 − 10 = ?",big:"13 ➖ 10",options:[{t:"Three",d:"3"},{t:"Two",d:"2"}],correct:0}
    ]},
    { level:2, group:"🔢 Math", id:"l2-word", title:"Word Problems", emoji:"📖", color:MA, questions:[
      {q:"Ravi has 4 sweets. He buys 3 more. How many now?",big:"🍬4 ➕3",options:[{t:"Seven",d:"7"},{t:"One",d:"1"}],correct:0},
      {q:"Meena had 8 balloons. 2 flew away. How many left?",big:"🎈8 ➖2",options:[{t:"Six",d:"6"},{t:"Ten",d:"10"}],correct:0},
      {q:"5 birds sit on a tree. 4 more come. How many birds?",big:"🐦5 ➕4",options:[{t:"Nine",d:"9"},{t:"One",d:"1"}],correct:0},
      {q:"There are 10 cookies. You eat 3. How many are left?",big:"🍪10 ➖3",options:[{t:"Seven",d:"7"},{t:"Thirteen",d:"13"}],correct:0},
      {q:"Sam has 6 red and 2 blue pens. How many pens in all?",big:"🖊️6 ➕2",options:[{t:"Eight",d:"8"},{t:"Four",d:"4"}],correct:0},
      {q:"A basket has 9 apples. 5 are taken out. How many stay?",big:"🍎9 ➖5",options:[{t:"Four",d:"4"},{t:"Fourteen",d:"14"}],correct:0},
      {q:"7 kids are playing. 3 go home. How many still play?",big:"🧒7 ➖3",options:[{t:"Four",d:"4"},{t:"Ten",d:"10"}],correct:0},
      {q:"You have 2 boxes with 5 pencils each. How many pencils?",big:"✏️5 ➕5",options:[{t:"Ten",d:"10"},{t:"Seven",d:"7"}],correct:0}
    ]},
    { level:2, group:"🔢 Math", id:"l2-missing", title:"Missing Number", emoji:"❔", color:MA, questions:[
      {q:"3 + ❓ = 5",big:"3 ➕ ❓ = 5",options:[{t:"Two",d:"2"},{t:"Three",d:"3"}],correct:0},
      {q:"❓ + 2 = 6",big:"❓ ➕ 2 = 6",options:[{t:"Four",d:"4"},{t:"Two",d:"2"}],correct:0},
      {q:"4 + ❓ = 7",big:"4 ➕ ❓ = 7",options:[{t:"Three",d:"3"},{t:"Two",d:"2"}],correct:0},
      {q:"❓ − 1 = 4",big:"❓ ➖ 1 = 4",options:[{t:"Five",d:"5"},{t:"Three",d:"3"}],correct:0},
      {q:"5 + ❓ = 10",big:"5 ➕ ❓ = 10",options:[{t:"Five",d:"5"},{t:"Four",d:"4"}],correct:0},
      {q:"❓ + 3 = 8",big:"❓ ➕ 3 = 8",options:[{t:"Five",d:"5"},{t:"Six",d:"6"}],correct:0},
      {q:"10 − ❓ = 7",big:"10 ➖ ❓ = 7",options:[{t:"Three",d:"3"},{t:"Four",d:"4"}],correct:0}
    ]},
    { level:2, group:"🔢 Math", id:"l2-ordinal", title:"1st, 2nd, 3rd", emoji:"🥇", color:MA, questions:[
      {q:"Who finished FIRST?",big:"🥇🥈🥉",options:[{t:"Gold — 1st",d:"🥇"},{t:"Bronze — 3rd",d:"🥉"}],correct:0},
      {q:"In line 🐶 🐱 🐰 🐹, who is THIRD?",big:"🐶🐱🐰🐹",options:[{t:"Rabbit",d:"🐰"},{t:"Cat",d:"🐱"}],correct:0},
      {q:"Which floor is the SECOND from the bottom?",big:"🏢",options:[{t:"2nd floor",d:"2️⃣"},{t:"5th floor",d:"5️⃣"}],correct:0},
      {q:"The 1st letter of the alphabet is...?",big:"🔤",options:[{t:"A",d:"A"},{t:"C",d:"C"}],correct:0},
      {q:"In 🍎🍌🍇🍓🍊, which fruit is FOURTH?",big:"🍎🍌🍇🍓🍊",options:[{t:"Strawberry",d:"🍓"},{t:"Grapes",d:"🍇"}],correct:0},
      {q:"If you are LAST in a line of 3, which place are you?",big:"🧍🧍🧍",options:[{t:"Third",d:"3️⃣"},{t:"First",d:"1️⃣"}],correct:0}
    ]},
    { level:2, group:"🔢 Math", id:"l2-compare", title:"More, Less & Equal", emoji:"⚖️", color:MA, questions:[
      {q:"Which is MORE?",big:"13 · 8",options:[{t:"Thirteen",d:"13"},{t:"Eight",d:"8"}],correct:0},
      {q:"Which is LESS?",big:"6 · 11",options:[{t:"Six",d:"6"},{t:"Eleven",d:"11"}],correct:0},
      {q:"5 apples and 5 apples — are they...?",big:"🍎5 · 🍎5",options:[{t:"Equal (same)",d:"🟰"},{t:"Not equal",d:"≠"}],correct:0},
      {q:"Which sign means 'more than'? 7 __ 4",big:"7 ❓ 4",options:[{t:"Greater than (>)",d:">"},{t:"Less than (<)",d:"<"}],correct:0},
      {q:"Which group has FEWER?",big:"🐟🐟 · 🐟🐟🐟🐟",options:[{t:"The group of 2",d:"2️⃣"},{t:"The group of 4",d:"4️⃣"}],correct:0},
      {q:"12 is ___ than 9.",big:"12 ❓ 9",options:[{t:"More",d:"⬆️"},{t:"Less",d:"⬇️"}],correct:0},
      {q:"Which two are EQUAL?",big:"3+1 · 4 · 5",options:[{t:"3+1 and 4",d:"🟰"},{t:"4 and 5",d:"≠"}],correct:0}
    ]},
    { level:2, group:"🔢 Math", id:"l2-skiptrain", title:"Skip-Count Train 🎮", emoji:"🚂", color:MA, type:"order", rounds:[
      {q:"Count by 5! Tap 5, 10, 15, 20.",items:[{d:"5",v:5,say:"five"},{d:"10",v:10,say:"ten"},{d:"15",v:15,say:"fifteen"},{d:"20",v:20,say:"twenty"}]},
      {q:"Count by 10! Tap 10, 20, 30, 40, 50.",items:[{d:"10",v:10,say:"ten"},{d:"20",v:20,say:"twenty"},{d:"30",v:30,say:"thirty"},{d:"40",v:40,say:"forty"},{d:"50",v:50,say:"fifty"}]},
      {q:"Tap the teens in order: 11 to 15!",items:[{d:"11",v:11},{d:"12",v:12},{d:"13",v:13},{d:"14",v:14},{d:"15",v:15}]},
      {q:"Count by 2! Tap 2,4,6,8,10,12.",items:[{d:"2",v:2,say:"two"},{d:"4",v:4,say:"four"},{d:"6",v:6,say:"six"},{d:"8",v:8,say:"eight"},{d:"10",v:10,say:"ten"},{d:"12",v:12,say:"twelve"}]}
    ]},

    /* ---- SCIENCE L2 ---- */
    { level:2, group:"🔬 Science", id:"l2-matter", title:"Solid, Liquid & Melt", emoji:"🧊", color:SC, questions:[
      {q:"Ice is a solid. When it gets warm it turns into...?",big:"🧊 ➡️ ❓",options:[{t:"Water (liquid)",d:"💧"},{t:"Stone",d:"🪨"}],correct:0},
      {q:"Which one is a LIQUID?",big:"🥛 🧱 🍎",options:[{t:"Milk",d:"🥛"},{t:"Brick",d:"🧱"}],correct:0},
      {q:"Which one is a SOLID?",big:"💧 🪨 🌫️",options:[{t:"Rock",d:"🪨"},{t:"Water",d:"💧"}],correct:0},
      {q:"Water in the freezer turns into...?",big:"💧 ➡️ ❄️",options:[{t:"Ice",d:"🧊"},{t:"Steam",d:"💨"}],correct:0},
      {q:"Which can you pour?",big:"🧃 vs 🧱",options:[{t:"Juice",d:"🧃"},{t:"Brick",d:"🧱"}],correct:0},
      {q:"Hot water makes...?",big:"♨️",options:[{t:"Steam",d:"💨"},{t:"Ice",d:"🧊"}],correct:0},
      {q:"A rock keeps its shape, so it is a...?",big:"🪨",options:[{t:"Solid",d:"⬛"},{t:"Liquid",d:"💧"}],correct:0}
    ]},
    { level:2, group:"🔬 Science", id:"l2-babies", title:"Animal Babies", emoji:"🐣", color:SC, questions:[
      {q:"A baby dog is called a...?",big:"🐕",options:[{t:"Puppy",d:"🐶"},{t:"Kitten",d:"🐱"}],correct:0},
      {q:"A baby cat is called a...?",big:"🐈",options:[{t:"Kitten",d:"🐱"},{t:"Calf",d:"🐄"}],correct:0},
      {q:"A baby cow is called a...?",big:"🐄",options:[{t:"Calf",d:"🐮"},{t:"Puppy",d:"🐶"}],correct:0},
      {q:"A baby hen is called a...?",big:"🐔",options:[{t:"Chick",d:"🐤"},{t:"Cub",d:"🦁"}],correct:0},
      {q:"A baby frog is called a...?",big:"🐸",options:[{t:"Tadpole",d:"🐛"},{t:"Kitten",d:"🐱"}],correct:0},
      {q:"A baby sheep is called a...?",big:"🐑",options:[{t:"Lamb",d:"🐏"},{t:"Chick",d:"🐤"}],correct:0},
      {q:"A butterfly starts life as a...?",big:"🦋",options:[{t:"Caterpillar",d:"🐛"},{t:"Fish",d:"🐟"}],correct:0}
    ]},
    { level:2, group:"🔬 Science", id:"l2-pushpull", title:"Push & Pull", emoji:"🛒", color:SC, questions:[
      {q:"Opening a drawer is a...?",big:"🗄️",options:[{t:"Pull",d:"⬅️"},{t:"Throw",d:"🤾"}],correct:0},
      {q:"Kicking a ball is a...?",big:"⚽",options:[{t:"Push",d:"➡️"},{t:"Pull",d:"⬅️"}],correct:0},
      {q:"A magnet can PULL things made of...?",big:"🧲",options:[{t:"Metal",d:"🔩"},{t:"Paper",d:"📄"}],correct:0},
      {q:"Pushing a swing makes it...?",big:"🛝",options:[{t:"Move",d:"➡️"},{t:"Stop",d:"🛑"}],correct:0},
      {q:"A ball rolls DOWN a hill because of...?",big:"⛰️⚽",options:[{t:"Gravity pulling it",d:"⬇️"},{t:"Nothing",d:"🚫"}],correct:0},
      {q:"To make a wagon come to you, you...?",big:"🛒",options:[{t:"Pull it",d:"⬅️"},{t:"Push it away",d:"➡️"}],correct:0}
    ]},
    { level:2, group:"🔬 Science", id:"l2-senses", title:"Which Sense?", emoji:"👀", color:SC, questions:[
      {q:"Which sense do you use to enjoy music?",big:"🎵",options:[{t:"Hearing",d:"👂"},{t:"Sight",d:"👁️"}],correct:0},
      {q:"Which sense tells you a flower smells nice?",big:"🌸",options:[{t:"Smell",d:"👃"},{t:"Taste",d:"👅"}],correct:0},
      {q:"Which sense do you use to see a rainbow?",big:"🌈",options:[{t:"Sight",d:"👁️"},{t:"Touch",d:"✋"}],correct:0},
      {q:"Ice feels cold. Which sense is that?",big:"🧊",options:[{t:"Touch",d:"✋"},{t:"Hearing",d:"👂"}],correct:0},
      {q:"Which sense tells you a lemon is sour?",big:"🍋",options:[{t:"Taste",d:"👅"},{t:"Smell",d:"👃"}],correct:0},
      {q:"You use your ___ to feel if something is soft.",big:"🧸",options:[{t:"Hands (touch)",d:"✋"},{t:"Eyes",d:"👁️"}],correct:0}
    ]},

    /* ---- ENGLISH L2 ---- */
    { level:2, group:"🔤 English", id:"l2-sight", title:"Sight Words", emoji:"👁️", color:EN, questions:[
      {q:"Fill in: 'I ___ a cat.' (looking with eyes)",big:"👁️🐱",options:[{t:"see",d:"see"},{t:"sea",d:"sea"}],correct:0},
      {q:"Which word means more than one, joining words?",big:"➕",options:[{t:"and",d:"&"},{t:"the",d:"the"}],correct:0},
      {q:"'The dog ___ big.' Which word fits?",big:"🐶",options:[{t:"is",d:"is"},{t:"are",d:"are"}],correct:0},
      {q:"Which is a naming word for a person?",big:"🧑",options:[{t:"boy",d:"👦"},{t:"jump",d:"🦘"}],correct:0},
      {q:"'Let's ___ to the park.' Which word fits?",big:"🏞️",options:[{t:"go",d:"go"},{t:"got",d:"got"}],correct:0},
      {q:"Which small word points to a thing? '___ book is mine.'",big:"📖",options:[{t:"This",d:"👉"},{t:"Run",d:"🏃"}],correct:0},
      {q:"'You ___ my friend.' Which word fits?",big:"🤝",options:[{t:"are",d:"are"},{t:"is",d:"is"}],correct:0}
    ]},
    { level:2, group:"🔤 English", id:"l2-aan", title:"A or An", emoji:"🅰️", color:EN, questions:[
      {q:"Which is correct?",big:"🍎",options:[{t:"an apple",d:"🍎"},{t:"a apple",d:"❌"}],correct:0},
      {q:"Which is correct?",big:"🐶",options:[{t:"a dog",d:"🐶"},{t:"an dog",d:"❌"}],correct:0},
      {q:"Which is correct?",big:"🥚",options:[{t:"an egg",d:"🥚"},{t:"a egg",d:"❌"}],correct:0},
      {q:"Which is correct?",big:"🐱",options:[{t:"a cat",d:"🐱"},{t:"an cat",d:"❌"}],correct:0},
      {q:"Which is correct?",big:"☂️",options:[{t:"an umbrella",d:"☂️"},{t:"a umbrella",d:"❌"}],correct:0},
      {q:"We use 'an' before words that start with...?",big:"🅰️🅴🅸🅾️🆄",options:[{t:"a, e, i, o, u sounds",d:"🔤"},{t:"any letter",d:"❓"}],correct:0},
      {q:"Which is correct?",big:"🏠",options:[{t:"a house",d:"🏠"},{t:"an house",d:"❌"}],correct:0}
    ]},
    { level:2, group:"🔤 English", id:"l2-lastsound", title:"Last-Letter Sounds", emoji:"🔚", color:EN, questions:[
      {q:"What sound does 'cat' END with?",big:"🐱 = ca_",options:[{t:"T",d:"T"},{t:"C",d:"C"}],correct:0},
      {q:"What letter does 'sun' END with?",big:"☀️ = su_",options:[{t:"N",d:"N"},{t:"M",d:"M"}],correct:0},
      {q:"What letter does 'dog' END with?",big:"🐶 = do_",options:[{t:"G",d:"G"},{t:"D",d:"D"}],correct:0},
      {q:"What letter does 'bed' END with?",big:"🛏️ = be_",options:[{t:"D",d:"D"},{t:"B",d:"B"}],correct:0},
      {q:"What letter does 'bus' END with?",big:"🚌 = bu_",options:[{t:"S",d:"S"},{t:"B",d:"B"}],correct:0},
      {q:"What letter does 'pen' END with?",big:"🖊️ = pe_",options:[{t:"N",d:"N"},{t:"P",d:"P"}],correct:0},
      {q:"What letter does 'cup' END with?",big:"☕ = cu_",options:[{t:"P",d:"P"},{t:"C",d:"C"}],correct:0}
    ]},
    { level:2, group:"🔤 English", id:"l2-opp2", title:"Opposites Challenge", emoji:"↔️", color:EN, questions:[
      {q:"Opposite of HEAVY?",big:"🐘 ↔️ ❓",options:[{t:"Light",d:"🪶"},{t:"Big",d:"🐘"}],correct:0},
      {q:"Opposite of FIRST?",big:"🥇 ↔️ ❓",options:[{t:"Last",d:"🔚"},{t:"Fast",d:"💨"}],correct:0},
      {q:"Opposite of PUSH?",big:"➡️ ↔️ ❓",options:[{t:"Pull",d:"⬅️"},{t:"Jump",d:"🦘"}],correct:0},
      {q:"Opposite of LOUD?",big:"📢 ↔️ ❓",options:[{t:"Quiet",d:"🤫"},{t:"Tall",d:"📏"}],correct:0},
      {q:"Opposite of HARD?",big:"🪨 ↔️ ❓",options:[{t:"Soft",d:"🧸"},{t:"Cold",d:"❄️"}],correct:0},
      {q:"Opposite of OLD?",big:"👵 ↔️ ❓",options:[{t:"Young",d:"👶"},{t:"Slow",d:"🐢"}],correct:0},
      {q:"Opposite of NIGHT?",big:"🌙 ↔️ ❓",options:[{t:"Day",d:"☀️"},{t:"Dark",d:"⬛"}],correct:0},
      {q:"Opposite of UNDER?",big:"⬇️ ↔️ ❓",options:[{t:"Over / above",d:"⬆️"},{t:"Near",d:"↔️"}],correct:0}
    ]},

    /* ---- REASONING L2 ---- */
    { level:2, group:"🧠 Reasoning", id:"l2-logic", title:"Logic Puzzles", emoji:"🧠", color:RE, questions:[
      {q:"Tom is taller than Sam. Who is TALLER?",big:"🧍‍♂️ vs 🧍",options:[{t:"Tom",d:"⬆️"},{t:"Sam",d:"⬇️"}],correct:0},
      {q:"A cat is smaller than a dog. Which is BIGGER?",big:"🐱 vs 🐶",options:[{t:"Dog",d:"🐶"},{t:"Cat",d:"🐱"}],correct:0},
      {q:"Meena is FIRST in line. Raj is behind her. Who is first?",big:"🧍‍♀️🧍‍♂️",options:[{t:"Meena",d:"1️⃣"},{t:"Raj",d:"2️⃣"}],correct:0},
      {q:"Box A is heavier than Box B. Which is LIGHTER?",big:"📦A vs 📦B",options:[{t:"Box B",d:"🅱️"},{t:"Box A",d:"🅰️"}],correct:0},
      {q:"If today is Monday, tomorrow is...?",big:"📅",options:[{t:"Tuesday",d:"2️⃣"},{t:"Sunday",d:"7️⃣"}],correct:0},
      {q:"The red ball is ON TOP of the blue ball. Which is at the BOTTOM?",big:"🔴\n🔵",options:[{t:"Blue ball",d:"🔵"},{t:"Red ball",d:"🔴"}],correct:0},
      {q:"Anu runs faster than Bina. Who is SLOWER?",big:"🏃‍♀️💨",options:[{t:"Bina",d:"🐢"},{t:"Anu",d:"🐆"}],correct:0}
    ]},
    { level:2, group:"🧠 Reasoning", id:"l2-analogy2", title:"Analogies Challenge", emoji:"➡️", color:RE, questions:[
      {q:"Bird is to wings as fish is to...?",big:"🐦→🪽 , 🐟→❓",options:[{t:"Fins",d:"🐠"},{t:"Legs",d:"🦵"}],correct:0},
      {q:"Sun is to day as moon is to...?",big:"☀️→🌞 , 🌙→❓",options:[{t:"Night",d:"🌌"},{t:"Rain",d:"🌧️"}],correct:0},
      {q:"Cow is to calf as dog is to...?",big:"🐄→🐮 , 🐕→❓",options:[{t:"Puppy",d:"🐶"},{t:"Chick",d:"🐤"}],correct:0},
      {q:"Hot is to summer as cold is to...?",big:"🔥→☀️ , ❄️→❓",options:[{t:"Winter",d:"⛄"},{t:"Spring",d:"🌷"}],correct:0},
      {q:"Wheel is to car as wing is to...?",big:"🛞→🚗 , 🪽→❓",options:[{t:"Aeroplane",d:"✈️"},{t:"Boat",d:"⛵"}],correct:0},
      {q:"Pencil is to write as scissors is to...?",big:"✏️→✍️ , ✂️→❓",options:[{t:"Cut",d:"✂️"},{t:"Eat",d:"🍽️"}],correct:0},
      {q:"Foot is to shoe as head is to...?",big:"🦶→👟 , 🧑→❓",options:[{t:"Hat",d:"🎩"},{t:"Glove",d:"🧤"}],correct:0}
    ]},
    { level:2, group:"🧠 Reasoning", id:"l2-series2", title:"Tricky Sequences", emoji:"🔢", color:RE, questions:[
      {q:"What comes next?",big:"🔺 🔵 🔺 🔵 🔺 ❓",options:[{t:"Blue circle",d:"🔵"},{t:"Triangle",d:"🔺"}],correct:0},
      {q:"What number is next?",big:"1 · 3 · 5 · 7 · ❓",options:[{t:"Nine",d:"9"},{t:"Eight",d:"8"}],correct:0},
      {q:"What comes next?",big:"🌑 🌓 🌕 🌗 ❓",options:[{t:"New moon",d:"🌑"},{t:"Star",d:"⭐"}],correct:0},
      {q:"What number is next?",big:"10 · 8 · 6 · ❓",options:[{t:"Four",d:"4"},{t:"Five",d:"5"}],correct:0},
      {q:"What comes next?",big:"🅰️ 🅱️ 🅰️ 🅱️ 🅰️ ❓",options:[{t:"B",d:"🅱️"},{t:"A",d:"🅰️"}],correct:0},
      {q:"What number is next?",big:"2 · 5 · 8 · ❓",options:[{t:"Eleven",d:"11"},{t:"Ten",d:"10"}],correct:0},
      {q:"Which continues the size pattern?",big:"🔵 🔷 🔹 ❓",options:[{t:"Even smaller",d:"▪️"},{t:"Biggest",d:"🔵"}],correct:0}
    ]},
    { level:2, group:"🧠 Reasoning", id:"l2-partwhole", title:"Part & Whole", emoji:"🧩", color:RE, questions:[
      {q:"A wheel is a part of a...?",big:"🛞",options:[{t:"Car",d:"🚗"},{t:"Apple",d:"🍎"}],correct:0},
      {q:"A petal is a part of a...?",big:"🌸",options:[{t:"Flower",d:"🌷"},{t:"House",d:"🏠"}],correct:0},
      {q:"A page is a part of a...?",big:"📄",options:[{t:"Book",d:"📖"},{t:"Shoe",d:"👟"}],correct:0},
      {q:"A branch is a part of a...?",big:"🌿",options:[{t:"Tree",d:"🌳"},{t:"Car",d:"🚗"}],correct:0},
      {q:"A finger is a part of a...?",big:"☝️",options:[{t:"Hand",d:"✋"},{t:"Foot",d:"🦶"}],correct:0},
      {q:"A tail is a part of a...?",big:"🐕",options:[{t:"Dog",d:"🐶"},{t:"Cup",d:"☕"}],correct:0},
      {q:"A roof is a part of a...?",big:"🏠",options:[{t:"House",d:"🏡"},{t:"Fish",d:"🐟"}],correct:0}
    ]}
  );
})();

/* ---- content block 8 ---- */
(function(){
  var C=window.__CONTENT__; if(!C) return;
  var AL="#7C5CFC", DA="#14B8A6", MA="#3B82F6", SC="#22C55E", EN="#EF4444", RE="#8B5CF6", GK="#F59E0B";

  /* ============ ALGORITHMS · LEVEL 3 (Master) + mini-games ============ */
  C.algorithms.topics.push(
    { level:3, id:"l3-guess", title:"Higher or Lower", emoji:"🔍", color:AL, questions:[
      {q:"I picked a number 1–10. You guess 5, I say 'higher'. Which could it be?",big:"5 ⬆️",options:[{t:"Eight",d:"8"},{t:"Two",d:"2"}],correct:0},
      {q:"Guess 6, I say 'lower'. Which could it be?",big:"6 ⬇️",options:[{t:"Three",d:"3"},{t:"Nine",d:"9"}],correct:0},
      {q:"To find a number fast, a good first guess is the...?",big:"1…10",options:[{t:"Middle",d:"5️⃣"},{t:"The very end",d:"🔚"}],correct:0},
      {q:"Number is 1–10. 'Higher than 5' and 'lower than 7'. It is...?",big:"5 ⬅️❓➡️ 7",options:[{t:"Six",d:"6"},{t:"Ten",d:"10"}],correct:0},
      {q:"You guess 7, I say 'higher'. Next smart guess?",big:"7 ⬆️",options:[{t:"Nine",d:"9"},{t:"One",d:"1"}],correct:0},
      {q:"Splitting the list in half each time helps you find it...?",big:"⚡",options:[{t:"Faster",d:"🏃"},{t:"Slower",d:"🐢"}],correct:0}
    ]},
    { level:3, id:"l3-smallest", title:"Find the Smallest 🎮", emoji:"📉", color:AL, type:"order", rounds:[
      {q:"Sorting! Tap smallest to biggest.",items:[{d:"7",v:7},{d:"3",v:3},{d:"9",v:9},{d:"1",v:1}]},
      {q:"Tap smallest to biggest.",items:[{d:"12",v:12},{d:"5",v:5},{d:"20",v:20},{d:"8",v:8}]},
      {q:"Tap from least to most dots.",items:[{d:"⚂",v:3,say:"three dots"},{d:"⚀",v:1,say:"one dot"},{d:"⚃",v:4,say:"four dots"},{d:"⚁",v:2,say:"two dots"}]},
      {q:"Tap smallest to biggest.",items:[{d:"15",v:15},{d:"11",v:11},{d:"18",v:18},{d:"13",v:13}]}
    ]},
    { level:3, id:"l3-nested", title:"Repeat Rows", emoji:"🔁", color:AL, questions:[
      {q:"Do 'clap clap' 3 times. How many claps in all?",big:"👏👏 ×3",options:[{t:"Six",d:"6"},{t:"Three",d:"3"}],correct:0},
      {q:"3 rows of 2 stars. How many stars?",big:"⭐⭐\n⭐⭐\n⭐⭐",options:[{t:"Six",d:"6"},{t:"Five",d:"5"}],correct:0},
      {q:"Stamp 2 rows of 4. How many stamps?",big:"🟦🟦🟦🟦\n🟦🟦🟦🟦",options:[{t:"Eight",d:"8"},{t:"Six",d:"6"}],correct:0},
      {q:"Jump 5 times, then do it AGAIN. How many jumps in all?",big:"🦘🦘🦘🦘🦘<br>🦘🦘🦘🦘🦘",options:[{t:"Ten",d:"10"},{t:"Five",d:"5"}],correct:0},
      {q:"4 boxes, each with 3 balls. How many balls?",big:"📦×4 (3 each)",options:[{t:"Twelve",d:"12"},{t:"Seven",d:"7"}],correct:0},
      {q:"A loop inside a loop repeats things...?",big:"🔁🔁",options:[{t:"Many more times",d:"⬆️"},{t:"Once",d:"1️⃣"}],correct:0}
    ]},
    { level:3, id:"l3-conditions", title:"Two Conditions", emoji:"🔀", color:AL, questions:[
      {q:"Wear boots IF it rains AND it is cold. It rains and is cold. Boots?",scene:"rain",options:[{t:"Yes, wear boots",d:"🥾",hi:"boots"},{t:"No",d:"🚫"}],correct:0},
      {q:"Go out IF sunny AND homework done. Sunny but homework NOT done. Go out?",big:"☀️📚",options:[{t:"No, finish homework",d:"📚"},{t:"Yes",d:"✅"}],correct:0},
      {q:"Eat ice cream IF it's hot OR it's a party. It's a party. Ice cream?",big:"🎉",options:[{t:"Yes!",d:"🍦"},{t:"No",d:"🚫"}],correct:0},
      {q:"A car moves IF the light is green AND the road is clear. The light is RED. Move?",scene:"traffic",options:[{t:"No, stop",d:"🛑"},{t:"Yes",d:"➡️"}],correct:0},
      {q:"Take umbrella IF rain OR snow. It's sunny. Umbrella?",big:"☀️",options:[{t:"No",d:"🚫"},{t:"Yes",d:"☂️"}],correct:0},
      {q:"Win IF you score AND time is left. You scored, time left. Win?",big:"⚽⏰",options:[{t:"Yes!",d:"🏆"},{t:"No",d:"🚫"}],correct:0}
    ]}
  );

  /* ============ DATA · LEVEL 3 (Master) + mini-game ============ */
  C.data.topics.push(
    { level:3, id:"l3-both", title:"Belongs to Both", emoji:"⭕", color:DA, questions:[
      {q:"Which is BOTH a fruit AND red?",big:"🍎 🍌 🍇",options:[{t:"Apple",d:"🍎"},{t:"Banana",d:"🍌"}],correct:0},
      {q:"Which is BOTH an animal AND can fly?",big:"🐦 🐕 🐟",options:[{t:"Bird",d:"🐦"},{t:"Dog",d:"🐕"}],correct:0},
      {q:"Which is BOTH round AND a fruit?",big:"🍊 🥕 📏",options:[{t:"Orange",d:"🍊"},{t:"Carrot",d:"🥕"}],correct:0},
      {q:"Which is BOTH yellow AND a fruit?",big:"🍋 🍏 🫐",options:[{t:"Lemon",d:"🍋"},{t:"Green apple",d:"🍏"}],correct:0},
      {q:"Which lives in water AND is an animal?",big:"🐟 🌊 🚤",options:[{t:"Fish",d:"🐟"},{t:"Boat",d:"🚤"}],correct:0},
      {q:"Which is BOTH a vehicle AND flies?",big:"✈️ 🚗 🚢",options:[{t:"Plane",d:"✈️"},{t:"Car",d:"🚗"}],correct:0}
    ]},
    { level:3, id:"l3-family", title:"Family Tree", emoji:"👨‍👩‍👧", color:DA, questions:[
      {q:"Your mother's mother is your...?",big:"👵",options:[{t:"Grandmother",d:"👵"},{t:"Sister",d:"👧"}],correct:0},
      {q:"Your father's brother is your...?",big:"👨",options:[{t:"Uncle",d:"🧔"},{t:"Cousin",d:"🧒"}],correct:0},
      {q:"Your parents' children (not you) are your...?",big:"👦👧",options:[{t:"Brother or sister",d:"🧒"},{t:"Grandpa",d:"👴"}],correct:0},
      {q:"Who is OLDEST in the family tree usually?",big:"👴👨👦",options:[{t:"Grandfather",d:"👴"},{t:"Child",d:"👦"}],correct:0},
      {q:"Your uncle's child is your...?",big:"🧒",options:[{t:"Cousin",d:"🧒"},{t:"Brother",d:"👦"}],correct:0},
      {q:"Your mother and father together are your...?",big:"👩👨",options:[{t:"Parents",d:"👪"},{t:"Friends",d:"🤝"}],correct:0}
    ]},
    { level:3, id:"l3-lookup", title:"Find in the List", emoji:"📋", color:DA, questions:[
      {q:"List: 🍎🍌🍇🍊. What is 2nd?",big:"🍎🍌🍇🍊",options:[{t:"Banana",d:"🍌"},{t:"Grapes",d:"🍇"}],correct:0},
      {q:"Which is NOT in the list? 🐶🐱🐭",big:"🐶🐱🐭",options:[{t:"Rabbit",d:"🐰"},{t:"Cat",d:"🐱"}],correct:0},
      {q:"List has 🔴🟢🔵🟡. How many colours?",big:"🔴🟢🔵🟡",options:[{t:"Four",d:"4"},{t:"Three",d:"3"}],correct:0},
      {q:"In list A🍎 B🍌 C🍇, what is at C?",big:"A🍎 B🍌 C🍇",options:[{t:"Grapes",d:"🍇"},{t:"Apple",d:"🍎"}],correct:0},
      {q:"Which comes right AFTER 🌙 in ☀️🌙⭐?",big:"☀️🌙⭐",options:[{t:"Star",d:"⭐"},{t:"Sun",d:"☀️"}],correct:0},
      {q:"Is 🐟 in the list 🐶🐱🐭?",big:"🐶🐱🐭",options:[{t:"No",d:"❌"},{t:"Yes",d:"✅"}],correct:0}
    ]},
    { level:3, id:"l3-tally", title:"Most & Least", emoji:"📊", color:DA, questions:[
      {q:"🍎🍎🍎 · 🍌🍌 · 🍇. Which has MOST?",big:"🍎×3 🍌×2 🍇×1",options:[{t:"Apples",d:"🍎"},{t:"Grapes",d:"🍇"}],correct:0},
      {q:"Same fruits — which has LEAST?",big:"🍎×3 🍌×2 🍇×1",options:[{t:"Grapes",d:"🍇"},{t:"Apples",d:"🍎"}],correct:0},
      {q:"⭐⭐⭐⭐ vs 🌙🌙. Which group is bigger?",big:"⭐×4 🌙×2",options:[{t:"Stars",d:"⭐"},{t:"Moons",d:"🌙"}],correct:0},
      {q:"3 red, 5 blue, 1 green. Which is most?",big:"🔴×3 🔵×5 🟢×1",options:[{t:"Blue",d:"🔵"},{t:"Green",d:"🟢"}],correct:0},
      {q:"How many MORE apples than grapes? 🍎×3, 🍇×1",big:"🍎×3 🍇×1",options:[{t:"Two more",d:"2"},{t:"Four more",d:"4"}],correct:0},
      {q:"Which chart bar is tallest = most votes?",big:"📊",options:[{t:"The tallest bar",d:"⬆️"},{t:"The shortest bar",d:"⬇️"}],correct:0}
    ]},
    { level:3, id:"l3-mem-shadow", title:"Memory: Shape Match", emoji:"🧠", color:DA, type:"memory", intro:"Match each shape to its friend!", pairs:[
      {0:"⭕",1:"🔵",say:"circle",say2:"round circle"},
      {0:"⬛",1:"🟦",say:"square",say2:"square"},
      {0:"🔺",1:"⚠️",say:"triangle",say2:"triangle"},
      {0:"⭐",1:"🌟",say:"star",say2:"star"}
    ]}
  );

  /* ============ OLYMPIAD · UKG (Level 1) — GK & EVS + mini-games ============ */
  C.olympiad.topics.push(
    { level:1, group:"🌍 GK & EVS", id:"ukg-colours", title:"Colours", emoji:"🎨", color:GK, questions:[
      {q:"What colour is the sky on a clear day?",big:"🌤️",options:[{t:"Blue",d:"🔵"},{t:"Red",d:"🔴"}],correct:0},
      {q:"What colour is grass?",big:"🌱",options:[{t:"Green",d:"🟢"},{t:"Purple",d:"🟣"}],correct:0},
      {q:"What colour is a banana?",big:"🍌",options:[{t:"Yellow",d:"🟡"},{t:"Blue",d:"🔵"}],correct:0},
      {q:"What colour is this heart?",big:"❤️",options:[{t:"Red",d:"🔴"},{t:"Green",d:"🟢"}],correct:0},
      {q:"What colour do you get mixing blue and yellow?",big:"🔵➕🟡",options:[{t:"Green",d:"🟢"},{t:"Pink",d:"🩷"}],correct:0},
      {q:"What colour is snow?",big:"❄️",options:[{t:"White",d:"⚪"},{t:"Black",d:"⚫"}],correct:0},
      {q:"What colour is an orange?",big:"🍊",options:[{t:"Orange",d:"🟠"},{t:"Blue",d:"🔵"}],correct:0}
    ]},
    { level:1, group:"🌍 GK & EVS", id:"ukg-helpers", title:"Community Helpers", emoji:"👮", color:GK, questions:[
      {q:"Who helps us when we are sick?",big:"🩺",options:[{t:"Doctor",d:"👨‍⚕️"},{t:"Pilot",d:"👨‍✈️"}],correct:0},
      {q:"Who puts out fires?",big:"🔥",options:[{t:"Firefighter",d:"🧑‍🚒"},{t:"Farmer",d:"👨‍🌾"}],correct:0},
      {q:"Who teaches you at school?",big:"🏫",options:[{t:"Teacher",d:"👩‍🏫"},{t:"Chef",d:"👨‍🍳"}],correct:0},
      {q:"Who delivers letters?",big:"✉️",options:[{t:"Postman",d:"📮"},{t:"Doctor",d:"🩺"}],correct:0},
      {q:"Who grows our food?",big:"🌾",options:[{t:"Farmer",d:"👨‍🌾"},{t:"Pilot",d:"👨‍✈️"}],correct:0},
      {q:"Who flies an aeroplane?",big:"✈️",options:[{t:"Pilot",d:"👨‍✈️"},{t:"Teacher",d:"👩‍🏫"}],correct:0},
      {q:"Who keeps us safe and catches thieves?",big:"🚓",options:[{t:"Police officer",d:"👮"},{t:"Chef",d:"👨‍🍳"}],correct:0}
    ]},
    { level:1, group:"🌍 GK & EVS", id:"ukg-transport", title:"Transport", emoji:"🚗", color:GK, questions:[
      {q:"Which travels on water?",big:"🚢 🚗 ✈️",options:[{t:"Ship",d:"🚢"},{t:"Car",d:"🚗"}],correct:0},
      {q:"Which flies in the sky?",big:"✈️ 🚌 🚲",options:[{t:"Aeroplane",d:"✈️"},{t:"Bus",d:"🚌"}],correct:0},
      {q:"Which runs on rails?",big:"🚂",options:[{t:"Train",d:"🚂"},{t:"Boat",d:"⛵"}],correct:0},
      {q:"Which has just two wheels?",big:"🚲",options:[{t:"Bicycle",d:"🚲"},{t:"Bus",d:"🚌"}],correct:0},
      {q:"Which takes you to space?",big:"🚀",options:[{t:"Rocket",d:"🚀"},{t:"Car",d:"🚗"}],correct:0},
      {q:"Which carries many people on roads?",big:"🚌",options:[{t:"Bus",d:"🚌"},{t:"Bicycle",d:"🚲"}],correct:0}
    ]},
    { level:1, group:"🌍 GK & EVS", id:"ukg-manners", title:"Good Manners", emoji:"🙏", color:GK, questions:[
      {q:"What do you say when someone helps you?",big:"🤝",options:[{t:"Thank you",d:"🙏"},{t:"Go away",d:"🚫"}],correct:0},
      {q:"What do you say to ask nicely?",big:"🙂",options:[{t:"Please",d:"🥺"},{t:"Now!",d:"❗"}],correct:0},
      {q:"Before eating we should...?",big:"🍽️",options:[{t:"Wash hands",d:"🧼"},{t:"Play in mud",d:"🟤"}],correct:0},
      {q:"When someone is talking, you should...?",big:"👂",options:[{t:"Listen",d:"🤫"},{t:"Shout",d:"📢"}],correct:0},
      {q:"If you bump someone, you say...?",big:"😯",options:[{t:"Sorry",d:"🙇"},{t:"Nothing",d:"🤐"}],correct:0},
      {q:"We throw rubbish in the...?",big:"🗑️",options:[{t:"Bin",d:"🗑️"},{t:"Floor",d:"⬇️"}],correct:0}
    ]},
    { level:1, group:"🌍 GK & EVS", id:"ukg-position", title:"Where Is It?", emoji:"📍", color:GK, questions:[
      {q:"The cat is ON the box.",big:"🐱\n📦",options:[{t:"On top",d:"⬆️"},{t:"Under",d:"⬇️"}],correct:0},
      {q:"The ball is UNDER the table. Where is it?",big:"🪑\n⚽",options:[{t:"Under",d:"⬇️"},{t:"Above",d:"⬆️"}],correct:0},
      {q:"The bird is ABOVE the tree. Where?",big:"🐦\n🌳",options:[{t:"Above",d:"⬆️"},{t:"Below",d:"⬇️"}],correct:0},
      {q:"Which is INSIDE the box?",big:"📦🎁",options:[{t:"The gift inside",d:"🎁"},{t:"Outside",d:"🌳"}],correct:0},
      {q:"The dog is BESIDE the house (next to it).",big:"🏠🐕",options:[{t:"Next to",d:"↔️"},{t:"On top",d:"⬆️"}],correct:0},
      {q:"The apple is IN FRONT of the cup. Which is behind?",big:"🍎 ☕",options:[{t:"The cup",d:"☕"},{t:"The apple",d:"🍎"}],correct:0}
    ]},
    { level:1, group:"🌍 GK & EVS", id:"ukg-fruitveg", title:"Fruit or Vegetable?", emoji:"🥕", color:GK, type:"truefalse", questions:[
      {q:"An apple is a fruit.",big:"🍎",tf:true},
      {q:"A carrot is a fruit.",big:"🥕",tf:false},
      {q:"A banana is a fruit.",big:"🍌",tf:true},
      {q:"A tomato grows on a plant.",big:"🍅",tf:true},
      {q:"Broccoli is a vegetable.",big:"🥦",tf:true},
      {q:"A mango is a vegetable.",big:"🥭",tf:false},
      {q:"Potatoes grow under the ground.",big:"🥔",tf:true}
    ]},
    { level:1, group:"🌍 GK & EVS", id:"ukg-mem-colour", title:"Memory: Colour Match", emoji:"🧠", color:GK, type:"memory", intro:"Match things of the same colour!", pairs:[
      {0:"🍎",1:"❤️",say:"red apple",say2:"red heart"},
      {0:"🍌",1:"🌟",say:"yellow banana",say2:"yellow star"},
      {0:"🍃",1:"🐸",say:"green leaf",say2:"green frog"},
      {0:"🫐",1:"💙",say:"blue berry",say2:"blue heart"}
    ]},

    /* ---- MATH · LEVEL 3 ---- */
    { level:3, group:"🔢 Math", id:"l3-to100", title:"Numbers to 100", emoji:"💯", color:MA, questions:[
      {q:"Count by tens: 30, 40, 50, ❓",big:"30·40·50·❓",options:[{t:"Sixty",d:"60"},{t:"Fifty-one",d:"51"}],correct:0},
      {q:"What comes after 49?",big:"49 ➡️ ❓",options:[{t:"Fifty",d:"50"},{t:"Forty",d:"40"}],correct:0},
      {q:"Which is bigger, 68 or 86?",big:"68 · 86",options:[{t:"Eighty-six",d:"86"},{t:"Sixty-eight",d:"68"}],correct:0},
      {q:"What comes just before 100?",big:"❓ ⬅️ 100",options:[{t:"Ninety-nine",d:"99"},{t:"One hundred one",d:"101"}],correct:0},
      {q:"Count by fives: 20, 25, 30, ❓",big:"20·25·30·❓",options:[{t:"Thirty-five",d:"35"},{t:"Forty",d:"40"}],correct:0},
      {q:"How many tens are in 70?",big:"70",options:[{t:"Seven",d:"7"},{t:"Seventy",d:"70"}],correct:0},
      {q:"Which is smallest?",big:"45 · 54 · 40",options:[{t:"Forty",d:"40"},{t:"Fifty-four",d:"54"}],correct:0}
    ]},
    { level:3, group:"🔢 Math", id:"l3-2digit", title:"2-Digit Adding", emoji:"➕", color:MA, questions:[
      {q:"20 + 10 = ?",big:"20 ➕ 10",options:[{t:"Thirty",d:"30"},{t:"Twenty-one",d:"21"}],correct:0},
      {q:"14 + 5 = ?",big:"14 ➕ 5",options:[{t:"Nineteen",d:"19"},{t:"Twenty",d:"20"}],correct:0},
      {q:"30 + 20 = ?",big:"30 ➕ 20",options:[{t:"Fifty",d:"50"},{t:"Forty",d:"40"}],correct:0},
      {q:"22 + 6 = ?",big:"22 ➕ 6",options:[{t:"Twenty-eight",d:"28"},{t:"Twenty-six",d:"26"}],correct:0},
      {q:"40 + 40 = ?",big:"40 ➕ 40",options:[{t:"Eighty",d:"80"},{t:"Sixty",d:"60"}],correct:0},
      {q:"25 + 4 = ?",big:"25 ➕ 4",options:[{t:"Twenty-nine",d:"29"},{t:"Thirty",d:"30"}],correct:0},
      {q:"50 + 25 = ?",big:"50 ➕ 25",options:[{t:"Seventy-five",d:"75"},{t:"Fifty-five",d:"55"}],correct:0}
    ]},
    { level:3, group:"🔢 Math", id:"l3-groups", title:"Groups (×)", emoji:"✖️", color:MA, questions:[
      {q:"2 groups of 3 apples. How many apples?",big:"🍎🍎🍎 · 🍎🍎🍎",options:[{t:"Six",d:"6"},{t:"Five",d:"5"}],correct:0},
      {q:"3 groups of 2 stars = ?",big:"⭐⭐ ⭐⭐ ⭐⭐",options:[{t:"Six",d:"6"},{t:"Four",d:"4"}],correct:0},
      {q:"2 × 5 (two groups of five) = ?",big:"5 + 5",options:[{t:"Ten",d:"10"},{t:"Seven",d:"7"}],correct:0},
      {q:"4 groups of 2 = ?",big:"2·2·2·2",options:[{t:"Eight",d:"8"},{t:"Six",d:"6"}],correct:0},
      {q:"3 × 3 (three groups of three) = ?",big:"3·3·3",options:[{t:"Nine",d:"9"},{t:"Six",d:"6"}],correct:0},
      {q:"5 groups of 2 socks = ?",big:"🧦×2 ×5",options:[{t:"Ten",d:"10"},{t:"Twelve",d:"12"}],correct:0}
    ]},
    { level:3, group:"🔢 Math", id:"l3-half", title:"Halves & Sharing", emoji:"➗", color:MA, questions:[
      {q:"Share 4 apples between 2 kids. Each gets?",big:"🍎🍎🍎🍎 ÷ 2",options:[{t:"Two",d:"2"},{t:"Four",d:"4"}],correct:0},
      {q:"Half of 6 is?",big:"6 ÷ 2",options:[{t:"Three",d:"3"},{t:"Two",d:"2"}],correct:0},
      {q:"Cut one pizza in half. How many pieces?",big:"🍕 ✂️ ➜ 🍕 🍕",options:[{t:"Two",d:"2"},{t:"Three",d:"3"}],correct:0},
      {q:"Share 10 sweets between 2. Each gets?",big:"🍬×10 ÷2",options:[{t:"Five",d:"5"},{t:"Ten",d:"10"}],correct:0},
      {q:"Half of 8 is?",big:"8 ÷ 2",options:[{t:"Four",d:"4"},{t:"Six",d:"6"}],correct:0},
      {q:"Which shows one HALF shaded?",big:"◑ vs ◕",options:[{t:"Half circle",d:"◑"},{t:"Almost full",d:"◕"}],correct:0}
    ]},
    { level:3, group:"🔢 Math", id:"l3-money", title:"Money & Coins", emoji:"🪙", color:MA, questions:[
      {q:"You have a 2-coin and a 1-coin. How much?",big:"🪙2 ➕ 🪙1",options:[{t:"Three",d:"3"},{t:"Two",d:"2"}],correct:0},
      {q:"Two 5-coins make?",big:"🪙5 ➕ 🪙5",options:[{t:"Ten",d:"10"},{t:"Five",d:"5"}],correct:0},
      {q:"A toy costs 10. You have 6. Do you have enough?",big:"🧸=10, 🪙6",options:[{t:"No, need more",d:"❌"},{t:"Yes",d:"✅"}],correct:0},
      {q:"You pay 10 for a 7 pen. Change back?",big:"10 ➖ 7",options:[{t:"Three",d:"3"},{t:"Two",d:"2"}],correct:0},
      {q:"Which is worth more?",big:"🪙10 · 🪙5",options:[{t:"Ten coin",d:"🪙10"},{t:"Five coin",d:"🪙5"}],correct:0},
      {q:"Three 2-coins make?",big:"🪙2 ×3",options:[{t:"Six",d:"6"},{t:"Five",d:"5"}],correct:0}
    ]},
    { level:3, group:"🔢 Math", id:"l3-calendar", title:"Months 🎮", emoji:"📆", color:MA, type:"order", rounds:[
      {q:"Tap the first 4 months in order!",items:[{d:"Jan",v:1,say:"January"},{d:"Feb",v:2,say:"February"},{d:"Mar",v:3,say:"March"},{d:"Apr",v:4,say:"April"}]},
      {q:"Put the days in order!",items:[{d:"Mon",v:1,say:"Monday"},{d:"Tue",v:2,say:"Tuesday"},{d:"Wed",v:3,say:"Wednesday"},{d:"Thu",v:4,say:"Thursday"}]},
      {q:"Order these seasons: cold to hot!",items:[{d:"❄️",v:1,say:"winter"},{d:"🌷",v:2,say:"spring"},{d:"☀️",v:3,say:"summer"}]}
    ]},

    /* ---- SCIENCE · LEVEL 3 ---- */
    { level:3, group:"🔬 Science", id:"l3-materials", title:"What's It Made Of?", emoji:"🧱", color:SC, questions:[
      {q:"A window is usually made of...?",big:"🪟",options:[{t:"Glass",d:"🔷"},{t:"Bread",d:"🍞"}],correct:0},
      {q:"A chair is often made of...?",big:"🪑",options:[{t:"Wood",d:"🪵"},{t:"Water",d:"💧"}],correct:0},
      {q:"A spoon is often made of...?",big:"🥄",options:[{t:"Metal",d:"🔩"},{t:"Paper",d:"📄"}],correct:0},
      {q:"A book is made of...?",big:"📖",options:[{t:"Paper",d:"📄"},{t:"Glass",d:"🔷"}],correct:0},
      {q:"A balloon is made of...?",big:"🎈",options:[{t:"Rubber",d:"🎈"},{t:"Metal",d:"🔩"}],correct:0},
      {q:"Which material can break easily?",big:"🔷",options:[{t:"Glass",d:"🥃"},{t:"Rubber",d:"🎈"}],correct:0}
    ]},
    { level:3, group:"🔬 Science", id:"l3-floatsink", title:"Float or Sink", emoji:"🛁", color:SC, type:"truefalse", questions:[
      {q:"A leaf floats on water.",big:"🍃",tf:true},
      {q:"A big rock floats on water.",big:"🪨",tf:false},
      {q:"A boat floats on water.",big:"⛵",tf:true},
      {q:"A metal coin sinks in water.",big:"🪙",tf:true},
      {q:"A rubber duck floats.",big:"🦆",tf:true},
      {q:"An apple sinks straight to the bottom.",big:"🍎",tf:false}
    ]},
    { level:3, group:"🔬 Science", id:"l3-lifecycle", title:"Life Cycle 🎮", emoji:"🦋", color:SC, type:"order", rounds:[
      {q:"Order the butterfly life cycle!",items:[{d:"🥚",v:1,say:"egg"},{d:"🐛",v:2,say:"caterpillar"},{d:"🛖",v:3,say:"cocoon"},{d:"🦋",v:4,say:"butterfly"}]},
      {q:"Order a plant growing!",items:[{d:"🌰",v:1,say:"seed"},{d:"🌱",v:2,say:"sprout"},{d:"🌿",v:3,say:"plant"},{d:"🌻",v:4,say:"flower"}]},
      {q:"Order a frog's life!",items:[{d:"🥚",v:1,say:"egg"},{d:"🐛",v:2,say:"tadpole"},{d:"🐸",v:3,say:"frog"}]}
    ]},
    { level:3, group:"🔬 Science", id:"l3-healthy", title:"Healthy or Not?", emoji:"🥗", color:SC, type:"truefalse", questions:[
      {q:"Fruits and vegetables are healthy.",big:"🥗",tf:true},
      {q:"Eating lots of candy every day is healthy.",big:"🍭",tf:false},
      {q:"Drinking water is good for you.",big:"💧",tf:true},
      {q:"Brushing teeth keeps them healthy.",big:"🪥",tf:true},
      {q:"Exercise makes your body strong.",big:"🏃",tf:true},
      {q:"Sleeping well helps you grow.",big:"😴",tf:true}
    ]},

    /* ---- ENGLISH · LEVEL 3 ---- */
    { level:3, group:"🔤 English", id:"l3-synonyms", title:"Same Meaning", emoji:"🟰", color:EN, questions:[
      {q:"Which means the same as BIG?",big:"🐘",options:[{t:"Large",d:"⬆️"},{t:"Tiny",d:"🐜"}],correct:0},
      {q:"Which means the same as HAPPY?",big:"😀",options:[{t:"Glad",d:"😊"},{t:"Sad",d:"😢"}],correct:0},
      {q:"Which means the same as FAST?",big:"💨",options:[{t:"Quick",d:"⚡"},{t:"Slow",d:"🐢"}],correct:0},
      {q:"Which means the same as SMALL?",big:"🐜",options:[{t:"Little",d:"🔽"},{t:"Huge",d:"🐘"}],correct:0},
      {q:"Which means the same as PRETTY?",big:"🌸",options:[{t:"Beautiful",d:"✨"},{t:"Ugly",d:"👹"}],correct:0},
      {q:"Which means the same as SCARED?",big:"😨",options:[{t:"Afraid",d:"😱"},{t:"Brave",d:"🦁"}],correct:0}
    ]},
    { level:3, group:"🔤 English", id:"l3-compound", title:"Word + Word", emoji:"🧩", color:EN, questions:[
      {q:"Sun + flower = ?",big:"☀️➕🌸",options:[{t:"Sunflower",d:"🌻"},{t:"Flowersun",d:"❌"}],correct:0},
      {q:"Rain + bow = ?",big:"🌧️➕🎀",options:[{t:"Rainbow",d:"🌈"},{t:"Bowrain",d:"❌"}],correct:0},
      {q:"Foot + ball = ?",big:"🦶➕⚽",options:[{t:"Football",d:"⚽"},{t:"Ballfoot",d:"❌"}],correct:0},
      {q:"Butter + fly = ?",big:"🧈➕🪰",options:[{t:"Butterfly",d:"🦋"},{t:"Flybutter",d:"❌"}],correct:0},
      {q:"Star + fish = ?",big:"⭐➕🐟",options:[{t:"Starfish",d:"⭐"},{t:"Fishstar",d:"❌"}],correct:0},
      {q:"Cup + cake = ?",big:"☕➕🍰",options:[{t:"Cupcake",d:"🧁"},{t:"Cakecup",d:"❌"}],correct:0}
    ]},
    { level:3, group:"🔤 English", id:"l3-actions", title:"Action Words", emoji:"🏃", color:EN, questions:[
      {q:"Which word is an action (doing) word?",big:"🏃",options:[{t:"Run",d:"🏃"},{t:"Apple",d:"🍎"}],correct:0},
      {q:"A bird can...?",big:"🐦",options:[{t:"Fly",d:"🪽"},{t:"Table",d:"🪑"}],correct:0},
      {q:"Which is an action word?",big:"❓",options:[{t:"Jump",d:"🦘"},{t:"Chair",d:"🪑"}],correct:0},
      {q:"A fish can...?",big:"🐟",options:[{t:"Swim",d:"🏊"},{t:"Book",d:"📖"}],correct:0},
      {q:"Which word shows doing something?",big:"❓",options:[{t:"Eat",d:"🍽️"},{t:"Blue",d:"🔵"}],correct:0},
      {q:"We use our legs to...?",big:"🦵",options:[{t:"Walk",d:"🚶"},{t:"Sleep only",d:"😴"}],correct:0}
    ]},
    { level:3, group:"🔤 English", id:"l3-sentence", title:"Make a Sentence 🎮", emoji:"📝", color:EN, type:"order", rounds:[
      {q:"Put the words in order to make a sentence!",items:[{d:"I",v:1,say:"I"},{d:"like",v:2,say:"like"},{d:"cats",v:3,say:"cats"}]},
      {q:"Order the words!",items:[{d:"The",v:1,say:"The"},{d:"dog",v:2,say:"dog"},{d:"runs",v:3,say:"runs"}]},
      {q:"Order the words!",items:[{d:"We",v:1,say:"We"},{d:"play",v:2,say:"play"},{d:"ball",v:3,say:"ball"}]},
      {q:"Order the words!",items:[{d:"She",v:1,say:"She"},{d:"has",v:2,say:"has"},{d:"a",v:3,say:"a"},{d:"pen",v:4,say:"pen"}]}
    ]},
    { level:1, group:"🔤 English", id:"mem-rhyme", title:"Memory: Rhyme Match", emoji:"🧠", color:EN, type:"memory", intro:"Match the words that rhyme!", pairs:[
      {0:"🐱 cat",1:"🎩 hat",say:"cat",say2:"hat"},
      {0:"🐕 dog",1:"🐸 frog",say:"dog",say2:"frog"},
      {0:"⭐ star",1:"🚗 car",say:"star",say2:"car"},
      {0:"🐝 bee",1:"🌳 tree",say:"bee",say2:"tree"}
    ]},

    /* ---- REASONING · LEVEL 3 ---- */
    { level:3, group:"🧠 Reasoning", id:"l3-relations", title:"Who Am I?", emoji:"👥", color:RE, questions:[
      {q:"I am your parent's mother. Who am I?",big:"👵",options:[{t:"Grandmother",d:"👵"},{t:"Sister",d:"👧"}],correct:0},
      {q:"I have a trunk and big ears and I am grey. Who am I?",big:"❓",options:[{t:"Elephant",d:"🐘"},{t:"Rabbit",d:"🐰"}],correct:0},
      {q:"I give light in the day and I am very hot. Who am I?",big:"❓",options:[{t:"The Sun",d:"☀️"},{t:"The Moon",d:"🌙"}],correct:0},
      {q:"I say 'meow' and drink milk. Who am I?",big:"❓",options:[{t:"Cat",d:"🐱"},{t:"Cow",d:"🐄"}],correct:0},
      {q:"I have wings, I buzz, and I make honey. Who am I?",big:"❓",options:[{t:"Bee",d:"🐝"},{t:"Bird",d:"🐦"}],correct:0},
      {q:"You use me to see. I blink. What am I?",big:"❓",options:[{t:"Eye",d:"👁️"},{t:"Ear",d:"👂"}],correct:0}
    ]},
    { level:3, group:"🧠 Reasoning", id:"l3-direction", title:"Which Direction?", emoji:"🧭", color:RE, questions:[
      {q:"The sun rises in the...?",big:"🌅",options:[{t:"East",d:"➡️"},{t:"West",d:"⬅️"}],correct:0},
      {q:"If you face up and turn around, you face...?",big:"🔄",options:[{t:"Down / back",d:"⬇️"},{t:"Up",d:"⬆️"}],correct:0},
      {q:"North is up on a map. What is at the bottom?",big:"🗺️",options:[{t:"South",d:"⬇️"},{t:"North",d:"⬆️"}],correct:0},
      {q:"Turn right from facing up (north). You face...?",big:"↪️",options:[{t:"East / right",d:"➡️"},{t:"Left",d:"⬅️"}],correct:0},
      {q:"The sun sets in the...?",big:"🌇",options:[{t:"West",d:"⬅️"},{t:"East",d:"➡️"}],correct:0},
      {q:"Left is this hand for most writing? (the other one)",big:"🖐️",options:[{t:"The non-writing hand often",d:"🤚"},{t:"Your nose",d:"👃"}],correct:0}
    ]},
    { level:3, group:"🧠 Reasoning", id:"l3-ranking2", title:"Ranking Puzzles", emoji:"🏆", color:RE, questions:[
      {q:"Tom is taller than Sam. Sam is taller than Ravi. Who is TALLEST?",big:"📏",options:[{t:"Tom",d:"🥇"},{t:"Ravi",d:"🥉"}],correct:0},
      {q:"A cat is faster than a turtle. A dog is faster than the cat. Who is fastest?",big:"💨",options:[{t:"Dog",d:"🐕"},{t:"Turtle",d:"🐢"}],correct:0},
      {q:"Box A is heavier than B. C is heavier than A. Which is heaviest?",big:"📦",options:[{t:"Box C",d:"🅲"},{t:"Box B",d:"🅱️"}],correct:0},
      {q:"Anu is older than Bina. Bina is older than Sia. Who is youngest?",big:"👶",options:[{t:"Sia",d:"🍼"},{t:"Anu",d:"🧒"}],correct:0},
      {q:"Red tower is taller than blue. Green is shorter than blue. Tallest?",big:"🗼",options:[{t:"Red",d:"🔴"},{t:"Green",d:"🟢"}],correct:0},
      {q:"5 is more than 3. 8 is more than 5. Which is the most?",big:"🔢",options:[{t:"Eight",d:"8"},{t:"Three",d:"3"}],correct:0}
    ]}
  );
})();

/* ---- content block 9 ---- */
(function(){
  var C = window.__CONTENT__; if(!C) return;
  var AL="#7C5CFC", DA="#14B8A6", MA="#3B82F6", SC="#22C55E", EN="#EF4444", RE="#8B5CF6";

  /* =================================================================
     ENGLISH — more topics + interactive games (main focus)
     ================================================================= */
  C.olympiad.topics.push(
    /* --- L1 --- */
    { level:1, group:"🔤 English", id:"en-spell1", title:"Spell It!", emoji:"🔤", color:EN, type:"order", rounds:[
      {q:"Spell CAT 🐱 — tap the letters in order!",items:[{d:"C",v:1,say:"C"},{d:"A",v:2,say:"A"},{d:"T",v:3,say:"T"}]},
      {q:"Spell DOG 🐶 — tap in order!",items:[{d:"D",v:1,say:"D"},{d:"O",v:2,say:"O"},{d:"G",v:3,say:"G"}]},
      {q:"Spell SUN ☀️ — tap in order!",items:[{d:"S",v:1,say:"S"},{d:"U",v:2,say:"U"},{d:"N",v:3,say:"N"}]},
      {q:"Spell PIG 🐷 — tap in order!",items:[{d:"P",v:1,say:"P"},{d:"I",v:2,say:"I"},{d:"G",v:3,say:"G"}]},
      {q:"Spell BUS 🚌 — tap in order!",items:[{d:"B",v:1,say:"B"},{d:"U",v:2,say:"U"},{d:"S",v:3,say:"S"}]}
    ]},
    { level:1, group:"🔤 English", id:"en-missing", title:"Missing Letter", emoji:"🔡", color:EN, questions:[
      {q:"Which letter is missing?",big:"🐱  C _ T",options:[{t:"A",d:"A"},{t:"O",d:"O"},{t:"E",d:"E"}],correct:0},
      {q:"Which letter is missing?",big:"🐶  D _ G",options:[{t:"O",d:"O"},{t:"A",d:"A"}],correct:0},
      {q:"Which letter is missing?",big:"☀️  S _ N",options:[{t:"U",d:"U"},{t:"O",d:"O"}],correct:0},
      {q:"Which letter is missing?",big:"🐟  F _ S H",options:[{t:"I",d:"I"},{t:"E",d:"E"}],correct:0},
      {q:"Which letter is missing?",big:"🐝  B _ E",options:[{t:"E",d:"E"},{t:"A",d:"A"}],correct:0},
      {q:"Which letter is missing?",big:"🎩  H _ T",options:[{t:"A",d:"A"},{t:"U",d:"U"}],correct:0},
      {q:"Which letter is missing?",big:"🐷  P _ G",options:[{t:"I",d:"I"},{t:"A",d:"A"}],correct:0},
      {q:"Which letter is missing?",big:"🚌  B _ S",options:[{t:"U",d:"U"},{t:"O",d:"O"}],correct:0}
    ]},
    { level:1, group:"🔤 English", id:"en-picword", title:"Picture & Word", emoji:"🧠", color:EN, type:"memory", intro:"Match the picture to its word!", pairs:[
      {0:"🐱",1:"cat",say:"cat",say2:"cat"},
      {0:"🐶",1:"dog",say:"dog",say2:"dog"},
      {0:"☀️",1:"sun",say:"sun",say2:"sun"},
      {0:"⭐",1:"star",say:"star",say2:"star"}
    ]},

    /* --- L2 --- */
    { level:2, group:"🔤 English", id:"en-spell2", title:"Spell It! · 2", emoji:"🔤", color:EN, type:"order", rounds:[
      {q:"Spell STAR ⭐ — tap in order!",items:[{d:"S",v:1,say:"S"},{d:"T",v:2,say:"T"},{d:"A",v:3,say:"A"},{d:"R",v:4,say:"R"}]},
      {q:"Spell FROG 🐸 — tap in order!",items:[{d:"F",v:1,say:"F"},{d:"R",v:2,say:"R"},{d:"O",v:3,say:"O"},{d:"G",v:4,say:"G"}]},
      {q:"Spell MILK 🥛 — tap in order!",items:[{d:"M",v:1,say:"M"},{d:"I",v:2,say:"I"},{d:"L",v:3,say:"L"},{d:"K",v:4,say:"K"}]},
      {q:"Spell HAND ✋ — tap in order!",items:[{d:"H",v:1,say:"H"},{d:"A",v:2,say:"A"},{d:"N",v:3,say:"N"},{d:"D",v:4,say:"D"}]},
      {q:"Spell DRUM 🥁 — tap in order!",items:[{d:"D",v:1,say:"D"},{d:"R",v:2,say:"R"},{d:"U",v:3,say:"U"},{d:"M",v:4,say:"M"}]}
    ]},
    { level:2, group:"🔤 English", id:"en-blends", title:"Sound Blends", emoji:"🔊", color:EN, questions:[
      {q:"Which word starts with the 'SH' sound?",big:"🦈 🐟",options:[{t:"Shark",d:"🦈"},{t:"Fish",d:"🐟"}],correct:0},
      {q:"Which starts with 'SH'?",big:"🚢 🐱",options:[{t:"Ship",d:"🚢"},{t:"Cat",d:"🐱"}],correct:0},
      {q:"Which starts with 'CH'?",big:"🧀 🍎",options:[{t:"Cheese",d:"🧀"},{t:"Apple",d:"🍎"}],correct:0},
      {q:"Which starts with 'CH'?",big:"🍒 🍌",options:[{t:"Cherry",d:"🍒"},{t:"Banana",d:"🍌"}],correct:0},
      {q:"Which starts with 'TH'?",big:"👍 🦶",options:[{t:"Thumb",d:"👍"},{t:"Foot",d:"🦶"}],correct:0},
      {q:"Which starts with 'WH'?",big:"🐳 🐍",options:[{t:"Whale",d:"🐳"},{t:"Snake",d:"🐍"}],correct:0},
      {q:"Which two letters make the 'SH' sound?",big:"🔤",options:[{t:"s and h",d:"sh"},{t:"c and h",d:"ch"}],correct:0}
    ]},
    { level:2, group:"🔤 English", id:"en-sentence2", title:"Make a Sentence", emoji:"📝", color:EN, type:"order", rounds:[
      {q:"Put the words in order!",items:[{d:"I",v:1,say:"I"},{d:"see",v:2,say:"see"},{d:"a",v:3,say:"a"},{d:"dog",v:4,say:"dog"}]},
      {q:"Make a sentence!",items:[{d:"We",v:1,say:"We"},{d:"like",v:2,say:"like"},{d:"to",v:3,say:"to"},{d:"play",v:4,say:"play"}]},
      {q:"Make a sentence!",items:[{d:"The",v:1,say:"The"},{d:"sun",v:2,say:"sun"},{d:"is",v:3,say:"is"},{d:"hot",v:4,say:"hot"}]},
      {q:"Make a sentence!",items:[{d:"She",v:1,say:"She"},{d:"has",v:2,say:"has"},{d:"a",v:3,say:"a"},{d:"cat",v:4,say:"cat"}]}
    ]},
    { level:2, group:"🔤 English", id:"en-oppmatch", title:"Opposites Match", emoji:"🧠", color:EN, type:"memory", intro:"Match each word to its opposite!", pairs:[
      {0:"big 🐘",1:"small 🐜",say:"big",say2:"small"},
      {0:"hot 🔥",1:"cold ❄️",say:"hot",say2:"cold"},
      {0:"up ⬆️",1:"down ⬇️",say:"up",say2:"down"},
      {0:"day ☀️",1:"night 🌙",say:"day",say2:"night"}
    ]},

    /* --- L3 --- */
    { level:3, group:"🔤 English", id:"en-spell3", title:"Spell It! · 3", emoji:"🔤", color:EN, type:"order", rounds:[
      {q:"Spell PLANT 🌱 — tap in order!",items:[{d:"P",v:1,say:"P"},{d:"L",v:2,say:"L"},{d:"A",v:3,say:"A"},{d:"N",v:4,say:"N"},{d:"T",v:5,say:"T"}]},
      {q:"Spell CLOUD ☁️ — tap in order!",items:[{d:"C",v:1,say:"C"},{d:"L",v:2,say:"L"},{d:"O",v:3,say:"O"},{d:"U",v:4,say:"U"},{d:"D",v:5,say:"D"}]},
      {q:"Spell GRAPE 🍇 — tap in order!",items:[{d:"G",v:1,say:"G"},{d:"R",v:2,say:"R"},{d:"A",v:3,say:"A"},{d:"P",v:4,say:"P"},{d:"E",v:5,say:"E"}]},
      {q:"Spell BRUSH 🖌️ — tap in order!",items:[{d:"B",v:1,say:"B"},{d:"R",v:2,say:"R"},{d:"U",v:3,say:"U"},{d:"S",v:4,say:"S"},{d:"H",v:5,say:"H"}]}
    ]},
    { level:3, group:"🔤 English", id:"en-spellpick", title:"Spelled Right?", emoji:"✅", color:EN, questions:[
      {q:"Which is spelled correctly?",big:"🐱",options:[{t:"cat",d:"✅"},{t:"kat",d:"❌"}],correct:0},
      {q:"Which is spelled correctly?",big:"🐶",options:[{t:"dog",d:"✅"},{t:"dawg",d:"❌"}],correct:0},
      {q:"Which is spelled correctly?",big:"🌳",options:[{t:"tree",d:"✅"},{t:"tre",d:"❌"}],correct:0},
      {q:"Which is spelled correctly?",big:"🌧️",options:[{t:"rain",d:"✅"},{t:"rane",d:"❌"}],correct:0},
      {q:"Which is spelled correctly?",big:"🏠",options:[{t:"house",d:"✅"},{t:"hows",d:"❌"}],correct:0},
      {q:"Which is spelled correctly?",big:"🌙",options:[{t:"moon",d:"✅"},{t:"mun",d:"❌"}],correct:0},
      {q:"Which is spelled correctly?",big:"📖",options:[{t:"book",d:"✅"},{t:"buk",d:"❌"}],correct:0},
      {q:"Which is spelled correctly?",big:"🐟",options:[{t:"fish",d:"✅"},{t:"fsh",d:"❌"}],correct:0}
    ]},
    { level:3, group:"🔤 English", id:"en-comprehend", title:"Read & Answer", emoji:"📖", color:EN, questions:[
      {q:"Tom has a red ball. What colour is the ball?",big:"🔴",options:[{t:"Red",d:"🔴"},{t:"Blue",d:"🔵"}],correct:0},
      {q:"A cat sat on a mat. Where did the cat sit?",big:"🐱",options:[{t:"On a mat",d:"🟫"},{t:"On a hat",d:"🎩"}],correct:0},
      {q:"Sam has two dogs. How many dogs does Sam have?",big:"🐶🐶",options:[{t:"Two",d:"2"},{t:"Five",d:"5"}],correct:0},
      {q:"It is raining. Meena takes an umbrella. What does she take?",big:"🌧️",options:[{t:"An umbrella",d:"☂️"},{t:"A hat",d:"🎩"}],correct:0},
      {q:"Anu ate an apple and a banana. How many fruits did she eat?",big:"🍎🍌",options:[{t:"Two",d:"2"},{t:"One",d:"1"}],correct:0},
      {q:"The dog is under the table. Where is the dog?",big:"🐕",options:[{t:"Under the table",d:"⬇️"},{t:"On the table",d:"⬆️"}],correct:0},
      {q:"Ravi has three balloons. One pops. How many are left?",big:"🎈🎈🎈",options:[{t:"Two",d:"2"},{t:"Three",d:"3"}],correct:0}
    ]},
    { level:3, group:"🔤 English", id:"en-synmatch", title:"Same Meaning Match", emoji:"🧠", color:EN, type:"memory", intro:"Match words that mean the same!", pairs:[
      {0:"big",1:"large",say:"big",say2:"large"},
      {0:"happy",1:"glad",say:"happy",say2:"glad"},
      {0:"fast",1:"quick",say:"fast",say2:"quick"},
      {0:"small",1:"little",say:"small",say2:"little"}
    ]},

    /* =================================================================
       MATH — interactive games
       ================================================================= */
    { level:2, group:"🔢 Math", id:"ma-addmatch", title:"Add & Match", emoji:"🧠", color:MA, type:"memory", intro:"Match the sum to its answer!", pairs:[
      {0:"1+1",1:"2",say:"one plus one",say2:"two"},
      {0:"2+2",1:"4",say:"two plus two",say2:"four"},
      {0:"3+3",1:"6",say:"three plus three",say2:"six"},
      {0:"4+4",1:"8",say:"four plus four",say2:"eight"}
    ]},
    { level:2, group:"🔢 Math", id:"ma-tap2", title:"Count & Tap · 2", emoji:"👆", color:MA, type:"tapcount", rounds:[
      {q:"Tap 6 stars!",emoji:"⭐",n:6,total:9},
      {q:"Tap 7 apples!",emoji:"🍎",n:7,total:10},
      {q:"Tap 8 hearts!",emoji:"❤️",n:8,total:11},
      {q:"Tap 10 balls!",emoji:"⚽",n:10,total:13}
    ]},

    /* =================================================================
       SCIENCE — interactive games
       ================================================================= */
    { level:1, group:"🔬 Science", id:"sc-babymatch", title:"Animal Babies Match", emoji:"🧠", color:SC, type:"memory", intro:"Match the animal to its baby!", pairs:[
      {0:"🐕",1:"puppy",say:"dog",say2:"puppy"},
      {0:"🐈",1:"kitten",say:"cat",say2:"kitten"},
      {0:"🐄",1:"calf",say:"cow",say2:"calf"},
      {0:"🐸",1:"tadpole",say:"frog",say2:"tadpole"}
    ]},
    { level:1, group:"🔬 Science", id:"sc-soundmatch", title:"Animal Sounds Match", emoji:"🧠", color:SC, type:"memory", intro:"Match the animal to its sound!", pairs:[
      {0:"🐄",1:"moo",say:"cow",say2:"moo"},
      {0:"🐶",1:"woof",say:"dog",say2:"woof"},
      {0:"🐱",1:"meow",say:"cat",say2:"meow"},
      {0:"🐝",1:"buzz",say:"bee",say2:"buzz"}
    ]},
    { level:1, group:"🔬 Science", id:"sc-alive", title:"Is It Alive?", emoji:"✅", color:SC, type:"truefalse", questions:[
      {q:"A dog is alive.",big:"🐶",tf:true},
      {q:"A rock is alive.",big:"🪨",tf:false},
      {q:"A tree is a living thing.",big:"🌳",tf:true},
      {q:"A toy car can eat food.",big:"🚗",tf:false},
      {q:"A flower grows.",big:"🌷",tf:true},
      {q:"A chair can breathe.",big:"🪑",tf:false},
      {q:"A fish is alive.",big:"🐟",tf:true}
    ]},
    { level:2, group:"🔬 Science", id:"sc-foodchain", title:"Food Chain", emoji:"🎮", color:SC, type:"order", rounds:[
      {q:"Order the food chain! Tap in order.",items:[{d:"☀️",v:1,say:"sun"},{d:"🌿",v:2,say:"plant"},{d:"🐛",v:3,say:"caterpillar"},{d:"🐦",v:4,say:"bird"}]},
      {q:"How does a plant grow? Tap in order.",items:[{d:"🌰",v:1,say:"seed"},{d:"🌱",v:2,say:"sprout"},{d:"🌿",v:3,say:"plant"},{d:"🌳",v:4,say:"tree"}]},
      {q:"Order the chicken's life! Tap in order.",items:[{d:"🥚",v:1,say:"egg"},{d:"🐤",v:2,say:"chick"},{d:"🐔",v:3,say:"hen"}]}
    ]},

    /* =================================================================
       REASONING — interactive game
       ================================================================= */
    { level:2, group:"🧠 Reasoning", id:"re-gomatch", title:"Goes Together Match", emoji:"🧠", color:RE, type:"memory", intro:"Match the things that go together!", pairs:[
      {0:"🧦",1:"👟",say:"sock",say2:"shoe"},
      {0:"🖐️",1:"🧤",say:"hand",say2:"glove"},
      {0:"🌧️",1:"☂️",say:"rain",say2:"umbrella"},
      {0:"🐝",1:"🍯",say:"bee",say2:"honey"}
    ]}
  );

  /* =================================================================
     DSA — interactive games (Algorithms & Data)
     ================================================================= */
  C.algorithms.topics.push(
    { level:1, id:"al-steps", title:"Daily Steps", emoji:"🎮", color:AL, type:"order", rounds:[
      {q:"Morning routine — tap in order!",items:[{d:"⏰",v:1,say:"wake up"},{d:"🪥",v:2,say:"brush teeth"},{d:"🍳",v:3,say:"eat breakfast"},{d:"🎒",v:4,say:"go to school"}]},
      {q:"Wash your hands — tap in order!",items:[{d:"💧",v:1,say:"wet hands"},{d:"🧼",v:2,say:"add soap"},{d:"🙌",v:3,say:"scrub"},{d:"🚿",v:4,say:"rinse"},{d:"🧻",v:5,say:"dry"}]},
      {q:"Bedtime routine — tap in order!",items:[{d:"🛁",v:1,say:"bath"},{d:"👕",v:2,say:"pyjamas"},{d:"📖",v:3,say:"story"},{d:"😴",v:4,say:"sleep"}]}
    ]}
  );
  C.data.topics.push(
    { level:2, id:"da-sizeorder", title:"Fewest to Most", emoji:"🎮", color:DA, type:"order", rounds:[
      {q:"Tap from fewest to most!",items:[{d:"⭐",v:1,say:"one"},{d:"⭐⭐",v:2,say:"two"},{d:"⭐⭐⭐",v:3,say:"three"}]},
      {q:"Tap from fewest to most!",items:[{d:"🍎🍎",v:2,say:"two"},{d:"🍎",v:1,say:"one"},{d:"🍎🍎🍎🍎",v:4,say:"four"},{d:"🍎🍎🍎",v:3,say:"three"}]},
      {q:"Tap the groups small to big!",items:[{d:"🔵🔵🔵",v:3,say:"three"},{d:"🔵",v:1,say:"one"},{d:"🔵🔵",v:2,say:"two"},{d:"🔵🔵🔵🔵🔵",v:5,say:"five"},{d:"🔵🔵🔵🔵",v:4,say:"four"}]}
    ]}
  );
})();

/* ---- content block 10 ---- */
(function(){
  var C = window.__CONTENT__; if(!C) return;
  var EN="#EF4444";
  C.olympiad.topics.push(
    /* ---------- L1: word formation & first reading ---------- */
    { level:1, group:"🔤 English", id:"en-family", title:"Blend the Word", emoji:"🔡", color:EN, questions:[
      {q:"What word do these letters make? C, A, T",big:"🐱",options:[{t:"cat",d:"🐱"},{t:"cot",d:"🔠"}],correct:0},
      {q:"What word is D, O, G?",big:"🐶",options:[{t:"dog",d:"🐶"},{t:"dig",d:"🔠"}],correct:0},
      {q:"What word is S, U, N?",big:"☀️",options:[{t:"sun",d:"☀️"},{t:"sin",d:"🔠"}],correct:0},
      {q:"What word is H, A, T?",big:"🎩",options:[{t:"hat",d:"🎩"},{t:"hit",d:"🔠"}],correct:0},
      {q:"What word is P, I, G?",big:"🐷",options:[{t:"pig",d:"🐷"},{t:"peg",d:"🔠"}],correct:0},
      {q:"What word is B, E, D?",big:"🛏️",options:[{t:"bed",d:"🛏️"},{t:"bad",d:"🔠"}],correct:0},
      {q:"What word is C, U, P?",big:"☕",options:[{t:"cup",d:"☕"},{t:"cap",d:"🔠"}],correct:0},
      {q:"What word is N, E, T?",big:"🥅",options:[{t:"net",d:"🥅"},{t:"nut",d:"🔠"}],correct:0}
    ]},
    { level:1, group:"🔤 English", id:"en-sight1", title:"Little Words", emoji:"👁️", color:EN, questions:[
      {q:"Read: I ___ a dog.",big:"👁️ 🐶",options:[{t:"see",d:"👁️"},{t:"saw",d:"🔠"}],correct:0},
      {q:"Read: The ___ is hot.",big:"☀️",options:[{t:"sun",d:"☀️"},{t:"sit",d:"🔠"}],correct:0},
      {q:"Read: This is ___ cat.",big:"🙋🐱",options:[{t:"my",d:"🙋"},{t:"me",d:"🔠"}],correct:0},
      {q:"Read: We ___ happy.",big:"😊",options:[{t:"are",d:"😊"},{t:"is",d:"🔠"}],correct:0},
      {q:"Read: ___ dog is big.",big:"🐶",options:[{t:"The",d:"🐶"},{t:"To",d:"🔠"}],correct:0},
      {q:"Read: I ___ a ball.",big:"⚽",options:[{t:"have",d:"⚽"},{t:"has",d:"🔠"}],correct:0},
      {q:"Read: I like ___ play.",big:"🧸",options:[{t:"to",d:"➡️"},{t:"too",d:"🔠"}],correct:0}
    ]},
    { level:1, group:"🔤 English", id:"en-phrase", title:"Read & Find", emoji:"🔍", color:EN, questions:[
      {q:"Read the words: 'red apple'. Which one?",options:[{t:"Red apple",d:"🍎"},{t:"Green apple",d:"🍏"}],correct:0},
      {q:"Read: 'big dog'. Which one?",options:[{t:"Big dog",d:"🐕"},{t:"Small ant",d:"🐜"}],correct:0},
      {q:"Read: 'yellow sun'. Which one?",options:[{t:"Yellow sun",d:"☀️"},{t:"Blue moon",d:"🌙"}],correct:0},
      {q:"Read: 'blue car'. Which one?",options:[{t:"Blue car",d:"🚙"},{t:"Red bus",d:"🚌"}],correct:0},
      {q:"Read: 'happy face'. Which one?",options:[{t:"Happy face",d:"😀"},{t:"Sad face",d:"😢"}],correct:0},
      {q:"Read: 'hot tea'. Which one?",options:[{t:"Hot tea",d:"☕"},{t:"Cold ice",d:"🧊"}],correct:0},
      {q:"Read: 'baby cat'. Which one?",options:[{t:"Baby cat",d:"🐱"},{t:"Big elephant",d:"🐘"}],correct:0}
    ]},

    /* ---------- L2: sentences, syllables, blends ---------- */
    { level:2, group:"🔤 English", id:"en-readsent", title:"Read the Sentence", emoji:"📄", color:EN, questions:[
      {q:"Read: The dog is big. Is the dog big or small?",big:"🐕",options:[{t:"Big",d:"🐘"},{t:"Small",d:"🐜"}],correct:0},
      {q:"Read: The cat is on the box. Where is the cat?",big:"🐱📦",options:[{t:"On the box",d:"⬆️"},{t:"In the box",d:"📥"}],correct:0},
      {q:"Read: Sam has a red hat. What colour is the hat?",big:"🎩",options:[{t:"Red",d:"🔴"},{t:"Blue",d:"🔵"}],correct:0},
      {q:"Read: The sun is hot. Is the sun hot or cold?",big:"☀️",options:[{t:"Hot",d:"🔥"},{t:"Cold",d:"❄️"}],correct:0},
      {q:"Read: I see two cats. How many cats?",big:"🐱🐱",options:[{t:"Two",d:"2"},{t:"Three",d:"3"}],correct:0},
      {q:"Read: The frog can jump. What can the frog do?",big:"🐸",options:[{t:"Jump",d:"🦘"},{t:"Fly",d:"🪽"}],correct:0},
      {q:"Read: Mum has a pink bag. What colour is the bag?",big:"👜",options:[{t:"Pink",d:"🩷"},{t:"Black",d:"⬛"}],correct:0}
    ]},
    { level:2, group:"🔤 English", id:"en-syllable", title:"Clap the Parts", emoji:"👏", color:EN, questions:[
      {q:"Clap the parts: cat. How many claps?",big:"🐱 (cat)",options:[{t:"One",d:"1"},{t:"Two",d:"2"}],correct:0},
      {q:"Clap the parts: ap-ple. How many?",big:"🍎 (ap-ple)",options:[{t:"Two",d:"2"},{t:"One",d:"1"}],correct:0},
      {q:"Clap the parts: ba-na-na. How many?",big:"🍌 (ba-na-na)",options:[{t:"Three",d:"3"},{t:"Two",d:"2"}],correct:0},
      {q:"Clap the parts: sun. How many?",big:"☀️ (sun)",options:[{t:"One",d:"1"},{t:"Three",d:"3"}],correct:0},
      {q:"Clap the parts: el-e-phant. How many?",big:"🐘 (el-e-phant)",options:[{t:"Three",d:"3"},{t:"One",d:"1"}],correct:0},
      {q:"Clap the parts: ti-ger. How many?",big:"🐯 (ti-ger)",options:[{t:"Two",d:"2"},{t:"Four",d:"4"}],correct:0},
      {q:"Clap the parts: but-ter-fly. How many?",big:"🦋 (but-ter-fly)",options:[{t:"Three",d:"3"},{t:"Two",d:"2"}],correct:0}
    ]},
    { level:2, group:"🔤 English", id:"en-blendbuild", title:"Put It Together", emoji:"🧩", color:EN, questions:[
      {q:"Put together: bl + ock = ?",big:"🧱",options:[{t:"block",d:"🧱"},{t:"black",d:"🔠"}],correct:0},
      {q:"Put together: fl + ag = ?",big:"🚩",options:[{t:"flag",d:"🚩"},{t:"frog",d:"🔠"}],correct:0},
      {q:"Put together: st + ar = ?",big:"⭐",options:[{t:"star",d:"⭐"},{t:"stir",d:"🔠"}],correct:0},
      {q:"Put together: tr + ee = ?",big:"🌳",options:[{t:"tree",d:"🌳"},{t:"try",d:"🔠"}],correct:0},
      {q:"Put together: sw + im = ?",big:"🏊",options:[{t:"swim",d:"🏊"},{t:"swam",d:"🔠"}],correct:0},
      {q:"Put together: cl + ap = ?",big:"👏",options:[{t:"clap",d:"👏"},{t:"clip",d:"🔠"}],correct:0}
    ]},

    /* ---------- L3: stories & longer sentences ---------- */
    { level:3, group:"🔤 English", id:"en-story", title:"Story Time", emoji:"📚", color:EN, questions:[
      {q:"Ravi has a dog. The dog is black. What colour is the dog?",big:"🐕",options:[{t:"Black",d:"⬛"},{t:"White",d:"⬜"}],correct:0},
      {q:"Meena went to the park. She played on the swing. Where did Meena go?",big:"🏞️",options:[{t:"The park",d:"🌳"},{t:"School",d:"🏫"}],correct:0},
      {q:"The bird had two eggs. One egg hatched. How many eggs are left?",big:"🥚",options:[{t:"One",d:"1"},{t:"Two",d:"2"}],correct:0},
      {q:"Sam likes apples. He ate three apples. What does Sam like?",big:"🍎",options:[{t:"Apples",d:"🍎"},{t:"Bananas",d:"🍌"}],correct:0},
      {q:"It was raining. Anu opened her umbrella. Why did she open it?",big:"🌧️",options:[{t:"Because it was raining",d:"☔"},{t:"Because it was sunny",d:"☀️"}],correct:0},
      {q:"The cat saw a mouse. The mouse ran away. Who ran away?",big:"🐭",options:[{t:"The mouse",d:"🐭"},{t:"The cat",d:"🐱"}],correct:0}
    ]},
    { level:3, group:"🔤 English", id:"en-sentence3", title:"Make a Long Sentence", emoji:"📝", color:EN, type:"order", rounds:[
      {q:"Make a sentence!",items:[{d:"I",v:1,say:"I"},{d:"have",v:2,say:"have"},{d:"a",v:3,say:"a"},{d:"red",v:4,say:"red"},{d:"ball",v:5,say:"ball"}]},
      {q:"Make a sentence!",items:[{d:"The",v:1,say:"The"},{d:"dog",v:2,say:"dog"},{d:"can",v:3,say:"can"},{d:"run",v:4,say:"run"},{d:"fast",v:5,say:"fast"}]},
      {q:"Make a sentence!",items:[{d:"We",v:1,say:"We"},{d:"like",v:2,say:"like"},{d:"to",v:3,say:"to"},{d:"eat",v:4,say:"eat"},{d:"cake",v:5,say:"cake"}]},
      {q:"Make a sentence!",items:[{d:"My",v:1,say:"My"},{d:"mum",v:2,say:"mum"},{d:"has",v:3,say:"has"},{d:"a",v:4,say:"a"},{d:"hat",v:5,say:"hat"}]}
    ]}
  );
})();
