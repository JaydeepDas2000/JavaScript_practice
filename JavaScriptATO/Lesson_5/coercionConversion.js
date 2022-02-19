// type of coercion and conversion

let a = 7; // this is a number
let b = '6'; // this is a string

let c = a + b; // due to number and string. it will concatenate 

console.log('Answer: ' + c);

b = parseInt(b); // we convert string to int

c = a + b; // now here it will add with each other because both are in number datatype
console.log('New Answer: ' + c);

// now we try to pass a string which is not a digit characters.

let d = parseInt("not a number");
console.log(d); // it will show NaN. this is not a error, it just tell that this is not a number

let e = isNaN(d); // isNaN() function help to identify that varible which we passed in it is not a number or not
console.log(e); // it will show True.