const express = require('express');
const apiRoutes = require('./routes/api');
const htmlRoutes = require('./routes/html');
//console.log(express)

const app = express ()
const PORT = process.env.PORT || 3001;


// Sets up the Express app to handle data parsing
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api', apiRoutes)
app.use ('/', htmlRoutes)

app.listen(PORT, () => {
    console.log(`Note Taker listening on http://localhost:${PORT}`)
})