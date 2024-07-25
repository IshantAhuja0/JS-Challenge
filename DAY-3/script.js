// Activity-1

// Task-1
let num=-5;
if(num===0) console.log(`${num} is zero`);
if(num<0) console.log(`${num} is negative`);
if(num>0) console.log(`${num} is positive`);

// Task-2
let age=12;
if(age>=18) console.log('youcan vote');
else console.log(`you can't vote`);

// Activity-2

// Task-3
let a=7,b=16,c=5;
if(a>b){
  if(a>c) console.log('a is greatest');
  else console.log('c is greatest');
}
else if(b>c) console.log('b is greatest');
else console.log('c is greatest');

// Activity-3

// Task-4
let day =8;
switch(day){
  case 1:console.log('Monday');
  break;
  case 2:console.log('Tuesday');
  break;
  case 3:console.log('Wednesday');
  break;
  case 4:console.log('Thursday');
  break;
  case 5:console.log('Friday');
  break;
  case 6:console.log('Satday');
  break;
  case 7:console.log('Sunday');
  break;
  default:console.log('Invalid Number!');
  break;
}

// Task-5
let marks=79
switch(true){
  case marks>=90:console.log('A Grade');
  break;
  case marks>=80:console.log('B Grade');
  break;
  case marks>=70:console.log('C Grade');
  break;
  case marks>=60:console.log('D Grade');
  break;
  default:console.log('Fail!');
  break;
}

// Activity-4

// Task-6
function check(num){
num%2==0?console.log('even'): console.log('odd');;
}
check(7)

// Activity-5

// Task-7
let year=2005;
function isLeap(num){
if ((num%4==0 && num%100!=0) ||( num%4==0 && num%100==0 && num%400==0)) console.log(`${num} is a leap year`);
else console.log(`${num} is not a leap year`);
}
isLeap(2024)
