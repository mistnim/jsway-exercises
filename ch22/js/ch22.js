// Anonymous function for retrieving and displaying a random beer
const grabRandomBeer = () => {
  // Fetching random beer data from API
  fetch("https://api.punkapi.com/v2/beers/random")
    .then(response => response.json())
    .then(beers => {
      // API returns an array containg only one element: we get it
      const beer = beers[0];
      // Creating DOM element for some beer properties
      const nameElement = document.createElement("h2");
      nameElement.textContent = beer.name;
      const descriptionElement = document.createElement("p");
      descriptionElement.textContent = beer.description;
      const infoElement = document.createElement("p");
      infoElement.textContent = `Alcohol by Volume: ${beer.abv}%. Volume: ${
        beer.volume.value
      } ${beer.volume.unit}. First brewed on: ${beer.first_brewed}`;
      // Clear previous beer data
      const beerElement = document.getElementById("beer");
      beerElement.innerHTML = "";
      // Add beer info to the page
      beerElement.appendChild(nameElement);
      beerElement.appendChild(descriptionElement);
      beerElement.appendChild(infoElement);
    })
    .catch(err => {
      console.error(err.message);
    });
};

// Grab a new beer when clicking the button
document.getElementById("grabButton").addEventListener("click", grabRandomBeer);

// Github exercise

const githubFormElement = document.getElementById("githubForm");
const userInfosElement = document.getElementById("userInfos");

const lookupGithubUser = u => {
  fetch(`https://api.github.com/users/${u}`)
    .then(response => response.json())
    .then(user => {
      userInfosElement.innerHTML = "";
      const imageElement = document.createElement("img");
      imageElement.src = user.avatar_url;
      imageElement.height = 100;
      const nameElement = document.createElement("h2");
      nameElement.textContent = user.name;
      const blogElement = document.createElement("a");
      blogElement.textContent = user.blog;
      blogElement.href = user.blog;
      userInfosElement.appendChild(imageElement);
      userInfosElement.appendChild(nameElement);
      userInfosElement.appendChild(blogElement);
    });
};

githubFormElement.addEventListener("submit", e => {
  e.preventDefault();
  lookupGithubUser(e.target.elements.username.value);
});

// Star Wars Exercise

const starWarsLinksElement = document.getElementById("starWarsLinks");
const starWarsInfosElement = document.getElementById("starWarsInfos");

const urls = [...Array(10).keys()].map(
  ix => `https://swapi.co/api/planets/${ix + 1}/?format=json`
);

let planetsArray;

Promise.all(urls.map(url => fetch(url))).then(responses =>
  Promise.all(responses.map(res => res.json())).then(planets => {
    planetsArray = planets;
    planets.forEach((p, i) => {
      const aElement = document.createElement("a");
      aElement.textContent = i + 1;
      aElement.href = "";
      starWarsLinksElement.appendChild(aElement);
      if (i != 9) {
        const separatorElement = document.createTextNode(" | ");
        starWarsLinksElement.appendChild(separatorElement);
      }
      aElement.addEventListener("click", e => {
        e.preventDefault();
        p = planetsArray[e.target.textContent - 1];
        const pElement = document.createElement("p");
        const titleElement = document.createElement("h3");
        titleElement.textContent = p.name;
        pElement.textContent = `Climate: ${p.climate}. Population: ${
          p.population
        }. Appears in ${p.films.length} movie(s).`;
        starWarsInfosElement.innerHTML = "";
        starWarsInfosElement.appendChild(titleElement);
        starWarsInfosElement.appendChild(pElement);
      });
    });
  })
);
