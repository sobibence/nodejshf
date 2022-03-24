/*
* Lekerdezi az egy gazdihoz tartozo cicak listajat a db-bol, 
* es a res.locals.cicakba rakja.
*/

module.exports = function(objectrepository){
    return function (req, res, next) {
        return next();
    };
};