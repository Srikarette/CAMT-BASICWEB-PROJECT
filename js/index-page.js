var histortElm = document.querySelector('.history-game-button')
var counter = 0;

function popUpHistory () {
  console.log('click!');
  histortElm.addEventListener("click", () => {
    Swal.fire({
      width: "900px",
      customClass: {
        htmlContainer: "history-display-class",
      },
      html:
        "<h2>RECENT MATCH</h2><br><br>"+
        "<div class='container'><div class='p1-side'><h3>Player 1</h3></div><div class='p2-side'><h3>Player 2</h3></div></div>",
    });
  });
};


var audio = new Audio('sounds/Astral.mp3');
var playAudio = function() {
    audio.play();
    audio.loop = true;
    document.removeEventListener('click', playAudio);
};
document.addEventListener('click', playAudio);

function toggleMute() {
    audio.muted = !audio.muted;
}

function toggleEsterEgg() {
counter++;
var bgElm = document.querySelector('.circles');
if (counter == 11) {
  // Replace the following line with code to embed a video player and play the video
  audio.muted = true;
  bgElm.innerHTML = '<video src="/images/specailbg.mp4" autoplay loop ></video>';
}

console.log(counter);
}