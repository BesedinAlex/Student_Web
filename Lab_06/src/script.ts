let count = 0, randomNumber = 0;
let playable = false, catched = false;
let balls: HTMLCollectionOf<HTMLBaseElement>;

function activateBall(index: number) {
    balls[index].style.background = "#ff0000";
}
function deactivateBall(index: number) {
    balls[index].style.background = "#ffffff";
}
function match(index: number, type: number) {
    if (playable) {
        if (type === 0) {
            if (index === randomNumber)
                if (!catched) {
                    count += 2;
                    catched = true;
                } else
                    count++;
        } else
            count--;
        document.querySelector("#count").innerHTML = String(count);
    }
}
function gameLoop() {
    deactivateBall(randomNumber);
    randomNumber = Math.floor(Math.random() * 9);
    activateBall(randomNumber);
    catched = false;
}

window.onload = () => {
    balls = document.getElementsByClassName("ball") as HTMLCollectionOf<HTMLBaseElement>;
    for (let i = 1; i < 10; i++) {
        document.querySelector("#r" + i).addEventListener("click", () => match(i - 1, 1));
        document.querySelector("#b" + i).addEventListener("click", () => match(i - 1, 0));
    }
    document.getElementById("playground").oncontextmenu = (event) => {
        document.getElementById("menu").style.left = String(event.clientX);
        document.getElementById("menu").style.top = String(event.clientY);
        return false;
    }
    let game: any;
    document.querySelector("body").addEventListener("click", (event) => document.getElementById("menu").style.left = document.getElementById("menu").style.top = String(-500));
    document.getElementById("menu-1").addEventListener("click", (event) => {
        playable = true;
        game = setInterval(gameLoop, 1000);
    });
    document.getElementById("menu-2").addEventListener("click", (event) => {
        clearInterval(game);
        deactivateBall(randomNumber);
        playable = false;
    });
}