const express = require("express");
const router = express.Router();

router.get("/notes", (req, res) => {
  console.log(JSON.stringify(req.query));
  res.send("Hello from the API route!");
});

router.post("/notes", (req, res) => {
  console.log(JSON.stringify(req.query));
  res.send("Hello from the API route!");
});

router.delete("/notes/:id", (req, res) => {
  res.send("Hello from the API route!");
});

module.exports = router;
