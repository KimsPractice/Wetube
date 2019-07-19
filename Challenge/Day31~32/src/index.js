import "./styles.css";

const recordBtn = document.querySelector(".recordBtn");
const durationTime = document.querySelector(".duration");

let audioRecorder;
let devices;
let time = 0;
let min = 0;
let timer;

const handleTimer = () => {
  let sec = time < 10 ? `0${time}` : `${time}`;
  let minute = min < 10 ? `0${min}` : `${min}`;
  time += 1;
  console.log(time);

  if (time == 60) {
    min = min + 1;
    time = 0;
  }

  let duration = `${minute}:${sec}`;
  durationTime.innerHTML = duration;
};

const handleData = e => {
  const { data } = e;
  const link = document.createElement("a");
  link.href = URL.createObjectURL(data);
  link.download = "recoded.webm";
  document.body.appendChild(link);
  link.click();
};
const stopRecording = () => {
  audioRecorder.stop();
  audioRecorder.removeEventListener("click", stopRecording);
  recordBtn.innerText = "Start Record";
  devices[0].stop();
  clearInterval(timer);
  setTimeout(() => {
    durationTime.innerHTML = "00:00";
  }, 3000);
  init();
};

const startRecording = stream => {
  recordBtn.innerText = "Stop Record";
  audioRecorder = new MediaRecorder(stream);
  audioRecorder.start();
  timer = setInterval(handleTimer, 1000);
  console.log(audioRecorder.state);
  audioRecorder.addEventListener("dataavailable", handleData);
  recordBtn.addEventListener("click", stopRecording);
};

const handleRecord = () => {
  navigator.mediaDevices
    .getUserMedia({ audio: true })
    .then(stream => {
      devices = stream.getAudioTracks();
      console.log("Got stream with constraints:", stream);
      console.log("Using audio device: " + devices[0].label);
      startRecording(stream);
    })
    .catch(error => {
      console.log(error);
      recordBtn.innerHTML = "Can't Recode...";
    })
    .finally(() => {
      recordBtn.removeEventListener("click", handleRecord);
    });
};

const init = () => {
  recordBtn.addEventListener("click", handleRecord);
};

init();
