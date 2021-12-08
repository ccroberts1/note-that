const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3001;
const app = express();

//Boilerplate for express for data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//HTML GET route for /notes.html
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

//Default HTML GET route
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

//Get /api/notes, should read db.json and return all saved notes as JSON

//POST /api/notes should receive new note to save on request body, add to db.json, then return new note to client. Each note needs to have UID when it's saved

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
