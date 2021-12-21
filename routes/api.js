const router = require('express').Router();
const db = require('../db')


/* router.get ('/notes', (req, res) => {
    db.readNotes ('../db/db.json', (err, data) => {
        if (err) throw err;
        res.send(JSON.parse(data));  
    })
});  */
    router.get ('/notes', (req, res) => {
    db.readNotes('../db/db.json', 'utf-8', (err,data) => {
        if (err) throw err
        console.log(data)
        
        const parsedNotes = JSON.parse(data)
        parsedNotes.push(newNote)
        let stringifyNotes = JSON.stringify(parsedNotes)
        db.writeNotes('../db/db.json', stringifyNotes, (err) => {
            if (err) throw err
            res.status(200).send('Note has been saved')
        })
    })})


module.exports = router;