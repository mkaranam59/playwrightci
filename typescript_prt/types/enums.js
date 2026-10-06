"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["Buy"] = 0] = "Buy";
    Direction[Direction["Sell"] = 1] = "Sell";
    Direction[Direction["Hold"] = 2] = "Hold";
})(Direction || (Direction = {}));
;
var Exchange;
(function (Exchange) {
    Exchange["NYSE"] = "NYSE";
    Exchange["NSE"] = "NSE";
    Exchange["SENSEX"] = "Sensex";
})(Exchange || (Exchange = {}));
function place(dir, ex) {
    return `${Direction[dir]} order on ${ex}`;
}
console.log(place(Direction.Buy, Exchange.SENSEX));
console.log(Direction.Hold);
console.log(Exchange.SENSEX);
