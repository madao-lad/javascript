// We’ve got a method sayHi of the object user using function declaration.
let user = {
    Name: "Rishav",
}

function sayHi() {
  console.log("Hi! " + this.Name);
}

user.sayHi = sayHi;
user.sayHi(); // Hi! Rishav


// Method shorthand
let object = {
    Name: "Daiki",
    sayHello: function(){
        console.log("Hello! " + this.Name);
    }
}
object.sayHello(); // Hello! Daiki


let userProfile = {
    Name: "Rishav",
    Age: 18,
    sayHeya(){
        console.log("Heya! "+ this.Name);
    }
}
userProfile.sayHeya(); //Heya! Rishav