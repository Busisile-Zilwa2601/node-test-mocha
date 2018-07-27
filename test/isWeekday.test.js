const assert = require('assert');
const isWeekday = require('../isWeekday');

describe("The isWeekday function", function(){
  it("It should print true for weekdays", function(){
    assert.equal(isWeekday('Monday'), true);
  });
  it("It should print true for weekdays", function(){
    assert.equal(isWeekday('Tuesday'), true);
  });
  it("It should print true for weekdays", function(){
    assert.equal(isWeekday('Wednesday'), true);
  });
  it("It should print true for weekdays", function(){
    assert.equal(isWeekday('Thursday'), true);
  });
  it("It should print true for weekdays", function(){
    assert.equal(isWeekday('Friday'), true);
  });
  it("It should print false for weekends", function(){
    assert.equal(isWeekday('Saturday'), false);
  });
  it("It should print false for weekends", function(){
    assert.equal(isWeekday('Sunday'), false);
  });
});
