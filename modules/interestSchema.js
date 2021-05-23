require('dotenv').config();
const { response } = require('express');
const mongoose = require('mongoose');
const cors = require("cors");



const commentSchema = new mongoose.Schema({
    nameOfCommenter: String,
    numberOfLikes: Number,
    imageOfCommenter: String,
    comment: String,
    date: String,
});

// generating the schemas

const interestSchema = new mongoose.Schema({
    numberOfLikes: Number,
    comments: [commentSchema]
});


const NewInterestSchema = mongoose.model('interestCollection', interestSchema);


function seed(){
const interestTest = new NewInterestSchema ({
    numberOfLikes : numberOfLikes,
    comments: [{
        nameOfCommenter : nameOfCommenter,
        numberOfLikes : numberOfLikes,
        imageOfCommenter : imageOfCommenter,
        comment : comment,
        date : date
    }]
});


interestTest.save();
console.log('seed.done');
}

seed();



module.exports= seed;