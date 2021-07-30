export default function webcam(id) {
  const $video = document.getElementById(id);

  if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true})
      .then((stream) => {
        $video.srcObject = stream;
        $video.play();
      })
      .catch((err) => console.log(err));
  }
}
