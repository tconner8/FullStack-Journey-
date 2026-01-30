let name = "Ta";
let day = 7;

console.log(name);
console.log(day);

function greet() {
    console.log("Welcome to Day " + day); 
}

greet();

let isBlue = false;

const messages = [
  { text: "Text is blue 😎", color: "blue" },
  { text: "Text is black", color: "black" }
];

let currentIndex = 0;

const button = document.getElementById("alertBtn");
const message = document.getElementById("message");

console.log("Button clicked");
console.log("yeooooo I added another log in the console");
   
function updateMessage(text, color) {
      message.textContent = text;
      message.style.color = color; 
}

button.addEventListener("click", () => {
  const currentMessage = messages[currentIndex];

  updateMessage(currentMessage.text, currentMessage.color);

  currentIndex = (currentIndex + 1) % messages.length;
});
  