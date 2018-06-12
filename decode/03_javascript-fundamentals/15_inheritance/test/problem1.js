let expect = require('chai').expect;

let classes = require('../src/problem1.js');

let Shape = classes.Shape;
let Rectangle = classes.Rectangle;
let Square = classes.Square;

let s = new Square(5);
let r = new Rectangle(10, 4);

describe('Rectangle', function() {
    it('Seeing how a rectangle converts to a string', function() {
        expect(r.toString()).to.eq("This shape has an area of 40 and perimeter 28");
    });
    it('is a shape', function() {
        expect(r.__proto__.__proto__.constructor).to.eq(Shape);
    });
});

describe('Square', function() {
    it('Seeing how a square converts to a string', function() {
        expect(s.toString()).to.eq("This shape has an area of 25 and perimeter 20");
    });
    it('is a rectangle', function() {
        expect(s.__proto__.__proto__.constructor).to.eq(Rectangle);
    });
});

