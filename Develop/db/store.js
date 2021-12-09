const fs = require("fs");
const util = require("util");

//Allows using promise objects instead of callbacks
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

//Class will have methods that read JSOn file, get, add, remove notes
class Store {
  read() {
    return readFileAsync("db/db.json", "utf-8");
  }

  getNotes() {
    return this.read().then((notes) => {
      return JSON.parse(notes);
    });
  }

  addNote() {
    //add a note to db.json
  }
}

module.exports = new Store();
