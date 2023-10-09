let userIdentity = prompt("Who's there?", "");

if(userIdentity=="Admin") {
    let password = prompt("Password","");
    if(password === "TheMaster") {
        alert("Welcome!");
    }
    else if(password ==="" || password===null){
        alert("Cancel!");
    }
    else{
        alert("Wrong password")
    }
}
else if(userIdentity === "" || userIdentity===null){
    alert("Cancel!");
}
else{
    alert("I don't know you")
}