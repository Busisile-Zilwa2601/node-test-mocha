const assert = require('assert');
const greet = require('../greet');

describe('Greet function', function(){
	it('It should greet the name given', function(){
		assert.equal(greet('Xola'), 'Hello, Xola');
	});
});
