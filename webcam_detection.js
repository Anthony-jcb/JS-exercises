export default function webcam(id) {
  const $video = document.getElementById(id);

  if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        $video.srcObject = stream;
        $video.play();
      })
      .catch((err) => {
        if (err.name === "NotAllowedError") {
          const message = "You not allow the camera"
          $video.insertAdjacentHTML(
            "beforebegin",
            `<span>An error has happened: <mark>${message}</mark></span>`
          );
        } else {
          $video.insertAdjacentHTML(
            "beforebegin",
            `<mark><span>An error has happened: ${err}</span></mark>`
          );
        }
      });
  }
}
