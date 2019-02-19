let date = new Date()
console.log(date)

setTimeout(function() { console.log("Hey") }, 1000)

// let obj = {}
// obj.name = "Name"
// obj.do = function() { setTimeout(() => console.log(this.name), 1000) }
// obj.do()

let intervalID = setInterval(() => console.log("tick"), 500)
setTimeout(() => clearInterval(intervalID), 2000)

setTimeout(function tick() {
    alert("Another tick")
    setTimeout(tick, 1000)
}, 1000)