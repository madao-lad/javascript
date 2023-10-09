// double precision floating point numbers

let billion = 1_000_000_000;  // Same as 1000000000 (syntactic sugar)

let bilion = 1e9; // 1e9 : 1 and 9 zeroes

let million = 1e6;  // 1 and six zero

let microsecond = 1e-6;  // 0.000_001 one millionth1 billion, literally

console.log(0.1 + 0.2 == 0.3);


// Rounding the nearest integer
    
    // num.toFixed(digits): rounds the number to n digits after the point and 
    // returns a string representation of the result.
    let number = 100.108;
    console.log( +number.toFixed(2)); // + makes it a number again

    // For rounding it to two digit number
    let randNum = 30.2365;
    console.log(Math.round(randNum*100)/ 100);  // 30.24

// Tests 

    //  isNaN() converts argument to a number and then tests it for being NaN
    console.log(isNaN("str"));  // True
    console.log(isNaN("10"));  // False
    console.log(NaN === NaN)  // False

    // isFinite(value) converts its argument to a number and returns true if it’s a regular number,
    //  not NaN/Infinity/-Infinity
    console.log(isFinite('str'));  // False
    console.log(isFinite('10'));  // True
    console.log(isFinite(Infinity));  // False
    

// parseInt/parseFloat
// They “read” a number from a string until they can’t
parseInt("100px");  // 100
parseFloat("12.72384 px");  // 12.72384 
console.log(parseInt('rishav'));  // NaN


// num.toString(base) returns a string representation of num in the numeral system with the given base

let num = 255;

console.log( num.toString(16) );  // ff
console.log( num.toString(2) );   // 11111111



// Internally the decimal fraction 6.35 is an endless binary.
//  As always in such cases, it is stored with a precision loss.
console.log( 6.35.toFixed(20) );
// hence 6.3

//----------------------------------------------------CODE-------------------------------------------------------------//

// Create a function readNumber which prompts for a number until the visitor enters a valid numeric value.
// The resulting value must be returned as a number.
// The visitor can also stop the process by entering an empty line or pressing “CANCEL”. 
// In that case, the function should return null.

function readNumber() {
    let num;
  
    do {
      num = prompt("Enter a number please?", 0);
    } while ( !isFinite(num) );
  
    if (num === null || num === '') return null;
  
    return +num;
  }
  
  console.log(`Read: ${readNumber()}`);