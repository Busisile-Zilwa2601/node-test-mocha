module.exports = function(myYear){
	const date = new Date();
  	var theYear = (date.getFullYear());
  	return (theYear-myYear);
}
var yearsAgo = require('./yearsAgo');
console.log(yearsAgo(1989));
console.log(yearsAgo("2005"));
