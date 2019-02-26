// JS Analogue of class
// function ListData(id, name, idParent) {
//     this.id = id
//     this.name = name
//     this.idParent = idParent
// }
class ListData {
    id: number
    name: string
    idParent: number
    constructor(id: number, name: string, idParent: number) {
        this.id = id
        this.name = name
        this.idParent = idParent
    }
}
let list: Array<ListData> = []
list.push(new ListData(1, "Main", null))
list.push(new ListData(2, "First Parent", null))
list.push(new ListData(3, "The First child of the First Parent", 2))
list.push(new ListData(4, "The Second child of the First Parent", 2))
list.push(new ListData(5, "Another Parent, probably no children", null))
list.push(new ListData(6, "Test", 3))
list.push(new ListData(7, "One more test", 6))
list.push(new ListData(8, "The last one (just to be sure)", 7))

window.onload = function() {
    let ul, li, ulChild
    for (let i in list) {
        if (list[i].idParent === null)
            ul = document.querySelector("#list")
        else
            ul = document.querySelector("#item" + list[i].idParent)
        li = document.createElement("li")
        li.appendChild(document.createTextNode(list[i].name))
        ulChild = li.appendChild(document.createElement("ul"))
        ulChild.setAttribute("id", "item" + String(list[i].id))
        ul.appendChild(li)
    }
}


// let obj1 = {}
// obj1.color = "green"
// obj1.size = "10"
// obj1["key"] = "smth"
// let obj2 = new Object()
// let obj3 = {
//     name: "Alex",
//     surname: "Conver",
//     passport: {
//         serial: "123456",
//         number: "654321"
//     },
//     array: [1, 2, 3, 4, 5, 6]
// }
// for (let property in obj1)
//     console.log(property + " = " + obj1[property])
// for (let property in obj3)
//     console.log(property + " = " + obj3[property])

// let obj4 = {
//     x1: 1,
//     x2: 2,
//     x3: 3,
//     x4: 4
// }
// for (let i = 1; i <= 4; i++)
//     console.log(obj4["x" + i])

// let person = {
//     firstName: "Alex",
//     lastName: "Conver"
// }
// let personExtended = Object.create(person)
// personExtended.middleName = "John"
// for (index in personExtended)
//     console.log(index + " = " + personExtended[index])
// console.log("<----------------->")
// for (index in personExtended) {
//     if (personExtended.hasOwnProperty(index))
//         console.log(index + " = " + personExtended[index])
// }

// let obj5 = {
//     x: 10,
//     y: 20,
//     get sum() {
//         return this.x + this.y
//     },
//     set setX(x) {
//         this.x = x
//     },
//     set seyY(y) {
//         this.y = y
//     },
//     do: function() {
//         console.log("do()")
//     }
// }
// obj5.setX = 30
// console.log(obj5.sum)
// obj5.do()

// function User(firstName, lastName) {
//     this.firstName = firstName
//     this.lastName = lastName
// }
// let user = new User("Alex", "Conver")
// console.log(user)