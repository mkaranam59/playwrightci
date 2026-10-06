interface Trader {
    name:string,
    yearsOfExperience:number,
    active?:boolean,
    readonly id:number
}

const t:Trader = { name:"Muralidhar",yearsOfExperience:10,id:9};
// t.id = 90; // This would cause a compile error since id is readonly
function describe(trader:Trader):string {
    return `${trader.name} has ${trader.yearsOfExperience} years of experience.`;
}

const {name:traderName, yearsOfExperience:Experience} = t;
console.log(describe(t), traderName, Experience); // Output: Muralidhar has 10 years of experience.

const trader2:Trader = {id:20, name:"John", yearsOfExperience:5, active:true};
// trader2.id = 30; // Cannot assign to 'id' because it is a read-only property.
