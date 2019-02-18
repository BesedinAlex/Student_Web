let daysGiven = 100;
let daysGone = 76;
let daysLeft = daysGiven - daysGone;
let a = daysLeft % 10;

if (daysLeft === 11 || daysLeft === 12 || daysLeft === 13 || daysLeft === 14) {
    console.log("Осталось " +daysLeft+ " дней.");
} else {
    switch (a) {
        case 1:
            console.log("Остался " + daysLeft + " день.");
            break;
        case 2:
        case 3:
        case 4:
            console.log("Осталось " + daysLeft + " дня.");
            break;
        default:
            console.log("Осталось " + daysLeft + " дней.");
            break;
    }
}

for (let i = 1; i < 10; i++) {
    let line = "";
    for (let j = 1; j < 10; j++) {
        let result = i * j;
        line += String(result) + " ";
    }
    console.log(line);
}

let userName;
do {
    userName = prompt("Enter your name", "John");
} while (userName === null);
console.log("Greetings, " + userName + "!");


// let - local; var - global; const - constant

let a1
console.log(typeof(a1));
let a2 = 23.3
console.log(typeof(a2))
let a3 = 'text'
console.log(typeof(a3))
let a4 = false
console.log(typeof(a4))
let a5 = null
console.log(typeof(a5))

let str1 = "Line1";
let str2 = 'Line2';
let str3 = `Line3 ${a2}`;
console.log(str3);

let b1 = 0 / 0;
console.log(typeof(b1));
let b2 = -10 / 0;
console.log(b2);

let c = 10;
console.log(c);
console.log(c++);
console.log(c);
console.log(++c);

if (false)
    console.log("false");
else
    console.log("true")
if (0 || null || undefined)
    console.log("false");

let d1 = 0;
let d2 = (d1 === 0) ? "d1 == 0" : "d1 != 0";
console.log(d2);

let e = 10;
switch (e) {
    case 10:
        console.log(10);
        break;
    default:
        console.log("smth else");
        break;
}

let f = 10;
while (f-- > 0) {
    console.log(f);
}
f = 10;
do {
    console.log(f);
} while (f-- > 0);

for (let i = 0; i < 10; i++) {
    if (i === 4) {
        // continue;  next i
        break; // stops loop
    }
    console.log(i);
}

alert("alert");
console.log(confirm("Yer or no?"));
console.log(prompt("Enter smth", "PH"));

let g = "alert('!')";
console.log(eval(g));