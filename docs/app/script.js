const cameraInit = () => {
  const video = document.querySelector("#camera");

  const cameraSetting = {
    audio: false,
    video: {
      width: 300,
      height: 400,
      factingmode: "user",
    },
  };

  navigator.mediaDevices
    .getUserMedia(cameraSetting)
    .then((mediaStream) => {
      video.srcObject = mediaStream;
    })
    .catch((e) => {
      console.log(e.toString());
    });
};

const shoot = () => {
  const video = document.querySelector("#camera");
  const canvas = document.querySelector("canvas");

  canvas.width = 300;
  canvas.height = 400;
  const ctx = canvas.getContext("2d");

  ctx.drawImage(video, 0, 0, 300, 400);

  localStorage.setItem("took", canvas.toDataURL("image/jpeg", 1.0));
};

document.body.addEventListener("DOMContentLoaded", cameraInit());
document.querySelector("label[for=shoot]").addEventListener("touchend", shoot);
