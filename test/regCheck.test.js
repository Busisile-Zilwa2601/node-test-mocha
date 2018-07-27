let assert = require('assert');
let regCheck = require('../regCheck');

describe("The regCheck function", function(){
  it("Should print true", function(){
    assert.equal(true, regCheck('DV 23 NB GP', 'GP'));
    });
  it("Should print false", function(){
    assert.equal(false, regCheck('DV 23 NB GP', 'NP'));
  });
  it("Unexpected type error", function(){
    assert.equal("Unexpected type error", regCheck(10111));
  });
});
