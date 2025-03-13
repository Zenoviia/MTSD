const interactiveMode = require("./interactiveMode.js");
const notInteractiveMode = require("./notInteractiveMode.js");

const args = process.argv;

if (args.length === 3) {
  notInteractiveMode();
} else if (args.length === 2) {
  interactiveMode();
} else {
  console.log("Error: Invalid number of arguments.");
  process.exit(1);
}
