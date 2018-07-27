module.exports = function(myStr,town){
	var myArr = myStr.split(',', myStr.length);
  	var myCount = 0;
  	for(var i =0; i< myArr.length; i++){
      	var plates = myArr[i].trim();
      	if(plates.startsWith(town)){
          	 myCount++;
        	}
				else if(plates.endsWith(town)){
					myCount++;
				}
    }
  	return myCount;
}
