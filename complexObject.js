// Creation of objects
let newObject = {}; //"object literal" syntax
let lateObject = new Object(); //"object constructor" syntax

// Properties key: value,
let user = {
    userName: "Rishav",
    school: "APS",
    "Likes chicken": "yes",
};

console.log(user.userName);
console.log(user["Likes chicken"]); //For multiword properties, the dot access doesn’t work:

let Property = "Likes to lift weight"; // same as user["Likes to lift weight"] = "yes";
user[Property] = "yes"; 

// delete
delete user.school;
delete user["Likes chicken"];

// Property value shorthand
let makeUser = (userName, Age, Drive) => {
    return {
        userName,
        Age,
        Drive,
    };
}
let user1 = makeUser( 'Rishav', 19, 'Mustang');

// Property existence test, “in” operator
let userInfo = {
    Name: "Rishav",
}
console.log(userInfo.Age === undefined);// True

console.log("Name" in userInfo); //"key" in object, true as Name exists inside userInfo
console.log("Age" in userInfo); // false, as it doesn't exsits

// To walk over all the keys of the object, there exists special form of the loop for...in

for(let userInform in user1){       // we can use any other variable here instead of userInform
    console.log( userInform + ":"); // prints all the keys
    console.log(user1[userInform]); // prints all the values stored at those keys.
}

