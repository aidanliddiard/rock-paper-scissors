// import functions
import { generateThrow, score } from './game.js';

// grab DOM elements

// set event listeners 
const computerPicks = document.getElementById('computer-picks');
const images = (computer) => {
  const rockPick = 'assets/computerRock.webp';
  const paperPick = 'assets/computerPaper.jpeg';
  const scissorPick = 'assets/computerScissors.jpeg';
  if (computer === 'rock') {
    return rockPick;
  }
  if (computer === 'paper') {
    return paperPick;
  }
  if (computer === 'scissors') {
    return scissorPick;
  }
};

const playerPicks = document.getElementById('player-picks');
const playerImages = (player) => {
  const playerRockPick = 'assets/rock.jpg';
  const playerPaperPick = 'assets/paper.jpg';
  const playerScissorPick = 'assets/scissors.jpg';
  if (player === 'rock') {
    return playerRockPick;
  }
  if (player === 'paper') {
    return playerPaperPick;
  }
  if (player === 'scissors') {
    return playerScissorPick;
  }
};




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
    const computerImage = images(computer); 
    computerPicks.src = computerImage;
    const playerImage = playerImages(player); 
    playerPicks.src = playerImage;
});

const rockImg = document.getElementById('rock-Img');
const paperButton = document.getElementById('paper');
paperButton.addEventListener('click', () => {
    const computer = generateThrow();
    const player = paperButton.id;
    const results = score(player, computer);
    playerMove.textContent = player;
    computerMove.textContent = computer;
    resultsEl.textContent = results;
    const computerImage = images(computer); 
    computerPicks.src = computerImage;
    const playerImage = playerImages(player); 
    playerPicks.src = playerImage;
});

const scissorsButton = document.getElementById('scissors');
scissorsButton.addEventListener('click', () => {
    const computer = generateThrow();
    const player = scissorsButton.id;
    const results = score(player, computer);
    playerMove.textContent = player;
    computerMove.textContent = computer;
    resultsEl.textContent = results;
    const computerImage = images(computer); 
    computerPicks.src = computerImage;
    const playerImage = playerImages(player); 
    playerPicks.src = playerImage;
});


  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
