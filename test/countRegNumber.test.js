let assert = require('assert');
let countRegNumber = require('../countRegNumber');

describe("countRegNumber function ", function(){
  it("Unexpected type error",function(){
    assert.equal("Unexpected type error", countRegNumber(127611212));
  });
  it("Should count three registration plates in a list", function(){
    assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'),3);
  });
  it("Should count two registration plates in a list", function(){
    assert.equal(countRegNumber('CY 523519,CJ 812328'),2);
  });
  it("Should count one registration plates in a list", function(){
    assert.equal(countRegNumber('CJ 812328'),1);
  });
  it("Should count zero registration plates in a list", function(){
    assert.equal(countRegNumber('Busisile'),0);
  });
  it("Should count three registration plates in a list", function(){
    assert.equal(countRegNumber('CA 182736,CY 523519,Busisile,CJ 812328'),3)
  });
});
