const express = require('express') // require the express package
const app = express() // initialize your express app instance
const handleMovie = require('./modules/movies')
const cors = require('cors')
const handleNews = require('./modules/news');
const handleBooks = require('./modules/books');
const handleArt = require('./modules/art');
const mongoose = require('mongoose');
const seed = require('./modules/interestSchema')


app.use(cors());

mongoose.connect('mongodb://localhost:27017/interests', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Mongoose is connected')
});


// a server endpoint 
app.get('/', // our endpoint name
  function (req, res) { // callback function of what we should do with our request
    res.send('Hello World') // our endpoint function response
  })

// seed();

app.get('/movie', handleMovie)
app.get('/art', handleArt)
app.get('/news', handleNews)
app.get('/books', handleBooks)

 
app.listen(3009);

