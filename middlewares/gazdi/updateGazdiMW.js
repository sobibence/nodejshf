/*
* Frissiti a POST adatokbol a gazdit, majd redirektel a gazdi edit oldalra.
*/

module.exports = function(objectrepository){
    return function (req, res, next) {
        if(typeof req.body === 'undefined' || typeof req.body.name === 'undefined'){
            return next();
        }
        res.locals.gazdi.name = req.body.name;
        res.locals.gazdi.age = req.body.age;
        res.locals.gazdi.sex = req.body.sex;

        res.locals.gazdi.save((err,gazdi) =>{
            if(err){
                return next(err);
            }
            return res.redirect("/gazdi/"+gazdi._id);
        });
    };
};