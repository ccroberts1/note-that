const router = require("express").Router();
const store = require("../db/store");

//GET route which reads db.json and returns all saved notes as JSON
router.get("/notes", (req, res) => {
  //read db.json and return saved notes as JSON
  store.getNotes().then((notes) => {
    return res.json(notes);
  });
});

//POST route which adds a saved note
router.post("/notes", (req, res) => {
  let note = store.addNote(req.body);
  res.json(note);
});

//DELETE route which removes deleted messages
router.delete("/notes/:id", (req, res) => {
  store.getNotes().then((notes) => {
    for (i = 0; i < notes.length; i++) {
      if (notes[i].id === req.params.id) {
        notes.splice(i, 1);
      }
    }
    store.write(notes);
    return res.json(notes);
  });
});

module.exports = router;
