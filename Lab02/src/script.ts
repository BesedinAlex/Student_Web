let table = [];
for (let i = 0; i < 10; i++) {
    let row = [];
    for (let j = 0; j < 10; j++) {
        row.push(i * j);
    }
    table.push(row);
}
document.write(String(table[5][5]));

let enter;
do {
    enter = prompt("Enter line", "1; 2; 3");
} while (enter === null || enter.lastIndexOf(';') === -1)
let test = enter.split(";");
document.write("<br>");
document.write(test.join("<br>"));


let a = [1, 2, 3, 4, 5];
let a1 = a.concat();
a[0] = 70;
document.write(a1.join("<br>"));

let b: Array<undefined> = [];
console.log(b);
console.log(typeof(b));                  
console.log(Array.isArray(b));

let c = [1, 2, 3, 4, 5];
console.log(c);
console.log(c[4]);
console.log(c[5]);

let d= [1, 2, "line", true];
d[<any>"key"] = "smth";
console.log(d[d.length - 1]);
console.log(d)
for (let i = 0; i < d.length; i++)
    console.log(d[i]);
for (let i in d) // All elements
    console.log(i);
for (let i of d) // Length only
    console.log(i);

let e1 = [1, 2, 3, 4, [0, 0]];
let e2 = [5, 6, 7, 8];
let e3 = [e1, e2];
console.log(e3);

let f = [10];
let f1 = f;
f[0] = 15;
let f2 = [1, 2, 3, 4, 5];
let f3 = [f2, 6, 7, 8, 9];
let f4 = [...f2, 6, 7, 8, 9];
console.log(f3);
console.log(f4);

let line = "line";
console.log(line[2]);