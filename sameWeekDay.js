var weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
function sameWeekday(day1 , dat2){
  var d1 = new Date(day1);
  var d2 = new Date(day2);
  var check1 =  weekDays[d1.getDay()];
  var check2 =  weekDays[d2.getDay()];
  return check1.endsWith(check2);
}
