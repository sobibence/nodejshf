var expect = require('chai').expect;
const { redirect } = require('express/lib/response');
var deleteGazdiMW = require('../../../middlewares/gazdi/deleteGazdiMW');

describe('delete Gazdi middleware ', function () {

    it('kitorol random gazdit', function (done) {
        const mw = deleteGazdiMW({
            GazdiModel:{}
        });
        const resMock = {
            locals: {
                gazdi:{
                    remove: (cb) => {
                        resMock.locals = {}
                        cb()
                    }
                }
            },
            redirect: (asd) =>{
                expect(asd).to.be.eql("/")        
                expect(resMock.locals).to.be.eql({})
                done()
            }
        }
        mw({},resMock,{});
    });
    it('vissza kellene hivni hibaval ha nincs localsban gazdi', function (done) {
        const mw = deleteGazdiMW({
            GazdiModel:{}
        });
        const resMock = {
            locals: {}
        }
        mw({},resMock,(err) =>{
            expect(err).to.be.eql(undefined);
            done();
        });
    });
    it('kitorol random gazdit', function (done) {
        const mw = deleteGazdiMW({
            GazdiModel:{}
        });
        const resMock = {
            locals: {
                gazdi:{
                    remove: (cb) => {
                        resMock.locals = {}
                        cb('db bajok vannak')
                    }
                }
            }
        }
        mw({},resMock,(err) =>{
            expect(err).to.be.eql('db bajok vannak')
            done()
        });
    });
});