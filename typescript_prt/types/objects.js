"use strict";
const t = { name: "Muralidhar", yearsOfExperience: 10, id: 9 };
// t.id = 90; // This would cause a compile error since id is readonly
function describe(trader) {
    return `${trader.name} has ${trader.yearsOfExperience} years of experience.`;
}
const { name: traderName, yearsOfExperience: Experience } = t;
console.log(describe(t), traderName, Experience); // Output: Muralidhar has 10 years of experience.
