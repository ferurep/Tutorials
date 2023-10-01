let lname: string;

lname = "fer";

let newname = lname.toLocaleUpperCase();
console.log(newname);


let age: number;

age = 25;

let result: number;
let dob = "25";

result = parseInt(dob);


let isValid: boolean = false;
console.log(isValid);

let emplist: string[];
emplist = ["jfvs", "jfvs1", "jfvs2"];

let numlist: Array<number>;
numlist = [1, 2, 3, 4, 5, 6,7,8,9,0];

let results = numlist.filter((numb) => numb > 2);
let num = numlist.find((numb) => numb === 2);
let emp = emplist.find((emp) => emp === "jfvs2");
let sum = numlist.reduce((acc, numbe) => acc + numbe);

const evenNumbers = numlist.filter(number => number % 2 === 0);
const oddNumbers = numlist.filter(number => number % 2 !== 0);

console.log(results);
console.log(num);
console.log(emp);
console.log(sum);
console.log(evenNumbers); 
console.log(oddNumbers); 

const enum Color {
    Blue = 1,
    Red= 2,
    Green = 3
}

let _color: Color = Color.Red;

let swapNumbs: [firstNumber: number, secondNumber: number];

function swapNumbers(num1: number, num2: number): [number, number] {
    return [num2,num1]
}
swapNumbs = swapNumbers(10,20);
swapNumbs[0];
swapNumbs[1];