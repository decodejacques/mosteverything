let expect = require('chai').expect;

let Dog = require('../src/problem1.js');

describe('classes', function() {
    it('Dog class should meet the spec ', function() {
        let d = new Dog(3, "good boy", "schnitzel");
        expect(d.name).to.eql("good boy");
        expect(d.age).to.eql(3);
        expect(d.breed).to.eql("schnitzel");
        expect(typeof d.bark()).to.eql("string");
    });
});