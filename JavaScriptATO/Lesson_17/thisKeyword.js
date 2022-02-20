let car = {
    make: 'BMW',
    model: '7451i',
    year: 2010,
    getPrice: function() {
        return 5000;
    },
    printDescription: function() {
        console.log(this.make + ' ' + this.model);
    }
}

// this keyboard represents the way a given function is called 

car.printDescription();

function first(){
    return this;
}

console.log(first() === global); // it will show true.
/*
    so when we called first method basically the global context because I haven't created it inside of using the module
    pattern which we see previously so I'm basically called this here out in the global namespace and what gets returned
    back is the fact that this is equal to that global namespace
*/

/*
    this is Node's global object
    because that's where the
    first method was called.
*/

function second() {
    'use strict';
    return this;
}

console.log(second() === global); // it will show false.
console.log(second() === undefined); // it will show true.

let myObject = {value: 'My Object'};

global.value = 'Global Object';

function third(name) {
    return this.value + ' ' + name;
}

console.log(third()) // it will call third function. inside third function this keyward call value from global

console.log(third.call(myObject, 'BOB')) // it will call third function inside third function this keyward call value from myObject
console.log(third.apply(myObject, ['BOB'])) // same as call method. but in apply, when we send parameter we will send it link array

/*
    this depends on HOW a function is called
    An object can be passed as the first argument to call
    or apply and this will be bound to it
*/

function fifth() {
    console.log(this.firstName + ' ' + this.lastName);
}

let customer1 = {
    firstName: 'Bob',
    lastName: 'tabor',
    print: fifth
}

let customer2 = {
    firstName: 'richard',
    lastName: 'boughton',
    print: fifth
}

customer2.print();
customer1.print();