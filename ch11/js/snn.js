class Link {
  constructor(url, title, author) {
    this.title = title;
    this.author = author;
    if (! (url.startsWith('http://') || url.startsWith('https://'))) {
      this.url = 'http://' + url;
    } else {
      this.url = url;
    }
  }
}

let links = [];

const createLinksString = () => {
  out = '';
  for (let i = 0; i < links.length; ++i) {
    let l = links[i];
    out += `${i+1}: ${l.title} (${l.url}). Author: ${l.author}\n`;
  }
  return out;
}

const showLinks = () => {
  if (links.length === 0) {
    alert("No links present!");
    return;
  }
  alert(createLinksString());
}

const removeLink = () => {
 if (links.length === 0) {
    alert("No links present!");
    return;
  }
  while(true) {
    let i = Number(prompt('Choose a Link to remove:\n' + createLinksString()));
    if (Number.isInteger(i) && i <= links.length && i > 0) {
      links.splice(i-1, 1);
      return;
    }
  }
}


const addLink = () => {
  url = prompt('Insert URL:');
  title = prompt('Insert Title:');
  author = prompt('Insert Author:');
  links.push(new Link(url, title, author));
}

outer:
while (true) {
  let q = prompt(`Choose an option:
1: Show Links
2: Add a Link
3: Remove a Link
0: Quit`);
  switch(q) {
  case '0':
    quit = true;
    break outer;
  case '1':
    showLinks();
    break;
  case '2':
    addLink();
    break;
  case '3':
    removeLink();
    break;
  }
}

