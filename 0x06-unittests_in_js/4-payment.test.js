const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi calls console.log with the right arguments', () => {
    const spy = sinon.spy(console);
    const stubs = sinon.stub(Utils, 'calculateNumber');

    stubs.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(stubs.calledWith('SUM', 100, 20)).to.be.true;
    expect(stubs.callCount).to.be.equal(1);
    expect(spy.log.calledWith('The total is: 10')).to.be.true;
    expect(spy.log.callCount).to.be.equal(1);
    stubs.restore();
    stub.log.restore();
  });
});
