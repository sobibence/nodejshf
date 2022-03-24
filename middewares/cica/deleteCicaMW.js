/*
* Torli a res.locals.cica adatot majd redirektel a gazdijanak oldalara.
*/

module.exports = function(objectrepository){
    return function (req, res, next) {
        return next();
    };
};