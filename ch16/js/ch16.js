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