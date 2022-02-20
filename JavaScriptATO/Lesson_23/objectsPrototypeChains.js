// Prototype chain in JavaScript is just like a inheritance in other programming languages

let orginalCar = {
    make: 'BMW',
    model: '7451i',
    year: 2010
};

let newCar = Object.create(orginalCar);

console.log(newCar.make)

console.log(Object.getPrototypeOf(newCar));

let myPrototype = Object.getPrototypeOf(newCar);
console.log(myPrototype.make);

orginalCar.doors = 4; // door properties is assign in orginalCar
console.log(newCar.doors); // we can access that door properties

console.log(orginalCar.hasOwnProperty('doors')); // it will show true because door property is present in orginalcar
console.log(newCar.hasOwnProperty('doors')) // it will show false because door property is not present in orginalcar