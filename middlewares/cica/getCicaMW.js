/*
* Lekerdezi az adott :cicaid-u cicat a db-bol, es a res.locals.cica-ba rakja
*/

const requireOption = require('../requireOption');
module.exports = function(objectrepository){
    const CicaModel = requireOption(objectrepository, 'CicaModel');
    return function (req, res, next) {
        CicaModel.findOne({ _id : req.params.cicaid }, (err, cica)=>{
            if(err || !cica){
                return next(err);
            }

            res.locals.cica = cica;
            return next();
        });
    };
};