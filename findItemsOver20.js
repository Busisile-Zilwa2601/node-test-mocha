module.exports =  function(listOfObj){
	var myList = [];
	if(listOfObj.length === 0){
		return "No elements";
	}
	else{
  		for(var i = 0; i < listOfObj.length;i++){
    			var itemList = listOfObj[i];
      			if(itemList.qty > 20){
        			myList.push(itemList);
        		}
    		}
  		return myList;
	}
}
const itemList = [
    {name : 'apples', qty : 20},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];

module.exports.itemList = itemList;

let findItemsOver20 = require('./findItemsOver20');
console.log(findItemsOver20(itemList));
