"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Player {
    constructor(name, bot, stack) {
        this.name = name;
        this.bot = bot;
        this.stack = stack;
        this.deck = [];
        for (let i = 0; i < 7; i++) {
            this.deck.push(this.stack.pickCard());
        }
        this.done = false;
    }
    // Plays a card from the player's deck to the game deck
    play() {
        if (this.stack.currentCard.capacity && !this.stack.currentCard.usedCapacity) {
            this.stack.currentCard.usedCapacity = true;
            switch (this.stack.currentCard.capacity) {
                case '+2':
                    for (let i = 0; i < 2; i++) {
                        this.deck.push(this.stack.pickCard());
                    }
                    console.log('-- ' + this.reprName() + ' picked 2 cards --');
                    return;
                case 'skip':
                    console.log('-- ' + this.reprName() + ' turn got skipped --');
                    return;
            }
        }
        if (this.bot) {
            const playableCards = [];
            this.deck.forEach(card => {
                if (card.color === this.stack.currentCard.color || card.number === this.stack.currentCard.number)
                    playableCards.push(card);
            });
            if (!playableCards.length) {
                const card = this.stack.pickCard();
                this.deck.push(card);
                console.log('-- ' + this.reprName() + ' draws ' + card.repr() + ', now has ' + this.deck.length + ' cards --');
                return;
            }
            const card = playableCards[0];
            this.deck.splice(this.deck.indexOf(card), 1);
            this.stack.currentCard = card;
            console.log('-- ' + this.reprName() + ' plays ' + card.repr() + ', now has ' + this.deck.length + ' cards --');
        }
        if (!this.deck.length) {
            this.done = true;
            console.log('-- ' + this.reprName() + ' WINS --');
        }
    }
    reprName() {
        return this.name + (this.bot ? ' [BOT]' : '');
    }
}
exports.default = Player;
