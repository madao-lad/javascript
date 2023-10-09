let userAgeAuth = prompt("Enter your age");

if(userAgeAuth>=18){
    console.log("Hey!");
}
else {
    console.log("You are not allowed");
}

let resultAuth = (userAgeAuth>=18) ? console.log("Hey! welcome."): console.log("You're not allowed.");

let result = (userAgeAuth<15) ? "Hi baby!":
            (userAgeAuth<25) ? "Hey Bro!":
            (userAgeAuth<100) ? "Hey Gentleman!":
            "What an unusal age.";

alert(result);

// if (age < 3) {
//     message = 'Hi, baby!';
//   } else if (age < 18) {
//     message = 'Hello!';
//   } else if (age < 100) {
//     message = 'Greetings!';
//   } else {
//     message = 'What an unusual age!';
//   }

let login = prompt("Your designation");
let message = (login == 'Employee') ? 'Hello' :
            (login == 'Director') ? "Greetings":
        (login == "") ? "No login":
            "";
alert(message);

// let message;
// if () {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

