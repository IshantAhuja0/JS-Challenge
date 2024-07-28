// Activity-1
// Task-1
function outer() {
  let num = 1;
  function inner() {
    console.log(num);
  }
  return inner();
}
outer();

// Task-2
function counter() {
  let count = 0;
  function increment() {
    count++;
  }
  function getVal() {
    return count;
  }
  return {
    increment,
    getVal,
  };
}
const counterr = counter();
counterr.increment();
counterr.increment();
counterr.increment();
counterr.increment();
console.log(counterr.getVal());

// Activity-2
// Task-3
function ids() {
  // let id=(Math.floor(Math.random()*10000))+'dfg';
  let id = 0;
  function track() {
    id++;
    return id;
  }
  return track;
}
let fun = ids();
console.log(fun());
console.log(fun());
console.log(fun());

// Task-4
function getName(name) {
  let user = name;
  function greet() {
    return `hii!${name}`;
  }
  return greet;
}
let greet = getName("ishant");
console.log(greet());

// Activity-3
// Task-5
let arr0fFunc = [];
for (let i = 0; i < 5; i++) {
  arr0fFunc.push(
    (function (index) {
      return function () {
        console.log(`function index is ${index}`);
      };
    })(i)
  );
}
arr0fFunc[2]();
for (const iterate of arr0fFunc) {
  iterate();
}

// Activity-4
// Task-6
function manageData() {
  let listItems = [];
  return {
    itemCollection: function () {
      return listItems;
    },
    add: function (item) {
      listItems.push(item);
    },
    remove: function () {
      listItems.pop();
    },
  };
}
let items=manageData()
console.log(items.itemCollection());
items.add('ishant')
console.log(items.itemCollection());
items.remove()
console.log(items.itemCollection());

// Activity-5
// Task-7
function add(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i;
  }
  return sum;
}

const memoizeAdd = (add) => {
	let cache = {};
  return function (...args) {
    let n = args[0];
    if (n in cache) {
			//if parameter passed in function is present in cache then bring result of argument
      // if n as a key in objet cache is present then its result will be cache[n]
      console.log("by cache");
      return cache[n];
    } else {
      // if result is not persent in cache the run the function to compute result. also store the fresh result in cache to use it later
      let result = add(n);
      cache[n] = result;
      console.log("by function");
      return result;
    }
  };
};
// let result=memoizeAdd(add)
// console.time();
// console.log(result(501));
// console.timeEnd();
// console.time();
// console.log(result(501));
// console.timeEnd();

// Task-8

function fact(n){
  if(n==0){
    return 1
  }
  return n*fact(n-1)
}

function memoizefact(fact){
  let cache={}
return function(...args){
  let n=args[0]
  if(n in cache){
    console.log("by cache");
    return cache[n]
  }
  else{
    let result=fact(n)
    cache[n]=result
    console.log("by function");
    return result
  }
}
}

let resultFact=memoizefact(fact)
console.time();
console.log(resultFact(5));
console.timeEnd();
console.time();
console.log(resultFact(5));
console.timeEnd();


