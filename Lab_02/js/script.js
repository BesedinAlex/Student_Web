var table = [];
for (var i = 0; i < 10; i++) {
    var row = [];
    for (var j = 0; j < 10; j++) {
        row.push(i * j);
    }
    table.push(row);
}
document.write(String(table[5][5]));
var enter;
do {
    enter = prompt("Enter line", "1; 2; 3");
} while (enter === null || enter.lastIndexOf(';') === -1);
var test = enter.split(";");
document.write("<br>");
document.write(test.join("<br>"));
//# sourceMappingURL=script.js.map