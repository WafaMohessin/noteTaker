const router = require('express').Router();
const db = require('../db')


    router.get ('/notes', (req, res) => {
    db.readNotes('../db/db.json', 'utf-8', (err,data) => {
        if (err) throw err
        console.log(data)
        res.send(JSON.parse(data));
        
        router.post("/notes", (req, res) => {
           
            const newNote = { ...req.body, id: uuidv4() };
            console.log(newNote);
            console.log(req.body);
            data.unshift(newNote);
           
            fs.writeFile(
              path.join(__dirname, "../db/db.json"),
              JSON.stringify(data),
              function (err) {
                if (err) {
                  res.status(404).json({ error: err });
                }
                res.json(data);
              }
            );
          });
          

    })})


module.exports = router;