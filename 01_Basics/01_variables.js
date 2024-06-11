
const accountId = 123455;
let accountEmail = "abucd@gmail.com";
var accountPassword = "password123";
accoutCity = "New York";
let accountState;

// Print the variables:-
// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accoutCity);

console.table({accountId, accountEmail, accountPassword, accoutCity, accountState});

// Change the variables values:-

// accountId = 123456; // Error: Cannot assign to 'accountId' because it is a constant.
accountEmail = "xyz@gmail.com"; 
accountPassword = "password456";
accoutCity = "California";

// Print the variables:-
console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accoutCity);
console.log(accountState);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/