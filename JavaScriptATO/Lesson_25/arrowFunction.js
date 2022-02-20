let hi = () => {console.log("Howdy");}
hi();

let sayName = (name) => { console.log(`Howdy ${name}`) };
sayName('Bob');

let add = (a, b) => { return a+b };
console.log(add(7,3));

let names = [ 'david', 'eddie', 'alex', 'michael' ];
names.map((name) => { console.log(`Hi ${name}!`) });