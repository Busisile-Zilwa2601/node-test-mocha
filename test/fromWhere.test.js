let assert = require('assert');
let fromWhere = require('../fromWhere');

describe("The fromWhere function", function(){
  it("Should print Bellville",function(){
    assert.equal(fromWhere("CY 12735"), "Bellville");
  });
  it("Should print Paarl",function(){
    assert.equal(fromWhere("CJ 12735"), "Paarl");
  });
  it("Should print Cape Town",function(){
    assert.equal(fromWhere("CA 12735"), "Cape Town");
  });
  it("The plate is from else where",function(){
    assert.equal(fromWhere("DN 135 GP"), "Some other place!");
  });
  it("There should be a string as a parameter",function(){
    assert.equal(fromWhere(), "Error, String is expected!");
  });
});
