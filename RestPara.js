//  REST PARAMETERS: 

// When ... is at the end of the function parameters, it’s “rest parameters” and
//  gathers the rest of the list of arguments into an array

function gatherName(firstName, lastName, ...others) {
    console.log(firstName + lastName);
    console.log(others);
}
gatherName("Rishav", "Bhatt", "Everything", "else", "gets", "stored here");

// (...) literally means gather the remaining parameters into an array.


// SPREAD SYNTAX-
    // When ... occurs in a function call or alike, it’s called a “spread syntax” and expands an array into a list
    
    const array = [10, 20 ,30 ,40, 50];
    
    console.log(Math.max(array));
    
    console.log(Math.max(...array));
    
    
    // is used to combine array-
    const arr1 = [100, 200, 300];
    const arr2 = [400, 500, 600];

    const mergArray = [...arr1, ...arr2];

    console.log(mergArray);
    

    // Used to copy array and object

    const arr = [100, 300, 500];

    const arrcopy = [...arr];

    let object = {
        Thing: 1,
        Thing2: 2,
        "I can fly": 3,
    };

    let newObject = {...object};

    console.log(newObject);


//----------------------------------------------------CODE--------------------------------------------------------------//


function sumOf(...arr) {
    let sum = 0;
    for(let element of arr){
        sum += element;
    }
    return sum;
}

console.log(sumOf(1,2,3,4,5));