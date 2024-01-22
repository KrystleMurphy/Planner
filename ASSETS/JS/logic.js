
// dayjs().hour()
// conveinience var for the current day element
var currentDayEL = $('#currentDay');


// code to display on site
$(document).ready(function () {
    // code to print formatted date into the current day elementgit 
    currentDayEL.text(dayjs().format("dddd, MMMM D"));
    // console log to check today var and format
    console.log(dayjs().format("dddd, MMMM D"));

// take text area entry - send to local storage 
// localStorage.setItem('key', 'value')
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

$("#hour-10 .description").val(localStorage.getItem("hour-10"))

$("#hour-11 .description").val(localStorage.getItem("hour-11"))

$("#hour-12 .description").val(localStorage.getItem("hour-12"))

$("#hour-13 .description").val(localStorage.getItem("hour-13"))

$("#hour-14 .description").val(localStorage.getItem("hour-14"))

$("#hour-15 .description").val(localStorage.getItem("hour-15"))

$("#hour-16 .description").val(localStorage.getItem("hour-16"))

$("#hour-17 .description").val(localStorage.getItem("hour-17"))




});

// for loop - iterate and compare to time
// include timer outside of the function