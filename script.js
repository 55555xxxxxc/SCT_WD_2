let seconds = 0;
let minutes = 0;
let hours = 0;

let timer = null;

function updateDisplay() {

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("display").innerHTML =
        h + " : " + m + " : " + s;
}

function runTimer() {

    seconds++;

    if (seconds == 60) {
        seconds = 0;
        minutes++;
    }

    if (minutes == 60) {
        minutes = 0;
        hours++;
    }

    updateDisplay();
}

function startTimer() {

    if (timer !== null)
        return;

    timer = setInterval(runTimer, 1000);
}

function pauseTimer() {

    clearInterval(timer);
    timer = null;
}

function resetTimer() {

    clearInterval(timer);
    timer = null;

    hours = 0;
    minutes = 0;
    seconds = 0;

    updateDisplay();

    document.getElementById("laps").innerHTML = "";
}

function lapTime() {

    if (hours == 0 && minutes == 0 && seconds == 0)
        return;

    const lap = document.createElement("li");

    lap.innerHTML = document.getElementById("display").innerHTML;

    document.getElementById("laps").appendChild(lap);
}

updateDisplay();
