"use strict"; // treat all Js code as newer version.

// alert( 6 + 6); // we are using nodejs, not browser, so alert will not work.

// console.log(6
//      + 
//      6); // code readability should be high.

// ======= Data Types in JavaScript =======
// ==> There are two main data types in JavaScript:-
// 1. Primitive Data Types
// 2. Reference Data Types

// ====== Primitive Data Types ======
// (1) Number, (2) String, (3) Boolean, (4) Undefined, (5) Null, (6) Symbol, (7) BigInt

// Example :-
/*
let num = 34;
console.log(num);
let FirstName = "Rahul";
console.log(FirstName);
let isDriver = true;
console.log(isDriver);
let undef = undefined; // (or) let undef;
console.log(undef);
let nullVar = null;
console.log(nullVar);
let sym = Symbol("This is my first symbol");
console.log(sym);
let bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt);
*/

// ====== Typeof =====//
/*
console.log(typeof num); // number
console.log(typeof FirstName);// string
console.log(typeof isDriver);// boolean
console.log(typeof undef);// undefined
console.log(typeof nullVar);// object
console.log(typeof sym);// symbol
console.log(typeof bigInt);// bigint
*/

// ====== Reference Data Types ======
// (1) Arrays, (2) Object Literals, (3) Functions, (4) Dates

// Example :-
let myArr = [1, 2, 3, 4, 5];
console.log(myArr);
let myObj ={
    "First Name": "Rahul",
    "Last Name": "Kumar",
    "Age": 21
};
console.log(myObj);
function myFunc() {
    console.log("This is my function");
}
myFunc();
let date = new Date();
console.log(date);

// ====== Typeof =====//
console.log(typeof myArr); // object
console.log(typeof myObj);// object
console.log(typeof myFunc);// function
console.log(typeof date);// object


