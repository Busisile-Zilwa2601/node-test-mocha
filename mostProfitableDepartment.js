module.exports = function(salesData){
		let sumHardware = 0;
  	let sumCarpentry = 0;
  	let sumOutDoor = 0;
  	let sumElectronics = 0;
  	let hardware = [];
  	let carpentry = [];
  	let outDoor = [];
  	let electronics = [];
  	for(let i = 0; i< salesData.length; i++){
    		let item = salesData[i];
      		if(item.department === 'hardware')
          		hardware.push(item.sales);
      		else if(item.department === 'carpentry')
          		carpentry.push(item.sales);
      		else if(item.department === 'outdoor')
          		outDoor.push(item.sales);
      		else if(item.department === 'electronics' )
          		electronics.push(item.sales);
    }
  	for(let i = 0; i<hardware.length;i++){
    		sumHardware += hardware[i];
    	}
  	for(let i = 0; i<carpentry.length;i++){
    		sumCarpentry += carpentry[i];
    	}
  	for(let i = 0; i<outDoor.length;i++){
    		sumOutDoor += outDoor[i];
    	}
  	for(let i = 0; i<electronics.length;i++){
    		sumElectronics += electronics[i];
    	}
	if(sumHardware > sumCarpentry && sumHardware > sumOutDoor && sumHardware > sumElectronics){
    		return 'Hardware';
    	}
  	else if(sumHardware < sumCarpentry && sumCarpentry > sumOutDoor && sumCarpentry > sumElectronics){
    		return 'carpentry';
    	}
  	else if(sumOutDoor > sumHardware && sumOutDoor > sumCarpentry && sumOutDoor > sumElectronics){
    		return 'outdoor';
    	}
  	else{
    		return 'electronics';
    	}
		// salesData : [
		// 	    {department : 'hardware', sales : 4500, day : 'Monday'},
		// 	    {department : 'outdoor', sales : 1500, day : 'Monday'},
		// 	    {department : 'carpentry', sales : 5500, day : 'Monday'},
		// 	    {department : 'hardware', sales : 7500, day : 'Tuesday'},
		// 	    {department : 'outdoor', sales : 2505, day : 'Tuesday'},
		// 	    {department : 'carpentry', sales : 1540, day : 'Tuesday'},
		// 	    {department : 'hardware', sales : 1500, day : 'Wednesday'},
		// 	    {department : 'outdoor', sales : 8507, day : 'Wednesday'},
		// 	    {department : 'carpentry', sales : 8009, day : 'Wednesday'},
		// 	    {department : 'hardware', sales : 12000, day : 'Thursday'},
		// 	    {department : 'outdoor', sales : 18007, day : 'Thursday'},
		// 	    {department : 'carpentry', sales : 6109, day : 'Thursday'},
		// 	    {department : 'hardware', sales : 7005, day : 'Friday'},
		// 	    {department : 'outdoor', sales : 12006, day : 'Friday'},
		// 	    {department : 'carpentry', sales : 16109, day : 'Friday'},
		// 	],
}
function mostProfitableDay(salesData){
	var mSales = 0;
  	var tSales = 0;
  	var wSales = 0;
  	var thuSales = 0;
  	var fSales = 0;
  	for(var i = 0; i<salesData.length; i++){
    	var item = salesData[i];
      	switch(item.day){
          case 'Monday':
            	mSales += item.sales;
            	break;
          case 'Tuesday':
            	tSales += item.sales;
            	break;
          case 'Wednesday':
            	wSales += item.sales;
            	break;
          case 'Thursday':
            	thuSales += item.sales;
            	break;
          case 'Friday':
            	fSales += item.sales;
                break;
          default:
            	console.log("No such day");
                       }
    }
  	var salesEachDay = [];
  	salesEachDay[0] = {day: 'Monday', sales: mSales};
  	salesEachDay[1] = {day: 'Tuesday', sales: tSales};
  	salesEachDay[2] = {day: 'Wednesday', sales: wSales};
  	salesEachDay[3] = {day: 'Thursday', sales: thuSales};
  	salesEachDay[4] = {day: 'Friday', sales: fSales};
  	var item = "";
  	var highest = (salesEachDay[0]).sales;
  	for(var i = 0; i < salesEachDay.length; i++){
      	var temp = salesEachDay[i];
      	if(highest < temp.sales){
        	highest = temp.sales;
          	item = (salesEachDay[i]).day;
        }
    }
	return item;
}
