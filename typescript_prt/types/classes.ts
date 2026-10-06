class Instrument{
    protected priceHistory:number[]=[];
    constructor(public readonly symbol:string,private currentPrice:number){

    }

    getPrice():number{
        return this.currentPrice;
    }

    updatePrice(price:number):void{
        this.priceHistory.push(price);
        this.currentPrice = price;
    }

}

class Stock extends Instrument{

    constructor(symbol:string, price:number, public readonly sector:string){

        super(symbol,price);


    }

    describe():string{
        return `${this.symbol} (${this.sector}) is at $${this.getPrice()}`;
    }
}

const s = new Stock('AAPL',199.5,'Technology');
s.updatePrice(202.1);
console.log(s.describe());
const myP = s.getPrice();
console.log(myP.toFixed())
//s.currentPrice; //Property 'currentPrice' is private and only accessible within class 'Instrument'.
//s.priceHistory;//Property 'priceHistory' is protected and only accessible within class 'Instrument' and its subclasses.ts(2445)