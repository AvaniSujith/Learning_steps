const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");

const hourDisplay = document.getElementById("hours");
const minuteDisplay = document.getElementById("minutes");
const secondDisplay = document.getElementById("seconds");

let timeData = { fragments: [] };
let timeCount = 0;
let hours = 0;
let minutes = 0;
let seconds = 0;
let totalTime = null;

function updateTimerDisplay(){
    hourDisplay.innerText = String(hours).padStart(2, "0");
    minuteDisplay.innerText = String(minutes).padStart(2, "0");
    secondDisplay.innerText = String(seconds).padStart(2, "0");
}

function startTimer(){

    seconds++
    if(seconds === 60){
        seconds = 0;
        minutes++;
        if(minutes === 60){
            minutes = 0;
            hours++;
        }
    }

    updateTimerDisplay();
}

startBtn.addEventListener("click", function(){

    let timeStart;
    let timeEnd;
    

    if(totalTime === null){

        timeStart = new Date();
        totalTime = setInterval(startTimer, 1000);
        startBtn.innerText = "stop";
        startBtn.classList.remove("start-btn");
        startBtn.classList.add("stop-btn");

    }else{

        timeEnd = new Date();
        startBtn.innerText = "start";
        startBtn.classList.remove("stop-btn");
        startBtn.classList.add("start-btn");

        clearInterval(totalTime);
        hours = 0;
        minutes = 0;
        seconds = 0;
        totalTime = null;
        updateTimerDisplay()

        let duration = timeStart - timeEnd;

        timeData.label = `Timer ${count}`;
        timeData.fragments.startTime = timeStart;
        timeData.fragments.endTime = timeEnd;
        timeData.fragments.duration = duration;

    }

    
});

function pauseTimer(){
    clearInterval(totalTime);
    totalTime=null;
    pauseBtn.innerText = "Resume";
}

pauseBtn.addEventListener("click", function(){
    if(totalTime !== null){
        pauseTimer();
    }else{
        totalTime = setInterval(startTimer, 1000);
        pauseBtn.innerText = "Pause";
    }
});

