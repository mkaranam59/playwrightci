function identity<T>(value:T):T{
    return value;

}
function getRandomElement<T>(items: T[]): T {
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

class Box<T> {
    constructor(private contents:T){

    }
    get():T{
        return this.contents;
    }
}

function firstOf<T>(items: T[]): T | undefined {
  return items[0];
}

const numberBox = new Box<number>(42);
const stringBox = new Box<string>('AAPL');
const numberBox1 = new Box(90);

console.log(identity('Hello'));
console.log(identity(55));
//console.log(concat(['M','R']));

const output1 = getRandomElement<string>(["apple", "banana", "cherry"]);
console.log(output1);

console.log('number from Box Class ' + numberBox.get());
console.log('string from Box Class ' + stringBox.get());
console.log('number1 from Box Class ' + numberBox1.get());