// create a function from a string


// let str = ... receive the code from a server dynamically ...

// let func = new Function(str);
// func();


let add = new Function('a', 'b', 'return a+b');

console.log(add(100, 200));
