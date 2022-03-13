/* put today's date in hero */
var todayIs = moment().format("dddd, MMMM Do YYYY");

$(currentDay).text(todayIs);
var timeBlocks = "";

// textarea was clicked
$(".time-block").on("click", "section", function() {
    var text = $(this).text().trim();
    var textInput = $("<textarea>").addClass("form-control col-8 col-md-10").val(text);
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
});
  
// save button was clicked
$(".saveBtn").on("click", function() {
    var saveButton = $(this).attr("id");
    var scheduleHour = $("." + saveButton).text().trim();
    var textareaSpot = $("." + saveButton).next();
    var textareaText = $("." + saveButton).next().val().trim();
    var textSection = $("<section>").addClass("col-8 col-md-10 schedule-item").text(textareaText);
    checkSchedule(saveButton, textSection);
    $(textareaSpot).replaceWith(textSection);
});

// check times on schedule 
var checkSchedule = function (timeVar, textSection) {
    var testTime = moment(timeVar, 'ha');
    var test = Math.abs(moment().diff(testTime, "hours"));
    if (moment().isAfter(testTime)) {
        $(textSection).addClass("past");
    } else if (Math.abs(moment().diff(testTime, "hours")) <= 1) {
        $(textSection).addClass("present");
    } else {
        $(textSection).addClass("future");
    }
}