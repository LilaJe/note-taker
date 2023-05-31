const express = require("express");
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const router = express.Router();

const dataBaseFile = path.join(__dirname, "../db/db.json");
console.log(dataBaseFile);

router.get("/notes", (req, res) => {
  console.log(JSON.stringify(req.query));
  fs.readFile(dataBaseFile, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).end();
    }

    res.json(JSON.parse(data));
  });
});

router.post("/notes", (req, res) => {
  console.log(req);
  fs.readFile(dataBaseFile, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).end();
    }

    const notes = JSON.parse(data);
    const newNote = { ...req.body, id: uuidv4() };
    notes.push(newNote);

    fs.writeFile(dataBaseFile, JSON.stringify(notes, null, 2), (err) => {
      if (err) {
        console.error(err);
        return res.status(500).end();
      }

      res.json(newNote);
    });
  });
});

router.delete("/notes/:id", (req, res) => {
  console.log(req.params.id);
  fs.readFile(dataBaseFile, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).end();
    }

    let notes = JSON.parse(data);
    console.log(notes);
    notes = notes.filter((note) => note.id !== req.params.id);

    fs.writeFile(dataBaseFile, JSON.stringify(notes, null, 2), (err) => {
      if (err) {
        console.error(err);
        return res.status(500).end();
      }

      res.json({ message: "Note deleted" });
    });
  });
});

module.exports = router;
