// Array - Collection of data

let a = [4, 8, 15, 16, 23, 42];
let b = ['david', 'eddie', 'alex', 'michael'];

console.log(a[2]); // inside square bracket we have to give index.
console.log(b[1]);

console.log(a);
console.log(b); // if we want to show all the element or data in array just give variable name

// how to set and change the value of an element inside array
a[0] = 7;
console.log("New Array: " + a);

// dataType of array
console.log(typeof a); // this is an object datatype

let c = [4, 'alex', true]; // unless other regular programming an array content different datatype inside it

console.log(c);

console.log(b[4]); // if index have no any element then it will show undefine

console.log(b.length); // it will show number of element in that array

a[10] = 77;
console.log(a); // if we don't assign any value inside certain index then it will be as empty
console.log(a.length);

a.push(88); // add new element at the end of that array
console.log(a);

a.pop(); // remove the last element in that array
console.log(a);

