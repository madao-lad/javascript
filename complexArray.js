// Array is an object and thus behaves like an object

let arr = ["RISHAV",
    function rishav() { return "rishav"; },
    { Name: "rishav" },
    true,
    [10,1000,100],
];

console.log(arr[2].Name);

console.log(arr.at(-1));

console.log(arr[arr.length - 1]);

console.log(arr.at(0));

console.log(arr[4][1]);



let array = ["This", "Rishav", "has",];

for (let initial = 0; initial <= array.length - 1; initial++) {
    console.log(array[initial]);
}

array.push("got", "this.", "bro"); // adds an element at the end of an array.

array.shift(); // Removes the first element and returns it.

array.unshift("i", "know");  // adds at beginning ofadds element at the end of array. an array.

array.pop();   // Extracts the last element of the array and returns it.

for (let element of array) {
    console.log(element);
}

// Array is copied by reference.

//----------------------------------------------------CODE--------------------------------------------------------------//

// Create an array styles with items “Jazz” and “Blues”.
// Append “Rock-n-Roll” to the end.
// Replace the value in the middle with “Classics”. Your code for finding the middle value should work for
//       any arrays with odd length.
// Strip off the first value of the array and show it.
// Prepend Rap and Reggae to the array.
// Output should be something like this:
    // Jazz, Blues
    // Jazz, Blues, Rock-n-Roll
    // Jazz, Classics, Rock-n-Roll
    // Classics, Rock-n-Roll
    // Rap, Reggae, Classics, Rock-n-Roll

let arrs = ['Jazz', "Blues"];
console.log(arrs.push("rock-n-roll"));

function addData(Array, value) {
    Array[(Array.length/2-1).toFixed(0)]= value;
    return Array;
}
console.log(addData(arrs, "Classics"));

console.log(arrs.shift());

console.log(arrs.unshift("Rap", "Reggae"));



/// Write the function sumInput() that:
// Asks the user for values using prompt and stores the values in the array.
// Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
// Calculates and returns the sum of array items.
// P.S. A zero 0 is a valid number, please don’t stop the input on zero.

function sumInput() {
    let arr = [];
    let result = 0;
    while(true){
        let number = prompt("Enter a number", 0);

        if(number=== null || number === "" || !isFinite(number)) break;
        
        arr.push(+number);
    }

    for( let num = 0; num< arr.length; num++){
        result += arr[num];
    }

    alert(`Num:${result}`);
}

sumInput();