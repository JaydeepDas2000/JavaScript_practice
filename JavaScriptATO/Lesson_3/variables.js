var x = 7; // var used for variable but in latest release recommendation is to abandon var.
// try to used let and const keyword
let y = 3;
const z = x + y; // const is another keyword help to declaration. we used it when we don't
// want to change its value or become a constant
console.log('Answer: ' + z);


// why we should not use var keyword
/*
    we can use var keyword before declaration. which is aganst scope
*/

// there are some rule for identifier variables
/*
    Rule 1 - all variable names have to begin with either a letter $ or _
    Rule 2 - the variable name contain letters or numbers $ or _ but no other special characters and
            we can use the space in between two words
    Rule 3 - we can't use any keywords
*/

// there are some code convention for variables
/*
    1 - variable name should be descriptive
    2 - variable are in lower camel case
    
    eg. - firstNumber, fname, age, numberCount, zipCode

*/