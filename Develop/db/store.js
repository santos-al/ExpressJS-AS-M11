// Used to read and write files
const util = require('util');
const fs = require('fs');

// Used to generate a unique id for each note
const uuid = require('../helpers/uuid.js');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
    readNote() {
        return readFileAsync('db.json');
    }
    writeNote() {
        return writeFileAsync('db.json', json.stringify(note));
    }
    async getNotes() {
      const notes = this.read();

      return [].concat(json.parse(notes))
    }
    async createNote() {
        const newNote = { title, text, id: uuid() };
        
        let notes = await this.getNotes();

        // Combine new note with a copy of old notes
        let copyNotes = [...notes, newNote];

        return this.writeNote(copyNotes);
      }
    }


module.exports = Store;