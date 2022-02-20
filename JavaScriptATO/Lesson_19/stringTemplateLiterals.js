let name = 'bob';
console.log(`Hello ${name}`);

let sentance = `Why
 I'm
  Like
   this!
    I really
   don't
  know
 why?`

console.log(sentance);

function getReasonConst(){
    return 1;
}

let interpolation = `Give me ${(getReasonConst() == 1) ? 'one good reason' : 'a few reasons'} to try this`;
console.log(interpolation);