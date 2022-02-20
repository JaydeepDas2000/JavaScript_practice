// DOM - Document Object Model

(function() {
    function clickHandler(message){
        console.log("hi from JS file and print message " + message);
    }

    let myBtn = document.getElementById('myBtn');
    myBtn.addEventListener('click', function() {clickHandler('you successfully click that btn')});
})();