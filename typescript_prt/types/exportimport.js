export function formatQuote(q) {
    return `${q.symbol}: $${q.price.toFixed(2)}`;
}
export default function converToINR(usd) {
    return usd * 95;
}
