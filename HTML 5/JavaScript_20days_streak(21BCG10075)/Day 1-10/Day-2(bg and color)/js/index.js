// Selecting query
const button = document.querySelector("button");
const body = document.querySelector("body");
// Adding colors, you can add your desired colors
const colors = ["blue", "green","olive", "pink", "yellow", "red", "brown", "purple", "orange", "gold", "aqua", "white", "gray", "azure"];

// function for changing the background
function changeTheBackground() {
    const colorIndex = parseInt(Math.random() * colors.length)
    body.style.backgroundColor = colors[colorIndex];
};

// Selecting a default color
body.style.backgroundColor = "orange";
// Adding event listener
button.addEventListener("click", changeTheBackground);