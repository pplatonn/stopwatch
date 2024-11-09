'use strict'

// get all the elements into variables

// they're going to whether: 
// 1. change text of the timer
// 2. check if stopwatch is running or not 
// 3. reset the timer

let displayedTime = document.querySelector(".displayTime");
let isRunning = false;
let elapsedTime = 0;
let start = 0; //time of starting
let timer = null; // handler for function interval

// this function starts the stopwatch by checking
// if stopwatch variable is true or not 
// it calculates start of the timer to leave it when stopwatch stops (so sets the isRunning true)

// the interval of 10 ms call the update function to
// change the text of timer every 10 ms

function startTime() {
    if (!isRunning) {
        start = Date.now() - elapsedTime;
        timer = setInterval(updateTime, 10);
        isRunning = true;
    }
}

// this function stops the stopwatch saving the elapsed time in the textbox
// it stops the interval calling of update function, calculates the elapsed time and
// sets isRunning variable to be false (because stopwatch doesn't work) 

function stopTime() {
    if (isRunning) {
        clearInterval(timer);
        elapsedTime = Date.now() - start;
        isRunning = false;
    }
}

// this function change the timer textbox to all 0 and also resets all the variables,
// because we don't need them anymore

function resetTime() {
    clearInterval(timer);
    isRunning = false;
    elapsedTime = 0;
    start = 0;
    displayedTime.textContent = "00:00:00:00"
}

// this is the main function which updates the time on the stopwatch
// it calculates current time to see how much time passed
// current time is being divided into hours, minutes, seconds and ms,
// and it's being converted into human-readable format 

// and finally all the data are set to template string 

function updateTime() {
    const currentTime = Date.now();
    elapsedTime = currentTime - start;
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let ms = Math.floor(elapsedTime % 1000 / 10);
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds =String(seconds).padStart(2, "0");
    ms = String(ms).padStart(2, "0");
    displayedTime.textContent = `${hours}:${minutes}:${seconds}:${ms}`;
}