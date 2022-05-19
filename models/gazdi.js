const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Gazdi = db.model('Gazdi',{
    //id: Number,
    name: String,
    age: Number,
    sex: String, 
    numofCats: Number
});

module.exports = Gazdi;