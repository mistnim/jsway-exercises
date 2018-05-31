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

module.exports.Link = Link;
module.exports.linkList = linkList;
