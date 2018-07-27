let assert = require('assert');
let countAllPaarl = require('../countAllPaarl');

describe("The countAllPaarl function", function(){
  it("Should count one paarl registration plate ",function(){
    assert.equal(countAllPaarl("CJ 10291"), 1);
  });
  it("Should count three paarl registration plates in a list", function(){
    assert.equal(countAllPaarl('CJ 182736, CJ 523519, CJ 812328'),3);
  });
  it("Should count one paarl registration plate in a list", function(){
    assert.equal(countAllPaarl('CY 523519, CJ 812328'),1);
  });
  it("Should count zero paarl registration plate in a list", function(){
    assert.equal(countAllPaarl('CA 812328'),0);
  });
  it("Should count zero registration plates in a list", function(){
    assert.equal(countAllPaarl('Busisile'),0);
  });
  it("Should count three paarl registration plates in a list", function(){
    assert.equal(countAllPaarl('CJ 182736, CJ 523519, Busisile, CJ 812328'),3)
  });
});
