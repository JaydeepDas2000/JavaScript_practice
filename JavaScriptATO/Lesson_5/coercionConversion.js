// 6 type of coercion and conversion

let a = 7; // this is a number
let b = '6'; // this is a string

let c = a + b; // due to number and string. it will concatenate 

console.log('Answer: ' + c);

b = parseInt(b); // we convert string to int

c = a + b; // now here it will add with each other because both are in number datatype
console.log('New Answer: ' + c);
