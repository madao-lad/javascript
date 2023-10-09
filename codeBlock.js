{
    // first codeblock

    let name = "Rishav";

    console.log(name);
}

// If a variable is declared inside a code block {...}, it’s only visible inside that block.

{
    // second codeblock

    let name = "Daiki";

    console.log(name);
}

// For if, for, while and so on, variables declared in {...} are also only visible inside.

if (true) {
    let phrase = "Hello!";
  
    console.log(phrase);
  }
  
  console.log(phrase); // Error, no such variable!