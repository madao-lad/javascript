// Break: It stops the loop immediately, passing control to the first line after the loop. 

let sum = 0;
while ("true") {
    let value = +prompt("Enter a number", '');
    if (!value) break; // bool value for empty string is false so (!false) : true so it breaks the whole loop.
    sum += value;
}
alert('Sum: ' + sum);

// Continue: stops executing the body and passes control to the next iteration of for (with the next number)

for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) continue; // if true, skip the remaining part of the body
    alert(i); // 1, then 3, 5, 7, 9
}

// LABEL-

let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // for each i...

  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  alert( i ); // a prime
}