class ListData {
    id: number;
    name: string;
    parentID: number;
    children?: ListData[];
}

// Forming a list from Database
let databaseData: ListData[] = [
    { id: 1, name: "Политех", parentID: null },
    { id: 2, name: "Организация", parentID: null },
    { id: 3, name: "Бухгалтерия", parentID: 2 },
    { id: 6, name: "Отдел охраны", parentID: 2 },
    { id: 7, name: "Караульная служба", parentID: 6 },
    { id: 8, name: "Бюро пропусков", parentID: 6 },
    { id: 12, name: "Патентный отдел", parentID: 2 },
    { id: 13, name: "Лётная служба", parentID: 2 },
    { id: 14, name: "Лётный отряд Боинг 737", parentID: 13 },
    { id: 17, name: "Лётный отряд Боинг 747", parentID: 13 },
    { id: 18, name: "1-я авиационная эксадрилия Боинг 737", parentID: 14 },
    { id: 19, name: "2-я авиационная эскадрилия Боинг 737", parentID: 14 },
    { id: 21, name: "Лётно-методический отдел", parentID: 13 },
    { id: 22, name: "Ворующие 4,5% от моей степухи", parentID: 3 },
    { id: 23, name: "А ведь я вышел из профсоюза!", parentID: 22}
], list: ListData[] = [];

for (let i = 0; i < databaseData.length; i++) {
    databaseData[i].children = [];
    for (let j = 0; j < databaseData.length; j++)
        if (databaseData[j].parentID === databaseData[i].id)
            databaseData[i].children.push(databaseData[j]);
}
for (let i = 0; i < databaseData.length; i++)
    if (databaseData[i].parentID === null)
        list.push(databaseData[i]);

// Printing the list
window.onload = function() {
    let currentItem = list;
    while (currentItem.length > 0) {
        if (document.querySelector("#item" + currentItem[0].id) === null) {
            let ul = (currentItem[0].parentID === null) ? document.querySelector("#items") : document.querySelector("#item" + currentItem[0].parentID);
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(currentItem[0].name));
            li.appendChild(document.createElement("ul")).setAttribute("id", "item" + currentItem[0].id);
            ul.appendChild(li);
        }
        if (currentItem[0].children.length > 0)
            currentItem = currentItem[0].children;
        else {
            currentItem.shift();
            currentItem = list;
        }
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