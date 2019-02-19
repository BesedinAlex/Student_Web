let data: HTMLBaseElement
window.onload = function() {
    data = document.querySelector("#time")
}
setInterval(() => {
    let date = new Date()
    data.innerHTML = date.getDay() + ":" + date.getMonth() + ":" + date.getFullYear() + ":" + date.getHours() + ":" + date.getMinutes() + ":" +date.getSeconds() + ":" +date.getMilliseconds()
}, 1)

setTimeout(() => { console.log("Hey") }, 1000)

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