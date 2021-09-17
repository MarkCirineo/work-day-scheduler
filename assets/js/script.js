currentDay = $("#currentDay");
currentDay.text(moment().format("dddd, MMMM Do, YYYY, HH:mm:ss"));

var currentHour;
currentHour = moment().format("H")

console.log(currentHour);




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
// saving items to local storage on button click

saveBtn = document.querySelectorAll(".saveBtn");
console.log(saveBtn);

saveBtn.forEach(function(save) {
    save.addEventListener("click", saveScheduleItems)
})

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

    // console.log(saveButton)
    // if (saveButton.matches(".save-nine") || nineItem.val() !== "") {
    //     scheduleItems.nine = nineItem.val()
    //     console.log(saveButton)
    // } else if (saveButton.matches(".save-ten") || tenItem.val() !== "") {
    //     console.log(saveButton)
    //     scheduleItems.ten = tenItem.val()
    // } else if (saveButton.matches(".save-eleven") || elevenItem.val() !== "") {
    //     scheduleItems.eleven = elevenItem.val()
    // } else if (saveButton.matches(".save-twelve") || twelveItem.val() !== "") {
    //     scheduleItems.twelve = twelveItem.val()
    // } else if (saveButton.matches(".save-one") || oneItem.val() !== "") {
    //     scheduleItems.one = oneItem.val()
    // } else if (saveButton.matches(".save-two") || twoItem.val() !== "") {
    //     scheduleItems.two = twoItem.val()
    // } else if (saveButton.matches(".save-three") || threeItem.val() !== "") {
    //     scheduleItems.three = threeItem.val()
    // } else if (saveButton.matches(".save-four") || fourItem.val() !== "") {
    //     scheduleItems.four = fourItem.val()
    // } else if (saveButton.matches(".save-five") || fiveItem.val() !== "") {
    //     scheduleItems.five = fiveItem.val()
    // } 
    // if (saveButton.matches(".save-nine")) {
    //     scheduleItems.nine = nineItem.val()
    //     console.log(saveButton)
    // } else if (saveButton.matches(".save-ten")) {
    //     console.log(saveButton)
    //     scheduleItems.ten = tenItem.val()
    // } else if (saveButton.matches(".save-eleven")) {
    //     scheduleItems.eleven = elevenItem.val()
    // } else if (saveButton.matches(".save-twelve")) {
    //     scheduleItems.twelve = twelveItem.val()
    // } else if (saveButton.matches(".save-one")) {
    //     scheduleItems.one = oneItem.val()
    // } else if (saveButton.matches(".save-two")) {
    //     scheduleItems.two = twoItem.val()
    // } else if (saveButton.matches(".save-three")) {
    //     scheduleItems.three = threeItem.val()
    // } else if (saveButton.matches(".save-four")) {
    //     scheduleItems.four = fourItem.val()
    // } else if (saveButton.matches(".save-five")) {
    //     scheduleItems.five = fiveItem.val()
    // } 

    // switch (true) {
    //     case (saveButton.matches(".save-nine") || nineItem.val() !== ""):
    //         scheduleItems.nine = nineItem.val();
    //     case (saveButton.matches(".save-ten") || tenItem.val() !== ""):
    //         scheduleItems.ten = tenItem.val();
    //     case (saveButton.matches(".save-eleven") || elevenItem.val() !== ""):
    //         scheduleItems.eleven = elevenItem.val();
    //     case (saveButton.matches(".save-twelve") || twelveItem.val() !== ""):
    //         scheduleItems.twelve = twelveItem.val();
    //     case (saveButton.matches(".save-one") || oneItem.val() !== ""):
    //         scheduleItems.one = oneItem.val();
    //     case (saveButton.matches(".save-two") || twoItem.val() !== ""):
    //         scheduleItems.two = twoItem.val();
    //     case (saveButton.matches(".save-three") || threeItem.val() !== ""):
    //         scheduleItems.three = threeItem.val();
    //     case (saveButton.matches(".save-four") || fourItem.val() !== ""):
    //         scheduleItems.four = fourItem.val();
    //     case (saveButton.matches(".save-five") || fiveItem.val() !== ""):
    //         scheduleItems.five = fiveItem.val();           
    //     default:
    //         break;
    // }

    // localStorage.setItem("schedule items", JSON.stringify(scheduleItems));
}
//button click for above
// container = $(".container")

// TODO: fix items not displaying when refreshing
function renderScheduleItems() {
    var savedSheduleItems = JSON.parse(localStorage.getItem("schedule items"))
    // console.log(savedSheduleItems)
    // console.log(savedSheduleItems.nine)
    if (savedSheduleItems !== null) {
        nineItem.val(savedSheduleItems.nine)
        tenItem.val(savedSheduleItems.ten)
        elevenItem.val(savedSheduleItems.eleven)
        twelveItem.val(savedSheduleItems.twelve)
        oneItem.val(savedSheduleItems.one)
        twoItem.val(savedSheduleItems.two)
        threeItem.val(savedSheduleItems.three)
        fourItem.val(savedSheduleItems.four)
        fiveItem.val(savedSheduleItems.five)
    } else {
        return;
    }
   
    // console.log(savedSheduleItems.nine)
}

//initial function that runs on page load
function init() {
    setInterval(() => {
        currentDay.text(moment().format("dddd, MMMM Do, YYYY, HH:mm:ss"));
    }, 1000);
    renderScheduleItems();
}

init();
