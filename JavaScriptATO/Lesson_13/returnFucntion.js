// Return Function

// not recommended to write code in global scope
// don't do this
var myVariable = 'I am at the global scope';

var myFunction = function() {
    console.log('me too !');
}

// Recommended
function one() {
    return 'one';
}

/*
let value = one;
console.log(value);
*/

console.log(one());
let value = one;
console.log(typeof value); // it will show function data type
/*
    So we know some datatype
    1. String
    2. number
    3. boolean
    4. undefined
    5. function
    till now
*/

// we can also reture a function from a function

function two(){
    return function () {
        console.log('two');
    }
}

console.log(two);

let myFunctionTwo = two();
myFunctionTwo();

// Another example

function three(){
    return function(){
        return 'three';
    }
}

console.log(three()());