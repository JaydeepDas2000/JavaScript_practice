let today = new Date();

let bob = new Date('July 21, 2000 01:00:45');
//let bob = new Date('2000-07-21T01:00:45');

var elapsedTime = today - bob;
console.log(elapsedTime); // time in milisecound
console.log(bob.getDate()); // view date
console.log(bob.getTime());