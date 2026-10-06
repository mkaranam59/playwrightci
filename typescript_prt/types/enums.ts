enum Direction {Buy, Sell, Hold};
enum Exchange { NYSE = 'NYSE', NSE = 'NSE',SENSEX='Sensex'}

function place(dir:Direction,ex:Exchange):string{
    return `${Direction[dir]} order on ${ex}`;
}

console.log(place(Direction.Buy,Exchange.SENSEX));
console.log(Direction.Hold);
console.log(Exchange.SENSEX);