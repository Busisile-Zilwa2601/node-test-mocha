module.exports = function (myStr){
	let myArr = myStr.split(',', myStr.length);
  	let myPaarl = 0;
  	for(let i =0; i< myArr.length; i++){
      		let plates = myArr[i].trim();
      		if(plates.startsWith('CJ')){
          		 myPaarl++;
        	}
    	}
  	return myPaarl;
}
