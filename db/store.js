// Used to read and write files
const util = require('util');
const fs = require('fs');

// Used to generate a unique id for each note
const uuid = require('../helpers/uuid.js');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
  read() {
    return readFileAsync('db/db.json', 'utf8');
  }

  write(note) {
    return writeFileAsync('db/db.json', JSON.stringify(note));
  }

  getNotes() {
    return this.read().then((notes) => {
      let parsedNotes;

      // If notes isn't an array or can't be turned into one, send back a new empty array
      try {
        parsedNotes = [].concat(JSON.parse(notes));
      } catch (err) {
        parsedNotes = [];
      }

      return parsedNotes;
    });
  }

  addNote(note) {
    const { title, text } = note;

    // Create the note
    const newNote = { title, text, id: uuid() };

    // get notes
    return this.getNotes()
      // create a copy of getNotes
      .then((notes) => [...notes, newNote])
      // add the new note to the lsit
      .then((updatedNotes) => this.write(updatedNotes))
      .then(() => newNote);
  }

  deleteNote(id) {
    return this.getNotes()
      .then((notes) => notes.filter(note => note.id !== id)) // Filter out the note to delete
      .then((filteredNotes) => this.write(filteredNotes)); // Write the updated notes back to the fil
  }
}




module.exports = new Store();