import converToINR, { formatQuote } from './exportimport.js';
import * as pricing from './exportimport.js';
const q = { symbol: 'AAPL', price: 199.5 };
const s = { symbol: 'TSLA', price: 202.5 };
console.log('Fixed');
console.log(formatQuote(q));
console.log(converToINR(q.price).toFixed(2));
console.log(formatQuote(q));
console.log(pricing.formatQuote(s));
console.log(converToINR(s.price).toFixed(2));
console.log(pricing.formatQuote(s));
let allRows = ['MK', 'KK', 'EL'];
for (const row of allRows) {
    console.log(row);
}
