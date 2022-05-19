/*
* Frissiti a POST adatokbol a cicat, majd redirektel a gazdijanak edit oldalra.
*/

module.exports = function(objectrepository){
    return function (req, res, next) {
        if(typeof req.body === 'undefined' || typeof req.body.name === 'undefined'){
            return next();
        }
        res.locals.cica.name = req.body.name;
        res.locals.cica.age = req.body.age;
        res.locals.cica.sex = req.body.sex;
        res.locals.cica.game = req.body.game;
        res.locals.cica.color = req.body.color;
        
        res.locals.cica.save((err,cica) =>{
            if(err){
                return next(err);
            }
            console.log(cica)
            return res.redirect("/gazdi/"+res.locals.gazdi._id);
        });
    };
};