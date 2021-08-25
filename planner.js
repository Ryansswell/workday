var currenthour = (moment().format("M")) - 9;
var timeDisplayEl = document.getElementById("currentDay");
var eachBlock = $(".container").children("div")
var hour8 = $("#hour-8");
var hour9 = $("#hour-9");
var hour10 = $("#hour-10");
var hour11 = $("#hour-11");
var hour12 = $("#hour-12");
var hour13 = $("#hour-13");
var hour14 = $("#hour-14");
var hour15 = $("#hour-15");
var hour16 = $("#hour-16");
var hour17 = $("#hour-17");
var saveButton = $(".saveBtn");

function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.textContent(rightNow);
    return rightNow
}

setInterval[displayTime, 1000];

function format() {
    alert("hey")
    for (var i = 0; 1 < eachBlock.length; i++) {
        if (eachBlock > 1) {
            eachBlock[i].addclass("past")
        } if (eachBlock < 1) {
            eachBlock[i].addClass("future")
        } if (eachBlock === i) {
            eachBlock[i].addClass("present")
        }
    }
}

saveButton.on("click", function (event) {
    event.stopPropagation()
    var parentID = $(event.target).parent().attr('id');
    console.log(parentID);
    var getText = $(event.target).sibling('description').value();
    localStorage.setItem(parentID, getText);
});




