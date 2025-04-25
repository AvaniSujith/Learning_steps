const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const stopBtn = document.getElementById("stop");

const hourDisplay = document.getElementById("hours");
const minuteDisplay = document.getElementById("minutes");
const secondDisplay = document.getElementById("seconds");


let count = 0;
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
            hours++
        }
    }


    // totalTime = setInterval(startTimer, 1000);

    // // hourDisplay.innerText = `${hours}`
    // hourDisplay.innerText = String(hours).padStart(2, "0");

    // // minuteDisplay.innerText = `${minutes}`
    // minuteDisplay.innerText = String(minutes).padStart(2, "0");

    // // secondDisplay.innerText = `${seconds}`
    // secondDisplay.innerText = String(seconds).padStart(2, "0");

    updateTimerDisplay();
}


// function stopTimer(){

//     clearInterval(totalTime);
//     totalTime = null;
//     seconds = 0;
//     minutes = 0;
//     hours = 0;

//     // hourDisplay.innerText = String(hours).padStart(2, "0");
//     // minuteDisplay.innerText = String(minutes).padStart(2, "0");
//     // secondDisplay.innerText = String(seconds).padStart(2, "0");

//     updateTimerDisplay();

// ;}

// stopBtn.addEventListener("click", stopTimer);

// startBtn.addEventListener("click", totalTime = setInterval(startTimer, 1000));


startBtn.addEventListener("click", function(){
    
    // totalTime = setInterval(startTimer, 1000);

    // startBtn.innerText = "stop";
    // startBtn.classList.remove("start-btn");
    // startBtn.classList.add("stop-btn");

    // if(totalTime === null){
    //     totalTime = setInterval(startTimer, 1000);
    // }

    if(totalTime === null){
        totalTime = setInterval(startTimer, 1000);
        startBtn.innerText = "stop";
        startBtn.classList.remove("start-btn");
        startBtn.classList.add("stop-btn");
    }else{
        clearInterval(totalTime);
        hours = 0;
        minutes = 0;
        seconds = 0;
        totalTime = null;
        updateTimerDisplay()
    }
})

// hours = Math.floor(totalTime/3600);
// minutes = Math.floor((totalTime%3600)/60);
// seconds = totalTime % 60;
