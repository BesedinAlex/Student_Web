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

// let arr = [1, 2, 3, 4, 5];
// let a = arr.concat();
// arr[0] = 70;
// document.write(a.join("<br>"));

// let arr = [];
// console.log(arr);
// console.log(typeof(arr));                  Object
// console.log(Array.isArray(arr));

// let arr1 = [1, 2, 3, 4, 5];
// console.log(arr1);
// console.log(arr1[5]);

// let arr = [1, 2, "line", true];
// arr["key"] = "smth";
// console.log(arr[arr.length - 1]);

// for (let index = 0; index < arr.length; index++) {
//     console.log(arr[index]);
    
// }

// for (let i in arr) {
//     console.log(i);
// }
// for (let i of arr) {
//     console.log(i);
// }

// let arr1 = [1, 2, 3, 4, [0, 0]];
// let arr2 = [5, 6, 7, 8];
// let sum = [arr1, arr2];
// console.log(sum);

// let i = [10];
// let b = i;
// i[0] = 15;
// let b = [1, 2, 3, 4, 5];
// let a = [b, 6, 7, 8, 9];
// let c = [...b, 6, 7, 8, 9];
// console.log(a);
// console.log(c);

// let line = "line";
// console.log(line[2]);