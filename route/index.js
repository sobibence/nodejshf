var express = require('express');
var app = express();

var renderMW = require('../middlewares/renderMW')

var createGazdiMW = require('../middlewares/gazdi/createGazdiMW')
var deleteGazdiMW = require('../middlewares/gazdi/deleteGazdiMW')
var getGazdiMW = require('../middlewares/gazdi/getGazdiMW')
var updateGazdiMW = require('../middlewares/gazdi/updateGazdiMW')
var getGazdiListaMW = require('../middlewares/gazdi/getGazdiListaMW')
var updateCicaCountMW = require('../middlewares/gazdi/updateCicaCountMW')

var createCicaMW = require('../middlewares/cica/createCicaMW')
var deleteCicaMW = require('../middlewares/cica/deleteCicaMW')
var getCicaMW = require('../middlewares/cica/getCicaMW')
var updateCicaMW = require('../middlewares/cica/updateCicaMW')
var getCicaListaMW = require('../middlewares/cica/getCicaListaMW')

const CicaModel = require("../models/cica")
const GazdiModel = require("../models/gazdi")

module.exports = function(app) {
    var objectrepository = {
        CicaModel: CicaModel,
        GazdiModel: GazdiModel
    }; 
    app.get('/',
        updateCicaCountMW(objectrepository),
        getGazdiListaMW(objectrepository),
        renderMW(objectrepository,'index')
    );

    app.use('/newgazdi',
        createGazdiMW(objectrepository),
        renderMW(objectrepository,'new')
    );

    app.get('/gazdi/:gazdiid/delete',
        getGazdiMW(objectrepository),
        deleteGazdiMW(objectrepository)
    );

    app.use('/gazdi/:gazdiid',
        getGazdiMW(objectrepository),
        getCicaListaMW(objectrepository),
        updateGazdiMW(objectrepository),
        renderMW(objectrepository,'user')    
    );

    app.use('/newcica/:gazdiid',
        getGazdiMW(objectrepository),
        createCicaMW(objectrepository),
        updateCicaCountMW(objectrepository),
        renderMW(objectrepository,'newcat')
    );
    
    app.use('/cica/:gazdiid/:cicaid/delete',
        getGazdiMW(objectrepository),
        getCicaMW(objectrepository),
        deleteCicaMW(objectrepository),
        updateCicaCountMW(objectrepository)
    );

    app.use('/cica/:gazdiid/:cicaid',
        getGazdiMW(objectrepository),
        getCicaMW(objectrepository),
        updateCicaMW(objectrepository),
        renderMW(objectrepository,'editcat')
    );

};