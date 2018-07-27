let assert = require('assert');
let yearsAgo = require('../yearsAgo');

describe("The yearsAgo function ", function(){
  it("Expeced 29 as results",function(){
    assert.equal(yearsAgo(1989), 29);
  });
  it("Expeced 13 as results",function(){
    assert.equal(yearsAgo('2005'), 13);
  });
});
