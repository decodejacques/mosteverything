let expect = require('chai').expect;

let greet = require('../src/problem1.js');

describe('bind', function() {
    it('the greet function should be bound to bob', function() {
        expect(greet()).to.eql("I'm Bob");
    });
});