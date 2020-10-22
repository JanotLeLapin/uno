import Card, { color, capacity } from './card';

export default class Stack {
    cards: Card[];
    currentCard: Card;
    constructor () {
        this.cards = [];
        this.fill();
        this.currentCard = this.pickCard();
    }

    // Fills the deck
    fill () {
        const colors: color[] = ['red', 'blue', 'yellow', 'green'];
        const capacities: capacity[] = ['+2', 'reverse', 'skip'];
        for (let i = 0; i < colors.length; i++) {
            for (let j = 0; j < 9; j++) {
                this.cards.push(new Card(j, colors[i], undefined));
            }
            capacities.forEach(c => {
                for (let j = 0; j < 2; j++) {
                    this.cards.push(new Card(-1, colors[i], c));
                }
            })
        }
    }
    // Gives a random card from the deck
    pickCard(): Card {
        if (this.cards.length <= 1) this.fill();
        let card = this.cards[Math.round(Math.random() * this.cards.length)];
        while (!card) card = this.cards[Math.round(Math.random() * this.cards.length)];
        this.cards.splice(this.cards.indexOf(card), 1);
        return card;
    }
}