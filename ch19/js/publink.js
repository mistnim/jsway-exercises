class Link {
  constructor(url, title, author) {
    this.title = title;
    this.author = author;
    if (!(url.startsWith("http://") || url.startsWith("https://"))) {
      this.url = "http://" + url;
    } else {
      this.url = url;
    }
  }
}

let linkList = [
  new Link("https://news.ycombinator.com/", "Hacker News", "bob"),
  new Link("https://www.reddit.com/", "Reddit", "alice"),
  new Link("https://github.com/", "Github", "eve")
];

const contentElement = document.getElementById("content");
const linksElement = document.getElementById("links");
const submitElement = document.getElementById("submitButton");

const messageElement = document.createElement("div");
messageElement.classList.add("alert", "alert-success");

const displayLinks = () => {
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

displayLinks();

const createForm = () => {
  const formElement = document.createElement("form");
  formElement.classList.add("linkForm");
  const titleElement = document.createElement("input");
  titleElement.required = true;
  titleElement.placeholder = "Title";
  const URLElement = document.createElement("input");
  URLElement.required = true;
  URLElement.placeholder = "URL";
  const authorElement = document.createElement("input");
  authorElement.required = true;
  authorElement.placeholder = "Author";
  const addLinkElement = document.createElement("input");
  addLinkElement.type = "submit";
  addLinkElement.value = "add link";

  formElement.appendChild(titleElement);
  formElement.appendChild(URLElement);
  formElement.appendChild(authorElement);
  formElement.appendChild(addLinkElement);

  formElement.addEventListener("submit", e => {
    e.preventDefault();
    const newLink = new Link(
      URLElement.value,
      titleElement.value,
      authorElement.value
    );
    linkList.push(newLink);
    contentElement.removeChild(e.target);
    submitElement.disabled = false;
    displayLinks();
    messageElement.textContent = `The Link ${
      newLink.title
    } has been added successfully!`;
    contentElement.prepend(messageElement);
    setTimeout(() => contentElement.removeChild(messageElement), 2000);
  });
  return formElement;
};

submitElement.addEventListener("click", () => {
  const formElement = createForm();
  contentElement.prepend(formElement);
  submitElement.disabled = true;
});
