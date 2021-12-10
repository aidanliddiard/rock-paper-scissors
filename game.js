export function score(player, computer) {
    if (player === computer) {
        return 'Tie :/';
    }
    if (player === 'rock' && computer === 'paper') {
        return 'Computer is the winner :(';
    }
    if (player === 'rock' && computer === 'scissors') {
        return 'Player is the winner!!!!! :)';
    }
    if (player === 'paper' && computer === 'rock') {
        return 'Player is the winner!!!!! :)';
    }
    if (player === 'paper' && computer === 'scissors') {
        return 'Computer is the winner :(';
    }
    if (player === 'scissors' && computer === 'rock') {
        return 'Computer is the winner :(';
    }
    if (player === 'scissors' && computer === 'paper') {
        return 'Player is the winner!!!!! :)';
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