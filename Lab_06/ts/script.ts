let count: number
let balls: HTMLCollectionOf<HTMLBaseElement>
let randomNumber: number

function removeColors() {
    for (let i = 0; i < 9; i++)
        balls[i].style.background = "#ffffff"
}
function activeBall(randomNumber: number) {
    balls[randomNumber].style.background = "#ff0000"
}
function match(index: number, type: number) {
    if (type === 0) {
        if (index === randomNumber) {
            count++
            document.querySelector("#count").innerHTML = String(++count)
        } else
            document.querySelector("#count").innerHTML = String(count)
    } else
        document.querySelector("#count").innerHTML = String(--count)
}

window.onload = function() {
    count = 0
    balls = document.getElementsByClassName("ball") as HTMLCollectionOf<HTMLBaseElement>
    for (let i = 1; i < 10; i++) {
        (document.querySelector("#r" + i) as HTMLElement).onclick = () => match(i - 1, 1);
        (document.querySelector("#b" + i) as HTMLElement).onclick = () => match(i - 1, 0);
    }
}

setInterval(() => {
    removeColors()
    randomNumber = Math.floor(Math.random() * (8 - 0))
    activeBall(randomNumber)
}, 1000)