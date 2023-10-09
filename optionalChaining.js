// (?.) stops the evaluation if the value before ?. is undefined or null and returns undefined

let User = {};

console.log(User.address); // undefined

// console.log(User.address.Street); // Error,  as user.address is undefined.

console.log(User?.address?.Street); // undefined

// # Usage-
// For example, if according to our code logic user object must exist, but address is optional,
//  then we should write user.address?.street, but not user?.address?.street.


// The optional chaining ?. syntax has three forms:
        // obj?.prop – returns obj.prop if obj exists, otherwise undefined.
        // obj?.[prop] – returns obj[prop] if obj exists, otherwise undefined.
        // obj.method?.() – calls obj.method() if obj.method exists, otherwise returns undefined