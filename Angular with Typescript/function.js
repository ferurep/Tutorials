"use strict";
//normal function
function add(num1, num2, num3) {
    return num1 + num2 * num3;
}
console.log(add(1, 2, 3));
// arrow function
const subt = (num1, num2) => num1 - num2;
console.log(subt(2, 1));
// expression function
const mult = function (num1, num2) {
    return num1 * num2;
};
//Optional parameter = num3? is optional
function adds(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
// Required = num3:number = 10
const subts = (num1, num2, num3 = 10) => num1 - num2 - num3;
//Rest parameter
function add2(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
let numbers = [1, 2, 3, 4, 5];
console.log(add2(5, 10, ...numbers)); //or console.log(add2(5,10,...[1,2,3,4,5])) or console.log(add2(5,10,1,2,3,4,5)) 
//Generic fucntion
function getItems(items) {
    return new Array().concat(items);
}
let concatNumbers = getItems([1, 2, 3, 4, 5, 6]);
let concatString = getItems(["a", "b", "c"]);
console.log(concatNumbers);
console.log(concatString);
