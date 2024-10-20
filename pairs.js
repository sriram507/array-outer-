// Practice work:
// WAP to print number of pairs formed by the array of numbers

// input: 10 20 10 30 20 20

// output: 2

// input: 30 50 30 50 20 50 50 20 50 50 50
// pairs: 5

// let arr = [10, 20, 10, 30, 20, 20];
// let count = 0;
// let seen = {};
// for(let i = 0; i < arr.length; i++) {
//   if(seen[arr[i]]) {
//     count++;
//     seen[arr[i]] = false;
//   } else {
//     seen[arr[i]] = true;
//   }
// }

// console.log(count);





let arr = [30, 50, 30, 50, 20, 50, 50, 20, 50, 50, 50];
let count = 0;
let seen = {};

for(let i = 0; i < arr.length; i++) {
  if(seen[arr[i]]) {
    count++;
    seen[arr[i]] = false;
  } else {
    seen[arr[i]] = true;
  }
}

console.log(count);