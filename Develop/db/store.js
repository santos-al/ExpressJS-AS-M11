// Used to read and write files
const util = require('util');
const fs = require('fs');

// Used to generate a unique id for each note
const uuid = require('../helpers/uuid.js');
const { json } = require('express');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
    readNote() {
        return readFileAsync('db.json');
    }
    writeNote() {
        return writeFileAsync('db.json', json.stringify(note));
    }
}