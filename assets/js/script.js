currentDay = $("#currentDay");
currentDay.text(moment().format("dddd, MMMM Do, YYYY, HH:mm:ss"));

var currentHour;
currentHour = moment().format("H")

console.log(currentHour);




// textarea values
nineItem = $("#nine");
tenItem = $("#ten");
elevenItem = $("#eleven");
twelveItem = $("#twelve");
oneItem = $("#one");
twoItem = $("#two");
threeItem = $("#three");
fourItem = $("#four");
fiveItem = $("#five");

// selects all elements with class .saveBtn
saveBtn = document.querySelectorAll(".saveBtn");
// loops through all elements and adds an event listener to run the function
saveBtn.forEach(function(save) {
    save.addEventListener("click", saveScheduleItems)
})

//saves items to local storage when save button is clicked
function saveScheduleItems(event) {
    var element = event.target;
    
    if (element.matches(".save-nine")) {
        localStorage.setItem(09, nineItem.val())
    } else if (element.matches(".save-ten")) {
        localStorage.setItem(10, tenItem.val())
    } else if (element.matches(".save-eleven")) {
        localStorage.setItem(11, elevenItem.val())
    } else if (element.matches(".save-twelve")) {
        localStorage.setItem(12, twelveItem.val())
    } else if (element.matches(".save-one")) {
        localStorage.setItem(01, oneItem.val())
    } else if (element.matches(".save-two")) {
        localStorage.setItem(02, twoItem.val())
    } else if (element.matches(".save-three")) {
        localStorage.setItem(03, threeItem.val())
    } else if (element.matches(".save-four")) {
        localStorage.setItem(03, fourItem.val())
    } else if (element.matches(".save-five")) {
        localStorage.setItem(05, fiveItem.val())
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

//initial function that runs on page load
// displays time at the top
// and calls function to display items on screen
function init() {
    setInterval(() => {
        currentDay.text(moment().format("dddd, MMMM Do, YYYY, HH:mm:ss"));
    }, 1000);
    renderScheduleItems();
}

init();
