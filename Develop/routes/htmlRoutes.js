const path = require('path');
const router = require('express').Router();

// sets route /notes to notes.html
router.get('/notes', (re, res) => {
    res.sendFile(path.join(__dirname, '../notes.html'));
});

// sets any other route to index.html
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

module.exports = router;