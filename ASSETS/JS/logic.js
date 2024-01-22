
// conveinience var for the current day element
var currentDayEL = $('#currentDay');
// convienience var for the current hour using day.js
var currentTime = dayjs().hour()
// console.log(currentTime);

// code to display on site
$(document).ready(function () {
    // code to print formatted date into the current day elementgit 
    currentDayEL.text(dayjs().format("dddd, MMMM D"));
    // console log to check today var and format
    console.log(dayjs().format("dddd, MMMM D"));

    // take text area entry - send to local storage 
    // localStorage.setItem('key', 'value')
    $(".saveBtn").on("click", function () {

        var value = $(this).siblings(".description").val()
        // attr to target the different IDs 
        var time = $(this).parent().attr("id")
        localStorage.setItem(time, value)
    }
    )

    // retrive items from local storage and assign them to the correct text area using ID.

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


// Time slots
const timeSlots = [
    "hour-9",
    "hour-10",
    "hour-11",
    "hour-12",
    "hour-13",
    "hour-14",
    "hour-15",
    "hour-16",
    "hour-17"
];


// for loop - iterate and compare to time
// Loop through each time slot
for (let i = 0; i < timeSlots.length; i++) {
    // Convert the time slot to a Day.js object
    const timeSlot = dayjs(timeSlots[i], "hh");

    // Compare the time slot to the current time
    if (timeSlot.isBefore(currentTime)) {
        // Display green
        $("#" + timeSlots[i]).addClass("future");
    } else if (timeSlot.isSame(currentTime, "hour")) {
        // Display red
        $("#" + timeSlots[i]).addClass("present");
    } else {
        // Display grey
        $("#" + timeSlots[i]).addClass("past");
    }
}
