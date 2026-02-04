let name = "Ta";
let day = 10;

console.log(name);
console.log(day);

function greet() {
    console.log("Welcome to Day " + day); 
}

greet();

let isBlue = false;

const items = [
  "Learn HTML",
  "Practice CSS",
  "Master JavaScript",
  "Build Projects 👌",
];

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
const list = document.getElementById("list");

console.log("Button clicked");
console.log("yeooooo I added another log in the console");

const dynamicMessage = document.createElement("p");
dynamicMessage.textContent = "I was created with JavaScript 🎶";
dynamicMessage.style.fontWeight = "bold";

function renderList() {
  list.innerHTML = "";
  
items.forEach(item => {
  const p = document.createElement("p");
  p.textContent = item;
  p.style.fontWeight = "bold";
  list.appendChild(p);
});
}

document.body.appendChild(dynamicMessage);
   
function updateMessage(messageData) {
      message.textContent = messageData.text;
      message.style.color = messageData.color;
      message.style.fontSize = messageData.fontSize; 
}

button.addEventListener("click", () => {
  updateMessage(messages[currentIndex]);
if (!items.includes("Ship projects 🚀")) {
  items.push("Ship projects 🚀");
}  

  renderList();

  currentIndex = (currentIndex + 1) % messages.length;
});


