const languageListElement = document.getElementById("languageList");

fetch(
  "https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/languages.txt"
)
  .then(response => response.text()) // Access and return response's text content
  .then(text => {
    const langs = text.split(";");
    langs.forEach(lang => {
      languageListElement.insertAdjacentHTML("beforeend", `<li>${lang}</li>`);
    });
  });

const paintingsElement = document.getElementById("paintings");

fetch(
  "https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json"
)
  .then(response => response.json())
  .then(paintings => {
    paintings.forEach(p => {
      paintingsElement.insertAdjacentHTML(
        "beforeend",
        `<tr><th>${p.name}</th><th>${p.year}</th><th>${p.artist}</th></tr>`
      );
    });
  });
