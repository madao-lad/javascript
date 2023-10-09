// Syntax of self invoking function, they don't have a name 

// A self-invoking expression is invoked (started) automatically, without being called.

(function (parameters) {})(); // anonymous self invoking function


// A normal function

function num() {
    return function someFunc() {
        return "Hey Rishav!"
    };
}

console.log(num());

// An anonymous self invoking function

function numbers() {
    return (function(){
        return "Hey Rishav";
    })();
}

console.log(numbers());

