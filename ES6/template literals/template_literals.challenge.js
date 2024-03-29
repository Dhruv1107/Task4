// using template literals build a JS program to check if a person is eligible for a price discount or not
// check if 
// if a registered member - discount is 5% 
// if not registered member - discount is 4%
let personData = [
    {
        registered: true,
        name: "Dhruv",
        age: 21
    },
    {
        registered: false,
        name: "Rajdeep",
        age: 21
    },
    {
        registered: true,
        name: "Nikhil",
        age: 21
    }
]

function returnDiscount(fname) {
    let discount = personData.filter(currentValue => fname[0] === currentValue.name);
    return `The discount for ${discount[0].name} is ${discount[0].registered ? 5 : 4}`;
}

console.log(returnDiscount`Dhruv`);
console.log(returnDiscount`Rajdeep`);