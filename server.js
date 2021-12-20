const express = require('express');
const path = require ('path');


//console.log(express)

const app = express ()
const PORT = 3001


app.get('/', (req, res) => {
    res.send('<h1>Hello World!<h1>')
  })







app.listen(PORT, () => {
    console.log(`server listening on http://localhost:${PORT}`)
})