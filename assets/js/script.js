/* put today's date in hero */
var todayIs = moment().format("dddd, MMMM Do YYYY");

$(currentDay).text(todayIs);
var timeBlocks = "";

// textarea was clicked
$(".time-block").on("click", "section", function() {
    var text = $(this).text().trim();
    console.log(text);
    var textInput = $("<textarea>").addClass("form-control col-8 col-md-10").val(text);
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
});
  
// save button was clicked
$(".saveBtn").on("click", function() {
    var saveButton = $(this).attr("id");
    console.log(saveButton);
    var scheduleHour = $("." + saveButton).text().trim();
    var textareaSpot = $("." + saveButton).next();
    var textareaText = $("." + saveButton).next().val().trim();
    console.log(scheduleHour);
    console.log(textareaSpot);
    console.log(textareaText);
    var textSection = $("<section>").addClass("col-8 col-md-10 schedule-item").text(textareaText);
    console.log(textSection);
    $(textareaSpot).replaceWith(textSection);
});


