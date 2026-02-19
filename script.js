document.addEventListener("DOMContentLoaded", () => {
  const allBtn = document.getElementById("showALL");
  if (allBtn) {
    allBtn.remove();
    console.log("All button removed permanently")
  }
let name = "Ta";
let day = 24;

console.log(name);
console.log(day);

function greet() {
    console.log("Welcome to Day " + day); 
}

greet();

let isBlue = false;

let stored = JSON.parse(localStorage.getItem("goals"));
let items = stored && stored.length > 0
? stored
: [
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

let currentFilter = "active";

const button = document.getElementById("alertBtn");
const message = document.getElementById("message");

const listE1 = document.getElementById("list");
const input = document.getElementById("newItemInput");
const addBTn = document.getElementById("addBtn");

const showActiveBtn = document.getElementById("showActiveBtn");
const showCompletedBtn = document.getElementById("showCompletedBtn");

const clearCompletedBtn = document.getElementById("clearCompletedBtn");

console.log("Button clicked");
console.log("yeooooo I added another log in the console");

const dynamicMessage = document.createElement("p");
dynamicMessage.textContent = "I was created with JavaScript 🎶";
dynamicMessage.style.fontWeight = "bold";

function toggleItem(index) {
      items[index].selected = !items[index].selected;
    renderList();
    }

function renderList() {
  console.log("Items at start:", items);
  listE1.innerHTML = "";
  
const filteredItems = items.filter(item => {
  if (currentFilter === "active") return !item.selected;
  if (currentFilter === "completed") return item.selected;
});

console.log("filter:", currentFilter);
console.log("Filtered:", filteredItems);

filteredItems.forEach(item => {
  const index = items.indexOf(item);
  
  const p = document.createElement("p");
  p.textContent = item.text;
  p.style.cursor = "pointer";

  if (item.selected) 
    p.classList.add("selected");
  

  p.addEventListener("click", () => toggleItem(index));
    console.log(item);
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

addBTn.addEventListener("click", () => {
  const value = input.value.trim();
  if (value === "") return;

  items.push({
    text: value,
    selected: false
  });
  input.value = "";
  renderList();
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

clearCompletedBtn.addEventListener("click", () => {
    items = items.filter(item => !item.selected);
    renderList();
  });

});