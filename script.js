let name = "Ta";
let day = 10;

console.log(name);
console.log(day);

function greet() {
    console.log("Welcome to Day " + day); 
}

greet();

let isBlue = false;

const messages = [
  { 
    text: "Text is blue 😎", 
    color: "blue",
    fontSize: "24px"
  },
  { 
    text: "Text is black 🫡", 
    color: "black",
    fontSize: "16px"
  }
];

let currentIndex = 0;

const button = document.getElementById("alertBtn");
const message = document.getElementById("message");

console.log("Button clicked");
console.log("yeooooo I added another log in the console");
   
function updateMessage(messageData) {
      message.textContent = messageData.text;
      message.style.color = messageData.color;
      message.style.fontSize = messageData.fontSize; 
}

button.addEventListener("click", () => {
  updateMessage(messages[currentIndex]);

  currentIndex = (currentIndex + 1) % messages.length;
});
  