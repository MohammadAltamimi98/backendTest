const express = require('express') // require the express package
const app = express() // initialize your express app instance
const handleMovie = require('./modules/movies')
const cors = require('cors')
const handleNews = require('./modules/news');
const handleBooks = require('./modules/books');


app.use(cors());

// a server endpoint 
app.get('/', // our endpoint name
 function (req, res) { // callback function of what we should do with our request
  res.send('Hello World') // our endpoint function response
})


app.get('/movie', handleMovie)

app.get('/news', handleNews)

app.get('/books', handleBooks)

 
app.listen(3009) // kick start handlebooks