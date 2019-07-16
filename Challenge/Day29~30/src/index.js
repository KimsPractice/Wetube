import "./styles.css";

const videoPlayer = document.querySelector(".videoPlayer video");
const playBtn = document.querySelector(".jsPlayBtn");
const volumeBtn = document.querySelector(".jsVolumeBtn");
const currentTime = document.querySelector(".currentTime");
const totalTime = document.querySelector(".totalTime");
const controls = document.querySelector(".videoPlayer__controls");
const progressBar = document.querySelector(".playRange");

function handlePlayClick() {
  if (videoPlayer.paused) {
    videoPlayer.play();
    playBtn.innerHTML = '<i class="fas fa-pause playBtn"></i>';
  } else {
    videoPlayer.pause();
    playBtn.innerHTML = '<i class="fas fa-play playBtn"></i>';
  }
}

function handleVolumeClick() {
  if (videoPlayer.muted) {
    videoPlayer.muted = false;
    volumeBtn.innerHTML = `<i class="fas fa-volume-up"></i>`;
  } else {
    videoPlayer.muted = true;
    volumeBtn.innerHTML = `<i class="fas fa-volume-mute"></i>`;
  }
}
const formatDate = seconds => {
  const secondsNumber = parseInt(seconds, 10);
  let hours = Math.floor(secondsNumber / 3600);
  let minutes = Math.floor((secondsNumber - hours * 3600) / 60);
  let totalSeconds = secondsNumber - hours * 3600 - minutes * 60;

  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    totalSeconds = `0${totalSeconds}`;
  }
  return `${hours}:${minutes}:${totalSeconds}`;
};
function getCurrentTime() {
  currentTime.innerHTML = formatDate(Math.floor(videoPlayer.currentTime));
}
function setProgress() {
  progressBar.value = Math.floor(videoPlayer.currentTime);
}

function setTotalTime() {
  const totalTimeString = formatDate(videoPlayer.duration);

  setInterval(setProgress, 1000);
  totalTime.innerHTML = totalTimeString;
  progressBar.max = totalTimeString;
  setInterval(getCurrentTime, 1000);
}

function handleEnded() {
  videoPlayer.currentTime = 0;
  videoPlayer.play();
}

function handleKey(e) {
  if (e.keyCode === 32) {
    if (videoPlayer.paused) {
      videoPlayer.play();
      playBtn.innerHTML = '<i class="fas fa-pause playBtn"></i>';
    } else {
      videoPlayer.pause();
      playBtn.innerHTML = '<i class="fas fa-play playBtn"></i>';
    }
  }
}

function handlemouse(e) {
  controls.style.opacity = 1;
  controls.style.cursor = "default";

  if (e !== true) {
    setTimeout(function() {
      controls.style.opacity = 0;
      controls.style.cursor = "none";
    }, 3000);
  }
}

function init() {
  videoPlayer.addEventListener("click", handlePlayClick);
  playBtn.addEventListener("click", handlePlayClick);
  volumeBtn.addEventListener("click", handleVolumeClick);
  videoPlayer.addEventListener("loadedmetadata", setTotalTime);
  videoPlayer.addEventListener("ended", handleEnded);
  videoPlayer.addEventListener("mousemove", handlemouse);
  document.addEventListener("keypress", handleKey);
}

init();
