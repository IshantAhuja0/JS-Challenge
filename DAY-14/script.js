// Activity-1

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello! i'm ${this.name}, I am ${this.age} year old`);
  }

  updateAge(newAge) {
    this.age = newAge;
    console.log(`Updated age: ${this.age}`);
  }
}
let person1 = new Person("ishant", 19);
person1.greet();
person1.updateAge(55);

// Activity-2

class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
    Student.noStudents++;
  }
  static noStudents = 1;
  logId() {
    console.log(`you id is ${this.studentId}`);
  }
  greet() {
    console.log(
      `Hello! i'm ${this.name}, I am ${this.age} year old . my studentId is ${this.studentId}`
    );
  }
}

let student1 = new Student("ishantAhuja", 19, 5225);
console.log(student1);

// Activity -3
class Personn {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greeting() {
    return `normal methord . hello`;
  }
  static greet() {
    return `static methord . hello `;
  }
}

console.log(Personn.greet());
// console.log(Personn.greeting());   this is not working because its a normal function and needs a instance of personn to be created

console.log(Student.noStudents);

// Activity-4

class Personnn {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
  get fullname() {
    return `${this.firstname} ${this.lastname}`;
  }
  set fullname(name) {
    const [firstname, lastname] = name.split("");
    this.firstname = firstname || "";
    this.lastname = lastname || "";
  }
}
let p = new Personnn("ishant", "ahuja");
console.log(p.firstname);
console.log(p.fullname);

// Activity-5
class Account {
  #balance;
  constructor(balance) {
    this.#balance = balance;
  }
  deposit(balance) {
    if (balance <= 0) {
      throw new Error("deposit should be greater than 0");
    }
    this.#balance += balance;
  }
  withdrawl(balance) {
    if (balance <= 0) {
      throw new Error("withdrawl should be greater than 0");
    }
    this.#balance -= balance;
  }
  getbalance(balance) {
    return `balance: ${this.#balance}`;
  }
}
const newAcc = new Account(500);
console.log(newAcc.getbalance());
newAcc.withdrawl(10);
console.log(newAcc.getbalance());
