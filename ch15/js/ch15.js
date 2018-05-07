// Newspapers exercise

const newspapers = ["https://www.nytimes.com", "https://www.washingtonpost.com", "http://www.economist.com"];

let contentElement = document.getElementById('content');
let listElement = document.createElement('ul');
contentElement.appendChild(listElement);

for (let n of newspapers) {
  let liElement = document.createElement('li');
  let aElement = document.createElement('a');
  aElement.setAttribute('href', n);
  aElement.textContent = n;
  liElement.appendChild(aElement);
  contentElement.appendChild(liElement);
}

// Dictionary exercise

const words = [{
  term: "Procrastination",
  definition: "Avoidance of doing a task that needs to be accomplished"
}, {
  term: "Tautology",
  definition: "logical argument constructed in such a way that it is logically irrefutable"
}, {
  term: "Oxymoron",
  definition: "figure of speech that juxtaposes elements that appear to be contradictory"
}];

let dictElement = document.getElementById('dictionary');
let dlElement = document.createElement('dl');

for (let w of words) {
  let dtElement = document.createElement('dt');
  let strongElement = document.createElement('strong');
  strongElement.textContent = w.term;
  dtElement.appendChild(strongElement);
  let ddElement = document.createElement('dd');
  ddElement.textContent = w.definition;
  dlElement.appendChild(dtElement);
  dlElement.appendChild(ddElement);
}
dictElement.appendChild(dlElement);

// Color Exercise

let fColor = prompt('Select a foreground color:');
let bColor = prompt('Select a backgorund color:');
let colorDivElements = document.querySelectorAll('#colors div');

for(let div of colorDivElements) {
  div.style.color =  fColor;
  div.style.backgroundColor = bColor;
}

// Info Exercise

let infoContentElement = document.getElementById('info-content');
let infosElement = document.getElementById('infos');
let infoComputedStyle = getComputedStyle(infoContentElement);
let infoWidth = infoComputedStyle.width;
let infoHeight = infoComputedStyle.height;

infosElement.insertAdjacentHTML('afterbegin', '<h1>Information about the element</h1>');
let infoListElement = document.createElement('ul');
infoListElement.insertAdjacentHTML('beforeend',`<li>Height: ${infoHeight}</li>`);
infoListElement.insertAdjacentHTML('beforeend',`<li>Width: ${infoWidth}</li>`);

infosElement.appendChild(infoListElement);
