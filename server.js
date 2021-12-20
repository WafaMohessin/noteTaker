const express = require('express');
const path = require ('path');
const notes = require('./db/db.json');
const fs = require('fs');


//console.log(express)

const app = express ()
const PORT = process.env.PORT || 3001;

currentID = notes.length;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));



// pull home page
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);











app.listen(PORT, () => {
    console.log(`Note Taker listening on http://localhost:${PORT}`)
})