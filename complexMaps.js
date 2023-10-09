// The main difference between Map and objects is that map allows key on any data type.

    const newMap =  new Map(); // Map declaration

    newMap.set("1", "daiki")
        .set(2, "Daiki")
        .set(true, "might");

    console.log(newMap.get(true));

    let newmap = new Map([   //  we can pass an array of [key, value];
        ["1", "HAHA he"],
        [1, "Rishav"],
        [true, "Daiki"]
    ])

// Map can also use objects as keys

    let object = {
        Name: "Rishav",
    };

    let map = new Map();

    map.set( object, 123);

    console.log(map.get(object));

// Iteration over map using (for of)

    let numap = new Map();

    numap.set(1, "rishav")
        .set("12", "twelve")
        .set(true, "yes");

    for(let elements of numap.keys()){
        console.log(elements);
    }

// Iteration over maps (return iterables)

    // To loop over keys
    for(let keys of numap.keys()){
        console.log(keys);
    }

    // To loop over values stored in keys
    for(let values of numap.values()){
        console.log(values);
    }

    for(let entry of numap.entries()) {  // numap.entries() is same as numap
        console.log(entry);
    }

    const arry = numap.keys();
    console.log(arry);


// OBJECT TO  MAP: Object.entries(obj).

    let obj = {
        Name: "Rishav",
        Age: 19,
    };

    let someMap = new Map(Object.entries(obj));

    for(let entry of someMap.entries()){
        console.log(entry);
    }


// MAP TO OBJECT: Object.fromEntries(obj).

    let oldMap = new Map([
        [1, 'First'],
        [true, 'yes'],
        ["2", 'second'],
    ])

    let newObject = Object.fromEntries(oldMap);  // omits oldMap.entries().

    console.log(newObject);



