let arr = [1, 4, 12, 6, 8, 3, 11]
arr.sort((a, b) => (a <= b) ? -1 : 1)
console.log(arr)
let newArr = arr.filter((a) => (a > 8) ? true : false)
console.log(newArr)

let text = "вгде12аж 1аыа"
let eng = ["a", "b", "v", "g", "d", "e", "e", "zh", "z", "i"]
let rus = ["а", "б", "в", "г", "д", "е", "ё", "ж","з","и"]
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
// function foo(a, b) {
//     console.log(a * b)
//     return +a + +b // +a to make it number
// }
// console.log(foo("2", "2"))

// function logArr(arr) {
//     if(!Array.isArray(arr)) {
//         return false
//     } else {
//         for (let i = 0; i < arr.length; i++) {
//             console.log(arr[i])
//         }
//     }
// }
// logArr([1,2,3,4])

// function foo(p1, p2) {
//     console.log(p1)
// }
// foo(1)

// function sum() {
//     console.log(arguments)
// }
// sum(1,2,3,4)

// function foo() {
//     console.log(this)
// }
// let obj = {}
// obj.name = "Name of Obj1"
// obj.do = foo
// obj.do()

// (function foo() {
//     console.log("!!")
// })() // Will call itself at launch

// window.onload = function() {
//     console.log("RAGE")
//     let sq = document.querySelector("#sq")
//     sq.onclick = function() {
//         console.log("test")
//     }
//     console.log(sq)
// }

// function showStatus(name, status, callback) {
//     if (typeof(callback) === "function") {
//         callback();
//     } else {
//         console.log("Name " + name + ", status " + status)
//     }
// }
// showStatus("name", "status")
// showStatus("", "", function() {console.log("Empty")})

// let a = function sum(a, b) {
//     return a = b
// }
// let a = (a, b) => a + b 
// let b = (a, b) => {
//     let sum = a + b
//     console.log(sum)
//     return sum
// }
// let c = a => a + 10
// let d = () => console.log("smth")
// (() => console.log("Hello"))();

// let obj = {}
// obj.name = "Object 1"
// obj.foo = function() {
//     console.log(this.name)
// }
// obj.arrfunc = () => console.log(this.name)
// obj.foo()
// obj.arrfunc()

// arr.sort(function(a, b) {
//     return (a <= b) ? -1 : 1
// })