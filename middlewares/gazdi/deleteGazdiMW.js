/*
* Kitorli az adott :gazdiid-u gazdit a db-bol, redirektel a kezdooldalra
*/

const requireOption = require('../requireOption')

module.exports = function(objectrepository){
    const GazdiModel = requireOption(objectrepository, 'GazdiModel')

    return function (req, res, next) {
        if(typeof res.locals.gazdi === 'undefined'){
            return next()
        }

        res.locals.gazdi.remove(err =>{
            if(err){
                return next(err);
            }

            return res.redirect('/');
        })
    };
};