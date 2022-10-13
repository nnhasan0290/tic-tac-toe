const board = document.querySelector(".board");
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

const main = () => {
  createBox();
};

const createBox = () => {
  for (let i = 0; i <= 8; i++) {
    const box = document.createElement("div");
    board.appendChild(box);
  }
};

main();
const each_box = document.querySelectorAll(".box");

let state = true;
each_box.forEach((e) => {
  e.addEventListener("click", (event) => {
    if(e.textContent)  return;
    if(state){
      e.textContent = "X"
    } else{
      e.textContent = "0"
    }
    state = !state;
  })
})



