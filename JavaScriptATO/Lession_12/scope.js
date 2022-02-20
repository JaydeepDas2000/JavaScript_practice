// Scope basic

let a = 'I am outside function';

function scopeTest(){
    console.log(a);

    a = "change inside scopeTest"; // It will resign in 'change inside scopeTest' it will effect in upcoming value

    if (a != ''){
        console.log(a);

        let c = 'I am c inside if block inside function';
    }

    // console.log(c); // this will not print because it is present inside if block 

    let b = 'I am inside function';
}

scopeTest();
//console.log(b); // this will not print because it is present inside scopeTest function
