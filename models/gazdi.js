const Schema = requrie('mongoose').Schema;
const db = require('../config/db');

var Gazdi = db.model('Gazdi',{
    name: String,
    age: Number,
    sex: String, 
});