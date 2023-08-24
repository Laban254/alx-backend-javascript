const expect = require('chai').expect;
const calculateNumber = require('./1-calcul');

describe('#calculateNumber()', () => {
  describe('with type SUM', () => {
    it('adds positive numbers', () => {
      expect(calculateNumber('SUM', 5, 10)).to.equal(15);
      expect(calculateNumber('SUM', 2, 2.7)).to.equal(5);
      expect(calculateNumber('SUM', 1.0, 4.0)).to.equal(5);
      expect(calculateNumber('SUM', 1.7, 3.5)).to.equal(6);
    });

    it('adds numbers resulting in 0', () => {
      expect(calculateNumber('SUM', 0.1, 0.3)).to.equal(0);
      expect(calculateNumber('SUM', -0.7, 0.7)).to.equal(0);
    });

    it('adds negative numbers', () => {
      expect(calculateNumber('SUM', -0.8, -0.7)).to.equal(-2);
    });
  });

  describe('with type SUBTRACT', () => {
    it('subtracts positive numbers', () => {
      expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
      expect(calculateNumber('SUBTRACT', 1.2, 3.7)).to.equal(-3);
      expect(calculateNumber('SUBTRACT', 1.5, 3.7)).to.equal(-2);
    });

    it('subtracts numbers resulting in 0', () => {
      expect(calculateNumber('SUBTRACT', 0.1, 0.3)).to.equal(0);
      expect(calculateNumber('SUBTRACT', -0.7, 0.7)).to.equal(-2);
    });

    it('subtracts negative numbers', () => {
      expect(calculateNumber('SUBTRACT', -0.8, -0.7)).to.equal(0);
      expect(calculateNumber('SUBTRACT', 0.8, -0.4)).to.equal(1);
    });
  });

  describe('with type DIVIDE', () => {
    it('divides positive numbers', () => {
      expect(calculateNumber('DIVIDE', 1, 4)).to.equal(0.25);
      expect(calculateNumber('DIVIDE', 1, 3.7)).to.equal(0.25);
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
      expect(calculateNumber('DIVIDE', 1.6, 2.4)).to.equal(1);
      expect(calculateNumber('DIVIDE', 4.2, 1.5)).to.equal(2);
    });

    it('handles division by zero', () => {
      expect(calculateNumber('DIVIDE', 1.3, 0.3)).to.equal('Error');
    });

    it('divides negative numbers', () => {
      expect(calculateNumber('DIVIDE', -0.7, 0.7)).to.equal(-1);
      expect(calculateNumber('DIVIDE', -0.8, -0.7)).to.equal(1);
      expect(calculateNumber('DIVIDE', -44.5, 2.4)).to.equal(-22);
      expect(calculateNumber('DIVIDE', -88.5, -3.6)).to.equal(22);
    });
  });
});

