"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Card {
    constructor(number, color, capacity) {
        this.number = number;
        this.color = color;
        this.capacity = capacity;
        this.usedCapacity = false;
    }
    repr() {
        let c = '';
        switch (this.color) {
            case 'red':
                c += '\x1b[31m';
                break;
            case 'blue':
                c += '\x1b[36m';
                break;
            case 'yellow':
                c += '\x1b[33m';
                break;
            case 'green':
                c += '\x1b[32m';
                break;
            case 'black':
                c += '\x1b[35m';
                break;
        }
        let value = '';
        if (this.number < 0)
            value += this.capacity;
        else
            value += this.number;
        return c + value + ' ' + this.color + '\x1b[0m';
    }
}
exports.default = Card;
