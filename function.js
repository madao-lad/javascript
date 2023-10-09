// #Function Declaration (store a function in the sayHi variable)

  function sayHi() {
    alert( "Hello" );
  }

// #Function Expression (store a function in the sayHey variable)
  // The semicolon ; is recommended at the end of the statement, it’s not a part of the function syntax.
  
  let sayHey = function(){
    alert("Hello !");
  };

// #Arrow function
  
  let sum = (a, b) => {  // the curly brace opens a multiline function
    let result = a + b;
    return result; // if we use curly braces, then we need an explicit "return"
  };
  let add = (a, b) => a + b; // For single line function.


// 

// #Callback function
  // The arguments showOk and showCancel of ask are called callback functions or just callbacks.
  // The idea is that we pass a function and expect it to be “called back” later if necessary

  function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }

  function showOk() {
    alert( "You agreed." );
  }

  function showCancel() {
    alert( "You canceled the execution." );
  }

  ask("Do you agree?", showOk, showCancel); // usage: functions showOk, showCancel are passed as arguments to ask

// #Constructor Function: Functions used to create objects with the new keyword.
  // They are named with capital letter first.
  // They should be executed only with "new" operator.
  
  function User(name) {
    // this = {};  (implicitly)

    // add properties to this
    this.name = name;
    this.isAdmin = false;
  
    // return this;  (implicitly)
  }
  const person = new User("John");



// #A function is a value and an object

  function sayHeya() {
    alert( "Hello" );
  }
  
  alert( sayHeya ); // shows the function code



// global Function Declaration is visible in the whole script, no matter where it is.
    // And after all Function Declarations are processed, the code is executed  
    sayHi("John"); // Hello, John
    function sayHi(name) {
      alert( `Hello, ${name}` );
    }
    // Function Expressions are created when the execution reaches them. That would happen only in the line (*). Too late.
    sayHi("John"); // error!
    let sayHi = function(name) {  // (*) no magic any more
      alert( `Hello, ${name}` );
    };
  

