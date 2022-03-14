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
    changedDiv = [{ time : saveButton, scheduleItem : textareaText }];
    $(textareaSpot).replaceWith(textSection);
    saveSchedule();
});

// check times on schedule 
var checkSchedule = function(timeVar, textSection) {
    var testTime = moment(timeVar, 'ha');
    var test = Math.abs(moment().diff(testTime, "hours"));
    if (moment().isAfter(testTime)) {
        $(textSection).addClass("past");
    } else if (Math.abs(moment().diff(testTime, "hours")) < 1) {
        $(textSection).addClass("present");
    } else {
        $(textSection).addClass("future");
    }
}

// save schedule
var saveSchedule = function () {
    console.log(changedDiv);
    console.log(changedDiv[0].time);
    var updateDiv = savedWorkDay.findIndex((item) => item.time === changedDiv[0].time);
    console.log(updateDiv);
    savedWorkDay[updateDiv].scheduleItem = changedDiv[0].scheduleItem;
    console.log(savedWorkDay);
    storeSchedule();
}

// store schedule
var storeSchedule = function() {
    localStorage.setItem("schedule", JSON.stringify(savedWorkDay));
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
        console.log(loadWorkDay);
        savedWorkDay = loadWorkDay;
    }
    console.log(savedWorkDay);
    // loop over object properties
    for (var i = 0; i < savedWorkDay.length; i++) {
        currentItem = savedWorkDay[i];
        var foo = $("#" + currentItem.time).prev().text(currentItem.scheduleItem);
        console.log(foo)
        checkSchedule(currentItem.time, foo);

        // checkSchedule(saveButton, textSection);
    };
    console.log(savedWorkDay);
};

loadSchedule();