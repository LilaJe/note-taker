const bodyParser = require("body-parser");
const express = require("express");
const api = require("./routes/api");

const app = express();

app.use(logger);

// || stands for OR, so if process.env.PORT is not available, use 3000
const PORT = process.env.PORT || 3000;

// define middleware for serving static files
// a static file is that does not need to be generated.
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/notes", (req, res) => {
  console.log(JSON.stringify(req.query));
  res.sendFile(__dirname + "/public/notes.html");
});

app.use("/api", api);

app.get("*", (req, res) => {
  // dirname is the directory of the current file.
  res.sendFile(__dirname + "/public/index.html");
});

// next is telling it to move on and go to the router.
function logger(req, res, next) {
  console.log(req.method + " " + req.originalUrl);
  next();
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
