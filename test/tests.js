// IMPORT MODULES under test here:
import { score } from '../game.js';

const test = QUnit.test;

test('player rock, computer rock, so tie', (expect) => {
    const player = 'rock';
    const computer = 'rock';
    const expected = 'tie';

    const actual = score(player, computer);

    expect.equal(actual, expected);
});

test('player rock, computer paper, so computer is the winner', (expect) => {
    const player = 'rock';
    const computer = 'paper';
    const expected = 'computer is the winner';

    const actual = score(player, computer);

    expect.equal(actual, expected);
});

test('player rock, computer scissors, so player is the winner', (expect) => {
    const player = 'rock';
    const computer = 'scissors';
    const expected = 'player is the winner';

    const actual = score(player, computer);

    expect.equal(actual, expected);
});

test('player paper, computer rock, so player wins', (expect) => {
    const player = 'paper';
    const computer = 'rock';
    const expected = 'player is the winner';

    const actual = score(player, computer);

    expect.equal(actual, expected);
});

test('player paper, computer paper, so tie', (expect) => {
    const player = 'paper';
    const computer = 'paper';
    const expected = 'tie';

    const actual = score(player, computer);

    expect.equal(actual, expected);
});

test('player paper, computer scissors, so computer wins', (expect) => {
    const player = 'paper';
    const computer = 'scissors';
    const expected = 'computer is the winner';

    const actual = score(player, computer);

    expect.equal(actual, expected);
});

test('player scissors, computer rock, so computer wins', (expect) => {
    const player = 'scissors';
    const computer = 'rock';
    const expected = 'computer is the winner';

    const actual = score(player, computer);

    expect.equal(actual, expected);
});

test('player scissors, computer paper, so player wins', (expect) => {
    const player = 'scissors';
    const computer = 'paper';
    const expected = 'player is the winner';

    const actual = score(player, computer);

    expect.equal(actual, expected);
});

test('player scissors, computer scissors, so tie', (expect) => {
    const player = 'scissors';
    const computer = 'scissors';
    const expected = 'tie';

    const actual = score(player, computer);

    expect.equal(actual, expected);
});
