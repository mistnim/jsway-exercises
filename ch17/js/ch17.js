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
