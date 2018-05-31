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
app.get("/", (request, response) => {
  response.send("Hello from Express!");
});

app.post("/tshirt", upload.array(), (req, res) => {
  const size = req.body.size;
  const color = req.body.color;
  res.send(`Command Received! Size: ${size}, color: ${color}`);
});

app.post("/api/countries", jsonParser, (req, res) => {
  const data = req.body;
  res.send(
    `Your name is ${data.name} and you visited ${
      data.countries.length
    } countries. Keep traveling!`
  );
});

let nextId = 0;
let articles = [];
app.post("/articles", upload.array(), (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  const id = nextId++;
  articles.push({ title, content, id });
  res.send(`New article added succesfully with ID ${id}`);
});

// Start listening to incoming requests
// If process.env.PORT is not defined, port number 3000 is used
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log(`Your app is listening on port ${listener.address().port}`);
});
