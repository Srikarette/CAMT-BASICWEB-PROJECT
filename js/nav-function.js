var hBtn = document.querySelector(".home-element");
var bBtn = document.querySelector(".back-element");
var infoBtn = document.querySelector(".information-element");

hBtn.addEventListener("click", () => {
    window.open('./index.html', '_self');
})

bBtn.addEventListener("click", () => {
    window.open('./board-selector.html', '_self');
})

infoBtn.addEventListener("click", () => {
    Swal.fire({
      width: "900px",
      customClass: {
        htmlContainer: "how-to-class",
      },
      html:
        "<h2>HOW TO PLAY</h2><br><br>" +
        "<ul>" +
        "<li>First, decide who goes first and what color each player will have.</li>" +
        "<li>Players must alternate turns, and only one disc can be dropped in each turn.</li>" +
        "<li>On your turn, drop one of your colored discs from the top into any of the seven slots.</li>" +
        "<li>The game ends when there is a 4-in-a-row or a stalemate.</li>" +
        "<li>The starter of the previous game goes second on the next game.</li>" +
        "</ul>",
      footer:
        '<a href="https://www.gamesver.com/the-rules-of-connect-4-according-to-m-bradley-hasbro/">More rule ?</a>',
    });
  });