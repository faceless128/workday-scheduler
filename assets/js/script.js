/* put today's date in hero */
var todayIs = moment().format("dddd, MMMM Do YYYY");

$(currentDay).text(todayIs);
var timeBlocks = "";

// textarea was clicked
$(".schedule-item").on("click", "div", function() {
    var text = $(this).text().trim();
    console.log(text);
    var textInput = $("<textarea>").addClass("form-control").val(text);
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
  });
  

var makeDay = function() {
    // var thisTime = $("<div>").addClass("hour col-2 col-md-1").val("8AM");
    // console.log(thisTime);
    // var thisData = $("<div>").addClass("present col-8 col-md-10").val("meeting");
    // console.log(thisData);
    // var saveThis = $("<span>").addClass("oi on-hard-drive");
    // console.log(saveThis);
    // var thisEdit = $("<div>").addClass("saveBtn col-2 col-md-1").val(saveThis);
    // console.log(thisEdit);
    // var timeBlocks = $("<div>").addClass("time-block row");
    // console.log(timeBlocks);
    // $(".scheduer").append(timeBlocks);    
    // $(".time-block").append(thisTime);
    // $(".time-block").append(thisData);
    // $(".time-block").append(thisEdit);
}

makeDay();