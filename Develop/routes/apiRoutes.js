const router = require("express").Router();
const store = require("../db/store");

//Get /api/notes, should read db.json and return all saved notes as JSON
router.get("/notes", (req, res) => {
  //read db.json and return saved notes as JSON
  store.getNotes().then((notes) => {
    console.log(notes);
    return res.json(notes);
  });
});

//POST /api/notes should receive new note to save on request body, add to db.json, then return new note to client. Each note needs to have UID when it's saved

router.post("/notes", (req, res) => {
  store.addNote(req.body).then((note) => res.json(note));
});

module.exports = router;
