// Object properties, besides a value, have three special attributes(so called flag)

// PROPERTY FLAG-

// writable
// if true, the value can be changed, otherwise it's read only.

// enumerable
// if true, then listed in loop, otherwise not listed.

// configurable
// if true, then property can be deleted and these attributes can be modified, otherwise not.



let object = {
    Name: "Rishav",
};

let descriptor = Object.getOwnPropertyDescriptor(object, "Name");

console.log(descriptor);

/* property descriptor: values and all the flags
{
  value: 'Rishav',
  writable: true,
  enumerable: true,
  configurable: true
}
*/

let newObj = {};

Object.defineProperty(newObj, "Name", {
    value: 'Anthony',
});

let descriptor01 = Object.getOwnPropertyDescriptor(newObj, "Name");

console.log(descriptor01);

/*
{
  "value": "Anthony",
  "writable": false,
  "enumerable": false,
  "configurable": false
}
*/ 

// All flags are flasy as defineProperty() creates the value if it's not there


// Writable: the value can't be modified/reassigned to a key if writable is set to false.

let anotherObj = {};

Object.defineProperty(anotherObj, "Name", {
    value: "Rishav",   // writable is set to false by default
    configurable: true, // we need to explicitly list what's true
    enumerable: true,
});

anotherObj.Name = "Daiki";  // writable is false

console.log(anotherObj);


// Enumerable when set to false the value associated won’t appear in a 'for..in loop' and 'for...of loop'.

let secObject = {
    Name: "Rishav",
    sayHey: function(){
        return `Hey ${this.Name}!`
    },
};

Object.defineProperty(secObject, "sayHey", {
    enumerable: false, // setting enumerable to false for a value gets it skipped while looping over
});

for(let key in secObject) {
    console.log(key);  // sayHey disappears
}

// Configurable: when set to false, cannot modify or delete that property using property assignment or the delete operator

// Making a property non-configurable is a one-way road. We cannot change it back with defineProperty

// Other Property Attributes Are Still Modifiable

let thirdObj = {};

Object.defineProperty(thirdObj, "Name", {
    value: 'Rishav',
    writable: true,
    enumerable: true,

});

delete thirdObj.Name; // Delete won't work

Object. defineProperty(thirdObj, "Name", {    
    // configurable: true,  // Cannot Change Configurable Status.
});

console.log(thirdObj);


//  Forvever sealed constant 

let userName = {
    Name: 'rishav',
};

Object.defineProperty(userName, "Name", {
    configurable: false,
    writable: false,
});

userName.Name = "Daiki";
delete userName.Name;

console.log(userName);


//  Object.defineProperties(object{key{prop}, key{prop}});
// Object.getOwnPropertyDescriptors(Obj);

let userData = {
    Name: "Rishav",
    Class: "college",
    Section: "1",
    Role: "CO",
};

Object.defineProperties(userData,{
    Name: { writable: false},
    Class: {configurable: false},
    Role: {value: "CEO"}
});

let valDescriptor = Object.getOwnPropertyDescriptors(userData);

console.log(valDescriptor);

