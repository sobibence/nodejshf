/*
* Letrehoz egy cicat a POST adatokbol, majd redirektel a gazdi edit oldalara.
*/

const requireOption = require('../requireOption');
module.exports = function(objectrepository){
    const CicaModel = requireOption(objectrepository, 'CicaModel')

    return function (req, res, next) {
        if ( 
            typeof req.body === 'undefined' ||
            typeof req.body.name === 'undefined' ||
            typeof req.body.age === 'undefined' ||
            typeof req.body.color === 'undefined' ||
            typeof req.body.game === 'undefined' ||
            typeof req.body.sex === 'undefined' ){
                
                return next();
            };
        
        res.locals.cica = new CicaModel();

        res.locals.cica.name = req.body.name;
        res.locals.cica.age = req.body.age;
        res.locals.cica.sex = req.body.sex;
        res.locals.cica.color = req.body.color;
        res.locals.cica.game = req.body.game;
        //res.locals.cica.gazdija = req.headers.referer.split("/")[4]
        res.locals.cica._gazdija = res.locals.gazdi._id

        res.locals.cica.save(err =>{
            if(err){
                return next(err);
            }

            return res.redirect("/gazdi/"+res.locals.gazdi._id);
        });
    };
};