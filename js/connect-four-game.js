const board = document.querySelector(".board");
const cells = document.querySelectorAll(".cell");
const rows = document.querySelectorAll(".row");
const message = document.querySelector(".message");
const playerTurn = document.getElementsByClassName("player-turn")[0];
const resetButton = document.querySelector(".reset-button");
const p1Time = document.querySelector(".p1-time");
const p2Time = document.querySelector(".p2-time");
const p1Sound = document.getElementById("p1Sound");
const p2Sound = document.getElementById("p2Sound");
const winSound = document.getElementById("winSound");
const drawSound = document.getElementById("drawSound");
var infoBtn = document.querySelector(".information-element");
var bgBtn = document.querySelector(".background-element");
var musicBtn = document.querySelector(".music-element");
let currentPlayer = "red";
var betal_played = 0;
var p1timer = 78000; //120000 = 2 Minute 78000= 1.30 Minute
var p2timer = 78000;
let clickInProgress = false;
//STUPID JS USE P2TIMER->Red , P1TIMER-> Yellow
//p1timer = setTime(p1timer);
//p2timer = setTime(p2timer);

var myInterval;

window.onload = function () {
  musicBtn.autoplay = true;
  console.log(cells);
  playerTurn.textContent = `Current Player : ${currentPlayer.toUpperCase()}`;
  setBetalStand();
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
  bgBtn.addEventListener("click", () => {
    Swal.fire("Somethings");
  });
};

// Helper function to check for four in a row
const checkFour = (a, b, c, d) => {
  return (
    a.classList.contains(currentPlayer) &&
    b.classList.contains(currentPlayer) &&
    c.classList.contains(currentPlayer) &&
    d.classList.contains(currentPlayer)
  );
};

// Helper function to check for a win
const checkWin = () => {
  // Check horizontal
  for (let row of rows) {
    for (let i = 0; i < 4; i++) {
      if (
        checkFour(
          row.children[i],
          row.children[i + 1],
          row.children[i + 2],
          row.children[i + 3]
        )
      ) {
        row.children[i].classList.add("mark");
        row.children[i + 1].classList.add("mark");
        row.children[i + 2].classList.add("mark");
        row.children[i + 3].classList.add("mark");
        return true;
      }
    }
  }

  // Check vertical
  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 3; j++) {
      if (
        checkFour(
          rows[j].children[i],
          rows[j + 1].children[i],
          rows[j + 2].children[i],
          rows[j + 3].children[i]
        )
      ) {
        rows[j].children[i].classList.add("mark");
        rows[j + 1].children[i].classList.add("mark");
        rows[j + 2].children[i].classList.add("mark");
        rows[j + 3].children[i].classList.add("mark");
        return true;
      }
    }
  }

  // Check diagonal (top left to bottom right)
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
      if (
        checkFour(
          rows[j].children[i],
          rows[j + 1].children[i + 1],
          rows[j + 2].children[i + 2],
          rows[j + 3].children[i + 3]
        )
      ) {
        rows[j].children[i].classList.add("mark");
        rows[j + 1].children[i + 1].classList.add("mark");
        rows[j + 2].children[i + 2].classList.add("mark");
        rows[j + 3].children[i + 3].classList.add("mark");
        return true;
      }
    }
  }

  // Check diagonal (bottom left to top right)
  for (let i = 0; i < 4; i++) {
    for (let j = 5; j > 2; j--) {
      if (
        checkFour(
          rows[j].children[i],
          rows[j - 1].children[i + 1],
          rows[j - 2].children[i + 2],
          rows[j - 3].children[i + 3]
        )
      ) {
        rows[j].children[i].classList.add("mark");
        rows[j - 1].children[i + 1].classList.add("mark");
        rows[j - 2].children[i + 2].classList.add("mark");
        rows[j - 3].children[i + 3].classList.add("mark");
        return true;
      }
    }
  }

  return false;
};

// Helper function to reset the board
const resetBoard = () => {
  betal_played = 0;
  clearBetal();
  setBetalStand();
  clearInterval(myInterval);

  document.getElementsByClassName("message")[0].innerText = "";
  p1Time.innerText = " 02 : 00 ";
  p2Time.innerText = " 02 : 00 ";
  message.textContent = `Current Player : ${currentPlayer.toUpperCase()}`;
  cells.forEach((cell) => {
    cell.classList.remove("red", "yellow", "mark");
    cell.classList.add("empty");
  });
  currentPlayer = "red";
  playerTurn.textContent = `Current player: ${currentPlayer.toUpperCase()}`;
  message.textContent = "";
  resetButton.removeAttribute("disabled");
  p1timer = 120000;
  p2timer = 120000;
  //p1timer = setTime(p1timer);
  //p2timer = setTime(p2timer);
};

