// As we already know, a function in JavaScript is a value.

// Every value in JavaScript has a type. What type is a function?

// In JavaScript, functions are objects.


// NAME PROPERTY

sayHi = () => {
    return sayHi.name;
}

console.log(sayHi());

// object methods have name too

let object = {
    sayUser(){
        return "Hey";
    }
}

console.log(object.sayUser.name);



// LENGTH PROPERTY: returns the number of function parameters, rest parameter isn't counted.

console.log(object.sayUser.length);

let sum = function( val01, val02, ...rest) {
    let result = 0;
    for(let element of rest) {
        result += element;
    }
    
    return val01 + val02 + result;
}

console.log(sum.length); // rest parameter isn't counted.



// CUSTOM PROPERTIES: We can also add properties of our own.

// Here we add the count property to track the total calls count

function countNum() {
    countNum.count++;
}

countNum.count = 0;

countNum();
countNum();

console.log(`Count has been called ${countNum.count} times.`);


//____________________________________________________CODE___________________________________________________________//\


// Modify the code of makeCounter() so that the counter can also decrease and set the number:
// counter() should return the next number (as before).
// counter.set(value) should set the counter to value.
// counter.decrease() should decrease the counter by 1.
// See the sandbox code for the complete usage example.

// P.S. You can use either a closure or the function property to keep the current count. Or write both variants.

function makeCounter() {
    if (typeof makeCounter.counter === 'undefined') {
        makeCounter.counter = 0;
    }
    makeCounter.counter++;
    
    makeCounter.counter.set = function(val) {
         makeCounter.counter = val;
    };
    makeCounter.counter = function() {
        let num = makeCounter.counter;
        return num + 1;
    };
    makeCounter.counter.decrease= function() {
        makeCounter.counter--; 
    }
}

makeCounter.counter = 0;

makeCounter();
makeCounter();

console.log(`Count has been called ${makeCounter.counter} times.`);
