const links = require("./links.js");

// Load the Express package as a module
const express = require("express");

// Access the exported service
const app = express();

// Load the multer package as a module
const multer = require("multer");

// Access the exported service
const upload = multer();
// Load the body-parser package as a module
const bodyParser = require("body-parser");

// Access the JSON parsing service
const jsonParser = bodyParser.json();

app.use(express.static("public"));
// Enable CORS (see https://enable-cors.org/server_expressjs.html)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Return a string for requests to the root URL ("/")
app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`);
});

app.get("/links", (req, res) => {
  res.json(links.linkList);
});

app.post("/links", upload.array(), (req, res) => {
  const title = req.body.title;
  const author = req.body.author;
  const url = req.body.url;
  const link = new links.Link(url, title, author);
  links.linkList.push(link);
  res.json(link);
});

// Start listening to incoming requests
// If process.env.PORT is not defined, port number 3000 is used
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log(`Your app is listening on port ${listener.address().port}`);
});
