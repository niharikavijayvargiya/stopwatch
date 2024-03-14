let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;
let isRunning = false;

const stopwatchDisplay = document.getElementById('stopwatch');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

function startStopwatch() {
    if (!isRunning) {
        timer = setInterval(updateStopwatch, 1000);
        isRunning = true;
    }
}

function stopStopwatch() {
    clearInterval(timer);
    isRunning = false;
}

function resetStopwatch() {
    clearInterval(timer);
    isRunning = false;
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateDisplay();
}

function updateStopwatch() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    updateDisplay();
}

function updateDisplay() {
    const formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    stopwatchDisplay.textContent = formattedTime;
}

function pad(value) {
    return value < 10 ? '0' + value : value;
}

startBtn.addEventListener('click', startStopwatch);
stopBtn.addEventListener('click', stopStopwatch);
resetBtn.addEventListener('click', resetStopwatch);
