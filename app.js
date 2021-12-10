// import functions
import { generateThrow, score } from './game.js';

// grab DOM elements

// set event listeners 
const playerMove = document.getElementById('player');
const computerMove = document.getElementById('computer');
const resultsEl = document.getElementById('results');

const rockButton = document.getElementById('rock');
rockButton.addEventListener('click', () => {
    const computer = generateThrow();
    const player = rockButton.id;
    const results = score(player, computer);
    playerMove.textContent = player;
    computerMove.textContent = computer;
    resultsEl.textContent = results;
});

const paperButton = document.getElementById('paper');
paperButton.addEventListener('click', () => {
    const computer = generateThrow();
    const player = paperButton.id;
    const results = score(player, computer);
    playerMove.textContent = player;
    computerMove.textContent = computer;
    resultsEl.textContent = results;
});

const scissorsButton = document.getElementById('scissors');
scissorsButton.addEventListener('click', () => {
    const computer = generateThrow();
    const player = scissorsButton.id;
    const results = score(player, computer);
    playerMove.textContent = player;
    computerMove.textContent = computer;
    resultsEl.textContent = results;
});


  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
