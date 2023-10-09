const arr = ["First", "Second", "second", "Fifth"];

// arr.splice(start, deleteCount, elem1, ..., elemN)

    arr.splice(1, 1, "Third", "fourth");

    arr.splice(5, 0, "Sixth") // Adds without deleting element.

    console.log(arr);



// array.slice() to copy the entire array, while array.slice([start],[end]);

    const nameorg = ["Rishav", "Daiki"];

    const nameCopy = nameorg.slice();  // Copies the array perfectly.

    console.log(nameCopy);


// sort(): sorting function

    const fruits = ["Banana", "Apple", "Strawberry", "Mango"];
    console.log(fruits.sort()); // alphabetically sorting.

    const numbers = [10000, 2300, 550, 990];
    console.log(numbers.sort());  // The items are sorted as strings by default. "2"> "1000"

    function compareNumeric(a, b) {
        if (a > b) return 1;
        if (a == b) return 0;
        if (a < b) return -1;
      }
      
      let arrr = [ 1, 2, 15 ];
      
      arrr.sort(compareNumeric);
      
      console.log(arrr);  // 1, 2, 15


// Searching for an element: array.search(function(item, index, array))

    const users = [
        {ID: 1, Name: "Rishav"},
        {ID: 2, Name: "Daiki"},
        {ID: 3, Name: "Haha"},
        {ID: 4, Name: "Nevermind"},
    ];

    const userArray = users.find(item => item.ID == 2 ); // function gets executed for each element in the users array
      // item representing each element of the users

    console.log(userArray.Name);    // find method returns element for which the condition become true 


// If there may be many, we can use arr.filter(fn)

    const anArray = [
        { id: 1, Name: "rishav" },
        { id: 2, Name: "Bastard" },
        { id: 3, Name: "douchebag" },
        { id: 4, Name: "pirk" },
    ];

    const anoArray = anArray.filter(element => element.id >= 3);

    console.log(anoArray);



//  array.forEach( function( item, index, array ));

    const array = [ 10, 20, 30 ];

    array.forEach(item => console.log(item)); // logs for every value


// array.map(function()) calls the function for each element of the array and returns the array of results
//   When we need to iterate and return the data for each element – we can use map

    const newray = ["Daiki", "Rishav", "NWA"];

    const latray = newray.map((element, index) => {
        return {
            index: index + 1,
            Name: element,
        }
    })
    console.log(latray);

    
    const defArray = [
        {ID: 1, Name: "Rishav"},
        {ID: 2, Name: "Daiki"},
        {ID: 3, Name: "Tame"},
        {ID: 4, Name: "Pala"},
    ];
    const upArray = defArray.map(element => element.Name.length);

    console.log(upArray);

// array.join("glue");

    const sarray = ["you", "don\'t", "give", "a", "shit", "about",];
    const warray = sarray.join(" ");
    
    console.log(warray);


// arr.reduce(function(accumulator, item, index, array) {
//         }, [initial]);)
// -used to calculate a single value based on the array

    const arram = [10, 20, 30, 40];

    let valuee = arram.reduce((result, element) =>  result + element, 0)

    console.log(valuee);


// array.includes(num), return true if the value is found otherwise, return false

const newArray = [100, 200, "Rishav", "Class", "FUCK"];

console.log(newArray.includes(100));

// console.log(newArray.includes(100 "Rishav")); // true

//----------------------------------------------------CODE---------------------------------------------------------------//


