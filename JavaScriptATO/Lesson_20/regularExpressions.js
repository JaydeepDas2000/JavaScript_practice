let pattern = /xyz/;

console.log(pattern);
console.log(typeof pattern); // object datatype

let value = 'this is xyz a test.';

console.log(pattern.test(value)); // it will help to say that pattern is present in that value string

console.log(value.replace(pattern, 'just')); // it will help to replace word from another word

console.log(value.match(pattern)); // it will help to display description

