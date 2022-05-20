var expect = require('chai').expect;
var getGazdiMW = require('../../../middlewares/gazdi/getGazdiMW');

describe('getGazdi middleware ', function () {

    it('visszaad random gazdit', function (done) {
        const mw = getGazdiMW({
            GazdiModel:{
                findOne: (p1,cb)=>{
                    expect(p1).to.be.eql({_id: "asd"})
                    cb(null, 'randomgazdi')
                }
            }
        });
        const resMock = {
            locals: {}
        }
        mw({
            params:{
                gazdiid: "asd"
            }
        },resMock,() =>{
            expect(resMock.locals).to.be.eql({gazdi: 'randomgazdi'})
            done()
        });
    });
    it('vissza kellene hivni hibaval ha db bajok vannak', function (done) {
        const mw = getGazdiMW({
            GazdiModel:{
                findOne: (p1,cb)=>{
                    expect(p1).to.be.eql({_id: "asd"})
                    cb('db bajok lesznek', null)
                }
            }
        });
        const resMock = {
            locals: {}
        }
        mw({
            params:{
                gazdiid: "asd"
            }
        },resMock,(err) =>{
            expect(err).to.be.eql('db bajok lesznek')
            done()
        });
    });
    it('vissza kellene hivni hibaval ha nincs gazdi', function (done) {
        const mw = getGazdiMW({
            GazdiModel:{
                findOne: (p1,cb)=>{
                    expect(p1).to.be.eql({_id: "asd"})
                    cb(undefined, null)
                }
            }
        });
        const resMock = {
            locals: {}
        }
        mw({
            params:{
                gazdiid: "asd"
            }
        },resMock,(err) =>{
            expect(err).to.be.eql(undefined)
            expect(resMock.locals).to.be.eql({})
            done()
        });
    });
});