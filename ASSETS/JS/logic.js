
// convienience var to pull todays date
var today = dayjs();
// conveinience var for the current day element
var currentDayEL = $('#currentDay');

var timeEL = $('.time')

// code to display on site
$(document).ready(function () {
    // code to print formatted date into the current day element
    currentDayEL.text(today.format("dddd, MMMM Do"));
    // console log to check today var and format
    console.log(today.format("dddd, MMMM Do"));







});