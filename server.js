const express = require("express");

const app = express();

// || stands for OR, so if process.env.PORT is not available, use 3000
const PORT = process.env.PORT || 3000;

// define middleware for serving static files
// a static file is that does not need to be generated.
app.use(express.static("public"));

app.get("/notes", (req, res) => {
  console.log(JSON.stringify(req.query));
  res.sendFile(__dirname + "/public/notes.html");
});

app.get("/", (req, res) => {
  // dirname is the directory of the current file.
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
