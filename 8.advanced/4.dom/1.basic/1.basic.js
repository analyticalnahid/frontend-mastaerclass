// Grab HTML element
var head = document.querySelector("h1");

// Interface with color
head.style.color = "red";

// Random color

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Set random color
function setRandomColor() {
  colorInput = getRandomColor();
  head.style.color = colorInput;
}

// Now perform action
setInterval(setRandomColor, 1000);
