/* Algo Kid — Class 2 (Level 3) topic pack, added at v27.
   Extends the Olympiad world with the cumulative top layer (ages ~7).
   All younger content is untouched; these are new Level-3 topic tiles.
   Convention matches the base content: {level,group,id,title,emoji,color,questions:[{q,big,options:[{t,d}],correct,ex}]} */
(function(){
  var C = window.__CONTENT__; if(!C || !C.olympiad) return;
  var MA="#3B82F6", SC="#22C55E", EN="#EF4444", RE="#8B5CF6", GK="#F59E0B";

  C.olympiad.topics.push(
    /* ================= MATH · LEVEL 3 (Class 2) ================= */
    { level:3, group:"🔢 Math", id:"l3-time", title:"Telling Time", emoji:"🕐", color:MA, questions:[
      {q:"What time does the clock show?",big:"🕒",options:[{t:"3 o'clock",d:"3:00"},{t:"6 o'clock",d:"6:00"}],correct:0,ex:"The short hand points to 3, so it is 3 o'clock."},
      {q:"What time is it?",big:"🕘",options:[{t:"9 o'clock",d:"9:00"},{t:"12 o'clock",d:"12:00"}],correct:0,ex:"The short hand points to 9, so it is 9 o'clock."},
      {q:"At 'o'clock', the long hand points to...?",big:"🕛",options:[{t:"12",d:"12"},{t:"6",d:"6"}],correct:0,ex:"At every o'clock, the long minute hand points straight up to 12."},
      {q:"The long hand points to 6. This is...?",big:"🕝",options:[{t:"Half past",d:"½"},{t:"O'clock",d:"⏰"}],correct:0,ex:"When the long hand points to 6, it is half past the hour."},
      {q:"How many hours are in one day?",big:"🌞🌙",options:[{t:"24",d:"24"},{t:"12",d:"12"}],correct:0,ex:"A full day and night has 24 hours."},
      {q:"How many minutes make one hour?",big:"⏳",options:[{t:"60",d:"60"},{t:"30",d:"30"}],correct:0,ex:"One hour is made of 60 minutes."},
      {q:"Which clock hand moves the FASTEST?",big:"🕰️",options:[{t:"The long minute hand",d:"⏱️"},{t:"The short hour hand",d:"🕐"}],correct:0,ex:"The long minute hand moves faster than the short hour hand."},
      {q:"We eat breakfast in the...?",big:"🥣",options:[{t:"Morning",d:"🌅"},{t:"Midnight",d:"🌃"}],correct:0,ex:"Breakfast is the first meal, in the morning."}
    ]},
    { level:3, group:"🔢 Math", id:"l3-measure", title:"Measure It", emoji:"📏", color:MA, questions:[
      {q:"We measure how LONG a pencil is in...?",big:"✏️",options:[{t:"Centimetres",d:"📏"},{t:"Litres",d:"🥤"}],correct:0,ex:"Length is measured in centimetres and metres."},
      {q:"We measure how HEAVY a bag is in...?",big:"🎒",options:[{t:"Kilograms",d:"⚖️"},{t:"Metres",d:"📏"}],correct:0,ex:"Weight is measured in grams and kilograms."},
      {q:"We measure how much water a bottle holds in...?",big:"🍼",options:[{t:"Litres",d:"💧"},{t:"Kilograms",d:"⚖️"}],correct:0,ex:"How much a container holds is measured in litres."},
      {q:"Which is LONGER?",big:"🚌 bus or ✏️ pencil",options:[{t:"The bus",d:"🚌"},{t:"The pencil",d:"✏️"}],correct:0,ex:"A bus is much longer than a pencil."},
      {q:"A pencil is about 15 ___ long.",big:"✏️ 15 ❓",options:[{t:"centimetres",d:"cm"},{t:"litres",d:"L"}],correct:0,ex:"Length uses centimetres, so 15 centimetres."},
      {q:"Which holds MORE water?",big:"🪣 bucket or 🥄 spoon",options:[{t:"The bucket",d:"🪣"},{t:"The spoon",d:"🥄"}],correct:0,ex:"A bucket holds much more water than a spoon."},
      {q:"Which tool do we use to measure length?",big:"❓",options:[{t:"A ruler",d:"📏"},{t:"A clock",d:"🕐"}],correct:0,ex:"A ruler measures how long something is."},
      {q:"Which is HEAVIER, 1 kg of iron or 1 kg of cotton?",big:"⚖️",options:[{t:"They weigh the same",d:"="},{t:"The iron",d:"🪨"}],correct:0,ex:"Both are 1 kilogram, so they weigh exactly the same."}
    ]},
    { level:3, group:"🔢 Math", id:"l3-fractions", title:"Halves & Quarters", emoji:"🍕", color:MA, questions:[
      {q:"One whole cut into 2 equal parts — each part is a...?",big:"🍕 ➜ 🍕🍕",options:[{t:"Half",d:"½"},{t:"Quarter",d:"¼"}],correct:0,ex:"Two equal parts means each one is a half."},
      {q:"One whole cut into 4 equal parts — each part is a...?",big:"🍫 ➜ 4 parts",options:[{t:"Quarter",d:"¼"},{t:"Half",d:"½"}],correct:0,ex:"Four equal parts means each one is a quarter."},
      {q:"How many halves make one whole?",big:"½ + ½",options:[{t:"Two",d:"2"},{t:"Four",d:"4"}],correct:0,ex:"Two halves join to make one whole."},
      {q:"How many quarters make one whole?",big:"¼ ¼ ¼ ¼",options:[{t:"Four",d:"4"},{t:"Two",d:"2"}],correct:0,ex:"Four quarters make one whole."},
      {q:"Half of 8 apples is...?",big:"🍎×8 ÷ 2",options:[{t:"Four",d:"4"},{t:"Eight",d:"8"}],correct:0,ex:"Share 8 into two equal groups — four in each."},
      {q:"A quarter of 8 is...?",big:"🍎×8 ÷ 4",options:[{t:"Two",d:"2"},{t:"Four",d:"4"}],correct:0,ex:"Share 8 into four equal groups — two in each."},
      {q:"Which shows ONE HALF shaded?",big:"◐  or  ◕",options:[{t:"The half-shaded one ◐",d:"◐"},{t:"The mostly-shaded one ◕",d:"◕"}],correct:0,ex:"One half means exactly one of two equal parts is shaded."},
      {q:"Two children share 1 pizza equally. Each gets...?",big:"🍕 ÷ 2",options:[{t:"Half",d:"½"},{t:"The whole pizza",d:"🍕"}],correct:0,ex:"Sharing one pizza equally between two gives each a half."}
    ]},
    { level:3, group:"🔢 Math", id:"l3-addcarry", title:"Adding with Carry", emoji:"➕", color:MA, questions:[
      {q:"8 + 5 = ?",big:"8 ➕ 5",options:[{t:"13",d:"13"},{t:"12",d:"12"}],correct:0,ex:"8 and 2 make 10, then 3 more makes 13."},
      {q:"7 + 6 = ?",big:"7 ➕ 6",options:[{t:"13",d:"13"},{t:"12",d:"12"}],correct:0,ex:"7 and 3 make 10, then 3 more makes 13."},
      {q:"9 + 8 = ?",big:"9 ➕ 8",options:[{t:"17",d:"17"},{t:"16",d:"16"}],correct:0,ex:"9 and 1 make 10, then 7 more makes 17."},
      {q:"15 + 7 = ?",big:"15 ➕ 7",options:[{t:"22",d:"22"},{t:"21",d:"21"}],correct:0,ex:"15 and 5 make 20, then 2 more makes 22."},
      {q:"26 + 5 = ?",big:"26 ➕ 5",options:[{t:"31",d:"31"},{t:"30",d:"30"}],correct:0,ex:"26 and 4 make 30, then 1 more makes 31."},
      {q:"18 + 6 = ?",big:"18 ➕ 6",options:[{t:"24",d:"24"},{t:"23",d:"23"}],correct:0,ex:"18 and 2 make 20, then 4 more makes 24."},
      {q:"When ones add up to more than 9, we carry a...?",big:"🔟",options:[{t:"Ten",d:"1 ten"},{t:"Hundred",d:"100"}],correct:0,ex:"Ten ones make one ten, so we carry a ten."},
      {q:"29 + 3 = ?",big:"29 ➕ 3",options:[{t:"32",d:"32"},{t:"31",d:"31"}],correct:0,ex:"29 and 1 make 30, then 2 more makes 32."}
    ]},
    { level:3, group:"🔢 Math", id:"l3-subborrow", title:"Subtracting with Borrow", emoji:"➖", color:MA, questions:[
      {q:"12 − 5 = ?",big:"12 ➖ 5",options:[{t:"7",d:"7"},{t:"8",d:"8"}],correct:0,ex:"From 12, take 2 to reach 10, then 3 more — that leaves 7."},
      {q:"14 − 6 = ?",big:"14 ➖ 6",options:[{t:"8",d:"8"},{t:"7",d:"7"}],correct:0,ex:"From 14, take 4 to reach 10, then 2 more — that leaves 8."},
      {q:"20 − 7 = ?",big:"20 ➖ 7",options:[{t:"13",d:"13"},{t:"14",d:"14"}],correct:0,ex:"From 20, take 7 — that leaves 13."},
      {q:"23 − 8 = ?",big:"23 ➖ 8",options:[{t:"15",d:"15"},{t:"16",d:"16"}],correct:0,ex:"From 23, take 3 to reach 20, then 5 more — that leaves 15."},
      {q:"31 − 4 = ?",big:"31 ➖ 4",options:[{t:"27",d:"27"},{t:"28",d:"28"}],correct:0,ex:"From 31, take 1 to reach 30, then 3 more — that leaves 27."},
      {q:"15 − 9 = ?",big:"15 ➖ 9",options:[{t:"6",d:"6"},{t:"7",d:"7"}],correct:0,ex:"From 15, take 5 to reach 10, then 4 more — that leaves 6."},
      {q:"You have 22 sweets and give away 7. How many left?",big:"🍬 22 ➖ 7",options:[{t:"15",d:"15"},{t:"14",d:"14"}],correct:0,ex:"From 22, take 2 to reach 20, then 5 more — that leaves 15."},
      {q:"When the top ones are too small, we borrow a ten and make it...?",big:"🔟",options:[{t:"10 more ones",d:"10"},{t:"nothing",d:"0"}],correct:0,ex:"We borrow 1 ten, which becomes 10 extra ones."}
    ]},
    { level:3, group:"🔢 Math", id:"l3-oddeven", title:"Odd & Even", emoji:"🔢", color:MA, questions:[
      {q:"Is 4 odd or even?",big:"🔵🔵 🔵🔵",options:[{t:"Even",d:"✌️"},{t:"Odd",d:"☝️"}],correct:0,ex:"4 splits into two equal pairs with none left over, so it is even."},
      {q:"Is 7 odd or even?",big:"🔵🔵🔵 🔵🔵🔵 🔵",options:[{t:"Odd",d:"☝️"},{t:"Even",d:"✌️"}],correct:0,ex:"7 leaves one over when paired up, so it is odd."},
      {q:"Which number is EVEN?",big:"3 · 6 · 9",options:[{t:"6",d:"6"},{t:"9",d:"9"}],correct:0,ex:"6 can be split into two equal groups, so it is even."},
      {q:"Which number is ODD?",big:"8 · 10 · 5",options:[{t:"5",d:"5"},{t:"8",d:"8"}],correct:0,ex:"5 cannot be split into two equal groups, so it is odd."},
      {q:"Even numbers end in 0, 2, 4, 6 or...?",big:"🔢",options:[{t:"8",d:"8"},{t:"7",d:"7"}],correct:0,ex:"Even numbers end in 0, 2, 4, 6 or 8."},
      {q:"Is 10 odd or even?",big:"🔟",options:[{t:"Even",d:"✌️"},{t:"Odd",d:"☝️"}],correct:0,ex:"10 ends in 0, so it is even."},
      {q:"Which list is all EVEN numbers?",big:"❓",options:[{t:"2, 4, 6, 8",d:"✅"},{t:"1, 3, 5, 7",d:"❌"}],correct:0,ex:"2, 4, 6, 8 are all even — they all pair up evenly."},
      {q:"The number 9 ends in 9, so it is...?",big:"9️⃣",options:[{t:"Odd",d:"☝️"},{t:"Even",d:"✌️"}],correct:0,ex:"Numbers ending in 1, 3, 5, 7 or 9 are odd."}
    ]},
    /* ================= REASONING · LEVEL 3 ================= */
    { level:3, group:"🧠 Reasoning", id:"l3-symmetry", title:"Mirror & Symmetry", emoji:"🪞", color:RE, questions:[
      {q:"In a mirror, which way does ➡️ point?",big:"➡️ 🪞",options:[{t:"Left ⬅️",d:"⬅️"},{t:"Right ➡️",d:"➡️"}],correct:0,ex:"A mirror flips left and right, so the arrow points the other way."},
      {q:"In a mirror, the letter 'b' looks like...?",big:"b 🪞",options:[{t:"d",d:"d"},{t:"p",d:"p"}],correct:0,ex:"A mirror flips 'b' left-to-right, making it look like 'd'."},
      {q:"A shape with two matching halves has...?",big:"🦋",options:[{t:"Symmetry",d:"🪞"},{t:"No sides",d:"⭕"}],correct:0,ex:"When both halves match, the shape has symmetry — like a butterfly."},
      {q:"Which shape has matching halves (symmetry)?",big:"❤️ or 🧦",options:[{t:"The heart",d:"❤️"},{t:"The sock",d:"🧦"}],correct:0,ex:"A heart's left and right halves match, so it is symmetrical."},
      {q:"If you fold a square in half, do the halves match?",big:"⬛",options:[{t:"Yes",d:"✅"},{t:"No",d:"❌"}],correct:0,ex:"A square folds into two matching halves, so it is symmetrical."},
      {q:"In a mirror, your RIGHT hand looks like your...?",big:"🤚🪞",options:[{t:"Left hand",d:"✋"},{t:"Right hand",d:"🤚"}],correct:0,ex:"A mirror swaps left and right, so your right hand looks like a left hand."},
      {q:"In a mirror, which way does the clock's 3 move to?",big:"🕒🪞",options:[{t:"The left side",d:"⬅️"},{t:"Stays on the right",d:"➡️"}],correct:0,ex:"A mirror flips the picture, so the right side moves to the left."}
    ]},
    { level:3, group:"🧠 Reasoning", id:"l3-figures", title:"Count the Shapes", emoji:"🔺", color:RE, questions:[
      {q:"How many triangles?",big:"🔺🔺🔺",options:[{t:"3",d:"3"},{t:"2",d:"2"}],correct:0,ex:"Count each triangle: one, two, three."},
      {q:"How many circles?",big:"⭕ ⭕ ⭕ ⭕",options:[{t:"4",d:"4"},{t:"5",d:"5"}],correct:0,ex:"Count each circle one by one — there are four."},
      {q:"How many corners does a square have?",big:"⬛",options:[{t:"4",d:"4"},{t:"3",d:"3"}],correct:0,ex:"A square has four corners."},
      {q:"How many sides does a triangle have?",big:"🔺",options:[{t:"3",d:"3"},{t:"4",d:"4"}],correct:0,ex:"A triangle has three sides."},
      {q:"How many squares?",big:"⬛⬛ ⬛⬛ ⬛",options:[{t:"5",d:"5"},{t:"4",d:"4"}],correct:0,ex:"Count each square — there are five."},
      {q:"A shape with 6 sides is a...?",big:"⬡",options:[{t:"Hexagon",d:"⬡"},{t:"Triangle",d:"🔺"}],correct:0,ex:"A six-sided shape is called a hexagon."},
      {q:"How many corners does a triangle have?",big:"🔺",options:[{t:"3",d:"3"},{t:"4",d:"4"}],correct:0,ex:"A triangle has three corners, one at each point."}
    ]},
    { level:3, group:"🧠 Reasoning", id:"l3-caldays", title:"Days & Months", emoji:"📅", color:RE, questions:[
      {q:"How many days are in a week?",big:"📅",options:[{t:"7",d:"7"},{t:"5",d:"5"}],correct:0,ex:"A week has 7 days."},
      {q:"Which day comes after Sunday?",big:"❓",options:[{t:"Monday",d:"🌙"},{t:"Friday",d:"🎉"}],correct:0,ex:"After Sunday comes Monday, the start of the week."},
      {q:"Which day comes just before Friday?",big:"❓ ⬅️ Friday",options:[{t:"Thursday",d:"📆"},{t:"Saturday",d:"📆"}],correct:0,ex:"The day before Friday is Thursday."},
      {q:"How many months are in a year?",big:"🗓️",options:[{t:"12",d:"12"},{t:"10",d:"10"}],correct:0,ex:"A year has 12 months."},
      {q:"Which is the FIRST month of the year?",big:"🎉",options:[{t:"January",d:"1️⃣"},{t:"December",d:"🎄"}],correct:0,ex:"January is the first month of the year."},
      {q:"Saturday and Sunday are called the...?",big:"🛌",options:[{t:"Weekend",d:"🎈"},{t:"Weekdays",d:"🏫"}],correct:0,ex:"Saturday and Sunday are the weekend."},
      {q:"Which month comes after June?",big:"❓",options:[{t:"July",d:"☀️"},{t:"May",d:"🌼"}],correct:0,ex:"After June comes July."}
    ]},
    /* ================= ENGLISH · LEVEL 3 ================= */
    { level:3, group:"🔤 English", id:"l3-adjectives", title:"Describing Words", emoji:"🎨", color:EN, questions:[
      {q:"In 'the BIG dog', which word describes the dog?",big:"🐶",options:[{t:"Big",d:"🐘"},{t:"Dog",d:"🐶"}],correct:0,ex:"'Big' tells us about the dog, so it is a describing word."},
      {q:"Which word is a describing word?",big:"🌈",options:[{t:"Colourful",d:"🌈"},{t:"Run",d:"🏃"}],correct:0,ex:"'Colourful' describes how something looks, so it is a describing word."},
      {q:"A lemon tastes...?",big:"🍋",options:[{t:"Sour",d:"😖"},{t:"Loud",d:"📢"}],correct:0,ex:"'Sour' describes the taste of a lemon."},
      {q:"Snow feels...?",big:"❄️",options:[{t:"Cold",d:"🥶"},{t:"Happy",d:"😀"}],correct:0,ex:"'Cold' describes how snow feels."},
      {q:"Which word describes SIZE?",big:"📏",options:[{t:"Tiny",d:"🐜"},{t:"Jump",d:"🦘"}],correct:0,ex:"'Tiny' describes how big or small something is."},
      {q:"In 'a RED apple', the describing word is...?",big:"🍎",options:[{t:"Red",d:"🔴"},{t:"Apple",d:"🍎"}],correct:0,ex:"'Red' describes the colour of the apple."},
      {q:"An elephant is very...?",big:"🐘",options:[{t:"Big",d:"⬆️"},{t:"Quiet word",d:"🤫"}],correct:0,ex:"'Big' describes the elephant's size."}
    ]},
    { level:3, group:"🔤 English", id:"l3-grammar", title:"Sentences & Grammar", emoji:"📝", color:EN, questions:[
      {q:"Which is in the right order?",big:"🐱",options:[{t:"The cat is black.",d:"✅"},{t:"Black is cat the.",d:"❌"}],correct:0,ex:"A sentence starts with a capital and the words are in order: The cat is black."},
      {q:"Put in order: 'sun / The / is / hot'",big:"☀️",options:[{t:"The sun is hot.",d:"✅"},{t:"Hot the sun is.",d:"❌"}],correct:0,ex:"The words make sense in the order: The sun is hot."},
      {q:"A sentence should begin with a...?",big:"🔠",options:[{t:"Capital letter",d:"A"},{t:"Small letter",d:"a"}],correct:0,ex:"Every sentence begins with a capital letter."},
      {q:"A telling sentence ends with a...?",big:"❓",options:[{t:"Full stop (.)",d:"."},{t:"Comma (,)",d:","}],correct:0,ex:"A telling sentence ends with a full stop."},
      {q:"Which asking sentence is correct?",big:"❓",options:[{t:"What is your name?",d:"❓"},{t:"What is your name.",d:"."}],correct:0,ex:"An asking sentence ends with a question mark."},
      {q:"Put in order: 'dog / A / barks'",big:"🐶",options:[{t:"A dog barks.",d:"✅"},{t:"Barks a dog.",d:"❌"}],correct:0,ex:"The words in order make: A dog barks."},
      {q:"Which word should be CAPITAL (a name)?",big:"🙋",options:[{t:"Ravi",d:"🧒"},{t:"boy",d:"👦"}],correct:0,ex:"Names of people start with a capital letter, like Ravi."}
    ]},
    /* ================= GK & EVS · LEVEL 3 ================= */
    { level:3, group:"🌍 GK & EVS", id:"l3-animalgroups", title:"Animal Groups", emoji:"🐾", color:GK, questions:[
      {q:"A cow and a dog are kept at home. They are...?",big:"🐄🐶",options:[{t:"Domestic animals",d:"🏠"},{t:"Wild animals",d:"🌴"}],correct:0,ex:"Animals we keep and care for at home are domestic animals."},
      {q:"A lion and a tiger live in the jungle. They are...?",big:"🦁🐯",options:[{t:"Wild animals",d:"🌴"},{t:"Pets",d:"🏠"}],correct:0,ex:"Animals that live freely in the jungle are wild animals."},
      {q:"Which animal gives us milk?",big:"🥛",options:[{t:"Cow",d:"🐄"},{t:"Hen",d:"🐔"}],correct:0,ex:"A cow gives us milk."},
      {q:"A hen gives us...?",big:"🐔",options:[{t:"Eggs",d:"🥚"},{t:"Wool",d:"🧶"}],correct:0,ex:"A hen gives us eggs."},
      {q:"Birds have two legs and two...?",big:"🐦",options:[{t:"Wings",d:"🪽"},{t:"Fins",d:"🐟"}],correct:0,ex:"Birds have two wings to help them fly."},
      {q:"A fish breathes under water using its...?",big:"🐟",options:[{t:"Gills",d:"🌊"},{t:"Nose",d:"👃"}],correct:0,ex:"Fish breathe in water using gills."},
      {q:"Which animal gives us wool?",big:"🧶",options:[{t:"Sheep",d:"🐑"},{t:"Dog",d:"🐶"}],correct:0,ex:"A sheep gives us wool."}
    ]}
  );

  if(window.console&&console.log){ try{ console.log('[AlgoKid Class 2 pack v27] +12 Level-3 topics'); }catch(e){} }
})();
