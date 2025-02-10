const store = require('../db/store.js')
const router = require('express').Router();

// get all notes from the database
router.get('/notes', async (req, res) => {
    try {
      const notes = await store.getNotes();
      return res.json(notes);
      } 
      catch (err) {
        res.status(500).json(err)
      }
  });

// add note to database
  router.post('/notes', async (req, res) => {
    try {
    const newNote = await store.addNote(req.body);
    return res.json(newNote);
    }
    catch (err) {
        res.status(500).json(err);
    }
  });

// delete note from the database
router.delete('/notes/:id', async (req, res) => {
  try {
    const noteId = req.params.id; 
    const result = await store.deleteNote(noteId);

    if (result) {
      return res.status(204).send();
    } else {
      return res.status(404).json({ message: 'Note not found' });
    }
  } catch (err) {
    res.status(500).json(err); // Handle any errors
  }
});

module.exports = router;