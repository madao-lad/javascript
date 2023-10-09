// Here are two conventions though:
    // They are named with capital letter first.
    // They should be executed only with "new" operator.

function User(name, age) {
    this.Name = name;
    this.Age = age;
    this.sayHi = function () {  // We can add methods as well.
        console.log("sayHi");
    }
}

// what happens under the hood.
function Users(name) {
    // this = {};  (implicitly)
  
    // add properties to this
    this.name = name;
    this.isAdmin = false;

    // return this;  (implicitly) 
  }

let rishav = new User("Rishav", 19); 
//  Constructor functions should only be called using new.
//  Such a call implies a creation of empty this at the start
//  and returning the populated one at the end.



// --------------------------------------------------------CODE------------------------------------------------------- //

// Create a constructor function Accumulator(startingValue).
// Object that it creates should:
    // Store the “current value” in the property value. 
    // The starting value is set to the argument of the constructor startingValue.
    // The read() method should use prompt to read a new number and add it to value.
// In other words, the value property is the sum of all user-entered values with the initial value startingValue.
// Here’s the demo of the code:
        // let accumulator = new Accumulator(1); // initial value 1
        // accumulator.read(); // adds the user-entered value
        // accumulator.read(); // adds the user-entered value
        // alert(accumulator.value); // shows the sum of these values



function Accumulator(startingValue) {
    this.value = startingValue;
  
    this.read = function() {
      this.value += +prompt('How much to add?', 0);
    };
  
  }
  
  let accumulator = new Accumulator(1);
  accumulator.read();
  accumulator.read();
  console.log((accumulator.value));


//__________________________________________________________________________________________________________________//

function Constructor(name, title, car, weight, height){
  this.Name = name;
  this.Title = name;
  this.car = name;
  this.BMI = {};
  this.BMI.height = weight;
  this.BMI.weight = height;
};

let newobj = new Constructor( 'Rishav', 'CEO', 'Lambo', 65, 180);

for(let key in newobj){
    console.log(newobj[key]);
}
