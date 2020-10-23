"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const stack_1 = __importDefault(require("./stack"));
const player_1 = __importDefault(require("./player"));
// Create the game deck
const stack = new stack_1.default();
const players = [];
// Create Players
players.push(new player_1.default('Player 1', true, stack));
players.push(new player_1.default('Player 2', true, stack));
players.push(new player_1.default('Player 3', true, stack));
players.push(new player_1.default('Player 4', true, stack));
console.log('-- Game Starts! --');
players.forEach(player => {
    console.log('-- ' + player.reprName() + ' deck -- ');
    console.log(player.deck.map(card => '  ' + card.repr()).join('\n'));
});
const finished = false;
while (true) {
    players.forEach(player => {
        if (players.filter(player => !player.done).length <= 1)
            return finished;
        if (!player.done)
            player.play();
    });
    if (finished)
        break;
}
