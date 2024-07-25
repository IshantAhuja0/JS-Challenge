//Activity-1

//Task-1
let book={
  title:'the enemy',
  author:'steve charles',
  year:'2003',
}
console.log(book);

//Task-2
console.log(book.title);
console.log(book.author);
book.author='charles steve'
console.log(book.author);

//Activity-2

//Task-3
book.displayBook= function(){
  return (`${book.title} is a novle written by ${book.author} in ${book.year}`);
 }
 console.log(book.displayBook());

//  Task-4
book.updateYear=function(year){
book.year=year
}

book.updateYear(2002)
console.log(book);

//Activity-3

//Task-5
let library={
books:[
  {
    title:'the thief',
    author:'charles steve',
    year:'2003'
  },
  {
    title:'the enemy',
    author:'charles naruto',
    year:'2003'
  },
  {
    title:'the king',
    author:'ishant ahuja',
    year:'2005'
  }
]
}
console.log(library);

// Task-6
library.books.map((book)=>{
  console.log(book.title);
})

// Activity-4

// Task-7 
book.str=function(){
  return (`${this.title} by ${this.author}`)
}
console.log(book.str());

// Activity-5

// Task-8
for (const prop in book) {
  if (Object.hasOwnProperty.call(book, prop)) {
    const element = book[prop];
    console.log(prop);
    console.log(element);
  }
}

// Task-9
console.log(Object.keys(book));
console.log(Object.values(book));