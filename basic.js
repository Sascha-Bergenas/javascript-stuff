const name = "Sascha";

const num1 = 1; // för att summan ska räknas ut, inga ""
const num2 = 4;
// console.log(num1 + num2);

const age = 35;

// console.log(`Hej, är ${age} år gammal`);

let number = 10;
if (number > 10) {
  //   console.log("större än 10");
} else if (number === 10) {
  //   console.log("det är 10 exakt");
} else {
  //   console.log("mindre än 10");
}

for (i = 1; i <= 10; i++) {
  //   console.log(i);
}

function numbers(a, b) {
  //   console.log(a * b);
}
numbers(3, 7);
numbers(8, 6);

const knappen = document.querySelector("#knappen");
const container = document.querySelector("#container");

knappen.addEventListener("click", () => {
  console.log("knappen tryckt!");
});
container.addEventListener("click", () => {
  console.log("diven klickad!");
});

const lista = document.querySelector("#list");

lista.addEventListener("click", (event) => {
  event.target.style.backgroundColor = "red";
  console.log();
});

const knapp = document.querySelector("#knapp");
