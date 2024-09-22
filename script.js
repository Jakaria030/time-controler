let timeLeft = 90;
let timerInterval;
let isRunning = false;

const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");


const startTimer = (duration) => {
    let time = duration;

    timerInterval = setInterval(() => {
        const minutes = parseInt(time / 60, 10);
        const seconds = parseInt(time % 60, 10);

        const displayMinutes = minutes < 10 ? "0" + minutes : minutes;
        const displaySeconds = seconds < 10 ? "0" + seconds : seconds;

        timerDisplay.innerText = displayMinutes + ":" + displaySeconds;

        time = time - 1;
        if(time < 0){
            clearInterval(timerInterval);
            timerDisplay.innerText = "Breath Out";
            
            setTimeout(() => {
                timerDisplay.innerText = "Breath In";
                startTimer(timeLeft);
            }, 3000);
        }
    }, 1000);
}

const stopTimer = () => {
    clearInterval(timerInterval);
    timerDisplay.innerText = "Breath In";
}

startBtn.addEventListener("click", () => {
    if(!isRunning){
        startTimer(timeLeft);
        isRunning = true;
    }
});

stopBtn.addEventListener("click", () => {
    stopTimer();
    isRunning = false;
});