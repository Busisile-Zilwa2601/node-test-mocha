const assert = require('assert');
const isFromBellville = require('../isFromBellville');

describe('isFromBellville functon', function(){
	it('It should return true when a string start with CY', function(){
		assert.equal(isFromBellville('CY 234-123'), true);
	});
	it('It should return false if the string does not start with CY', function(){
		assert.equal(isFromBellville('CA 123-098'), false);
	});
	it('It should ask the user to enter a String', function(){
		assert.equal(isFromBellville(10), 'Please input String');
	});
});
