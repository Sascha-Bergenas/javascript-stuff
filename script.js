const changeButton = document.getElementById("changeText");
const message = document.getElementById("message");

changeButton.addEventListener("click", () => {
  message.textContent = "Knappen tryckt!";
});

const colorButton = document.getElementById("changeColor");
const box = document.getElementById("box");

colorButton.addEventListener("click", () => {
  console.log("klick");
  box.style.backgroundColor = "red";
});
