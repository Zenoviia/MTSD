"use strict";

const quadraticEquationSolver = (a, b, c) => {
  const D = Math.pow(b, 2) - 4 * a * c;
  const sqrtD = Math.sqrt(D);

  if (D > 0 || D === 0) {
    const x1 = (-b + sqrtD) / (2 * a);
    const x2 = (-b - sqrtD) / (2 * a);
    return `There are 2 roots\nx1 = ${x1}\nx2 = ${x2}`;
  }
};
