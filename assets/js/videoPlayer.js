const videoContainer = document.getElementById("jsVideoPlayer");
const videoPlayer = document.querySelector("#jsVideoPlayer video");
const playBtn = document.getElementById("jsPlayButton");
const volumeBtn = document.getElementById("jsVolumeButton");
const fullScreenBtn = document.getElementById("jsFullScreenButton");

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
  } else {
    videoPlayer.muted = true;
    volumeBtn.innerHTML = `<i class="fas fa-volume-mute"></i>`;
  }
};

const exitFullScreen = () => {
  fullScreenBtn.innerHTML = `<i class="fas fa-expand"></i>`;
  fullScreenBtn.addEventListener("click", goFullScreen);
  if (videoContainer.RequestExitscreen()) {
    videoContainer.RequestExitscreen();
  } else if (videoContainer.webkitRequestExitscreen()) {
    videoContainer.webkitRequestExitscreen();
  } else if (videoContainer.mozRequestExitscreen()) {
    videoContainer.mozRequestExitscreen();
  } else if (videoContainer.msRequestExitscreen()) {
    videoContainer.msRequestExitscreen();
  }
};

const goFullScreen = () => {
  if (videoContainer.RequestFullscreen()) {
    videoContainer.RequestFullscreen();
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
    hour = `0${hours}`;
  }
  if (min < 10) {
    min = `0${hours}`;
  }
  if (sec < 10) {
    totalSec = `0${sec}`;
  }
  return `${hour}:${min}:${totalSec}`;
};

const init = () => {
  playBtn.addEventListener("click", handlePlayClick);
  volumeBtn.addEventListener("click", handleVolumeClick);
  fullScreenBtn.addEventListener("click", goFullScreen);
};

if (videoContainer) {
  init();
}
