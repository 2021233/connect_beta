window.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector("#camera");

  const cameraSetting = {
    audio: false,
    video: {
      width: 400,
      height: 300,
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
});

document.querySelector("label[for=shoot]").addEventListener("touchend", () => {
  const video = document.querySelector("#camera");
  const canvas = document.querySelector("canvas");

  canvas.width = 300;
  canvas.height = 400;
  const ctx = canvas.getContext("2d");

  ctx.drawImage(video, 0, 0, 300, 400);

  localStorage.setItem("took", canvas.toDataURL("image/jpeg", 1.0));
  setTimeout(() => {
    window.location.href = "result.html";
  }, 1000);
});
