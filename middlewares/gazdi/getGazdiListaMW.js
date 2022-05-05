/*
* Lekerdezi az osszes gazdid a db-bol, es a res.locals.gazdikba rakja.
*/
const requireOption = require('../requireOption')

module.exports = function(objectrepository){
    const GazdiModel = requireOption(objectrepository, 'GazdiModel')

    return function (req, res, next) {
        GazdiModel.find({}, (err, gazdik)=>{
            if(err){
                return next(err);
            }

            res.locals.gazdik = gazdik;
            return next();
        });
        // res.locals.users = [{
        //     name: "sanya",
        //     age: 3,
        //     sex: "Nő",
        //     numofcats: 3,
        //     id:0
        // }];
        // return next();
    };
};