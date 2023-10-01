//Class Properties and Constructor
class Employee {
    //declaring private variables you can use # or private
    //#id: number;
    //private id: number;
    #id: number;

    protected name: string;

    address: string;

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
    constructor(id: number, name: string, address: string) {
        this.#id = id;
        this.name = name;
        this.address = address;
    }
    //this how to create method
    getNamewithAddress(): string {
        return `${this.name} stays at ${this.address}`;
    }
}

// extends like inheritance OOP in c#
class Manager extends Employee {
    constructor(id: number, name: string, address: string) {
        //super is needed to call parent class
        super(id, name, address)
    }
}

// this is how to get Static object
//Employee.getEmployeeCount();


let john = new Employee(1, "John", "Highway Run");
console.log(john);
console.log(john.getNamewithAddress());

let mike = new Manager(2, "Mike", "Driver sa kanto");
console.log(mike.getNamewithAddress());

//set new ID num
john.empID = 100;
//get ID
console.log(john.empID);

//https://www.youtube.com/watch?v=3qBXWUpoPHo&t=9663s | 1:51:29