// Activity-1

// Task-1
let promise = new Promise((resolve, reject) => {

    setTimeout(() => {
     resolve()
    }, 2000)
  
});
promise.then(() => {
  console.log("solved");
});

// Task-2
let promiseOne=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    reject()
  },2000)
})
promiseOne
.then(()=>{
  console.log('solved')
})
.catch(()=>{
  console.log('rejected')
}
)

// Activity-2

// Task-3
let promChain=new Promise((res,rej)=>{
let data={
  name:'hitesh',
  class:'1st year',
  collage:{
   name:'randomCollage',
   location:'randomLocation'
  }
}
res(data)
// rej('error404')
})
promChain
.then((data)=>{
return new Promise((res,rej)=>{
  res(data.collage)
})
})
.then((collage)=>{
  return new Promise((res,rej)=>{
res(collage.name)
  })
})
.then((Cname)=>{
  console.log(Cname);
})
.catch((err)=>{
  console.log(err);
})

// Activity-3

// Task-4
let prom=new Promise((res,rej)=>{
  setTimeout(()=>{

  res('promise')
  },2000)
})
async function solveProm(){
  let response=await prom;
  console.log("wait")
  console.log(response)
  console.log("Done")

}
console.log(solveProm());

// Task-5
let prom2=new Promise((res,rej)=>{
  let error=true
  setTimeout(()=>{
  if(!error){
    res('resolved')
  }
  else{
    rej('promise rejected')
  }
  },2000)
})

async function solveProm2(){
  try {
    let response=await prom2
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
solveProm2()

// Activity-4

// Task-6
let api='https://api.github.com/users/IshantAhuja0'
let promApi=new Promise((res,rej)=>{
  setTimeout(()=>{
    res(fetch(api))
  },3000)
})
promApi.then((response)=>{
  return response.json()
})
.then((data)=>{
  return data.login 
})
.then((name)=>{
  console.log('fetched from linkedIn api:',name);
})
.catch((err)=>{
  console.log(err);
})

// Task-7
async function fetchApi(){
  try {
    let response=await fetch(api)
    let data=await response.json()
    let name=data.login
    console.log('using async',name);
  } catch (error) {
    console.log(error);
  }
}
fetchApi()

// Activity-5

// Task-8

const p1=new Promise((res,rej)=>{
  setTimeout(()=>{
    res('p1');
  },3000)
})
const p2=new Promise((res,rej)=>{
  res(()=>{
    res('p2');
  },2000)
})
const p3=new Promise((res,rej)=>{
  setTimeout(()=>{
    rej('p3');
  },5000)
})

Promise.all([p1,p2,p3])
.then((res)=>{
console.log(res);
})
.catch((err)=>{
  console.log('error in :',err);
})

//TAsk-9
Promise.race([p1,p2,p3])
.then((res)=>{
  console.log('race wala',res);
  })
  .catch((err)=>{
    console.log('error in :',err);
  })