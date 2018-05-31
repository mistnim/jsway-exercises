const tshirtFormElement = document.getElementById("tshirtForm");

tshirtFormElement.addEventListener("submit", e => {
  e.preventDefault();
  const formData = new FormData(e.target);
  fetch("http://localhost:3000/tshirt", {
    method: "POST",
    body: formData
  })
    .then(response => response.text())
    .then(result => {
      document.getElementById("tshirtResult").textContent = result;
    });
});

// Countries ex.

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

fetch("http://localhost:3000/api/countries", {
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

// Articles ex.

const blogFormElement = document.getElementById("blogForm");

blogFormElement.addEventListener("submit", e => {
  e.preventDefault();
  const formData = new FormData(e.target);
  fetch("http://localhost:3000/articles", {
    method: "POST",
    body: formData
  })
    .then(response => response.text())
    .then(result => {
      document.getElementById("result").textContent = result;
    });
});
