// Activity-1
let a=5;
let b=2;

function add(a,b){
  console.log(a+b);
}
function subtract(a,b){
  console.log(a-b);
}
function mul(a,b){
  console.log(a*b);
}
function div(a,b){
  console.log(a/b);
}
function mod(a,b){
  console.log(a%b);
}

add(a,b)
subtract(a,b)
mul(a,b)
div(a,b)
mod(a,b)

// Activity-2
let c=3;
let d=4;

c+=d;
console.log('c=',c);

c-=d
console.log('c=',c);

// Activity-3
let one=5;
let two=4;
let three=5;
// >
let res=one>two
console.log(res);
// <
res=one<two
console.log(res);
// <=
res=one<=three
console.log(res);
// >=
res=one>=two
console.log(res);
// ==
res=one==two
console.log(res);
// ===
res=one===three
console.log(res);

// Activity-4
let five=5;
let six=6;
// &&
let result= six>five && six==five
console.log(result);
// ||
result= six>five || six==five
console.log(result);
// !
result=!six>five
console.log(result);

// Activity-5
let num=-5;
let resultt=num>0?console.log('positive'):console.log('negative');