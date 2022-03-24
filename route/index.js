var express = require('express');
var app = express();

var renderMW = require('../middlevares/renderMW')

var createGazdiMW = require('../middlevares/gazdi/createGazdiMW')
var deleteGazdiMW = require('../middlevares/gazdi/deleteGazdiMW')
var getGazdiMW = require('../middlevares/gazdi/getGazdiMW')
var updateGazdiMW = require('../middlevares/gazdi/updateGazdiMW')
var getGazdiListaMW = require('../middlevares/gazdi/getGazdiListaMW')

var createCicaMW = require('../middlevares/cica/createCicaMW')
var deleteCicaMW = require('../middlevares/cica/deleteCicaMW')
var getCicaMW = require('../middlevares/cica/getCicaMW')
var updateCicaMW = require('../middlevares/cica/updateCicaMW')
var getCicaListaMW = require('../middlevares/cica/getCicaListaMW')

module.exports = function(app) {
    var objectrepository = {}; 
    app.get('/',
        getGazdiListaMW(objectrepository),
        renderMW(objectrepository,'index')
    );

    app.use('/gazdi',
        createGazdiMW(objectrepository),
        renderMW(objectrepository,'gazdi')
    );

    app.use('/gazdi/:gazdiid',
        getGazdiMW(objectrepository),
        getCicaListaMW(objectrepository),
        updateGazdiMW(objectrepository),
        renderMW(objectrepository,'gazdi')    
    );

    app.get('/gazdi/:gazdiid/delete',
        getGazdiMW(objectrepository),
        deleteGazdiMW(objectrepository)
    );

    app.use('cica/:gazdiid',
        getGazdiMW(objectrepository),
        createCicaMW(objectrepository),
        renderMW(objectrepository,'gazdi')
    );

    app.use('cica/:gazdiid/:cicaid',
        getGazdiMW(objectrepository),
        getCicaMW(objectrepository),
        updateCicaMW(objectrepository),
        renderMW(objectrepository,'cica')
    );

    app.use('cica/:gazdiid/:cicaid/delete',
        getGazdiMW(objectrepository),
        getCicaMW(objectrepository),
        deleteCicaMW(objectrepository)
    );

};