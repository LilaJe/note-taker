const express = require("express");

const app = express();

// || stands for OR, so if process.env.PORT is not available, use 3000
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
