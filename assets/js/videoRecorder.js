const recorderContainer = document.getElementById("jsRecordContainer");
const recordBtn = document.getElementById("jsRecordBtn");
const videoPreview = document.getElementById("jsVideoPreview");

let streamObject;
let videoRecorder;

const handleVideoData = event => {
  const { data: videoFile } = event;
  const link = document.createElement("a");
  link.href = URL.createObjectURL(videoFile);
  link.download = "recorded.webm";
  document.body.appendChild(link);
  link.click();
};

const stopRecording = () => {
  videoRecorder.stop();
  recordBtn.removeEventListener("click", stopRecording);
  recordBtn.addEventListener("click", getVideo);
  recordBtn.innerText = "Start Recording";
};

const startRecording = () => {
  videoRecorder = new MediaRecorder(streamObject);
  videoRecorder.start();
  videoRecorder.addEventListener("dataavailable", handleVideoData);
  recordBtn.addEventListener("click", stopRecording);
};

const getVideo = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: { width: 1280, height: 720 }
    });
    console.log(stream);
    videoPreview.srcObject = stream;
    videoPreview.muted = true;
    videoPreview.play();
    streamObject = stream;
    startRecording();
    recordBtn.innerText = "Stop Recording";
  } catch (error) {
    console.log(error.name + ": " + error.message);
    alert("Can't record.. please check enable mic or recorder");
    recordBtn.style.backgroundColor = "#444444";
  } finally {
    recordBtn.removeEventListener("click", getVideo);
  }
};

const init = () => {
  recordBtn.addEventListener("click", getVideo);
};

if (recorderContainer) {
  init();
}
