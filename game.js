export function score(player, computer) {
    if (player === computer) {
        return 'tie';
    }
    if (player === 'rock' && computer === 'paper') {
        return 'computer is the winner';
    }
    if (player === 'rock' && computer === 'scissors') {
        return 'player is the winner';
    }
    if (player === 'paper' && computer === 'rock') {
        return 'player is the winner';
    }
    if (player === 'paper' && computer === 'scissors') {
        return 'computer is the winner';
    }
    if (player === 'scissors' && computer === 'rock') {
        return 'computer is the winner';
    }
    if (player === 'scissors' && computer === 'paper') {
        return 'player is the winner';
    }
}

const throws = ['rock', 'paper', 'scissors'];

export function generateThrow() {
    const index = getRandomIntInclusive(0, 2);
    return throws[index];
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}