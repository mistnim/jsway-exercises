const startElement = document.getElementById("start");
const stopElement = document.getElementById("stop");
const frameElement = document.getElementById("frame");
const ballElement = document.getElementById("ball");
const ballWidth = ball.naturalWidth;

let animationId;
let xPos = 0;
let dir = 1;
const speed = 5;

const animate = () => {
  const xMax = parseFloat(getComputedStyle(frame).width);
  ballElement.style.left = xPos + "px";
  if (xPos < 0 && dir === -1) {
    dir = 1;
  } else if (xPos > xMax - ballWidth && dir === 1) {
    dir = -1;
  }
  xPos = dir === 1 ? xPos + speed : xPos - speed;
  animationId = requestAnimationFrame(animate);
};

startElement.addEventListener("click", () => {
  animationId = requestAnimationFrame(animate);
  stopElement.disabled = false;
  startElement.disabled = true;
});

stopElement.addEventListener("click", () => {
  cancelAnimationFrame(animationId);
  stopElement.disabled = true;
  startElement.disabled = false;
});
