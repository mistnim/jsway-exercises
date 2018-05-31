const contentElement = document.getElementById("content");
const linksElement = document.getElementById("links");
const submitElement = document.getElementById("submitButton");

const messageElement = document.createElement("div");
messageElement.classList.add("alert", "alert-success");

const displayLinks = linkList => {
  while (linksElement.firstChild)
    linksElement.removeChild(linksElement.firstChild);
  for (let l of linkList) {
    const linkElement = document.createElement("div");
    linkElement.classList.add("link");
    const headLineElement = document.createElement("h4");
    headLineElement.classList.add("linkheadLine");
    const aElement = document.createElement("a");
    aElement.classList.add("linkTitle");
    aElement.href = l.url;
    aElement.textContent = l.title;
    const URLElement = document.createElement("span");
    URLElement.textContent = l.url;
    URLElement.classList.add("linkUrl");
    headLineElement.appendChild(aElement);
    headLineElement.appendChild(URLElement);
    const authorElement = document.createElement("span");
    authorElement.classList.add("linkAuthor");
    authorElement.textContent = l.author;
    linkElement.appendChild(headLineElement);
    linkElement.appendChild(authorElement);
    linksElement.appendChild(linkElement);
  }
};

const updateLinks = () => {
  fetch("http://localhost:3000/links")
    .then(response => response.json())
    .then(result => displayLinks(result));
};
updateLinks();

const createForm = () => {
  const formElement = document.createElement("form");
  formElement.classList.add("linkForm");
  const titleElement = document.createElement("input");
  titleElement.required = true;
  titleElement.placeholder = "Title";
  titleElement.name = "title";
  const URLElement = document.createElement("input");
  URLElement.required = true;
  URLElement.placeholder = "URL";
  URLElement.name = "url";
  const authorElement = document.createElement("input");
  authorElement.required = true;
  authorElement.placeholder = "Author";
  authorElement.name = "author";
  const addLinkElement = document.createElement("input");
  addLinkElement.type = "submit";
  addLinkElement.value = "add link";

  formElement.appendChild(titleElement);
  formElement.appendChild(URLElement);
  formElement.appendChild(authorElement);
  formElement.appendChild(addLinkElement);

  formElement.addEventListener("submit", e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    fetch("http://localhost:3000/links", {
      method: "POST",
      body: formData
    })
      .then(response => response.json())
      .then(result => {
        contentElement.removeChild(e.target);
        submitElement.disabled = false;
        updateLinks();
        messageElement.textContent = `The Link ${
          result.title
        } has been added successfully!`;
        contentElement.prepend(messageElement);
        setTimeout(() => contentElement.removeChild(messageElement), 2000);
      })
      .catch(err => console.log(err.message));
  });
  return formElement;
};

submitElement.addEventListener("click", () => {
  const formElement = createForm();
  contentElement.prepend(formElement);
  submitElement.disabled = true;
});
