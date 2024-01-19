$(document).ready(function() {
    // Get the current date
    var currentDate = dayjs().format('dddd-MMMM-DD');
  
    // Append the formatted date to the element
    $("#currentDay").text(currentDate);
  });


  