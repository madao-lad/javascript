// Object properties, besides a value, have three special attributes(so called flag)

// writable
// if true, the value can be changed, otherwise it's read only.

// enumerable
// if true, then listed in loop, otherwise not listed.

// configurable
// if true, then property can be deleted and these attributes can be modified, otherwise not.

let object = {
    Name: "Rishav",
    Class: 2022,
};

let descriptor = Object.getOwnPropertyDescriptor(object, "Name");

Object.defineProperty(object, "Name");

console.log(descriptor);