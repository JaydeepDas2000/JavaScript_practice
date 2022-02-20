// Iteration - Loop thought couple of statements

// For loop
/*
    for(assign; condition; increment/decrement){
        statement 1;
        statement 2;
        ...
        statement n;
    }
*/

for (let i=0; i< 10; i++){
    console.log(i);
}

console.log("For loop inside array");

let a = [4, 8, 15, 16, 23, 42];
for(i = 0; i < a.length; i++){
    console.log(a[i]);
}

// While Loop
/*
    while(condition){
        statement 1;
        statement 2;
        ...
        statement n;
    }
*/

console.log("Using of while");

let x = 1;
while(x < 10){
    console.log(x++);

    if(x==7){
        break;
    }
}

