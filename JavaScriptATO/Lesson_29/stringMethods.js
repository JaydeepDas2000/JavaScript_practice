let first = "Knowledge is power but enthusiasm pulls the switch.";
let second = "Do or do not. There is no try.";
let third = "4,8,15,16,23,42";

// you can even call methods on string literals

console.log('bob loves you'.toUpperCase()); // cover lower case to upper case

let mySplit = third.split(','); // it help to split string into array
console.log(mySplit);

let mySlice = first.slice(13,18); // it help to make slice inside string
console.log(mySlice);

let mySubstr = first.substring(13, 5); // it help to make a substring from a whole sting
console.log(mySubstr);

console.log(second.length); // it help cound number of char or length of string