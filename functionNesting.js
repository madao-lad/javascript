// We have a built-in method arr.filter(f) for arrays. It filters all elements through the function f.
// If it returns true, then that element is returned in the resulting array.

// Make a set of “ready to use” filters:

// inBetween(a, b) – between a and b or equal to them (inclusively).
// inArray([...]) – in the given array.
// The usage must be like this:

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2

function inBetween(numOne, numTwo) {
    return function(element) {
        return numOne <= element && numTwo >= element;
    }
}

function inArray(array) {
    return function(element) {
        return array.includes(element);
    }
}
//____________________________________________________________________________________________________________________//

console.log(numberOne(50)(60));

function numberOne(a) {

    return function (b) {
        return a + b;
    }
}

//____________________________________________________________________________________________________________________//

function Count(){
    let count = 0;

    return function() {
        return count++;
    }
}

let counter = Count();

counter();
counter();
counter();

console.log(counter());

//____________________________________________________________________________________________________________________//

