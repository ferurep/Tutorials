export interface User {
    name: string;
    age?: number;
    id: number;
    email: string;
}


//Object destructuring
let { name, email }: User = { name: "John", id: 1, email: "" }
name;
// or you can replace the object name
let { name: userName, email: userEmail }: User = { name: "John", id: 1, email: "" }
userName;
userEmail;


let user: User = { name: "John", id: 1, email: "" }

interface Employees extends User {
    salary: number;
}

let employee: Employees = { name: "Mike", id: 2, email: "", salary: 1000 }

//this is how to export a method/class
export interface Login {
    Login(): User;
}

//Array desctructuring
let [user1,user2,...restUser]: User[] = [
    { name: "John", id: 1, email: "" },
    { name: "John1", id: 2, email: "" },
    { name: "John2", id: 3, email: "" },
    { name: "John3", id: 4, email: "" },
    { name: "John4", id: 5, email: "" }
]

console.log(user1);
console.log(user2);
console.log(restUser);

//on tsconfig find outDir and add /dist to create new folder path for * js