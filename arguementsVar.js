// There is also a special array-like object named arguments that contains all arguments by their index.

// But the downside is that although arguments is both array-like and iterable, it’s not an array. 
// It does not support array methods, so we can’t call arguments.map(...) for example.

function argueUse(){
    for(let element of arguments){   // iterable
        console.log(element);
    };
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
}

console.log(argueUse(199,23));