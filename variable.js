// variables declared with the keyword let and const are block scoped
if (true) {
    let blockScopedVar = "I'm block-scoped.";
    console.log(blockScopedVar); // Accessible inside the block
}
console.log(blockScopedVar); // Error - not accessible outside the block



let message;   // Variable declaration.
message = 'Hello';    // assigning value to the variable using assignment operator.


// A variable should be declared only once. A repeated declaration of the same variable is an error.
//      The name must contain only letters, digits, or the symbols $ and _.
//      The first character must not be a digit.


// Strict Mode
num = 5; // the variable "num" is created if it didn't exist.
"use strict";
num = 5; // error: num is not defined



// capital-named constants are only used as aliases for “hard-coded” values
const COLOR_ORANGE = "#FF7F00";
// ...when we need to pick a color
let color = COLOR_ORANGE;
alert(color); // #FF7F00


