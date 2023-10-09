// How an array is destructed into variables

const array = [ 100, 200, 300];

let [First, , Third] = array; // skips the second one

console.log(First);

// Use of rest parameter with array destruction - 

let[ Name, IDK, ...rest] = ["Rishav", "you'll never", "First", "Second"];

console.log(rest);


// Object destruction into variables let {var1, var2} = {var1:…, var2:…}

let object = {
    name: "Rishav",
    Standard: 12,
    Work: "Software Developer",
};

let {name, Standard, Work} = object;

console.log(name);


// if we want to assign a property to a variable with another name  we can use

let newObject = {
    First: 1,
    Second: 2,
    third: 3,
};

let { First: Firstvalue, Second: SecondVarHold, third} = newObject;

console.log(Firstvalue);
console.log(SecondVarHold);
console.log(third);


// Destructing within loop (for array of objects)

const userID = [
    {id: 1},
    {id: 2},
    {id: 3},
];

for(let {id} of userID) {
    console.log(id);
}

// with functions 

let username = { id: 1000, Name: "Rishav"};

function getname({ID, userName}) {
    return `Hey ${Name}`;
}

console.log(getname(username));
