// Refer: https://www.freecodecamp.org/news/javascript-lexical-scope-tutorial/

//------------------------------------------------CODE------------------------------------------------------------------//


// The function sayHi uses an external variable Name. When the function runs, which value is it going to use?

    let Name = "John";

    function sayHi() {
    alert("Hi, " + Name);
    }

    Name = "Pete";

    sayHi(); // what will it show: "John" or "Pete"?


    // The answer is: Pete.
    // A function gets outer variables as they are now, it uses the most recent values.
    // Old variable values are not saved anywhere. When a function wants a variable, 
    // it takes the current value from its own Lexical Environment or the outer one.