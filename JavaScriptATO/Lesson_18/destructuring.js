let a, b, c, d, e;

let names = ['david', 'eddie', 'alex', 'michael', 'sammy'];

[a,b,c,d,e] = names; // destructuring.

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);


let others;

[a, b, ...others] = names;

console.log(a); // sting datatype
console.log(b);
console.log(others); // object datatype

let year, model;
({year, model} = {
    make: 'BMW',
    model: '7451i',
    year: 2010,
    value: 5000
});

console.log(year);
console.log(model);