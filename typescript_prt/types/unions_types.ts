type OrderStatus = 'pending' | 'filled' | 'cancelled';
type Id = string | number;

function describeStatus(status:OrderStatus):string{
    if (status === 'filled') return 'Order Completed';
    if (status == 'cancelled') return 'Order Cancelled';
    return "... Waiting ...";

}

function printId(id:Id):void {
    if (typeof id === 'string'){
        console.log(id.toUpperCase());
    }
    if (typeof id === 'number'){
        console.log(id.toFixed())
    }

}

class Cat { meow():string{return 'Meow !'}}
class Dog {bark():string{return 'Woof!'}}

function speak(pet:Cat | Dog): string{
    if (pet instanceof Cat ) return pet.meow();
    
    return pet.bark();
}   


const orStatus = describeStatus('pending');
console.log(orStatus);
const sound = speak(new Cat());
console.log(sound);
printId(22);