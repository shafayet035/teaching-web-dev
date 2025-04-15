let numbers = [23, 25, 53, 94, 45];
// find the maximum number from the numbers array;
let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}
// make a function that  multiply array items by 2 so the returned array should be like this: [46, 50, 103, 188, 90]
// console.log(multiplyArray(numbers));

const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

// find the



function multiplicationarray(array) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        result.push(array[i] * 2);
    }

    return result;
}

let num = [1, 2, 3, 4];


let myArray = [5, 80, 40, 60, 90 ,45, 33, 2, 4, 6];

// create a function that search an element of arrays. 
// function will take two arguments. first -> array, second -> searchKey;
function search(array, key) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === key) {
          return true;
        }
    }
    return false;
}
console.log(search(myArray, 45)); // true
console.log(search(myArray, 100)); // false


// find max and minimum of an array and find the difference between the maximum and minium. The Function should return the difference value; 
console.log(differenceMaxMin(myArray));
