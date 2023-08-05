const store = require('../db/store.js')
const router = require('express').Router();

// get all notes from the database
router.get('/notes', async (req, res) => {
    try {
      const notes = await store.getNotes()
        return res.json(notes);
      } 
      catch (err) {
        res.status(500).json(err)
      }
  });

