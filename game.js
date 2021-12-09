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