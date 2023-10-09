//  where a function calls itself in order to solve a problem.
const arr = [];
console.log(Array.isArray(arr));

//------------------------------------------------------------CODE------------------------------------------------------//

// The task is to write a function factorial(n) that calculates n! using recursive calls.
// console.log( factorial(5) ); // 120
// P.S. Hint: n! can be written as n * (n-1)! For instance: 3! = 3*2! = 3*2*1! = 6

function factorial(n) {
    if(n === 0) return 1;
    else return n * factorial(n-1);
}

console.log(factorial(5));


// The sequence of Fibonacci numbers has the formula Fn = Fn-1 + Fn-2. In other words, the next 
    // number is a sum of the two preceding ones.
// First two numbers are 1, then 2(1+1), then 3(1+2), 5(2+3) and so on: 1, 1, 2, 3, 5, 8, 13, 21....
// Fibonacci numbers are related to the Golden ratio and many natural phenomena around us.
// Write a function fib(n) that returns the n-th Fibonacci number.
// An example of work:

function fibs(n) {
    return n <= 1 ? n : fibs(n - 1) + fibs(n - 2);
  }
  
  console.log( fib(3) ); // 2
  console.log( fib(7) ); // 13
  // fib(77); // will be extremely slow!

  
function fib(n) {
    let num01 = 1;
    let num02 = 1;
    let result;
    for(let num = 3; num <= n; num++ ) {
        result = num01 + num02;
        num02 = num01;
        num01 = result;
        
    }
    return result
}

console.log(fib(3)); // 2
console.log(fib(7)); // 13
console.log(fib(77)); // 5527939700884757



// Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.

// For instance:

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6

function sumTo(n) {
    let value = (n == 1)? 1: n + sumTo(n-1);
    return value;
}

console.log(sumTo(100));