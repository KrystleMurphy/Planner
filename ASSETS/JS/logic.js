
// dayjs().hour()
// conveinience var for the current day element
var currentDayEL = $('#currentDay');


// code to display on site
$(document).ready(function () {
    // code to print formatted date into the current day elementgit 
    currentDayEL.text(dayjs().format("dddd, MMMM D"));
    // console log to check today var and format
    console.log(dayjs().format("dddd, MMMM D"));

// take text area entry - send to local storage - for every text area input - time and text area - time as key to ls. ONE CODE
// localStorage.setItem('myCat', 'Tom')
$(".saveBtn").on("click", function(){

    var value = $(this).siblings(".description").val()
    // attr to target the different IDs 
var time = $(this).parent().attr("id")
localStorage.setItem(time, value)
}
)

// compare time on from sched to day.js - dynamic comparison - css past present and future - where are we in time - method to run multiple times - puff of color demo - apply timer
// not a function - pool keys - get item - to display correctly in the right box.
$("#hour-9 .description").val(localStorage.getItem("hour-9"))




});

// for loop - iterate and compare to time
// include timer outside of the function