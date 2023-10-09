// !(NOT) Operator 
// The operator accepts a single argument and does the following:
// Converts the operand to boolean type: true/false.
// Returns the inverse value.

// !! prints the bool value of variable i.e. false for “empty”, 0, an empty string, null, undefined, and NaN.


let valueInt = prompt("enter a number greater than 5", "");
if (valueInt >= 5 && !!valueInt) {
    alert("its five");
}