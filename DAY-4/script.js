// Activity-1

// Task-1
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Task-2
for (let i = 1; i <= 10; i++) {
  console.log(i + `*5 : ` + i * 5);
}

// Activity-2

// Task-3
let i = 1;
let sum = 0;
while (i < 11) {
  sum += i;
  i++;
}
console.log(sum);

//Task-4
let j = 10;
while (j > 0) {
  console.log(j);
  j--;
}

// Activity-3

// Task-5
let l = 1;
do {
  console.log(l);
  l++;
} while (l < 6);

//Task-6
let fact = 6;
let ssum = 1;

do {
  ssum *= fact * (fact - 1);
  fact -= 2;
} while (fact >= 1);
console.log(ssum);

// Activity-4

// Task-7
for (let i = 1; i <= 5; i++) {
  let pattern = " ";
  for (let j = 1; j <= i; j++) {
    pattern += "*";
  }
  console.log(pattern);
}

// Activity-5

// Task-8
for (let i = 1; i < 11; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
}

//Task-9
for (let i = 1; i < 11; i++) {
  if (i == 7) {
    break;
  }
  console.log(i);
}
