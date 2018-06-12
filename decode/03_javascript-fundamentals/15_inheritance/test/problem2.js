let expect = require('chai').expect;

let classes = require('../src/problem2.js');

let Shape = classes.Shape;
let Square = classes.Square;
let s = new Square(5);

describe('Square', function() {
    it('converts nicely to a string', function() {
        expect(s.toString()).to.eq("square with area 25 and perimeter 20");
    });
});