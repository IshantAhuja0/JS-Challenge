// Activity-1

// Task-1
let throwErr = new Promise((res, rej) => {
  let err = true;
  setTimeout(() => {
    if (!err) {
      res("resolved");
    } else {
      rej("Systemic Error.Try to reload your page");
    }
  });
}, 2000);
async function catchErr() {
  try {
    let response = await throwErr;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
catchErr();

// Task-2
function divide(num, denom) {
  try {
    let result = num / denom;
    if (denom == 0) {
      throw "ERROR! Denominator should be greater than zero";
    } else {
      throw result;
    }
  } catch (error) {
    console.log(error);
  }
}
divide(5, 2);

// Activity-2

// Task-3
try {
  throw "rejected";
} catch (error) {
  console.log(error);
} finally {
  console.log("settled");
  //it would run regardless of any condition
}

// Activity-3

// Task-4
class checkDivisible extends Error {
  constructor(msg) {
    super(msg);
  }
}
try {
  let error = true;
  if (error) throw new checkDivisible("not completly devisible");
} catch (error) {
  console.log(error);
}

// Task-5
function checkString(msg = "") {
  this.msg = msg;
  this.name = "checkString";
}
checkString.prototype = Error.prototype;

function runErr(input) {
  try {
    if (input == "") throw new checkString("not entered..");
  } catch (error) {
    console.log(error);
  }
}
runErr("");

let randomProm=new Promise((res,rej)=>{
  let num=Math.floor(Math.random()*10)
  if(num%2==0){
    let ok='Resolved:divisible by 2'
    res(ok)
    return ok
  }
  else{
    let notOK='ERROR!Not divisible';
    rej(notOK)
    return notOK
  }
})
// .then((res)=>{
  // console.log(res);
  // })
  // .catch((err)=>{
    //   console.error(err);
    // })
    
    // Task-7
    async function validateErr(){
      try {
        let result= await randomProm;
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
    validateErr()
    
    // Activity-5
    
    // Task-8
fetch('https://dumyjson.com/users')
   .then((res)=>{
    console.log(res);
   })
   .catch(()=>{
    console.log('ERROR!Not a valid Api');
  })
  
  //  Task-9
  async function fetchinvalid(){
    try{
      let data=await fetch('https://dumyjson.com/users')
      console.log(data);
    }
    catch{
      console.log('ERROR!Not a valid Api');
    }
  }
  fetchinvalid()