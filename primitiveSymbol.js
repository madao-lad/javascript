// Declaration of Symbol()
let id = Symbol("id");  // id is a symbol with the description "id"
// User[id] = 100;    Adds id named symbol property to User object

let User = {
    Name: "Rishav",
    sayhi: function() {
        console.log("Hey! " + this.Name)
    },
    [id]: 1000000,  // A symbol in an object literal {...}, we need square brackets around it.
}

// Object stores values in form of number and string

    let symb = Symbol("id");

    let Object = {
        Name: "Rishav",
        Class: 2023,
        LOGIN: "Yes",
        [symb]: 1000000,
    };

    console.log(typeof Object[symb]);


// Symbols are guaranteed to be unique. 
// Even if we create many symbols with exactly the same description, they are different values.

    let symbol00 = Symbol("id");
    let symbol01 = Symbol("id");

    console.log(symbol00 === symbol01);  // False


        
// [Symbol.For] We can create symbols in it and access them later,
//  and it guarantees that repeated accesses by the same name return exactly the same symbol

    let symbol02 = Symbol.for("id");
    let symbol03 = Symbol.for("id");

    console.log(symbol02 === symbol03);  // True



// Symbol.KeyFor(symbol) spits out the description of the symbol
// returns a symbol by name

console.log(Symbol.keyFor(symbol03));  // id

// -----------------------------------------------------CODE------------------------------------------------------------//

let lib = {
    name: "ABC",
};

lib["id"] = 5;
lib["id"] = 6; // The value is changed because it is String [KEY]!!

lib[Symbol("id")] = 123;
lib[Symbol("id")] = 124; // Not changed

console.log(lib); // { name: "ABC", id: 6, Symbol(id): 123, Symbol(id): 124 }

