"use strict";
function add(a, b) {
    return a + b;
}
function greet(name, greeting = "Hello") {
    return ` ${greeting}, ${name} !`;
}
function logAll(...values) {
    console.log(values.join(', '));
}
const multiply = (a, b) => a * b;
function findUser(id) {
    const users = { 1: 'Muralidhar', 2: 'Karanam' };
    return users[id];
}
console.log(add(2, 3), greet('Muralidhar'), multiply(3, 4), findUser(1), findUser(4));
logAll(1, 2, 3, 4);
