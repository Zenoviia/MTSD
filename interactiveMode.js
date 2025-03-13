const quadraticEquationSolver = require("./main.js");

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a: ", (aStr) => {
  const a = Number(aStr);
  if (isNaN(a)) {
    console.log(`Error. Expected a valid number, got '${aStr}' instead.`);
    rl.close();
    return;
  }

  console.log(`You entered a = ${a}`);
  rl.close();
});
