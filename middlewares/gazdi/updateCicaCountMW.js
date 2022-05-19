/**
 * Frissiti a cicaszamlalot az adatbazisban. 
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
            var numofIterations = 0;
            res.locals.gazdik.forEach(iter => {
                CicaModel.countDocuments({'_gazdija': iter._id}, (err, count) => {
                    numofIterations++;
                    if(err){
                        console.log(err)
                    }else{
                        iter.numofCats = count
                        iter.save((err) =>{
                            if(err){
                                console.log(err)
                            }
                            if(numofIterations == res.locals.gazdik.length){
                                return next();
                            }
                        })
                    }
                });
            });
            
        });
        
    };
};