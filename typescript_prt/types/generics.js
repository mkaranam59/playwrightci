"use strict";
function identity(value) {
    return value;
}
function getRandomElement(items) {
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
class Box {
    contents;
    constructor(contents) {
        this.contents = contents;
    }
    get() {
        return this.contents;
    }
}
function firstOf(items) {
    return items[0];
}
const numberBox = new Box(42);
const stringBox = new Box('AAPL');
const numberBox1 = new Box(90);
console.log(identity('Hello'));
console.log(identity(55));
//console.log(concat(['M','R']));
const output1 = getRandomElement(["apple", "banana", "cherry"]);
console.log(output1);
console.log('number from Box Class' + numberBox.get());
console.log('string from Box Class' + stringBox.get());
console.log('number1 from Box Class' + numberBox1.get());
