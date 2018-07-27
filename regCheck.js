module.exports = function(plates, city){
  if(typeof(plates)=="string" && typeof(city)=="string"){
    return plates.endsWith(city);
  }
  else{
    return "Unexpected type error";
  }
}
