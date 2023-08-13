// Declare a variable with it data type
let username: string; // Means username can only be string
let age: number; // Means age can only be number
let isActive: boolean; // ...boolean
let car: any; // Means that car can be any of the data types
let isDoctor: number | boolean; // Means isDcotor can be only number or a boolean

/*
username = 48 // Error occured because username is a number and must only accept string data
*/
username = "user";
age = 90;
isActive = true;
car = null;
car = "Toyota";
car = 45;
car = false;
/*
car can be assign to any of the data types because it's any
*/

console.log(username, age, isActive, car); // user 90 true false

isDoctor = 0;
isDoctor = true;

/*
Now, isDoctor has been assigned to 0 and later reassigned to true 
Because isDcotor can have either a number or a boolean
*/

console.log(username, age, isActive, car, isDoctor); // user 90 true false true

// Declaring and Assign Data
// let variable : data type = value // to declare and assign

let password: string = "3okpfiwklem;d3224";
let amount: number = 50000000000;

// Another data type is RegExp which is regular expression
let regularExpression: RegExp = /a\*/;

// Params in a function
const has = (a: number) => {
  return [a % 10];
};

//  Objects, Arrays, Tuples & Enums
