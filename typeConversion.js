// String conversion
let userAge = 19;
console.log(typeof userAge); // Number
userAge = String(userAge);
console.log(typeof userAge); // String

// Numeric conversion
console.log("6" / "2"); // 3, strings are converted to numbers
let str = "123";
console.log(typeof str); // String
let num = Number(str); // becomes a number 123
console.log(typeof num); // number

// Boolean conversion
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("hello")); // true
console.log(Boolean("")); // false
// False - Values that are intuitively “empty”, like 0, an empty String, null, undefined, and NaN, become false.