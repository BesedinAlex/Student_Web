let arr = [1, 4, 12, 6, 8, 3, 11]
arr.sort((a, b) => (a <= b) ? -1 : 1)
console.log(arr)
let newArr = arr.filter((a) => (a > 8) ? true : false)
console.log(newArr)

let text = "вгде12аж 1аыа"
let eng = ["a", "b", "v", "g", "d", "e", "e", "zh", "z", "i"] // Is not finished
let rus = ["а", "б", "в", "г", "д", "е", "ё", "ж","з","и"] // Is not finished
function translit(text: String) {
    let newText = ""
    for (let i = 0; i < text.length; i++) {
        let check = false
        for (let j = 0; j < rus.length; j++ ) {
            if (text[i] === rus[j]) {
                newText += eng[j]
            } else if ((text[i].search(/[^а-яА-Я]/) != -1) && !check) {
                newText += text[i]
                check = true
            }
        }
    }
    return newText
}
console.log(translit(text))


// JS vs TS

// function foo(a, b) {
//     console.log(a * b)
//     return +a + +b // +a to make it number
// }
// console.log(foo("2", "2"))
function foo1(a: number, b: number) {
    console.log(a * b)
    return a + b
}
console.log(foo1(2, 3))

// function logArr(arr) {
//     if(!Array.isArray(arr)) {
//         return false
//     } else {
//         for (let i = 0; i < arr.length; i++) {
//             console.log(arr[i])
//         }
//     }
// }
function logArr(arr: Array<any>) {
    for (let i = 0; i < arr.length; i++)
        console.log(arr[i])
}
logArr([1, 2, 3, 4])

function foo2(p1: number, p2: string) {
    console.log(p1, p2)
}
foo2(1, "1")

// function sum() {
//     console.log(arguments)
// }
function foo3(...args:any[]) {
    console.log(args)
}
foo3(1, 2, 3, 4);

(function foo4() {
    console.log("!!")
})(); // Will call itself at launch

window.onload = function() {
    console.log("RAGE")
    let sq: HTMLElement = document.querySelector("#sq")
    sq.onclick = function() {
        console.log("test")
    }
    console.log(sq)
}

// function showStatus(name, status, callback) {
//     if (typeof(callback) === "function") {
//         callback();
//     } else {
//         console.log("Name " + name + ", status " + status)
//     }
// }
function showStatus(name: string, status: string, callback: any = void 0) {
    if (typeof(callback) === "function")
        callback()  
    else
        console.log("Name " + name + ", status " + status)
}
showStatus("name", "status")
showStatus("", "", function() {console.log("Empty")})

let e = function sum(a: number, b: number) {
    return a = b
}
let e1 = (a: number, b: number) => a + b 
let e2 = (a: number, b: number) => {
    let sum = a + b
    console.log(sum)
    return sum
}
let e3 = (a: number) => a + 10;
let e4 = () => console.log("smth");
(() => console.log("Hello"))();

arr.sort(function(a, b) {
    return (a <= b) ? -1 : 1
})

// function foo() {
//     console.log(this)
// }
// let obj = {}
// obj.name = "Name of Obj1"
// obj.do = foo
// obj.do()

// let obj = {}
// obj.name = "Object 1"
// obj.foo = function() {
//     console.log(this.name)
// }
// obj.arrfunc = () => console.log(this.name)
// obj.foo()
// obj.arrfunc()