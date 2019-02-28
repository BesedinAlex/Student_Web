let count: number, randomNumber: number = 0;
let balls: HTMLCollectionOf<HTMLBaseElement>;

// Init game
window.onload = function() {
    count = 0;
    balls = document.getElementsByClassName("ball") as HTMLCollectionOf<HTMLBaseElement>;
    for (let i = 1; i < 10; i++) {
        (document.querySelector("#r" + i) as HTMLElement).onclick = () => match(i - 1, 1);
        (document.querySelector("#b" + i) as HTMLElement).onclick = () => match(i - 1, 0);
    }
}

// Game functions
function activateBall(index: number) {
    balls[index].style.background = "#ff0000";
}
function deactivateBall(index: number) {
    balls[index].style.background = "#ffffff";
}
function match(index: number, type: number) {
    if (type === 0) {
        if (index === randomNumber) {
            count += 2;
            switch (count) {
                case 21:
                    alert("Checkpoint!\nYou already got 20 points.\nDo you wish to continue?\nNext checkpoint is 50 points.");
                    break;
                case 51:
                    alert("Checkpoint!\nYou got 50 points.\nDo you wish to continue?\nThe last checkpoint is 100 points.\nYou get a cool movie if you get there.");
                    break;
                case 101:
                    alert("The last checkpoint!\nYou rock!\nClose this window to see the movie.");
                    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
                    break;
            }
        }
    } else
        count--;
    document.querySelector("#count").innerHTML = String(count);
}

// Infinite loop
setInterval(() => {
    deactivateBall(randomNumber);
    randomNumber = Math.floor(Math.random() * (9 - 0));
    activateBall(randomNumber);
}, 1000)