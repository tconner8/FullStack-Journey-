const button = document.getElementById("alertBtn");
const message = document.getElementById("message");

let clicked = false;

button.addEventListener("click", () => {
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
});
