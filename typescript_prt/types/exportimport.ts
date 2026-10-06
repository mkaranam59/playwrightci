export interface Quote {
    symbol: string,
    price: number;
}


export function formatQuote(q: Quote):string{
    return `${q.symbol}: $${q.price.toFixed(2)}`;
}

export default function converToINR(usd:number):number{
    return usd * 95;
    
}


