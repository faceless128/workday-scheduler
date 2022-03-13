/* put today's date in hero */
var todayIs = moment().format("dddd, MMMM Do YYYY");

console.log(todayIs);

$(currentDay).text(todayIs)