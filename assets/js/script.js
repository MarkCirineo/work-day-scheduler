// textarea values
var nineItem = $("#09");
var tenItem = $("#10");
var elevenItem = $("#11");
var twelveItem = $("#12");
var oneItem = $("#13");
var twoItem = $("#14");
var threeItem = $("#15");
var fourItem = $("#16");
var fiveItem = $("#17");
var textArea = $("textarea");

// button for each element with saveBtn class
$(".saveBtn").on("click", saveScheduleItems);
//saves items to local storage when save button is clicked
function saveScheduleItems(event) {
  var element = event.target;

  if (element.matches(".save-nine")) {
    localStorage.setItem(09, nineItem.val());
  } else if (element.matches(".save-ten")) {
    localStorage.setItem(10, tenItem.val());
  } else if (element.matches(".save-eleven")) {
    localStorage.setItem(11, elevenItem.val());
  } else if (element.matches(".save-twelve")) {
    localStorage.setItem(12, twelveItem.val());
  } else if (element.matches(".save-one")) {
    localStorage.setItem(01, oneItem.val());
  } else if (element.matches(".save-two")) {
    localStorage.setItem(02, twoItem.val());
  } else if (element.matches(".save-three")) {
    localStorage.setItem(03, threeItem.val());
  } else if (element.matches(".save-four")) {
    localStorage.setItem(04, fourItem.val());
  } else if (element.matches(".save-five")) {
    localStorage.setItem(05, fiveItem.val());
  }
}

// shows items on screen when function is called
function renderScheduleItems() {
  nineItem.val(localStorage.getItem(09));
  tenItem.val(localStorage.getItem(10));
  elevenItem.val(localStorage.getItem(11));
  twelveItem.val(localStorage.getItem(12));
  oneItem.val(localStorage.getItem(01));
  twoItem.val(localStorage.getItem(02));
  threeItem.val(localStorage.getItem(03));
  fourItem.val(localStorage.getItem(04));
  fiveItem.val(localStorage.getItem(05));
}

function changeTextAreaColor(currentHour) {
  textArea.each(function () {
    if ($(this).attr("id") == currentHour) {
      $(this).addClass("present").removeClass("past future");
    } else if ($(this).attr("id") > currentHour) {
      $(this).addClass("future").removeClass("present past");
    } else {
      $(this).addClass("past").removeClass("future present");
    }
  });
}

//* initial function that runs on page load
// changes color of background of textareas
// displays time at the top
// and calls function to display items on screen
function init() {
  var currentDay = $("#currentDay");
  currentDay.text(moment().format("dddd, MMMM Do, YYYY, HH:mm:ss"));
  var currentHour = moment().format("HH");
  // sets textarea color on page load
  changeTextAreaColor(currentHour);
  // interval for time at the top and for changing textarea colors
  setInterval(() => {
    // redefines variable every second
    currentHour = moment().format("HH");
    // prints time at the top every second
    currentDay.text(moment().format("dddd, MMMM Do, YYYY, HH:mm:ss"));
    // changes textarea color every second
    changeTextAreaColor(currentHour);
  }, 1000);
  renderScheduleItems();
}

init();
