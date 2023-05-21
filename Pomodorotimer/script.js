let timer = document.getElementById("doisas"); let resetTimer = document.getElementById("resetTimer");
let countDown2 = document.getElementById("twntyFive");
let countDown1 = document.getElementById("thirty");
let pauseTime = 10;

countDown1.onclick = firstCountdown;
resetTimer.onclick = pause;
countDown2.onclick = secondCountdown;




function firstCountdown() {
  let minutes = 30, seconds = 59;
  const interval = setInterval(function(){
  timer.innerHTML = minutes + ":" + seconds;
  if (seconds === 0) {
    minutes = minutes-1;
    seconds = 59;
  }
  else
    seconds--;
  },1000)
}

function secondCountdown() {
  let minutes = 25, seconds = 59;
  const interval = setInterval(function(){
  timer.innerHTML = minutes + ":" + seconds;

  if (seconds === 0) {
    minutes = minutes-1;
    seconds = 59;
  }
  else
    seconds--;
  },1000)
}

function pause() {
  const interval = setInterval(function(){
  timer.innerHTML = pauseTime;
  pauseTime--;
  if (pauseTime < 0){
    pauseTime = "FINISHED";
    clearInterval(interval);
    }
  },1000);
}

