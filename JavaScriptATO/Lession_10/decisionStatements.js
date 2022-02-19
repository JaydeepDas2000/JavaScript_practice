// Decision Statements

// If-Else statements
/*
    if(condition){
        // if condition is true then statement inside if block will run
        statement 1;
        statement 2;
        ...
        statement n;
    }
    else{
        // if condition is false then statement inside else block will run
        statement 1;
        statement 2;
        ...
        statement m;
    }
*/

var count = 3;
if(count == 3){
    console.log("Count is 3");
}
else{
    console.log("Count is not 3");
}

// we can also write if statement inside else statement

// Switch Statements
/*
    switch (variable) {
        case value:
            statement 1;
            statement 2;
            ...
            statement n;
            break;
        case value:
            statement 1;
            statement 2;
            ...
            statement n;
            break;
        default:
            statement 1;
            statement 2;
            ...
            statement n;
    }
*/

let hero = 'ironMan';

switch(hero) {
    case "superman":
        console.log('super strength');
        console.log('x-ray vision');
        break;
    case "ironMan":
        console.log('Suit Power');
        console.log('Playboy');
        console.log('Jarvas AI');
        break;
    default:
        console.log('Normal human just like me !');
}

// Ternary operator
/* 
    (conditions) ? 'if condition is true' : 'if condition is false';
*/

let a = 1, b = '1'
let result = ( a == b ) ? 'Equal' : 'not Equal';
console.log(result);

// == it will check two values are equal
// === it will check two values are equal and also same dataType