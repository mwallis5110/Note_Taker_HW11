const router = require("express").Router();
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const db = require("../db/db.json")
const dbPath = path.join(__dirname, "../db/db.json")

router.get("/notes", (req, res) => {
  const data = fs.readFileSync(dbPath);
  res.json(JSON.parse(data));
});

router.post("/notes", (req, res) => {
  const data = JSON.parse(
    fs.readFileSync(dbPath)
  );
  req.body.id = uuidv4();
  data.push(req.body);
  fs.writeFileSync(dbPath, JSON.stringify(data));
  res.json(data);
});

router.delete("/notes/:id", (req, res) => {
  db.forEach((note, i) => {
    if(note.id === req.params.id) {db.splice(i, 1)}
  })

  fs.writeFile("db/db.json", JSON.stringify(db), (err) => {
    if(err) throw err;
  })
  res.send(db)
});

module.exports = router;
