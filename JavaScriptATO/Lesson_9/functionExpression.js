// when we need not any function name just we only need function body declaration then we called as function expression

setTimeout(function () { // function inside function can take it
    console.log('I waited 2 sec');
}, 2000);

console.log('2 function');

let counter = 0;
function timeout(){
    setTimeout(function(){
        console.log('Hi !! ' + counter++);
        timeout();
    }, 2000);
}

timeout();
// ctrl + c to stop this infinite loop which we created by timeout function

console.log('3 function');

(function(){
    console.log('Immediately Invoke Function Expression (IIFE)')
})();

