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
