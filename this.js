// A method can use "this" keyword to access the object.
let user = {
    Name: 'Rishav',
    sayHi() {
        // "this" is the "current object"
        console.log("Hey! " + this.Name); // user.name : this.name
    }
};

user.sayHi(); // Hey! rishav

// calling "this" without an object
// In this case this is undefined in strict mode or global
function sayHi() {
    alert(this); 
  }
  
sayHi(); // undefined


//--------------------------------------------------------CODE----------------------------------------------------------//


// Create an object calculator with three methods:
    // read() prompts for two values and saves them as object properties with names a and b respectively.
    // sum() returns the sum of saved values.
    // mul() multiplies saved values and returns the result. 
    

let calculator = {
    read(){
        this.a = +prompt("Enter values for a","");  //JavaScript allows you to create object properties dynamically
        this.b = +prompt("Enter values for b",""); // + right before prompt changes string into numeric value
    },
    sum(){
        return this.a + this.b;
    },
    mul(){
        return this.a * this.b;
    },

};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );