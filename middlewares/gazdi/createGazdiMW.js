/*
* Letrehoz egy gazdit a POST-ban megadott adatokkal, ha nincs megfeleloen 
* kitolve akkor ujrakuldi.
*/
const requireOption = require('../requireOption');


module.exports = function(objectrepository){
    const GazdiModel = requireOption(objectrepository, 'GazdiModel')

    return function (req, res, next) {
        if ( 
            typeof req.body === 'undefined' ||
            typeof req.body.name === 'undefined' ||
            typeof req.body.age === 'undefined' ||
            typeof req.body.sex === 'undefined' ){
                console.log(req.body);
                return next();
            };
        
        res.locals.gazdi = new GazdiModel();

        res.locals.gazdi.name = req.body.name;
        res.locals.gazdi.age = req.body.age;
        res.locals.gazdi.sex = req.body.sex;

        res.locals.gazdi.save(err =>{
            if(err){
                return next(err);
            }

            return res.redirect("/");
        });
    };
};