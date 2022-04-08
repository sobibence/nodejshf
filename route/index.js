var express = require('express');
var app = express();

var renderMW = require('../middlewares/renderMW')

var createGazdiMW = require('../middlewares/gazdi/createGazdiMW')
var deleteGazdiMW = require('../middlewares/gazdi/deleteGazdiMW')
var getGazdiMW = require('../middlewares/gazdi/getGazdiMW')
var updateGazdiMW = require('../middlewares/gazdi/updateGazdiMW')
var getGazdiListaMW = require('../middlewares/gazdi/getGazdiListaMW')

var createCicaMW = require('../middlewares/cica/createCicaMW')
var deleteCicaMW = require('../middlewares/cica/deleteCicaMW')
var getCicaMW = require('../middlewares/cica/getCicaMW')
var updateCicaMW = require('../middlewares/cica/updateCicaMW')
var getCicaListaMW = require('../middlewares/cica/getCicaListaMW')

module.exports = function(app) {
    var objectrepository = {}; 
    app.get('/',
        getGazdiListaMW(objectrepository),
        renderMW(objectrepository,'index')
    );

    app.use('/gazdi',
        createGazdiMW(objectrepository),
        renderMW(objectrepository,'new')
    );

    app.use('/gazdi/:gazdiid',
        getGazdiMW(objectrepository),
        getCicaListaMW(objectrepository),
        updateGazdiMW(objectrepository),
        renderMW(objectrepository,'user')    
    );

    app.get('/gazdi/:gazdiid/delete',
        getGazdiMW(objectrepository),
        deleteGazdiMW(objectrepository)
    );

    app.use('cica/:gazdiid',
        getGazdiMW(objectrepository),
        createCicaMW(objectrepository),
        renderMW(objectrepository,'newcat')
    );

    app.use('cica/:gazdiid/:cicaid',
        getGazdiMW(objectrepository),
        getCicaMW(objectrepository),
        updateCicaMW(objectrepository),
        renderMW(objectrepository,'editcat')
    );

    app.use('cica/:gazdiid/:cicaid/delete',
        getGazdiMW(objectrepository),
        getCicaMW(objectrepository),
        deleteCicaMW(objectrepository)
    );

};