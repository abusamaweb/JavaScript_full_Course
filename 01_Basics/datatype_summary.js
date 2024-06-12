
// Primitive Data Types:-

//  7 types of primitive data types in JavaScript: string, number, bigint, boolean, undefined, symbol, and null.

const score = 100; // number
const scoreValue = 100.34; // number

const isLoggedIn = false; // boolean
const outsideTemp = null; // null
let userEmail; // undefined

const id = Symbol('id'); // symbol
const anotherId = Symbol('id'); // symbol
console.log(id === anotherId); // false

const bigInt = 1234567890123456789012345678901234567890n; // bigint

// Reference Data Types:-
// Array , Object , Function

const names = ['John', 'Doe', 'Smith']; // Array
const person = {
    name: 'John',
    age: 30
}; // Object

const greet = function () {
    return 'Hello';
}
console.log(greet()); // Function