var statusSpan = document.querySelector("#status");
var statusToggle = document.querySelector("#status-toggle");
var playButton = document.querySelector("#play");
var pauseButton = document.querySelector("#pause");
var stopButton = document.querySelector("#stop");
var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
var workMinutesInput = document.querySelector("#work-minutes");
var restMinutesInput = document.querySelector("#rest-minutes");

var totalSeconds = 0;
var secondsElapsed = 0;
// var isPaused = false;
var isWorking = false;
var interval;

// launches app by calling settime() and renderTime()
// gettimepreferences()

setInterval(startTimer, 1000);

initTimer();
// startTimer();

// turns workMinutesinput into seconds 
function initTimer(){
  minutesDisplay.textContent = workMinutesInput.value;
  var secondsStart = workMinutesInput.value * 60;
  totalSeconds = secondsStart;
}


console.log(totalSeconds);

function getFormattedMinutes(){
  var secondsLeft = totalSeconds - secondsElapsed;

}

function getFormattedSeconds(){

}

function secondsElapsed(){
  for (var i = 0; i < totalSeconds; i++){
    secondsElapsed++;
    console.log(secondsElapsed);
  }
}

// What runs when the timer is started.
// KILL TIMER
function stopTimer(){
  clearInterval(interval);
}

// playButton.addEventListener("click", initTimer);
playButton.addEventListener("click", function () {
  // Write code to start the timer here
  totalSeconds--;
  console.log(totalSeconds); 
});

pauseButton.addEventListener("click", stopTimer)
workMinutesInput.addEventListener("keypress", function(e){
  if(e === "Enter"){
    initTimer();  
  }
  });