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
})

while (true) {
    players.forEach(player => {
        if (!player.deck.length) return players.splice(players.indexOf(player), 1);
        if (players.length <= 1) return;
        player.play();
    });
    if (players.length <= 1) break;
}