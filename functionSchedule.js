// let timerId = setTimeout(function, delay, arg01, arg02);

function sayHey(first, last) {
    console.log(`Hey! ${first} ${last}`);
}

setTimeout(sayHey, 2000, "Rishav", "Bhatt"); // sayHey's reference works

// we can also use arrow function instead of them

let num = setTimeout(() => { console.log("Never gets executed"); }, 2000); // anonymous function

clearTimeout(num);

// cancel with clearTimeout

let examNum = setTimeout(function name() { console.log("What\'s up") }, 3000); // Named function

clearTimeout(examNum); // function isn't even executed



// let repeatID = setInterval(function, delay, arg01, arg02);

let count = 0;

let anum = setInterval(function () {
    console.log("loading...");
    count++;
    if (count === 10) {
        clearInterval(anum); // Clear the interval when count reaches 10
    }
}, 200);



// setTimout for repeatation
// Nested setTimeout allows to set the delay between the executions more precisely than setInterval

let randVal = setTimeout(function alertt() {
    console.log("Hey");
    randVal = setTimeout(alertt, 1000);
}, 1000)

let delay = 5000;


// For instance, we need to write a service that sends a request to the server every 5 seconds
//  asking for data, but in case the server is overloaded, it should increase the interval to 10, 20, 40 seconds…

let timerId = setTimeout(function request() {
    "...send request..."

    if ("request failed due to server overload") {
        // increase the interval to the next run
        delay *= 2;
    }

    timerId = setTimeout(request, delay);

}, delay);


//There’s a special use case: setTimeout(func, 0), or just setTimeout(func).

// This schedules the execution of func as soon as possible. But the scheduler 
// will invoke it only after the currently executing script is complete.

let i = 0;

setTimeout(() => alert(i), 100); // 100000000

// assume that the time to execute this function is >100ms
for(let j = 0; j < 100000000; j++) {
  i++;
}


//__________________________________________________CODE______________________________________________________________//

// Write a function printNumbers(from, to) that outputs a number every second, starting from from and ending with to.

// Make two variants of the solution.

// Using setInterval.

function printNumbers(from, to) {
    let initial = from;
    let timerID2 = setInterval(()=>{
        console.log(initial);
        if(initial == to) {
            clearInterval(timerID2);
        }
        initial++;
    },1000)
}

printNumbers(10,15);

// Using nested setTimeout.

function printNumbers( from, to) {
    let initial = from;

    let timerID1 = setTimeout(funName=()=>{
        console.log(initial);
        timerID1 = setTimeout(funName,1000);
        if(initial == to){
            clearTimeout(timerID1)
        }
        initial++;
    },1000)
}

printNumbers(10,20);