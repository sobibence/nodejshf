/*
* Letrehoz egy gazdit a POST-ban megadott adatokkal, ha nincs megfeleloen 
* kitolve akkor ujrakuldi.
*/

module.exports = function(objectrepository){
    return function (req, res, next) {
        return next();
    };
};