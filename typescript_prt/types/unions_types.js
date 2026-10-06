"use strict";
function describeStatus(status) {
    if (status === 'filled')
        return 'Order Completed';
    if (status == 'cancelled')
        return 'Order Cancelled';
    return "... Waiting ...";
}
function printId(id) {
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    }
    if (typeof id === 'number') {
        console.log(id.toFixed());
    }
}
class Cat {
    meow() { return 'Meow !'; }
}
class Dog {
    bark() { return 'Woof!'; }
}
function speak(pet) {
    if (pet instanceof Cat)
        return pet.meow();
    return pet.bark();
}
const orStatus = describeStatus('pending');
console.log(orStatus);
const sound = speak(new Cat());
console.log(sound);
printId(22);
