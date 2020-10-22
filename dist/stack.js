"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const card_1 = __importDefault(require("./card"));
class Stack {
    constructor() {
        this.cards = [];
        this.fill();
        this.currentCard = this.pickCard();
    }
    // Fills the deck
    fill() {
        const colors = ['red', 'blue', 'yellow', 'green'];
        const capacities = ['+2', 'reverse', 'skip'];
        for (let i = 0; i < colors.length; i++) {
            for (let j = 0; j < 9; j++) {
                this.cards.push(new card_1.default(j, colors[i], undefined));
            }
            capacities.forEach(c => {
                for (let j = 0; j < 2; j++) {
                    this.cards.push(new card_1.default(-1, colors[i], c));
                }
            });
        }
    }
    // Gives a random card from the deck
    pickCard() {
        if (this.cards.length <= 1)
            this.fill();
        let card = this.cards[Math.round(Math.random() * this.cards.length)];
        while (!card)
            card = this.cards[Math.round(Math.random() * this.cards.length)];
        this.cards.splice(this.cards.indexOf(card), 1);
        return card;
    }
}
exports.default = Stack;
