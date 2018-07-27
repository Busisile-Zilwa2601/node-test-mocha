module.exports =  function(regNum){
  if(typeof(regNum)== "string"){
    return regNum.startsWith("CY");
  }
  else {
    return "Please input String";
  }
}
