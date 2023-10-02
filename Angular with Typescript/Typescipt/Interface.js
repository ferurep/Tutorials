"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Object destructuring
let { name, email } = { name: "John", id: 1, email: "" };
name;
// or you can replace the object name
let { name: userName, email: userEmail } = { name: "John", id: 1, email: "" };
userName;
userEmail;
let user = { name: "John", id: 1, email: "" };
let employee = { name: "Mike", id: 2, email: "", salary: 1000 };
//Array desctructuring
let [user1, user2, ...restUser] = [
    { name: "John", id: 1, email: "" },
    { name: "John1", id: 2, email: "" },
    { name: "John2", id: 3, email: "" },
    { name: "John3", id: 4, email: "" },
    { name: "John4", id: 5, email: "" }
];
console.log(user1);
console.log(user2);
console.log(restUser);
//on tsconfig find outDir and add /dist to create new folder path for * js
