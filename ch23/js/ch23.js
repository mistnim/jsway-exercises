const formElement = document.getElementById("blogForm");

formElement.addEventListener("submit", e => {
  e.preventDefault();
  const formData = new FormData(e.target);
  fetch("https://thejsway-server.herokuapp.com/articles", {
    method: "POST",
    body: formData
  })
    .then(response => response.text())
    .then(result => {
      document.getElementById("result").textContent = result;
    });
});

// Visited Countries Exercise

countries = {
  name: "Daniele",
  countries: [
    {
      name: "Switzerland",
      year: 2017
    },
    {
      name: "Denmark",
      year: 2016
    }
  ]
};

fetch("https://thejsway-server.herokuapp.com/api/countries", {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(countries)
})
  .then(response => response.text())
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.error(err.message);
  });
