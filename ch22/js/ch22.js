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
