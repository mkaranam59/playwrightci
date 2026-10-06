"use strict";
class Instrument {
    symbol;
    currentPrice;
    priceHistory = [];
    constructor(symbol, currentPrice) {
        this.symbol = symbol;
        this.currentPrice = currentPrice;
    }
    getPrice() {
        return this.currentPrice;
    }
    updatePrice(price) {
        this.priceHistory.push(price);
        this.currentPrice = price;
    }
}
class Stock extends Instrument {
    sector;
    constructor(symbol, price, sector) {
        super(symbol, price);
        this.sector = sector;
    }
    describe() {
        return `${this.symbol} (${this.sector}) is at $${this.getPrice()}`;
    }
}
const s = new Stock('AAPL', 199.5, 'Technology');
s.updatePrice(202.1);
console.log(s.describe());
const myP = s.getPrice();
console.log(myP.toFixed());
//s.currentPrice; //Property 'currentPrice' is private and only accessible within class 'Instrument'.
//s.priceHistory;//Property 'priceHistory' is protected and only accessible within class 'Instrument' and its subclasses.ts(2445)
