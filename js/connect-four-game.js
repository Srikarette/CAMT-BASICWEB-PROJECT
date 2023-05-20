const board = document.querySelector(".board");
const cells = document.querySelectorAll(".cell");
const rows = document.querySelectorAll(".row");
const message = document.querySelector(".message");
const playerTurn = document.getElementsByClassName("player-turn")[0];
const resetButton = document.querySelector(".reset-button");
const p1Time = document.querySelector(".p1-time");
const p2Time = document.querySelector(".p2-time");
let currentPlayer = "red";
var betal_played = 0;
var p1timer = 120000;
var p2timer = 120000;
//p1timer = setTime(p1timer);
//p2timer = setTime(p2timer);

var myInterval;

window.onload = function () {
  playerTurn.textContent = `Current Player : ${currentPlayer.toUpperCase()}`;
  setBetalStand();
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
    cell.classList.remove("red", "yellow");
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
  cell.addEventListener("click", () => {
    clearInterval(myInterval);

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

    //CHECK-WIN AND SWAP PLAYER
    if (checkWin()) { 
      win();
    } else {
      if (
        rows[rowIndex].children[columnIndex].classList.contains(currentPlayer)
      ) {
        if (currentPlayer === "red") {
          currentPlayer = "yellow";
          betal_played += delBetal(".p-red");
        } else {
          currentPlayer = "red";
          betal_played += delBetal(".p-yellow");
        }

        if (betal_played == 42) {
          win();
        }
      }
    }
    playerTurn.textContent = `Current Player : ${currentPlayer.toUpperCase()}`;
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
 * The function checks if a player's timer has run out and declares them the winner, displays a message
 * and resets the board.
 */
function win() {
  if(p1timer <= 0){
    currentPlayer = "red";
  }
  clearInterval(myInterval);
    message.textContent = `${currentPlayer.toUpperCase()} wins!`;
    setTimeout(function(){
      Swal.fire({
        title: `${currentPlayer.toUpperCase()} wins!`,
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        resetBoard();
      });
    }, 2000); 
  resetButton.disabled = false;
}
