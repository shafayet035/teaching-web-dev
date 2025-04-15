

let person = {
    name: "Abul",
    age: 20,
    address: {
       age: 60
    },
    print: function() {
        return 'Hello World'
    }
}

for (let xyz in person) {
    console.log(person[xyz]);
}


Object.defineProperty(person, 'id', {
    value: 10,
    writable: true,
})


let personKeys = Object.keys(person);
let personValues = Object.values(person);
let personEntries = Object.entries(person);

// console.log(personKeys);
// console.log(personValues);
// console.log(personEntries);

// console.log(personEntries[2][1].age)
// console.log(person.hasOwnProperty('car'));

// console.log(person["name"]);
// console.log(person.age);
// console.log(person.address.age)
// console.log(person.print());


// Problem-2
let book = {
    title: "JavaScript Basics",
    author: "John Doe",
    year: 2024,
    pages: 200,
    publisher: "Tech Books"
};
// Write a function that counts how many properties an object has.


// Problem 3
// Write a function that Double all numeric values in an object;
let prices = {
    coffee: 3,
    tea: 2,
    cookie: 1,
    sandwich: 5
};

function doubleValues(obj) {
    let result = {};

    for(let key in prices) {
        result[key] = obj[key] * 2;
    }

    return result;
}

console.log(prices);
console.log(doubleValues(prices));