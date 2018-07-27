module.exports = function(shiftWork){
  	if(shiftWork === "morning")
      	return "R20";
  	else if(shiftWork === "afternoon")
      	return "R10";
  	else if(shiftWork === "night")
      	return "Free";
    else;
        return "Error, a shift is required";
}
//console.log(transportFee("morning"));
