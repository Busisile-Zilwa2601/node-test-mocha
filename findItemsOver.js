module.exports = function(listObj, threshold){
	var myList = [];
  	for(var i = 0; i < listObj.length;i++){
    	var itemList = listObj[i];
      	if(itemList.qty > threshold){
        	myList.push(itemList);
        }
    }
  	return myList;

}
const itemList = [
    {name : 'apples', qty : 20},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];
module.exports.itemList = itemList;
let findItemsOver = require('./findItemsOver');
console.log(findItemsOver(itemList, 10));
