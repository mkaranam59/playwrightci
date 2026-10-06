function add(a:number, b:number):number {
    return a + b;
}

function greet(name:string, greeting:string= "Hello"):string{ // default parameter
    return ` ${greeting}, ${name} !`;
}

function logAll(...values:Array<number>):void{ // rest parameter: any number of args, collected into an array
    console.log(values.join(', '));
}

const multiply = (a:number, b:number):number => a * b;

function findUser(id:number):string | undefined { // the return type says "or nothing"
 const users:Record<number,string> = {1:'Muralidhar',2:'Karanam'}
 return users[id]
}

console.log(add(2,3), greet('Muralidhar'), multiply(3,4),findUser(1),findUser(4));

logAll(1,2,3,4);