/*
* Lekerdezi az adott :cicaid-u cicat a db-bol, es a res.locals.cica-ba rakja
*/

module.exports = function(objectrepository){
    return function (req, res, next) {
        res.locals.cat = {
            name: "pamacs",
            age: 4,
            sex: "Lány",
            favgame: "labda",
            color:"kek",
            id:0
        };
        //console.log(cat);
        return next();
    };
};