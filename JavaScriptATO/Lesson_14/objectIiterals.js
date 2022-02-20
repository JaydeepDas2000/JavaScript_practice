// an object is simmilar to an array. but sightly different

// An array hold list of items and elements
// in Object, it will carry elements which having key value pair

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

car.printDescription();
console.log(car.year);
console.log(typeof car); // here we find another data type that is object

console.log(car['year']); // another way to access value of that key.. not recommonded

// now we create another object and we want to add some key with value inside it
var anotherCar = {};
anotherCar.whatever = 'Bob';
console.log(anotherCar);


// we can also do object inside object
var a = {
    myProperty: {
        b: 'hi from B'
    }
};
console.log(a.myProperty.b);

// we can also do array of objects inside object

var c = {
    myProperty: [
        {d: 'this'},
        {e: 'can'},
        {f: 'get'},
        {g: 'crazy'}
    ]
};

console.log(c.myProperty[2]);

// So we can manage data like this
let contacts = {
    customer: [
        {firstName: 'Bob', lastName: 'Tabor', phoneNumber: [ '(123) 456-7890', '(123) 567-8901' ]},
        {firstName: 'Richard', lastName: 'Boughton', phoneNumber: [ '(123) 555-7894', '(123) 555-8901' ]}
    ],
    employees:[
        {firstName: 'Steve', lastName: 'Jaworski', phoneNumber: [ '(123) 456-5560', '(123) 567-8953' ]},
        {firstName: 'Conrad', lastName: 'Tabor', phoneNumber: [ '(123) 555-7234' ]},
        {firstName: 'Grant', lastName: 'Tabor', phoneNumber: [ '(123) 666-7234' ]}
    ]
}
// it look like JSON (JavaScript Object Notation)