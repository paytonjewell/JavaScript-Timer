let timer;
let sec = 0;
let min = 0;
let hour = 0;
let timerElement = document.getElementById("timer");
let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let resetButton = document.getElementById("reset");
resetButton.disabled = true;
stopButton.disabled = true;

startButton.addEventListener("click", function () {
    timer = setInterval(TimerHandler, 1000);
    startButton.disabled = true;
    stopButton.disabled = false;
    resetButton.disabled = false;
});



stopButton.addEventListener("click", function () {
    timer = clearInterval(timer);
    startButton.disabled = false;
});


resetButton.addEventListener("click", function () {
    timer = clearInterval(timer);
    sec = 0;
    min = 0;
    hour = 0;
    timerElement.innerHTML = "00 : 00 : 00";
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = true;
})


function TimerHandler () {
sec++;

if(sec == 60) {
    sec = 0;
    min++;
}

if(min == 60) {
    min = 0;
    hour++;
}

DisplayTime();

}


function DisplayTime () {
    let secPretty = sec;
    let minPretty = min;
    let hourPretty = hour;
  if (sec < 10) {
      secPretty = "0" + sec;
  } 
  if (min < 10) {
      minPretty = "0" + min;
  } 
  if (hour < 10) {
      hourPretty = "0" + hour;
  } 
  
    timerElement.innerHTML = `${hourPretty} : ${minPretty} : ${secPretty}`;
}