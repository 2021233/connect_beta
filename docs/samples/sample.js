const cameraWidth = 300;
const cameraHeight = 400;
// let mode = ""; カメラ切り替えは後で実装

const cameraInitSmartphoneSupport = () => {
  const video = document.getElementById("camera");

  //スマホからの閲覧か
  const isMobile = navigator.userAgent.match(/iPhone|Android/);
  //   if (mode == "user") {
  //     mode = "enviroment";
  //   } else {
  //     mode = "user";
  //   }

  const cameraSetting = {
    audio: false,
    video: {
      //スマホの場合は縦横を逆に設定する
      width: isMobile ? cameraHeight : cameraWidth,
      height: isMobile ? cameraWidth : cameraHeight,
      facingMode: "user",
    },
  };

  navigator.mediaDevices
    .getUserMedia(cameraSetting)
    .then((mediaStream) => {
      video.srcObject = mediaStream;
    })
    .catch((err) => {
      console.log(err.toString());
    });
};

const shoot = () => {
  //video要素
  const video = document.getElementById("camera");
  //canvas要素
  const canvas = document.getElementById("canvas");
  //canvas要素の大きさを変更
  canvas.width = cameraWidth;
  canvas.height = cameraHeight;
  //描画用オブジェクトを取得
  const ctx = canvas.getContext("2d", {
    willReadFrequently: true,
  });

  //描画する
  ctx.drawImage(
    video, // データソース
    0, // 描画開始x座標
    0, // 描画開始y座標
    cameraWidth, // 描画横サイズ
    cameraHeight // 描画縦サイズ
  );

  console.log(canvas.toDataURL("image/jpeg", 1.0));

  localStorage.setItem("took", canvas.toDataURL("image/jpeg", 1.0));

  //   const getImg = ctx.getImageData(0, 0, cameraWidth, cameraHeight);
  const getImg = localStorage.getItem("took");
  console.log(getImg);

  const newImg = new Image();
  newImg.src = getImg;
  document.querySelector(".wrapper:last-of-type").appendChild(newImg);
};

window.addEventListener("load", () => {
  awake.click();
});
