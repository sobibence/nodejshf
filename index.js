var express = require('express');
var app = express();


const bodyParser = require('body-parser');

app.set('view engine', 'ejs')
app.use(express.static('static'));

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

require('./route/index')(app);


var server = app.listen(3000, function(){
    console.log("Listening on: 3000");
});