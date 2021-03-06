/* put today's date in hero */
var todayIs = moment().format("dddd, MMMM Do YYYY");

$(currentDay).text(todayIs);

var timeBlocks = "";

var savedWorkDay = [];

var changedDiv = [];

// textarea was clicked
$(".time-block").on("click", "section", function() {
  var text = $(this).text().trim();
  var textInput = $("<textarea>").addClass("form-control col-8 col-md-10").val(text);
  var editOn = $(this).next().addClass("saveActive");
  $(this).next().replaceWith(editOn);
  $(this).replaceWith(textInput);
  textInput.trigger("focus");
});
  
// save button was clicked
$(".time-block").on("click", ".saveActive", function() {
  var saveButton = $(this).attr("id");
  var scheduleHour = $("." + saveButton).text().trim();
  var textareaSpot = $("." + saveButton).next();
  var textareaText = $("." + saveButton).next().val().trim();
  var textSection = $("<section>").addClass("col-8 col-md-10 schedule-item").text(textareaText);
  checkSchedule(saveButton, textSection);
  changedDiv = [{ time : saveButton, scheduleItem : textareaText }];
  $(textareaSpot).replaceWith(textSection);
  saveSchedule();
  $(this).removeClass("saveActive");
});
 
// check times on schedule 
var checkSchedule = function(timeVar, textSection) {
  var testTime = moment(timeVar, 'ha');
  var test = Math.abs(moment().diff(testTime, "hours"));
  if (moment().isAfter(testTime)) {
    $(textSection).addClass("past");
  } else if (Math.abs(moment().diff(testTime, "hours") -1) <= 1) {
    $(textSection).addClass("present");
  } else {
    $(textSection).addClass("future");
  }
}

// run checkSchedule every 5 minutes
setInterval(function() {
  checkWorkDay();
  }, (1000 * 60) * 5);
  

// save schedule
var saveSchedule = function () {
  var updateDiv = savedWorkDay.findIndex((item) => item.time === changedDiv[0].time);
  savedWorkDay[updateDiv].scheduleItem = changedDiv[0].scheduleItem;
  storeSchedule();
}

// store schedule
var storeSchedule = function() {
  localStorage.setItem("schedule", JSON.stringify(savedWorkDay));
};

// check entire workday and update highlights
var checkWorkDay = function() {
  for (var i = 0; i < savedWorkDay.length; i++) {
    currentItem = savedWorkDay[i];
    var currentScheduleItem = $("#" + currentItem.time).prev().text(currentItem.scheduleItem);
    checkSchedule(currentItem.time, currentScheduleItem);
  };
};

// load schedule
var loadSchedule = function () {
  var loadWorkDay = JSON.parse(localStorage.getItem("schedule"));

  // check localStorage for saved schedule
  if (!loadWorkDay) {
    savedWorkDay = [
      { time: "8am", scheduleItem: " " },
      { time: "9am", scheduleItem: " " },
      { time: "10am", scheduleItem: " " },
      { time: "11am", scheduleItem: " " },
      { time: "12pm", scheduleItem: " " },
      { time: "1pm", scheduleItem: " " },
      { time: "2pm", scheduleItem: " " },
      { time: "3pm", scheduleItem: " " },
      { time: "4pm", scheduleItem: " " }
    ];
  } else {
    savedWorkDay = loadWorkDay;
  }
  checkWorkDay();
};

loadSchedule();