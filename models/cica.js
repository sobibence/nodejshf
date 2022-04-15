const Schema = requrie('mongoose').Schema;
const db = require('../config/db');

var Cica = db.model('Cica',{
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