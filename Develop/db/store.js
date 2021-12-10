const fs = require("fs");
const util = require("util");
const { v4: uuidv4 } = require("uuid");

//Allows using promise objects instead of callbacks
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

//This stores methods that will be used to interact with db.json array
class Store {
  read() {
    return readFileAsync("db/db.json", "utf-8");
  }

  write(arr) {
    let writeArray = JSON.stringify(arr);
    fs.writeFile("db/db.json", writeArray, (err) => {
      if (err) throw err;
      console.log("Array written!");
    });
  }

  getNotes() {
    return this.read().then((notes) => {
      return JSON.parse(notes);
    });
  }

  addNote(data) {
    //add a note to db.json
    data.id = uuidv4();
    let objArray = fs.readFileSync("db/db.json");
    let parseArray = JSON.parse(objArray);
    parseArray.push(data);
    this.write(parseArray);
    return data;
  }
}

module.exports = new Store();
