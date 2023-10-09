// undefined means a variable has been declared but has not yet been assigned a value
undefined;
console.log(typeof undefined); // "undefined"


// null is an assignment value. It can be assigned to a variable as a representation of no value
let rishav = null;
console.log(typeof null);  // Object



// For maths and other comparisons < > <= >=
// null/undefined are converted to numbers: null becomes 0, while undefined becomes NaN
console.log( null > 0 );  // (1) false
console.log( null == 0 ); // (2) false
console.log( null >= 0 ); // (3) true

console.log( undefined > 0 ); // false (1)
console.log( undefined < 0 ); // false (2)
console.log( undefined == 0 ); // false (3)

// There’s a special rule. These two are a “sweet couple”: they equal each other 
// (in the sense of ==), but not any other value.
console.log( null == undefined ); // true
console.log( null === undefined ); // false
