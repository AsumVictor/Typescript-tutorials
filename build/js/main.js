"use strict";
// Declare a variable with it data type
let username; // Means username can only be string
let age; // Means age can only be number
let isActive; // ...boolean
let car; // Means that car can be any of the data types
let isDoctor; // Means isDcotor can be only number or a boolean
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
let password = "3okpfiwklem;d3224";
let amount = 50000000000;
// Another data type is RegExp which is regular expression
let regularExpression = /a\*/;
// Params in a function
const has = (a) => {
    return [a % 10];
};
//  Objects, Arrays, Tuples & Enums
/*
To declare and array use [] at the end of the data type
eg.
array of strings, let str: string[] = []
array of numbers, let str: number[] = []
array of numbers and string, let str: (number | number)[] = []

*/
let months = [];
//
// months.push(3); Error occured
months.push("feb");
// TUBLE is an array with fixed arrangment and length
// Tuble is more restricted than arrays
// Declare tuble with arrays of data types
// Example let make question
let question = [1, "What is typescript", true];
// This tuble contains fixed length of 3 and fixed positions
question.push("scsc");
console.log(question);
// Now I have descript student
// let student: Student = {}
/*
error TS2739: Type '{}' is missing the following properties from type 'Student': fullname, age, isActive, hasCar, books

92 let student: Student = {}
      ~~~~~~~
*/
let std = { fullname: 'string',
    age: 8,
    isActive: false,
    hasCar: 0,
    books: ['book', 7],
};
// Making hasCar property optional
// Lets user this in a function
const teacher = {
    fullname: 'James Ama',
    age: 39,
    isActive: false,
};
const teacher2 = {
    age: 39,
    isActive: false,
};
// Lets make a function that takes optional parameter
const greet = (teacher) => {
    console.log(`Hello Mr. ${teacher.fullname}`);
};
greet(teacher2);
;
