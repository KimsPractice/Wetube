import axios from "axios";

const videoContainer = document.getElementById("jsVideoPlayer");
const videoPlayer = document.querySelector("#jsVideoPlayer video");
const playBtn = document.getElementById("jsPlayButton");
const volumeBtn = document.getElementById("jsVolumeButton");
const fullScreenBtn = document.getElementById("jsFullScreenButton");
const currentTime = document.getElementById("currentTime");
const totalTime = document.getElementById("totalTime");
const volumeRange = document.getElementById("jsVolume");

const registerView = () => {
  const videoId = window.location.href.split("/videos/")[1];
  fetch(`/api/${videoId}/view`, { method: "POST" });
};

const handlePlayClick = () => {
  if (videoPlayer.paused) {
    videoPlayer.play();
    playBtn.innerHTML = `<i class="fas fa-pause"></i>`;
  } else {
    videoPlayer.pause();
    playBtn.innerHTML = `<i class="fas fa-play"></i>`;
  }
};

const handleVolumeClick = () => {
  if (videoPlayer.muted) {
    videoPlayer.muted = false;
    volumeBtn.innerHTML = `<i class="fas fa-volume-up"></i>`;
    console.log(videoPlayer.volume);
    volumeRange.value = videoPlayer.volume;
  } else {
    volumeRange.value = 0;
    videoPlayer.muted = true;
    volumeBtn.innerHTML = `<i class="fas fa-volume-mute"></i>`;
  }
};

const exitFullScreen = () => {
  fullScreenBtn.innerHTML = `<i class="fas fa-expand"></i>`;
  fullScreenBtn.addEventListener("click", goFullScreen);
  if (document.exitFullscreen()) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen()) {
    document.webkitExitFullscreen();
  } else if (document.mozExitFullscreen()) {
    document.mozExitFullscreen();
  } else if (document.msExitFullscreen()) {
    document.msExitFullscreen();
  }
};

const goFullScreen = () => {
  if (videoContainer.requestFullscreen()) {
    videoContainer.requestFullscreen();
  } else if (videoContainer.webkitRequestFullscreen()) {
    videoContainer.webkitRequestFullscreen();
  } else if (videoContainer.mozRequestFullscreen()) {
    videoContainer.mozRequestFullscreen();
  } else if (videoContainer.msRequestFullscreen()) {
    videoContainer.msRequestFullscreen();
  }
  fullScreenBtn.innerHTML = `<i class="fas fa-compress"></i>`;
  fullScreenBtn.removeEventListener("click", goFullScreen);
  fullScreenBtn.addEventListener("click", exitFullScreen);
};

const formatDate = sec => {
  const secNum = parseInt(sec, 10);
  let hour = Math.floor(secNum / 3600);
  let min = Math.floor((secNum - hour * 3600) / 60);
  let totalSec = secNum - hour * 3600 - min * 60;

  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (min < 10) {
    min = `0${min}`;
  }
  if (totalSec < 10) {
    totalSec = `0${totalSec}`;
  }
  return `${hour}:${min}:${totalSec}`;
};

const getCurrentTime = () => {
  currentTime.innerHTML = formatDate(Math.floor(videoPlayer.currentTime));
};

const setTotalTime = () => {
  totalTime.innerHTML = formatDate(videoPlayer.duration);
  setInterval(getCurrentTime, 1000);
};

const handleEnded = () => {
  registerView();
  videoPlayer.currentTime = 0;
  playBtn.innerHTML = `<i class="fas fa-play"></i>`;
};

const handleDrag = e => {
  const {
    target: { value }
  } = e;
  videoPlayer.volume = value;
  if (value >= 0.6) {
    volumeBtn.innerHTML = `<i class="fas fa-volume-up"></i>`;
  } else if (value >= 0.3) {
    volumeBtn.innerHTML = `<i class="fas fa-volume-down"></i>`;
  } else {
    volumeBtn.innerHTML = `<i class="fas fa-volume-off"></i>`;
  }
};

const init = () => {
  videoPlayer.volume = 0.5;
  playBtn.addEventListener("click", handlePlayClick);
  volumeBtn.addEventListener("click", handleVolumeClick);
  fullScreenBtn.addEventListener("click", goFullScreen);
  videoPlayer.addEventListener("loadedmetadata", setTotalTime);
  videoPlayer.addEventListener("ended", handleEnded);
  volumeRange.addEventListener("input", handleDrag);
};

if (videoContainer) {
  init();
}
