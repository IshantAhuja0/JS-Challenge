// Activity-1

// Task-1
function isEven(num){
  if(num%2==0){
    console.log(`${num} is Even`);
  }
  else{
    console.log(`${num} is Odd`);
  }
}
isEven(5);

// Task-2
function squareOf(num){
   return num*num
}
console.log(squareOf(5));

// Activity-2

// Task-3
function max(a,b){
  if(a>b){
    console.log(`${a} is greater`);
  }
  else{
    console.log(`${b} is greater`);
  }
}
max(45,78)

//Task-4
function concatinate(str1,str2){
let add=str1+' '+str2
return add
}
console.log(concatinate('Hitesh','Chaudary'));

// Activity-3

// Task-5
const add=(a,b)=>{
  return a+b;
}
console.log(add(4,5))

// Task-6
const isSpl=(str,char)=>{
  return str.includes(char)
}
console.log(isSpl('hitesh','i'))

// Activity-4

// Task-7
const sum=(a,b=5)=>{
 return a+b;
}
console.log(sum(8));

//Task-8
const greet=(name,age='young')=>{
return `Hey! ${name} you are ${age}, congratulations :)`
}
console.log(greet('hitesh'));

// Activity-5

// Task-9
function hi(){
  console.log('hii!');
}
function times(hii,times){
  for(let i=0;i<times;i++){
    hii()
  }
}
times(hi,5)

//Task-10
const main = (func1, func2, val) => {
  const firstFun = func1(val);
  const result = func2(firstFun);
  return result;
};
function double(n){
return n*2
}
function triple(n){
  return n*3;
}
const val=5;
const result=main(double,triple,val)
console.log(result);
// const FinalResult=main(
//   (x)=>x*2,
//   (x)=>x*3,
//    5
// )
// console.log(FinalResult);