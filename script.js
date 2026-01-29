let name = "Ta";
let day = 7;

console.log(name);
console.log(day);

function greet() {
    console.log("Welcome to Day " + day); 
}

greet();

let isBlue = false;

const button = document.getElementById("alertBtn");
const message = document.getElementById("message");

function changeText() {
  if (!isBlue) {
    console.log("Button clicked");
    message.textContent = "Text is blue 😎";
    message.style.color = "blue";
    isBlue = true;
  } else {
    console.log("Button clicked");
    message.textContent = "Text is black";
    message.style.color = "black";
    isBlue = false;
  }
}

function updateMessage(text, color) {
      message.textContent = text;
      message.style.color = color; 
}

button.addEventListener("click", () => {
  if (!isBlue) {
    updateMessage("Text is blue 😎", "blue");
    isBlue = true;
  } else {
    updateMessage("Text is black", "black");
    isBlue = false;
  }
});
  