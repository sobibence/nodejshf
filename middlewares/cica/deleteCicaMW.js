/*
* Torli a res.locals.cica adatot majd redirektel a gazdijanak oldalara.
*/
const requireOption = require('../requireOption')


module.exports = function(objectrepository){
    const GazdiModel = requireOption(objectrepository, 'GazdiModel')

    return function (req, res, next) {
        if(typeof res.locals.cica === 'undefined'){
            return next()
        }

        res.locals.cica.remove(err =>{
            if(err){
                return next(err);
            }

            return res.redirect('/gazdi/'+res.locals.gazdi._id);
        })
    };
};