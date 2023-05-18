const board = document.querySelector(".board");
const cells = document.querySelectorAll(".cell");
const rows = document.querySelectorAll(".row");
const message = document.querySelector(".message");
const playerTurn = document.getElementsByClassName("player-turn")[0];
const resetButton = document.querySelector(".reset-button button");
const p1Time = document.getElementsByClassName("p1-time")[0];
const p2Time = document.getElementsByClassName("p2-time")[0];

let currentPlayer = "red";

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
  document.getElementsByClassName("message")[0].innerText = "";
  message.textContent = `Current Player : ${currentPlayer.toUpperCase()}`;
  cells.forEach((cell) => {
    cell.classList.remove("red", "yellow");
    cell.classList.add("empty");
  });
  currentPlayer = "red";
  playerTurn.textContent = `Current player: ${currentPlayer.toUpperCase()}`;
  message.textContent = "";
  resetButton.removeAttribute("disabled");
};

// Add event listener to each cell
cells.forEach((cell) => {
  cell.addEventListener("click", () => {
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

    if (checkWin()) {
      message.textContent = `${currentPlayer.toUpperCase()} wins!`;
      clearInterval(myInterval);
      resetButton.disabled = false;
    } else {
      if (
        rows[rowIndex].children[columnIndex].classList.contains(currentPlayer)
      ) {
        if (currentPlayer === "red") {
          currentPlayer = "yellow";
        } else {
          currentPlayer = "red";
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

window.onload = function () {
  playerTurn.textContent = `Current Player : ${currentPlayer.toUpperCase()}`;
};
