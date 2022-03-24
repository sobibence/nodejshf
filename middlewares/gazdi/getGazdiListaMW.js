/*
* Lekerdezi az osszes gazdid a db-bol, es a res.locals.gazdikba rakja.
*/

module.exports = function(objectrepository){
    return function (req, res, next) {
        return next();
    };
};