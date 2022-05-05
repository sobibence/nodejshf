const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Cica = db.model('Cica',{
    name: String,
    age: Number,
    color: String,
    sex: String, 
    fav_game: String,
    _gazdija: {
        type: Schema.Types.ObjectId,
        ref: 'Nagymama'
    }
});

module.exports = Cica;