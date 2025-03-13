const quadraticEquationSolver = require("./main.js");

const fs = require("fs");

const filePath = process.argv[2];

if (!filePath) {
  console.log("Error: Please enter a path to the file.");
  process.exit(1);
}

fs.access(filePath, fs.constants.F_OK, (err) => {
  if (err) {
    console.log(`file ${filePath} does not exist`);
  } else {
    const fileData = fs.readFileSync(filePath, "utf-8").trim();

    const [aStr, bStr, cStr] = fileData.split(" ");
    const a = Number(aStr);
    const b = Number(bStr);
    const c = Number(cStr);

    const functionCall = quadraticEquationSolver(a, b, c);
    console.log(
      `Equation is: (${a}) x^2 + (${b}) x + (${c}) = 0\n`,
      functionCall
    );
  }
});

if (a === 0) {
  console.log("Error. a can not be equal to 0");
  process.exit(1);
}

if (values.length !== 3 || !values.every((val) => !isNaN(Number(val)))) {
  console.log("invalid file format");
  process.exit(1);
}
