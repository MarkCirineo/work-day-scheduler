currentDay = $("#currentDay");
currentDay.text(moment().format("dddd, MMMM Do, YYYY, HH:mm:ss"));

function init() {
    setInterval(() => {
        currentDay.text(moment().format("dddd, MMMM Do, YYYY, HH:mm:ss"));
    }, 1000);

}

init();

