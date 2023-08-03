const path = require('path');
const router = require('express').Router();

router.get('/notes', (re, res) => {
    res.sendFile(path.join(__dirname, '../notes.html'));
});