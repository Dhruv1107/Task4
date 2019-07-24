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
function calculateDiscount(person) {
    let discounts;
    discounts = person.map(function (currentValue) {
        if (currentValue.registered == true)
            return `Discount for ${currentValue.name} is 5%`;
        else
            return `Discount for ${currentValue.name} is 4%`;
    });
    return discounts;
}
function returnDiscount(strings, func) {
    return func(personData);
}

const discount = returnDiscount`${() => calculateDiscount(personData)}`;
console.log(discount.join("\n"));