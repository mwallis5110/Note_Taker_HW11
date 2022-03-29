const router = require("express").Router();
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

router.get("/notes", (req, res) => {
  const data = fs.readFileSync(path.join(__dirname, "../db/db.json"));
  res.json(JSON.parse(data));
});

router.post("/notes", (req, res) => {
  const data = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../db/db.json"))
  );
  req.body.id = uuidv4();
  data.push(req.body);
  fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(data));
  res.json(data);
});

router.delete("/notes/:id", (req, res) => {
  const data = JSON.parse(
    fs.writeFile(path.join(__dirname, "../db/db.json"))
  );
  data.splice(req.params.id, );
  res.json(data);
});

module.exports = router;
