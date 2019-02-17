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
console.log("Greetings, " + name + "!");

// let i = 0;
// console.log(i);
// var j = 0;
// console.log(i);
// // var i = 0;      Global
// let i = 0;         Local
// const c = 'smth';  Constant
// let i;             Undefined
// let i = 0;         Number
// let i = 'text';    String
// let b = false;     Boolean
// let c = null;      Any
// console.log(typeof(i));

// let str1 = "Line1";
// let str2 = 'Line2';
// let str3 = `Line3 ${i}`;
// console.log(str3);

// let i = 0 / 0;
// console.log(typeof(i));
// let j = -10 / 0;
// console.log(j);

// let a = 10;
// let b = 15;

// console.log(a);
// console.log(a++);
// console.log(a);
// console.log(++a);

// let a = 1;
// let b = '1';
// console.log(a == b);
// console.log(a === b);

// if (false) {
//     console.log("false");
// } else {
//     console.log("true")
// }
// if (0 || null || undefined) {
//     console.log("false");
// }

// let i = 0;
// let str = (i === 0) ? "i == 0" : "i != 0";
// console.log(str);

// let i = 10;
// switch (i) {
//     case 10:
//         console.log(10);
//         break;
//     default:
//         console.log("smth else");
//         break;
// }

// let i = 10;
// while (i-- > 0) {
//     console.log(i);
// }

// do {
//     console.log(i);
// } while (i-- > 0);

// for (let i = 0; i < 10; i++) {
//     if (i === 4) {
//         // continue;  next i
//         break; // stops loop
//     }
//     console.log(i);
// }
// console.log(i);

// alert("alert");
// console.log(confirm("Yer or no?"));
// console.log(prompt("Enter smth", "PH"));

// let str = "alert('!')";
// console.log(eval(str));