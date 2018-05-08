// Counter Exercise

const countButtonElement = document.getElementById("countButton");
const countSpanElement = document.getElementById("clickCount");
const deactivateButtonElement = document.getElementById("deactivate");

let counter = 0;

const updateCounter = () => {
  counter++;
  countSpanElement.textContent = counter;
};

countButtonElement.addEventListener("click", updateCounter);

deactivateButtonElement.addEventListener("click", () =>
  countButtonElement.removeEventListener("click", updateCounter)
);

// Colors Exercise

const ColorElements = document.querySelectorAll("#colors div");

const changeElementsColor = (nodes, color) => {
  for (n of nodes) {
    n.style.backgroundColor = color;
  }
};

window.addEventListener("keypress", e => {
  const key = String.fromCharCode(e.charCode);
  switch (key) {
    case "r":
      changeElementsColor(ColorElements, "red");
      break;
    case "y":
      changeElementsColor(ColorElements, "yellow");
      break;
    case "g":
      changeElementsColor(ColorElements, "green");
      break;
    case "b":
      changeElementsColor(ColorElements, "blue");
      break;
    default:
  }
});

// Dessert Exercise

const ulDessertsElements = document.getElementById("desserts");
const addButtonElement = document.getElementById("addButton");

const addDessert = dessert => {
  const liElement = document.createElement("li");
  liElement.textContent = dessert;
  liElement.addEventListener("click", e => {
    const dessert = prompt("New name:");
    e.target.textContent = dessert;
  });
  ulDessertsElements.appendChild(liElement);
};

addButtonElement.addEventListener("click", () => {
  const dessert = prompt("Dessert name:");
  addDessert(dessert);
});

// Quiz Exercise
// List of questions (statement + answer)
const questions = [
  {
    statement: "2+2?",
    answer: "2+2 = 4"
  },
  {
    statement: "In which year did Christopher Columbus discover America?",
    answer: "1492"
  },
  {
    statement:
      "What occurs twice in a lifetime, but once in every year, twice in a week but never in a day?",
    answer: "The E letter"
  }
];

const quizDivElement = document.getElementById("quiz");

const addQuestion = (q, i) => {
  const newdivElement = document.createElement("div");
  newdivElement.innerHTML = `<p><strong>Question ${i}:</strong>${
    q.statement
  }</p>`;
  const btnElement = document.createElement("button");
  btnElement.textContent = "Show Answer";
  newdivElement.appendChild(btnElement);
  const answer = document.createTextNode(q.answer);
  btnElement.addEventListener("click", e => {
    newdivElement.replaceChild(answer, btnElement);
  });
  quizDivElement.appendChild(newdivElement);
};

for (let i = 0; i < questions.length; ++i) {
  addQuestion(questions[i], i + 1);
}
