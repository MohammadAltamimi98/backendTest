// require('dotenv').config()
// const { query  } = require('express');
// const superagent = require('superagent');
// const MOVIE_API_KEY = process.env.MOVIE_API_KEY

// // const cacheMemory = require('./cashMemory')

// function handleMovie(req, res) {
//     // movies=[];
// // const country= 'en-US';
//     try {
//         const movieUrl = `https://api.themoviedb.org/3/movie/upcoming`;
       
//         const params = {
//             api_key: MOVIE_API_KEY,
            
         
            
//         };
       
//             superagent.get(movieUrl).query(params).then(movieDbData => {
//                 const movieArray = movieDbData.body.results.map(data => new Movie(data));
//                 console.log(data, movieDbData.body, movieDbData.body.results)
//                 console.log(' we got the movie from the api');
//                 res.send(movieArray)
//             })
//         }


    
//     catch (error) { console.log(error) }

// }






// class Movie {
//     constructor(data) {
//         this.title = data.original_title;
//         // this.image = 'http://image.tmdb.org/t/p/w342' + data.poster_path;
//         // this.releaseDate = data.release_date;
//         // this.rating = data.vote_average;

//     }
   
// }


// module.exports = handleMovie;






