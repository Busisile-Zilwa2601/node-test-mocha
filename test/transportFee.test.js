let assert = require('assert');
let transportFee = require('../transportFee');

describe("The transportFee function", function(){
  it("Transport is R20 in the morning ",function(){
      assert.equal(transportFee("morning"), "R20");
  });
  it("Transport is R10 at Afternoon",function(){
      assert.equal(transportFee("afternoon"), "R10");
  });
  it("Transport is free at Night",function(){
      assert.equal(transportFee("night"), "Free");
  });
  it("A shift is expected!", function(){
    assert.equal(transportFee(), "Error, a shift is required");
  });
});
