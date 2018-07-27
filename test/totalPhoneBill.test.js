let assert = require('assert');
let totalPhoneBill = require('../totalPhoneBill');

describe("The totalPhoneBill function ",function(){
  it("the total phone bill is R6,15", function(){
    assert.equal(totalPhoneBill("call, call, sms"), "R6.15");
  });
  it("The total phone bill is R11.50", function(){
    assert.equal(totalPhoneBill("call, call, sms, sms, sms, sms, sms, call"), "R11.50");
  });
});
