const quadraticEquationSolver = require("./main.js");

const filePath = process.argv[2];

if (!filePath) {
  console.log("Error: Please enter a path to the file.");
  process.exit(1);
}
