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
  
