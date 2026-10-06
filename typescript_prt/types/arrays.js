"use strict";
const symbols = ['AAPL', 'GOOG', 'MSFT'];
const prices = [199.5, 299.5, 399.5];
const trade = ['AAPL', 199.5, true];
const [symbol, price, is_open] = trade;
const doublePrice = prices.map(p => p * 2);
const filteredPrices = prices.filter(p => p > 200);
const totalPrice = prices.reduce((acc, p) => acc + p, 0);
console.log(symbols, prices, trade, symbol, price, is_open, doublePrice, filteredPrices, totalPrice);
const scores = [45, 80, 92, 61, 95];
const highScores = scores.filter(score => score > 90);
console.log(highScores); // Output: [92, 95]
