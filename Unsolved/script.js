// FOR TIMER
// set minutes with minutes working
// if seconds is at 0 subtract one from minutes
// reset seconds to 60
// each time seconds hits 00 subtract 1 from minutes total
// if minutes and seconds both = 0 time is up. 

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
var interval = setInterval(startTimer, 1000);

initTimer();
// startTimer();

// turns workMinutesinput into seconds 
function initTimer(){
  minutesDisplay.textContent = workMinutesInput.value;
  var seconds = workMinutesInput.value * 60;
  return totalSeconds = seconds;
}
console.log(totalSeconds);



// What runs when the timer is started.
function startTimer() {
  // Write code to start the timer here
  totalSeconds--;
  console.log(totalSeconds); 
}  

// KILL TIMER
function stopTimer(){
  clearInterval(interval);
}

// playButton.addEventListener("click", initTimer);
playButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", stopTimer)
workMinutesInput.addEventListener("keypress", function(e){
  if(e === "Enter"){
    initTimer();  
  }
  });