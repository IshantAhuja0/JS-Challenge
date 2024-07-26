
// Activity-1

// Task-1
import  {add} from './modules/moduleAdd.js'
console.log(add(5,12));

//  Task-2
import {person} from './modules/moduleObj.js'
person.logVal()

// Activity-2

// Task-3
import {Add,divide,multiply} from './modules/manyFunModules.js'
console.log(divide(25,5));

// Task-4
import subtract from './modules/defaultModule.js';
console.log(subtract(10,8))

// Activity-3

// Task-5
// in this operation the * is used to import all functions together along with 'as' keyword
// and this all is enclosed in an object called'functions'
import * as functions from './modules/manyFunModules.js'
console.log(functions.multiply(5,6));

// Activity-4

// Task-6
// command to install lodash- npm install lodash
import _ from "lodash"
let arr=[1,2,85,34,96,12,75]
console.log('last value arr',_.last(arr));
console.log('head value arr',_.head(arr));
console.log('head value arr',_.sum(arr));
//these are some popular functions from lodash module

// Task-7
import axios from 'axios'
async function fetchApi(){
let response=await axios.get("https://api.github.com/users/IshantAhuja0");
let user=response.data
console.log(user);
}
fetchApi()