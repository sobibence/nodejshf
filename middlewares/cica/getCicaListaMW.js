/*
* Lekerdezi az egy gazdihoz tartozo cicak listajat a db-bol, 
* es a res.locals.cicakba rakja.
*/
const requireOption = require('../requireOption');

module.exports = function(objectrepository){
    const CicaModel = requireOption(objectrepository, 'CicaModel')

    return function (req, res, next) {
        CicaModel.find({_gadzija : res.locals.gazdi._id},(err,cicak) => {
            if(err){
                return next(err);
            }

            res.locals.cicak = cicak;
            
            return next();
        });
    };
};