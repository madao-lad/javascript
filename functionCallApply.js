// With the call() and apply() method, you can write a method that can be used on different objects

// function call: func.call(context, ...arguements)

let printName = {
    sayHey: function () {
        return `Hey ${this.firstName} ${this.lastName}!`
    }
}

function fullName(salutation) {
    return `${salutation} ${this.firstName} ${this.lastName}!`;
}

let object = {
    firstName: "Rishav",
    lastName: "Bhatt",
};

// Using function
console.log(fullName.call(object, "Heyaaaa"));

// Using object method
console.log(printName.sayHey.call(object));


// The only syntax difference between call and apply is that call expects a list of arguments,
//  while apply takes an array-like object with them


// function apply: function.apply(contect, arguements)

function add(...arg) {
    result = 0;
    for(let elements of arg) {
        result += +elements;
    }
    return result;
}

let newobj = {
    "Rishav": 90000,
    "Daiki": 100000,
    "Akash": 30000,
    "Relevant": 10000,
};

function retArray(obj) {
    let array = [];
    for(let value of Object.values(obj)) {
        array.push(value);
    }
    return array;
}

console.log(add.apply(newobj, retArray(newobj)));


// Passing all arguments along with the context to another function is called call forwarding

function originalFunction(arg1, arg2) {
    var result = arg1 + arg2;
    return result;
}

function forwardingFunction(arg1, arg2) {
    // Do something before calling the original function
    console.log("Before calling originalFunction");

    // Call the original function and forward all arguments using 'apply'
    var result = originalFunction.apply(this, arguments);

    // arguements var: contains all arguments by their index
    
    console.log("After calling originalFunction");

    return result;
}

// Call the forwarding function
var result = forwardingFunction(2, 3);
console.log("Result:", result);





