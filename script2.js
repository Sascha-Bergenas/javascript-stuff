const todoList = document.getElementById("todo");

todoList.addEventListener("click", (event) => {
  event.target.classList.toggle("done");
});

const shoppingList = document.getElementById("shoppingList");
const addItemButton = document.getElementById("addItem");

function newItem() {
  const li = document.createElement("li");
  li.textContent = "Ny vara";
  return li;
}

addItemButton.addEventListener("click", () => {
  shoppingList.appendChild(newItem());
});

const container = document.getElementById("container");

container.addEventListener("click", (event) => {
  event.target.style.color = "blue";
});
