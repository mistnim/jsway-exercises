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
