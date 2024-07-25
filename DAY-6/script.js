// Activity-1

// Task-1
const arr=new Array(1,2,3,4,5);
console.log(arr);

// Task-2
console.log(`First element:${arr[0]}`);
console.log(`Last element:${arr[arr.length-1]}`);

// Activity-2

// Task-3
arr.push(6)
console.log(arr);

// Task-4
arr.pop()
console.log(arr);

// Task-5
arr.unshift(0)
console.log(arr);

// Task-6
arr.shift()
console.log(arr);

// Activity-3

// Task-7
const newArr=[]
arr.map((element)=>{
  newArr.push(element*2)
})
console.log(newArr);

//Task-8
function even(num){
  return num%2==0;
}
let array=new Array(1,2,3,4,5,6)
let newarray=array.filter(even)
console.log(newarray);

//Task-9
const add=arr.reduce((accumelator,current)=>{
    accumelator+=current
    return accumelator;
  })

console.log(add);  

// Activity-4

// Task-10
for(let i=0;i<arr.length;i++){
  console.log(arr[i]);
}

//Task-11
arr.forEach(element => {
  console.log(element);
});

// Activity-5

// Task-12
let twoArr=[[1,2,3],[4,5,6]];
combArr=[]
for(let i=0;i<twoArr.length;i++){
  for(let j=0;j<twoArr[i].length;j++){
    combArr.push(twoArr[i][j])
  }
}
console.log(combArr);

//Task-13

//looged element at 3rd index as its 2nd ro and 1st column
console.log(twoArr[1][0]);
