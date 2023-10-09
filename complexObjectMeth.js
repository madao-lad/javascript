// Object methods available for plain objects, Object.* methods return “real” array objects.

// Object.values(obj): returns an array of value stored at keys.
// Object.keys(obj)   returns an array of keys.
// Object.entries(obj)  returns an array of [key, value] pairs.

    let object = {
        Name: "Rishav",
        Class: "College",
    };
    
    const array = Object.values(object); // An array of values
    console.log(array);

    for(let key of Object.keys(object)) {
        console.log(key);
    }

    for(let entry of Object.entries(object)) {
        console.log(entry);
    }

// transforming objects( convert it to an array than back to an object to make changes).

    let obj = {
        milkId: 60,
        biscuitId: 200,
        mayoId: 180,
        soyabeanId: 40,
        meatId: 500,
    }

    let doublePricedObj = Object.fromEntries(
        Object.entries(obj).map( element => [element[0], element[1] * 2])
    );

    console.log(doublePricedObj);

// Object.fromEntries(array, map)

    const smArray = [
        ['bread',"butter"],
    ];

    let olObject = Object.fromEntries(smArray);

    console.log(olObject);


//---------------------------------------------------CODE------------------------------------------------------------//

// There is a salaries object with arbitrary number of salaries.

// Write the function sumSalaries(salaries) that returns the sum of all salaries using Object.values and the for..of loop.

// If salaries is empty, then the result must be 0.

// For instance:

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
  console.log( sumSalaries(salaries) ); // 650
  
  function sumSalaries(object) {
      return Object.values(object).reduce((value, Element) => value + Element);
  }