const cellElements = document.querySelectorAll("[data-cell]");
let circleTurn = false;

const handleClick = (event) => {
  //placeMark
  const cell = event.target;
  const currentClass = circleTurn ? "circle" : "x";
  placeMark(cell, currentClass);
  // check win or draw
  //switch turns
  switchTurns();
};
cellElements.forEach((cell) => {
  cell.addEventListener("click", handleClick, { once: true });
});

const placeMark = (cell, currentClass) => {
    cell.classList.add(currentClass);
};

const switchTurns = () => {
    circleTurn = !circleTurn;
}