// Add event listener to each cell
cells.forEach((cell) => {
  let currentPlayerHover = 0;
  const columnIndex = Array.from(cell.parentNode.children).indexOf(cell);
  cell.addEventListener("mouseover", () => {
    for (let i = rows.length - 1; i >= 0; i--) {
      if (rows[i].children[columnIndex].classList.contains("empty")) {
        if (currentPlayerHover == 0) {
          currentPlayerHover = i;
        }
        rows[i].children[columnIndex].classList.add("hover");
        console.log(i, columnIndex);
      }
    }
    if (currentPlayer == "red") {
      rows[currentPlayerHover].children[columnIndex].classList.remove("hover");
      rows[currentPlayerHover].children[columnIndex].classList.add("redHover");
    } else {
      rows[currentPlayerHover].children[columnIndex].classList.remove("hover");
      rows[currentPlayerHover].children[columnIndex].classList.add(
        "yellowHover"
      );
    }
    currentPlayerHover = 0;
  });

  cell.addEventListener("mouseleave", () => {
    for (let i = rows.length - 1; i >= 0; i--) {
      rows[i].children[columnIndex].classList.remove("hover");
      rows[i].children[columnIndex].classList.remove("redHover");
      rows[i].children[columnIndex].classList.remove("yellowHover");
    }
  });

  cell.addEventListener("click", () => {
    if (clickInProgress) {
      return;
    }

    clickInProgress = true;
    clearInterval(myInterval);

    setTimeout(() => {
      //START COUNT TIME//
      if (currentPlayer == "red") {
        myInterval = setInterval(() => {
          p1timer = p1timer - 1000;
          displayTimer(p1timer, currentPlayer);
          if (p1timer <= 0) {
            win();
          }
        }, 900);
      } else {
        myInterval = setInterval(() => {
          p2timer = p2timer - 1000;
          displayTimer(p2timer, currentPlayer);
          if (p2timer <= 0) {
            win();
          }
        }, 900);
      }

      const columnIndex = Array.from(cell.parentNode.children).indexOf(cell);
      let rowIndex = 0;
      if (message.innerText == "") {
        for (let i = rows.length - 1; i >= 0; i--) {
          if (rows[i].children[columnIndex].classList.contains("empty")) {
            rows[i].children[columnIndex].classList.remove("empty");
            rows[i].children[columnIndex].classList.add(currentPlayer);
            rowIndex = i;
            break;
          }
        }
      }
      //DELETE HOVER AFTER CLICK
      for (let i = rows.length - 1; i >= 0; i--) {
        rows[i].children[columnIndex].classList.remove("hover");
        rows[i].children[columnIndex].classList.remove("redHover");
        rows[i].children[columnIndex].classList.remove("yellowHover");
      }

      //CHECK-WIN AND SWAP PLAYER
      if (checkWin()) {
        win();
      } else {
        if (
          rows[rowIndex].children[columnIndex].classList.contains(currentPlayer)
        ) {
          if (currentPlayer === "red") {
            p1Sound.play();
            currentPlayer = "yellow";
            betal_played += delBetal(".p-red");
          } else {
            p2Sound.play();
            currentPlayer = "red";
            betal_played += delBetal(".p-yellow");
          }

          if (betal_played == 42) {
            win();
          }
        }
      }
      playerTurn.textContent = `Current Player : ${currentPlayer.toUpperCase()}`;
      clickInProgress = false;
    }, 100);
  });
});

// Add event listener to reset button
resetButton.addEventListener("click", (e) => {
  resetBoard();
  e.target.disabled = true;
});

//function setTime(playerTime) {
//  const now = new Date().getTime(); //12.45
//  const later = new Date(now + playerTime[0] * 60000 + playerTime[1] * 1000); //12.50
//  return later - now; //12.50 - 12.45 = 5 === 50000000
//}

/**
 * The function displays the time in minutes and seconds for a given timer and current player color.
 */
function displayTimer(timer, current) {
  if (current == "red") {
    p1Time.innerText =
      Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60))
        .toString()
        .padStart(2, "0") +
      " : " +
      Math.floor((timer % (1000 * 60)) / 1000)
        .toString()
        .padStart(2, "0");
  } else {
    p2Time.innerText =
      Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60))
        .toString()
        .padStart(2, "0") +
      " : " +
      Math.floor((timer % (1000 * 60)) / 1000)
        .toString()
        .padStart(2, "0");
  }
}

/**
 * The function determines the winner of a game of Connect Four based on the player with the most time
 * left or the player who played the last move if all spaces are filled.
 * @returns It seems that nothing is being returned in this code snippet. The `return` statement is
 * only used to exit the function early in case the game ends in a draw.
 */
function win() {
  var winplayer = currentPlayer;
  if (p2timer <= 0) {
    winplayer = "yellow";
  } else if (p1timer <= 0) {
    winplayer = "red";
  }
  if (betal_played == 42) {
    if (p2timer > p1timer) {
      winplayer = "red";
    } else if (p1timer > p2timer) {
      winplayer = "yellow";
    } else {
      drawSound.play();
      clearInterval(myInterval);
      message.textContent = "Draw!";
      setTimeout(function () {
        Swal.fire({
          title: "Draw!",
          icon: "warning",
          confirmButtonText: "OK",
        }).then(() => {
          resetBoard();
        });
      }, 1000);
      resetButton.disabled = false;
      return;
    }
  }
  winSound.play();
  alertEvent(winplayer, "win!");
}

function alertEvent(winplayer, title) {
  clearInterval(myInterval);
  message.textContent = `${winplayer.toUpperCase()}` + " " + title;
  setTimeout(function () {
    Swal.fire({
      title: `${winplayer.toUpperCase()}` + " " + title,
      icon: "success",
      confirmButtonText: "OK",
    }).then(() => {
      resetBoard();
    });
  }, 1500);
  resetButton.disabled = false;
}

var audio = new Audio('sounds/bgsound.mp3');
var playAudio = function() {
    audio.play();
    audio.loop = true;
    document.removeEventListener('click', playAudio);
};
document.addEventListener('click', playAudio);

function toggleMute() {
    audio.muted = !audio.muted;
}
