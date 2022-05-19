/*
* Lekerdezi az osszes gazdid a db-bol, es a res.locals.gazdikba rakja.
*/
const requireOption = require('../requireOption')

module.exports = function(objectrepository){
    const GazdiModel = requireOption(objectrepository, 'GazdiModel')
    const CicaModel = requireOption(objectrepository, 'CicaModel')

    return function (req, res, next) {
        GazdiModel.find({}, (err, gazdik)=>{
            if(err){
                return next(err);
            }
            res.locals.gazdik = gazdik;
            return next();
        });
        
    };
};