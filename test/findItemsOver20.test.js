let assert = require('assert');
let findItemsOver20 = require('../findItemsOver20');

describe("The findItemsOver20 function", function(){
        it("It should correctly return a list of objects with a qty property greater than 20", function(){
          assert.deepEqual(findItemsOver20(findItemsOver20.itemList),[{name : 'pears', qty : 37},{name : 'bananas', qty : 27}]);
        });
        it("It should return an empty list:", function(){
          assert.deepEqual(findItemsOver20({name : 'apples', qty : 20}), []);
        });
        it("It should state there are \'No elements\' ", function(){
          assert.deepEqual(findItemsOver20([]), "No elements");
        });
});
