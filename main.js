"use strict";

const quadraticEquationSolver = (a, b, c) => {
  const D = Math.pow(b, 2) - 4 * a * c;
  const sqrtD = Math.sqrt(D);

  if (D > 0) {
    const x1 = (-b + sqrtD) / (2 * a);
    const x2 = (-b - sqrtD) / (2 * a);
    return `There are 2 roots\nx1 = ${x1}\nx2 = ${x2}`;
  }

  if (D === 0) {
    const x1 = -b / (2 * a);
    return `There is 1 root\nx1 = ${x1}`;
  }

  if (D < 0) {
    return "There are no roots, D < 0";
  }
};

module.exports = quadraticEquationSolver;
