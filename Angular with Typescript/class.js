"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Employee_id;
//Class Properties and Constructor
class Employee {
    //{get;set;}
    get empID() {
        return __classPrivateFieldGet(this, _Employee_id, "f");
    }
    //{get;set;}
    set empID(id) {
        __classPrivateFieldSet(this, _Employee_id, id, "f");
    }
    static getEmployeeCount() {
        return 50;
    }
    // this is how to create constructor
    constructor(id, name, address) {
        //declaring private variables you can use # or private
        //#id: number;
        //private id: number;
        _Employee_id.set(this, void 0);
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.name = name;
        this.address = address;
    }
    //this how to create method
    getNamewithAddress() {
        return `${this.name} stays at ${this.address}`;
    }
}
_Employee_id = new WeakMap();
// extends like inheritance OOP in c#
class Manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
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
