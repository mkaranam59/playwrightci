const symbols:string[] = ['AAPL', 'GOOG', 'MSFT'];
const prices:Array<number> = [199.5, 299.5, 399.5];
const trade:[string,number,boolean] = ['AAPL', 199.5, true];
const [symbol, price, is_open] = trade;
const doublePrice = prices.map(p => p * 2);
const filteredPrices = prices.filter(p => p > 200);
const totalPrice = prices.reduce((acc, p) => acc + p, 0);

console.log(symbols, prices, trade, symbol, price, is_open, doublePrice, filteredPrices, totalPrice);

const scores: Array<number>  = [45, 80, 92, 61, 95];
const highScores: Array<number>  = scores.filter(score => score > 90);
console.log(highScores); // Output: [92, 95]