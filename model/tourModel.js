const mongoose = require('mongoose');

const tourScheema = mongoose.Schema({
    Name: {
        type: String,
        unique: [true, 'Every tour name should be true'],
        required: [true, 'Every tour shouls have name']
    },
    Image: {
        type: String,
        required: true
    },
    Location: {
        type: String,
        required: [true, 'Every tour should contain location']
    },
    OCTime: {
        type: String,
        required: [true]
    },
    Description: {
        type: String,
    },
    Ranking: {
        type: Number,
        required: true,
        unique: true
    },
    Caption: {
        type: String,
        required: true
    }
})

const tourModel = mongoose.model('tours', tourScheema);

module.exports = tourModel;