// Activity-1
// Task-1
function factorial(num){
if(num==0){
  return 1
}
return num*factorial(num-1)
}
console.log(factorial(5))

// Task-2
function fibonacci(num){
  if(num<=3){
    return 1
  }
  return fibonacci(num-1)+ fibonacci(num-2)
}
console.log(fibonacci(6));

// Task-3
function sumArr(arr,len){
  if(len==0){
    return 0
  }
  return arr[len-1]+sumArr(arr,len-1)
}
let arr=[10,2,3,100,20]
let len=arr.length
console.log(sumArr(arr,len))

// Task-4
function max(arr,len){
  if(len==1){
    return arr[0]
  }
  return Math.max(arr[len-1],max(arr,len-1))
}
console.log(max(arr,len))

// Activity-3
// Task-5
function revStr(str){
  if(str=="") return ""
  return revStr(str.substr(1))+str.charAt(0)
}
console.log(revStr('ishant'))

// Task-6
function checkPallindrome(str){
if(str.length<=1){
  return true;
}
return str[0]==str[str.length-1]? checkPallindrome(str.substring(1,str.length-1)):false
}
console.log(checkPallindrome('naman'));
// console.log(str.charAt(0));
// console.log(checkPallindrome('naman'))

// Activity-4
// Task-7
function binSearch(ass,target, left=0,right=ass.length-1){
  if (left > right) {
    return -1;
}
  const mid=Math.floor((left+right)/2)
if(ass[mid]==target){
  return mid;
}
if(ass[mid]>target){
  return binSearch(ass,target,left,mid-1)
}
  return binSearch(ass,target,mid+1,right)
}


console.log(binSearch([1,2,89,96,98,100],100))

// Task-8
function maxOcc(occ,target,length=occ.length-1){

  if(length==0){
    return 0
  }

return (target==occ[length]?1 :0)+ maxOcc(occ,target,length-1)
}
let occurence=0;
let occ=[1,5,3,4,5,1,5]
console.log(maxOcc(occ,4));