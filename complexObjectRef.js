// Objects are assigned and copied by reference. In other words, a variable stores not 
// the “object value”, but a “reference” (address in memory) to the value. 
// So copying such a variable or passing it as a function argument copies that reference, not the object itself.

// When an object is copied, its reference is copied.
// We can use either variable to access the object and modify its contents
let object01 = {
    name: "Linda", 
}
let object02 = object01; // both excess the same reference for the value.

// how to clone an object
let obj1 = {
    name: 'Rishav',
};
let obj2 = {};
for(let key in obj1){
    obj2[key] = obj1[key];
}

// Method Object.assign(destination, source01, source02) to clone 
let obj3 = Object.assign({}, obj2); // cloning, we can use a variable here instead of object literal "{}"
console.log(obj3);

// structured cloning slash nested cloning
let object = {  
    Name: "rishav",
    Age: 20,
    "Net value": 20_000_000,
    BMI: {      // Properties can be references to other objects.
        "Body weight": 60,
        Height: 5,
    }
}
let clone = Object.assign( {}, object); // Object.BMI is an object, and will be copied by reference

object.BMI["Body weight"] = 63;
console.log(object.BMI["Body weight"]);  // since they refer to same variable, the value changed 
console.log(clone.BMI["Body weight"]);   // for both cases i.e. 63.

// Enter structuredclone(object) clones the object with all nested properties
let clone2 = structuredClone(object);
console.log(clone2);

object.BMI["Body weight"] = 80;
console.log(object.BMI["Body weight"]);  // 80
console.log(clone2.BMI["Body weight"]);  // 63

// structuredClone(object)

    let newObj = {
        Name: "Daiki",
        class : "College",
        BMI: {
            bodyWeight: 80,
            height: 180,
        }
    }

    let secNewObj = structuredClone(newObj);

    for(let key in secNewObj){
        console.log(`${key} : ${secNewObj[key]}`);
    }