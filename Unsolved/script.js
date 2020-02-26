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
var status = "working";
var interval;

// this launches the app by calling setTime() and renderTime()
getTimePreferences();

// these 2 functions are jsut for making sure the numbers look nice for the html elements
function getFormattedMinutes(){

  var secondsLeft = totalSeconds - secondsElapsed;

  var minutesLeft = Math.floor(secondsLeft / 60);

  var formattedMinutes;

  if (parseInt(minutesLeft) < 10) {
    formattedMinutes = "0" + minutesLeft;
  } else {
    formattedMinutes = minutesLeft;
  }

  return formattedMinutes;
}

function getFormattedSeconds() {
  var secondsLeft = (totalSeconds - secondsElapsed) % 60;

  var formattedSeconds;

  if (secondsLeft < 10) {
    formattedSeconds = "0" + secondsLeft;
  } else {
    formattedSeconds = secondsLeft;
  }
  return formattedSeconds;
}

function getTimePreferences(){
  // here we check to see if any preferences have been set in the local storage via " setTimePreferences"
  var preferences = JSON.parse(localStorage.getItem("preferences"));

  // setTimePreferences() is actually never called so the below code will never run.
  // (ie. the "preferences" variable checked below will always be null. ) The settings are always set by directly checking the input elementsin the setTime() function
  if (preferences) {
    if(preferences.workMinutes) {
      workMinutesInput.value = preferences.workMinutes;
    }

    if (preferences.restMinutes) {
      restMinutesInput.value = preferences.restMinutes;
    }
  }
  // this is where the app si really kicked-off, setTime and renderTime are the two main routines. 
  setTime();
  renderTime();
}

// this function just retrieves the value from the html input elelemnts 
// it sets the totalSeconds variable which is used in etFormattedMinutes/Seconds() and the renderTime() function.
// it essentially resets our timer.
function setTime(){
  var minutes;
  
  if (status === "working"){
    minutes = workMinutesInput.value.trim();
  } else {
    minutes = restMinutesInput.value.trim(); 
  }

  clearInterval(interval);
  totalSeconds = minutes * 60;
}

// This function does 2 things. displays the time and checks to see if time is up.
function renderTime(){
  // when renderTime is called it sets tne textconetent for the timer html
  minutesDisplay.textContent = getFormattedMinutes();
  secondsDisplay.textContent = getFormattedSeconds();

  //... and then checks to see if the tieme has run out
  if (secondsElapsed >= totalSeconds){
    if( status === "working"){
      alert("time for a break!");
    } else {
      alert("time to get back to work!!");
    }

    stopTimer();
  }
}
//  This function stops the setInterval() set in startTimer but does not reset the seconds variable and does not reset the time by calling setTime().
function pauseTimer(){
  clearInterval(interval);
  renderTime();
}

// this function stops the intercal and also resets secondsElapsed and calls setTime() which effectively resetst the timer to theinput selections workMinutesInput.value and restMinutesInput.value
function stopTimer(){
  secondsElapsed = 0;
  setTime();
  renderTime();
}

function toggleStatus(event) {
  var checked = event.target.checked;

  if (checked) {
    status = "Working";
  } else {
    status = "Resting";
  }

  statusSpan.textContent = status;
}

// This function is where the "time" aspect ogthe timer runs 
// Notice no settings are checnged other than to increment the secondsElapsed var
function startTimer() {
  setTime;

  // we only want to start the timer if minutes is > 0
  if (totalSeconds > 0) {
    // the "interval" varible here using "setinterval()" begins the recurring increment of the secondsElapsed variable which is used to check if the time is up
    interval = setInterval(function() {
      secondsElapsed++;
      // so renderTime() is called here once every second
      renderTime();
    }, 1000);
  } else {
    alert("minutes of work/rest must be greater than 0.")
  }
}



playButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
stopButton.addEventListener("click", stopTimer);
statusToggle.addEventListener("change", toggleStatus);