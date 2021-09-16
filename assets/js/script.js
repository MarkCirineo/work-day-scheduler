currentDay = $("#currentDay");
currentDay.text(moment().format("dddd, MMMM Do, YYYY, HH:mm:ss"));

//initial function that runs on page load
function init() {
    setInterval(() => {
        currentDay.text(moment().format("dddd, MMMM Do, YYYY, HH:mm:ss"));
    }, 1000);

}

init();

//textarea values for object
nineItem = $("#nine");
tenItem = $("#ten");
elevenItem = $("#eleven");
twelveItem = $("#twelve");
oneItem = $("#one");
twoItem = $("#two");
threeItem = $("#three");
fourItem = $("#four");
fiveItem = $("#five");

//object for local storage
var scheduleItems = {
    nine: nineItem.val(),
    ten: tenItem.val(),
    eleven: elevenItem.val(),
    twelve: twelveItem.val(),
    one: oneItem.val(),
    two: twoItem.val(),
    three: threeItem.val(),
    four: fourItem.val(),
    five: fiveItem.val()
};

// saving items to local storage on button click
function saveScheduleItems(event) {
    var saveButton = event.target;
    if (saveButton.matches(".save-nine")) {
        scheduleItems.nine = nineItem.val()
    } else if (saveButton.matches(".save-ten")) {
        scheduleItems.ten = tenItem.val()
    } else if (saveButton.matches(".save-eleven")) {
        scheduleItems.eleven = elevenItem.val()
    } else if (saveButton.matches(".save-twelve")) {
        scheduleItems.twelve = twelveItem.val()
    } else if (saveButton.matches(".save-one")) {
        scheduleItems.one = oneItem.val()
    } else if (saveButton.matches(".save-two")) {
        scheduleItems.two = twoItem.val()
    } else if (saveButton.matches(".save-three")) {
        scheduleItems.three = threeItem.val()
    } else if (saveButton.matches(".save-four")) {
        scheduleItems.four = fourItem.val()
    } else if (saveButton.matches(".save-five")) {
        scheduleItems.five = fiveItem.val()
    } 
    localStorage.setItem("schedule items", JSON.stringify(scheduleItems));
}
//button click for above
container = $(".container")
container.on("click", saveScheduleItems)

function renderScheduleItems() {

}