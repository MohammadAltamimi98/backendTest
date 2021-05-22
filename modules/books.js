require('dotenv').config()
const { query } = require('express');
const superagent = require('superagent');
const Books_API_KEY = process.env.Books_API_KEY

const cacheMemoryBooks = require('./cacheMemoryBooks')

function handleBooks(req, res) {

  // try {
  // const booksUrl = `https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json`;
  const booksUrl = `https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=%20tGJePhm23bhndzCWrOsp0F9aMS8YAyht`;

  // const price = req.query.price;
  // const language=req.query.language;
  // const page=req.query.page; 

  // const params = {
  //   api_key: Books_API_KEY,
  //   // price: price,
  //   // language:language,
  //   // page:page
  // };
  // console.log(cacheMemoryBooks);

  // if (cacheMemoryBooks[data]) {
  //   console.log(' we got the books from the cache');

  //   res.status(200).send(cacheMemoryBooks[data])
  // }
  // else {
  superagent.get(booksUrl).then(booksDbData => {
    const booksArray = booksDbData.body.results.map(data => new Books(data));
    // cacheMemoryBooks = booksArray;
    booksArray.length = 20; // to set the array response we get to only 12 bookss.
    console.log(' we got the books from the api');

    console.log(booksArray);

    res.send(booksArray)
  })
  // }
  // }
  // catch (error) { console.log(error) }
}

class Books {
  constructor(data) {
    this.title = data.title;
    this.description = data.description;
    this.author = data.author;
    this.publisher = data.publisher;
  }
}
module.exports = handleBooks;