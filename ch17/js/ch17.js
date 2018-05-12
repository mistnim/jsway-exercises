// Password Checker Exercise

const pwFormElement = document.getElementById("passwordChecker");
const pw1Element = pwFormElement.elements.password1;
const pw2Element = pwFormElement.elements.password2;
const phElement = document.getElementById("passwordHelp");

pwFormElement.addEventListener("submit", e => {
  pw1 = pw1Element.value;
  pw2 = pw2Element.value;
  if (pw1 !== pw2) {
    phElement.textContent = "Error: The passwords inserted do not coincide";
    e.preventDefault();
    return;
  }
  if (pw1.length < 6) {
    phElement.textContent =
      "Error: The password must be at least 6 characters long";
    e.preventDefault();
    return;
  }
  if (!/\d/.test(pw1)) {
    phElement.textContent =
      "Error: The password must contain at least one digit";
    e.preventDefault();
    return;
  }
});

// GOT Exercise
// Character list. Each house has a name and a code
const houses = [
  {
    code: "ST",
    name: "Stark"
  },
  {
    code: "LA",
    name: "Lannister"
  },
  {
    code: "BA",
    name: "Baratheon"
  },
  {
    code: "TA",
    name: "Targaryen"
  }
];

// Return an array of characters belonging to a house
const getCharacters = houseCode => {
  switch (houseCode) {
    case "ST":
      return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
      return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
      return ["Robert", "Stannis", "Renly"];
    case "TA":
      return ["Aerys", "Daenerys", "Viserys"];
    default:
      return []; // Empty array
  }
};

const gotFormElement = document.getElementById("gotForm");
const selectHouseElement = gotFormElement.elements.house;

const addHouseOption = house => {
  const optionElement = document.createElement("option");
  optionElement.value = house.code;
  optionElement.textContent = house.name;
  selectHouseElement.appendChild(optionElement);
};

houses.forEach(h => addHouseOption(h));

const charactersElement = document.getElementById("characters");
const updateCharList = code => {
  const characters = getCharacters(code);
  while (charactersElement.firstChild) {
    charactersElement.removeChild(charactersElement.firstChild);
  }
  characters.forEach(c => {
    liElement = document.createElement("li");
    liElement.textContent = c;
    charactersElement.appendChild(liElement);
  });
};

selectHouseElement.addEventListener("change", e =>
  updateCharList(e.target.value)
);

// Autocomplete ex.

const countryList = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua-and-Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Autria",
  "Azerbaïjan"
];

const countryElement = document.getElementById("country");

const showSuggestionsFor = str => {
  countryList.filter(c => c.startsWith(str));
};

countryElement.addEventListener("input", e => {
  showSuggestionsFor(e.target.value);
});
