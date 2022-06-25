const stopwatch = document.querySelector(".stopWatch");
console.log(stopwatch);

const btnPlay = document.querySelector(".btn-play");
const btnStop = document.querySelector(".btn-stop");

let min = 0;
let sec = 0;
let mSec = 0;
let isStopped = true;
let timer;

const timeOfStopWatch = () => {
  mSec++;
  if (mSec == 100) {
    sec++;
    mSec = 0;
  }
  if (sec == 60) {
    min++;
    sec = 0;
  }
  min = String(min).length < 2 ? "0" + min : min;
  sec = String(sec).length < 2 ? "0" + sec : sec;
  mSec = String(mSec).length < 2 ? "0" + mSec : mSec;

  stopwatch.innerHTML = `${min}:${sec}:${mSec}`;
};

const playTimer = () => {
  timer = setInterval(timeOfStopWatch, 10);
};

const stopTimer = () => {
  clearInterval(timer);
};

btnPlay.addEventListener("click", () => {
  isStopped = !isStopped;
  if (isStopped == false) {
    playTimer();
    btnPlay.innerHTML = `<i class="fa-solid fa-circle-pause"></i>`;
  } else {
    stopTimer();
    btnPlay.innerHTML = ` <i class="fa-solid fa-circle-play"></i>`;
  }
  console.log(isStopped);
});

btnStop.addEventListener("click", () => {
  mSec = 0;
  sec = 0;
  min = 0;
  stopwatch.innerHTML = `0${min}:0${sec}:0${mSec}`;
  stopTimer();
  isStopped = true;
  btnPlay.innerHTML = ` <i class="fa-solid fa-circle-play"></i>`;
});
