let name = "Ta";
let day = 7;

console.log(name);
console.log(day);

function greet() {
    console.log("Welcome to Day " + day); 
}

greet();

let clicked = false;

const button = document.getElementById("alertBtn");
const message = document.getElementById("message");

function updateMessage() {
  if (!clicked) {
      message.textContent = "Button clicked 😎🫡";
      message.style.color = "darkred";
      message.style.fontSize = "24px";
      clicked = true;  
    } else {
        message.textContent = "Waiting for interaction...";
        message.style.color = "black";
        message.style.fontSize = '16px';
        clicked = false;
    }
}

button.addEventListener("click", updateMessage); 
