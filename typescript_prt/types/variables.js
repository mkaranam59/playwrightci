let city = "hyderabad";
let price = 199.5;
let isOpen = true;
let ticker = "ticket";
let mystery = 4;
mystery = "now a string";
//mystery.someMadeUpMethod(); // This will throw an error at compile time because 'mystery' is of type 'unknown'
if (typeof mystery === "string") {
    console.log(mystery.toUpperCase()); // This is safe because we have checked the type
}
let anything = 4;
anything = "anything is now a string"; //
anything.toUpperCase(); // This will not throw an error at compile time because 'anything' is of type 'any'
console.log(anything.toUpperCase()); // This will throw an error at runtime if 'anything' is not a string
anything.someMadeUpMethod();
function fail(msg) {
    throw new Error(msg);
}
fail("Something failed"); // This will throw an error and the function will never return
export {};
