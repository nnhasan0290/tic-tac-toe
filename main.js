const cellElements = document.querySelectorAll("[data-cell]");
const winning_msg = document.querySelector(".winning-message-text");
const winning_msg_element = document.querySelector(".winning-message");
const restart_button = document.querySelector(".restart-button");

let circleTurn = false;
const X_CLASS = "x";
const CIRCLE_CLASS = "circle";
const board = document.querySelector(".board");
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];



restart_button.addEventListener("click", () => {
  circleTurn = false;
  cellElements.forEach((cell) => {
    cell.classList.remove(X_CLASS);
    cell.classList.remove(CIRCLE_CLASS);
    cell.removeEventListener("click", handleClick);
    cell.addEventListener("click", handleClick, {once: true});
    
  })
  adjustHover();
  winning_msg_element.classList.remove("show");
});

const handleClick = (event) => {
  //placeMark
  const cell = event.target;
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;

  placeMark(cell, currentClass);

  // check win or draw
  console.log(checkWin(currentClass));
  if (checkWin(currentClass)) {
    endgame(false);
  } else if (isDraw()) {
    endgame(true);
  } else {
    //switch turns
    switchTurns();

    //adjust hover class
    adjustHover();
  }
};

const isDraw = () => {
  return [...cellElements].every((cell) => {
    return (
      cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
    );
  });
};

const endgame = (draw) => {
  if (draw) {
    console.log("draw");
    winning_msg.innerText = "Draw";
  } else {
    console.log("not draow");
    winning_msg.innerText = `${circleTurn ? "O" : "X"} wins!`;
  }
  winning_msg_element.classList.add("show");
};

const checkWin = (currentClass) => {
  return WINNING_COMBINATIONS.some((combination) => {
    return combination.every((index) => {
      return cellElements[index].classList.contains(currentClass);
    });
  });
};

cellElements.forEach((cell) => {
  cell.addEventListener("click", handleClick, { once: true });
});

const placeMark = (cell, currentClass) => {
  cell.classList.add(currentClass);
};

const switchTurns = () => {
  circleTurn = !circleTurn;
};

const adjustHover = () => {
  board.classList.remove(X_CLASS);
  board.classList.remove(CIRCLE_CLASS);
  if (circleTurn) {
    board.classList.add(CIRCLE_CLASS);
  } else {
    board.classList.add(X_CLASS);
  }
};
