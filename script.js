let name = "Ta";
let day = 20;

console.log(name);
console.log(day);

function greet() {
    console.log("Welcome to Day " + day); 
}

greet();

let isBlue = false;

const items = [
 { text: "Learn HTML",selected: false },
 { text: "Practice CSS", selected: false },
 { text: "Master JavaScript", selected: false },
 { text: "Build Projects 👌", selected: false }
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
const listE1 = document.getElementById("list");

const input = document.getElementById("newItemInput");
const addBTn = document.getElementById("addBtn");

console.log("Button clicked");
console.log("yeooooo I added another log in the console");

const dynamicMessage = document.createElement("p");
dynamicMessage.textContent = "I was created with JavaScript 🎶";
dynamicMessage.style.fontWeight = "bold";

function renderList() {
  list.innerHTML = "";
  
items.forEach((item, index) => {
  const p = document.createElement("p");
  p.textContent = item.text;
  p.style.cursor = "pointer";

  if (item.selected) {
    p.classList.add("selected");
  }

  p.addEventListener("click", () => {
    toggleItem(index);
    console.log(item);
    function toggleItem(index) {
      items[index].selected = !items[index].selected;
    renderList();
    }
  });

  listE1.appendChild(p);
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

addBTn.addEventListener("click", () => {
  const value = input.value.trim();

  if (value !== "") {
    items.push({
      text: value,
      selected: false
    });

    input.value = "";
    renderList();
  }
});
