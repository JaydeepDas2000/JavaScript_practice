/* let car = {
    make: 'BMW',
    model: '7451i',
    year: 2010
} */

class Car{
    constructor (make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
}

let myCar = new Car('BMW', '7451i', 2010); //constructors
console.log(myCar);