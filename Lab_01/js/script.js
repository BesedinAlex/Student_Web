var daysGiven = 100;
var daysGone = 76;
var daysLeft = daysGiven - daysGone;
var a = daysLeft % 10;
if (daysLeft === 11 || daysLeft === 12 || daysLeft === 13 || daysLeft === 14) {
    console.log("Осталось " + daysLeft + " дней.");
}
else {
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
for (var i = 1; i < 10; i++) {
    var line = "";
    for (var j = 1; j < 10; j++) {
        var result = i * j;
        line += String(result) + " ";
    }
    console.log(line);
}
var userName;
do {
    userName = prompt("Enter your name", "John");
} while (userName === null);
console.log("Greetings, " + name + "!");
//# sourceMappingURL=script.js.map