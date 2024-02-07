window.addEventListener("DOMContentLoaded", () => {
  document.querySelector("img.resultImg").src = localStorage.getItem("took");
});

const items = document.querySelectorAll(".hairSelect .wrapper");
const print = document.querySelector(".printImg");

const switchStyle = (target) => {
  for (let j = 0; j < items.length; j++) {
    items[j].classList.remove("current");
  }
  target.target.classList.add("current");

  const path = target.target.getAttribute("message");
  if (path == "") {
    print.classList.add("visual-hidden");
  } else {
    print.src = "img/" + path;
    print.classList.remove("visual-hidden");
  }
};

for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("touchend", switchStyle);
}

let originX = 0;
let originY = 0;

print.addEventListener("touchstart", (target) => {
  originX = target.touches[0].clientX;
  originY = target.touches[0].clientY;
});

print.addEventListener("touchmove", (target) => {
  const tmpX = target.touches[0].clientX;
  const tmpY = target.touches[0].clientY;

  print.setAttribute(
    "style",
    "--x: " + (tmpX - originX) + "px; --y: " + (tmpY - originY) + "px;"
  );
});

// print.addEventListener("touchend", (target) => {
//   console.log(target);
//   console.log("touchend");
// });
