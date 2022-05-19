/*
* Lekerdezi az adott :gazdiid-u gazdit a db-bol, es a res.locals.cica-ba rakja
*/

const requireOption = require('../requireOption');

module.exports = function(objectrepository){
    const GazdiModel = requireOption(objectrepository, 'GazdiModel');
    return function (req, res, next) {
        GazdiModel.findOne({ _id : req.params.gazdiid }, (err, gazdi)=>{
            if(err || !gazdi){
                return next(err);
            }

            res.locals.gazdi = gazdi;
            return next();
        });
    };
};