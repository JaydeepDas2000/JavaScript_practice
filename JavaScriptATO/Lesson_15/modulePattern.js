// why global scope varible is dengerous
/*
    1. each varible define in global scope is not removed from the computer's memory untill
    the web browser or the tab of the browser navigates to a new web page. so more we add into
    the global scope the more memory are taking up and that memory just is consumed the entire time that
    tap is open for that particular webpage.
    
    2. It may have colission on name of variable when we working on team. and create several bugs
*/

// Design Pattern
var counter = (function(){

    // private stuff
    let count = 0;
    
    function print(message){
        console.log(message + '---- ' + count);
    }

    // return an objects
    return {
        get: function(){
            return count;
        },

        set: function(value) {
            count = value;
        },

        increment: function(){
            count += 1;
            print('After increment: ');

        },

        reset: function(){
            print('Before reset: ');
            count = 0;
            print('After Reset: ');
        }
    }
})();

// console.log(counter.count); // it will not reture anything
counter.increment();
counter.increment();
counter.increment();
counter.increment();

counter.reset();

counter.increment();
counter.increment();

console.log(counter.get());
counter.set(50)
console.log(counter.get());

counter.reset();