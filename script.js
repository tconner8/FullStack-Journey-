let name = "Ta";
let day = 23;

console.log(name);
console.log(day);

function greet() {
    console.log("Welcome to Day " + day); 
}

greet();

let isBlue = false;

let items = JSON.parse(localStorage.getItem("goals")) || [
 { text: "Learn HTML", selected: false },
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


let currentFilter = "all";

const button = document.getElementById("alertBtn");
const message = document.getElementById("message");
const listE1 = document.getElementById("list");
const input = document.getElementById("newItemInput");
const addBTn = document.getElementById("addBtn");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");
const showAllBtn = document.getElementById("showAllBtn");
const showActiveBtn = document.getElementById("showActiveBtn");
const showCompletedBtn = document.getElementById("showCompletedBtn");

console.log("Button clicked");
console.log("yeooooo I added another log in the console");

const dynamicMessage = document.createElement("p");
dynamicMessage.textContent = "I was created with JavaScript 🎶";
dynamicMessage.style.fontWeight = "bold";

function addItem() {
  const value = input.value.trim();

  if (value === "") return;

  items.push({
    text: value,
    selected: false
});

input .value = "";
renderList();
}

function renderList() {
  list.innerHTML = "";
  
let filteredItems = items.filter(item => {
  if (currentFilter === "all") return true;
  if (currentFilter === "active") return !items.selected;
  if (currentFilter === "completed") return item.selected;
});

filteredItems.forEach((item, index) => {
  const p = document.createElement("p");
  p.textContent = item.text;
  p.style.cursor = "pointer";

  if (item.selected) {
    p.classList.add("selected");
  }

  p.addEventListener("click", () => { toggleItem(index);
    console.log(item);
    function toggleItem(index) {
      items[index].selected = !items[index].selected;
    renderList();
    }
  });

  listE1.appendChild(p);
});
localStorage.setItem("goals", JSON.stringify(items));
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

addBTn.addEventListener("click", addItem);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addItem();
  }
});

clearCompletedBtn.addEventListener("click", () => {
    items = items.filter(item => !item.selected);
    renderList();
  });

showAllBtn.addEventListener("click", () => {
  currentFilter = "all";
  renderList;
});

showActiveBtn.addEventListener("click", () => {
  currentFilter = "active",
  renderList();
});

showCompletedBtn.addEventListener("click", () => {
  currentFilter = "completed";
  renderList();
});
renderList();