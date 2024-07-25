// Activity-1

// Task-1
let tag=document.getElementById('tag');
tag.innerHTML='chai aur code | Javascript challenge'

// Task-2
let colorr=document.querySelector('.color')
// colorr.style.background='red'

// Activity-2

// Task-3
let body=document.getElementById('body')
let newDiv=document.createElement('div');
newDiv.innerText='appended div'
body.appendChild(newDiv)

// Task-4
let ul=document.querySelector('ul')
let li=document.createElement('li');
li.innerText='appended list';
ul.appendChild(li)
ul.appendChild(li)

// Activity-3

// Task-5
body.removeChild(newDiv)

// Task-6

//  let rbtn=document.getElementById('rbtn')

function remove(){
  let list=document.querySelector('.list ul li')
  // list.remove(lastElementChild)
  list.remove()
}

// Activity-4

// Task-7
image=document.querySelector('#image')
function changeImg(){
  image.setAttribute("src","https://static1.michael84.co.uk/wp-content/uploads/how-to-measure-yourself-mens-fashion-michael84-912x912.jpg")
}

// Task-8
let clr=document.getElementById('clr')
colorr.setAttribute("class","changeBack")
function clrChange(){
  colorr.setAttribute("class","changeBackred")
}

// Activity-5

// Task-9
let p=document.querySelector('#para')
function changeText(){
p.innerText='text changed'
}

// Task-10
function changeBdr(){
  p.setAttribute('Id','red')
}