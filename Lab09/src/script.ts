window.onload = function() {
    console.log("Page is loaded.");
    let input = document.getElementById("myInput");
    // input.onchange = () => console.log(input.value); //
    input.onfocus = () => console.log("focused");
    input.onblur = () => console.log("unfocused");
    input.oninput = (event) => console.log(event);
    console.log(input);

    let sqr = document.getElementById("bluesqr");
    let parent = document.getElementById("parent");
    sqr.addEventListener("click", () => console.log("click"));
    sqr.addEventListener("click", () => console.log("click1"));
    sqr.onclick = (event) => {
        event.stopPropagation();
        console.log("child");
    }
    parent.onclick = (event) => console.log("parent");
    sqr.onmouseover = (event) => console.log(event);
    sqr.oncontextmenu = (event) => {
        console.log(event);
        return false; // To hide it
    }

    let spoiler = document.getElementById("spoiler");
    let text = document.getElementById("text");
    let hidden = true;
    spoiler.addEventListener("click", () => {
        hidden = !hidden;
        text.innerText = hidden ? "" : "Tony Stark will die";
    })
}
