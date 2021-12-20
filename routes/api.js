const router = require('express').Router();
const db = require('../db')

router.get ('/notes', (req, res) => {
db.readNotes ('../db/db.json')
.then((data) => res.json(JSON.parse(data)))
});  



module.exports = router