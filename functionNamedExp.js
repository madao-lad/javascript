// There are two special things about the name func, 
    // It allows the function to reference itself internally.
    // It is not visible outside of the function

let sayHi = function func(userName) {
    if(userName) {
        return `Hey! ${userName}`;
    }
    else return func("Guest");
}

console.log(sayHi());

let sayHey = sayHi;

sayHi =  null;

console.log(sayHey());

