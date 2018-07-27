module.exports = function(myStr){
  if(typeof(myStr)== "string"){
    var myCount = myStr.split(',', myStr.length);
    var startCount = 0;
    for(var i =0; i<myCount.length; i++){
      if(myCount[i].startsWith("CA")||myCount[i].startsWith("CY")||myCount[i].startsWith("CJ")||myCount[i].endsWith("GP"))
        startCount++;
    }

    return startCount;
  }
  else{
    return "Unexpected type error";
  }
}
//console.log(countRegNumber('CA 182736,CY 523519,CJ 812328'));
