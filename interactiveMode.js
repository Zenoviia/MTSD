const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getValue(name, callback) {
  rl.question(`Enter ${name}: `, (value) => {
    const num = Number(value);
    if (isNaN(num)) {
      console.log(`Error. Expected a valid number, got '${value}' instead.`);
      getValue(name, callback);
    } else {
      callback(num);
    }
  });
}

getValue("a", (a) => {
  getValue("b", (b) => {
    getValue("c", (c) => {
      console.log(`\nEquation is: (${a}) x^2 + (${b}) x + (${c}) = 0\n`);
      rl.close();
    });
  });
});
