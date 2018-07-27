let assert = require('assert');
let countAllFromTown = require('../countAllFromTown');

describe("The countAllFromTown function", function(){
  it("Should count one from paarl ",function(){
    assert.equal(countAllFromTown("CJ 10291", "CJ"), 1);
  });
  it("Should count three Cape Town plates ", function(){
    assert.equal(countAllFromTown('CA 182736, CA 523519, CA 812328', 'CA'),3);
  });
  it("Should count one Bellville plate", function(){
    assert.equal(countAllFromTown('CY 523519, CJ 812328', 'CY'),1);
  });
  it("Should count two Gauteng registration plate in a list", function(){
    assert.equal(countAllFromTown('CA 812328, CY 523519, DN 8123 GP, CJ 10291, ZP 8123 GP', "GP"),2);
  });
  it("Unexpected string: No plates on Busisile", function(){
    assert.equal(countAllFromTown('Busisile'),0);
  });
  it("Should count two CF registration plates", function(){
    assert.equal(countAllFromTown('CF 182736, CJ 523519, Busisile, CF 812328', "CF"),2)
  });
});
