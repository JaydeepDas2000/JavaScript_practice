function sayHello() {   //function declaration
    console.log('**************************');
    console.log('Hello!');
    console.log('**************************');
}

sayHello();  // function call

let a = sayHello; // here we don't use function invoke operation when we want to assign inside any variable
a(); // when every we want to call any function then we used function invoke 

console.log("1 Function");

function showName(name){
    console.log("Hello " + name + " !");
}

showName('Jaydeep');
showName('Ankit');
showName('Rohan');

console.log("2 function");

function calculateTax(amount){
    let result = amount*0.18;
    return result;
}

let tax = calculateTax(100);
console.log(tax);