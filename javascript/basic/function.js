/*

 calculator 

 summation, substraction, multiplication, division


 blocks of reusable code, perform specefic tasks = Functions
*/

function multiplication(x, y) {
    let result = x * y;
    return result;
}

// console.log(multiplication(10, 10));
// console.log(multiplication(40, 50));

function divide(a, b) {
    let division;
    if (a > b) {
        division = a / b;
    } else {
        division = b / a;
    }
    return division;
}

console.log(divide(2, 4));



/* 
 Homework

 string methods
 Switch-Case

 1) Make a simple calculator programe with basic maths 
 2) make functions to convert celsius to fahrenheit to kelvin (reverse)
 3) calculate DiscountPrice: I will give a price and a discount percentage, the function should return the discounted Price.
 4) Function CheckPassWordStrength. (minimum 6 character, must have '?', maximum 10)
 5) Email Validation ('@', '.')
 6) check if the number is odd/even
*/