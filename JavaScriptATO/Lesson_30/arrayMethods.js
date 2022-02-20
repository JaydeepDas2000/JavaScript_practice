let names = [ 'david', 'eddie', 'alex', 'michael' ];
let others = [ 'samny', 'gary', 'wolfgang', 'mark' ];

let lost = [ 4, 8, 15, 16, 23, 42 ];
let fibonacci = [ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55];

var combine = lost.concat(fibonacci);
console.log(combine);

console.log(fibonacci.join('~'));

// push, pop

console.log(lost.shift()); // pop at front
console.log(lost);

lost.unshift(1,2,3,4); // push new item at front
console.log(lost);

console.log(names);
console.log(names.reverse());
console.log(names.sort());

// and many more method are present