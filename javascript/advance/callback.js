const array = [1, 2, 3, 4, 5];


// array.forEach((item) => console.log(item));
// const newArray = array.filter((item) => item % 2 === 0);

// console.log(newArray);
// console.log(newArray3);


// const newArray2 = array.map(function(item) {
//     return item * 2
// });
const newArray2 = array.map((item) => {
    return item * 2;
});

const proccessUser = (name, age, callback) => {
    console.log("Main function running")
    const user = {
        name: name,
        age: age
    }
    callback(user);
}

proccessUser('shafayet', 25, (user) => {
    console.log(user);
})

