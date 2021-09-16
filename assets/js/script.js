currentDay = $("#currentDay");

function init() {
    setInterval(() => {
        currentDay.text(moment().format("dddd, MMMM Do, YYYY, HH:mm:ss.S"));
    }, 100);

}

init();