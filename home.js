let video = document.getElementById("myVideo");
let btn = document.getElementById("myBtn");

function Pause() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}