const assert = require('assert');
const mostProfitableDepartment = require('../mostProfitableDepartment');
const salesData = [
			    {department : 'hardware', sales : 4500, day : 'Monday'},
			    {department : 'outdoor', sales : 1500, day : 'Monday'},
			    {department : 'carpentry', sales : 5500, day : 'Monday'},
			    {department : 'hardware', sales : 7500, day : 'Tuesday'},
			    {department : 'outdoor', sales : 2505, day : 'Tuesday'},
			    {department : 'carpentry', sales : 1540, day : 'Tuesday'},
			    {department : 'hardware', sales : 1500, day : 'Wednesday'},
			    {department : 'outdoor', sales : 8507, day : 'Wednesday'},
			    {department : 'carpentry', sales : 8009, day : 'Wednesday'},
			    {department : 'hardware', sales : 12000, day : 'Thursday'},
			    {department : 'outdoor', sales : 18007, day : 'Thursday'},
			    {department : 'carpentry', sales : 6109, day : 'Thursday'},
			    {department : 'hardware', sales : 7005, day : 'Friday'},
			    {department : 'outdoor', sales : 12006, day : 'Friday'},
			    {department : 'carpentry', sales : 16109, day : 'Friday'},
			];
describe("The mostProfitableDepartment function", function(){
      if(Array.isArray(salesData)){
        it("It should correctly return a Department: outdoor, as most profitable department", function(){
          assert.deepEqual(mostProfitableDepartment(salesData),'outdoor');
        });
      }
      else if(Array.isArray({}) == false ){
        it("Unexpected type error:", function(){
          assert.deepEqual(mostProfitableDepartment({name : 'apples', qty : 20}), "Unexpected type error:");
        });
      }
});
