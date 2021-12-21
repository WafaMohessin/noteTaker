const router = require('express').Router();
const db = require('../db')


router.get ('/notes', (req, res) => {
    db.readNotes ('../db/db.json', (err, data) => {
        if (err) throw err;
        res.send(JSON.parse(data));  
    })
});

module.exports = router;