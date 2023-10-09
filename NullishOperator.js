// The result of a ?? b is:
// if a is defined, then a,
// if a isn’t defined, then b
// The nullish coalescing operator ?? provides a short way to choose the first “defined” value from a list

let userInput = prompt("Enter your name","");
let userNotFound = "User Not Found";
let userName = userInput ?? userNotFound;
alert(userName);

// set height=100, if height is null or undefined
height = height ?? 100;