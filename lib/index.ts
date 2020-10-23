import Stack from './stack';
import Player from './player';

// Create the game deck
const stack = new Stack();
const players: Player[] = [];

// Create Players
players.push(new Player('Player 1', true, stack));
players.push(new Player('Player 2', true, stack));
players.push(new Player('Player 3', true, stack));
players.push(new Player('Player 4', true, stack));

console.log('-- Game Starts! --');
players.forEach(player => {
    console.log('-- ' + player.reprName() + ' deck -- ');
    console.log(player.deck.map(card => '  ' + card.repr()).join('\n'));
});

const finished = false;
while (true) {
    players.forEach(player => {
        if (players.filter(player => !player.done).length <= 1) return finished;
        if (!player.done) player.play();
    });
    if (finished) break;
}