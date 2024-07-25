// Activity-1

// Task-1
let name='Hitesh';
let classs='2nd'
console.log(`I'm ${name} of ${classs} class `);

// Task-2
let multiLine=`
I'am Hitesh 
I teach coding on youtube
I'm fitness freak :)`
console.log(multiLine);

// Activity-2

// Task-3
let numbers = [1,2,3,4,5];
let [first, second] = numbers;
console.log(first,second);

// Task-4
let book={
  title:'the enemy',
  author:'steve charles',
  year:'2003',
}
let {title,author}=book;
console.log(title,author);

// Activity-3

// Task-5
let array=[...numbers,6,7,8];
console.log(array);

// Task-6
function sum(...num){
  let sum=0;
  for(let n of num){

    sum+=n;
  }
return sum
}
console.log(sum(1,2,3));
console.log(sum(1,2,3,4,5));

// Activity-4

// Task-7
function summ(a,b=1){
  return a+b;
}
console.log(summ(5,5));
console.log(summ(5));

// Activity-5

// Task-8
var namee='ronie';
var color='black';
var age=5;
var speed =function(speed){
return speed;
}
var dog={namee,color,age,speed};
console.log(dog.speed(45))
console.log(dog);

// Task-9
let propName = "dynamicProperty";
let value = "This is a dynamic property value";

let dynamicObject = {
    [propName]: value
};
console.log(dynamicObject);