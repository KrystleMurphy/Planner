
// dayjs().hour()
// conveinience var for the current day element
var currentDayEL = $('#currentDay');


// code to display on site
$(document).ready(function () {
    // code to print formatted date into the current day element
    currentDayEL.text(dayjs().format("dddd, MMMM D"));
    // console log to check today var and format
    console.log(dayjs().format("dddd, MMMM D"));







});