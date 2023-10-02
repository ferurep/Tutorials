//this is how to import or access another method/class from another file.
import{Login, User} from './Interface'


//Interface for address
interface Address{
     street:string;
     city:string;
     state:string;
     zipcode:string;
}

//this is how to implement class/module from another file 'implements Login'
//Class Properties and Constructor
class Employee implements Login{
    //declaring private variables you can use # or private
    //#id: number;
    //private id: number;
    #id: number;

    protected name: string;

    //'address' can be use like this = address : Address; but need to replace all 'address' and supply all needed parameter
    address : Address;
    //address: string;

    //{get;set;}
    get empID(): number {
        return this.#id;
    }
    //{get;set;}
    set empID(id: number) {
        this.#id = id;
    }

    static getEmployeeCount(): number {
        return 50;
    }
    // this is how to create constructor
    constructor(id: number, name: string, address: Address) {//address: string
        this.#id = id;
        this.name = name;
        this.address = address;
    }

    //this is how to implements
    Login(): User {
        return { name: "John", id: 1, email: "" }
    }
    //this how to create method
    getNamewithAddress(): string {
        return `${this.name} stays at ${this.address}`;
    }
}

// extends like inheritance OOP in c#
class Manager extends Employee {
    constructor(id: number, name: string, address: Address) {//address: string
        //super is needed to call parent class/ constructor
        super(id, name, address)
    }
}

// this is how to get Static object
//Employee.getEmployeeCount();


let john = new Employee(1, "John",{
    street:"ABC",
    city:"Calamba",
    state:"Laguna",
    zipcode:"420"
});// "Highway Run"
console.log(john);
console.log(john.getNamewithAddress());

let mike = new Manager(2, "Mike", 
{
    street:"ABC",
    city:"Calamba",
    state:"Laguna",
    zipcode:"420"
});//"Driver sa kanto"
console.log(mike.getNamewithAddress());

//set new ID num
john.empID = 100;
//get ID
console.log(john.empID);
