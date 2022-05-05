const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Gazdi = db.model('Gazdi',{
    id: Number,
    name: String,
    age: Number,
    sex: String, 
});

module.exports = Gazdi;