const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('#calculateNumber()', () => {
  describe('with type SUM', () => {
    it('adds positive numbers', () => {
      assert.equal(calculateNumber('SUM', 5, 10), 15);
      assert.equal(calculateNumber('SUM', 2, 2.7), 5);
      assert.equal(calculateNumber('SUM', 1.0, 4.0), 5);
      assert.equal(calculateNumber('SUM', 1.7, 3.5), 6);
    });

    it('adds numbers resulting in 0', () => {
      assert.equal(calculateNumber('SUM', 0.1, 0.3), 0);
      assert.equal(calculateNumber('SUM', -0.7, 0.7), 0);
    });

    it('adds negative numbers', () => {
      assert.equal(calculateNumber('SUM', -0.8, -0.7), -2);
    });
  });

  describe('with type SUBTRACT', () => {
    it('subtracts positive numbers', () => {
      assert.equal(calculateNumber('SUBTRACT', 1, 3), -2);
      assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
      assert.equal(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
      assert.equal(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
    });

    it('subtracts numbers resulting in 0', () => {
      assert.equal(calculateNumber('SUBTRACT', 0.1, 0.3), 0);
      assert.equal(calculateNumber('SUBTRACT', -0.7, 0.7), -2);
    });

    it('subtracts negative numbers', () => {
      assert.equal(calculateNumber('SUBTRACT', -0.8, -0.7), 0);
      assert.equal(calculateNumber('SUBTRACT', 0.8, -0.4), 1);
    });
  });

  describe('with type DIVIDE', () => {
    it('divides positive numbers', () => {
      assert.equal(calculateNumber('DIVIDE', 1, 4), 0.25);
      assert.equal(calculateNumber('DIVIDE', 1, 3.7), 0.25);
      assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
      assert.equal(calculateNumber('DIVIDE', 1.6, 2.4), 1);
      assert.equal(calculateNumber('DIVIDE', 4.2, 1.5), 2);
    });

    it('handles division by zero', () => {
      assert.equal(calculateNumber('DIVIDE', 1.3, 0.3), 'Error');
    });

    it('divides negative numbers', () => {
      assert.equal(calculateNumber('DIVIDE', -0.7, 0.7), -1);
      assert.equal(calculateNumber('DIVIDE', -0.8, -0.7), 1);
      assert.equal(calculateNumber('DIVIDE', -44.5, 2.4), -22);
      assert.equal(calculateNumber('DIVIDE', -88.5, -3.6), 22);
    });
  });
});

