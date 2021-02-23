// get the elements
const boxes = document.querySelectorAll('.box');
const restartBtn = document.querySelector('button');
const title = document.querySelector('h1');

let turn = 'O';
let board = new Array(9).fill(null)

boxes.forEach(box => box.addEventListener('click', boxClicked));

function boxClicked(e) {
  // if the box is already filled, return
  if(e.target.innerText) return;

  e.target.innerText = turn;
  board[e.target.id] = turn;

  if(playerHasWon()) {
    // declare the winner
    title.innerText = `${turn} has won the game`;

    // disable event listener
    boxes.forEach(box => box.removeEventListener('click', boxClicked));
    return;
  }

  // if all the board is filled, which is a draw
  if(!board.includes(null)) {
    title.innerText = 'Draw'
  }

  // switch turn
  turn = turn === 'O' ? 'X' : 'O';
}

// check if the player has won the game
function playerHasWon() {
  let hasWon = false;

  const winningPossibilities = [
    ['0', '1', '2'],
    ['3', '4', '5'],
    ['6', '7', '8'],
    ['0', '3', '6'],
    ['1', '4', '7'],
    ['2', '5', '8'],
    ['0', '4', '8'],
    ['2', '4', '6'],
  ];

  winningPossibilities.forEach(el => {
    const [a, b, c] = el;

    if (board[a] && board[a] === board[b] && board[b] === board[c]) {
      hasWon = true;
    }
  })

  return hasWon;
}

// restart button -> refresh page
restartBtn.addEventListener('click', () => location.reload());