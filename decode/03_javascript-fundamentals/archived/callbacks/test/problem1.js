let expect = require('chai').expect;

let farg;
let targ;

setTimeout = function(f, t) {
    farg = f;
    f("hey");
    targ = t;
}

let greet = require('../../src/callbacks/problem1.js');

describe('callbacks', function() {
    it('it should shout after 1 second ', function() {
        expect(targ).to.eql(1000);
    });
    it('the first argument must make sense', function() {
        expect(typeof farg).to.eq("function");
    });
    

});