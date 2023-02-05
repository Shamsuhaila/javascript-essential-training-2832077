/**
 * Working with functions
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 */

// Function declaration:
function doSomeMath(a, b) {
  let c = a + b;
  return c;
}

// Function expression:
const doMoreMath = function (a = 3, b = 2) {
  let c = a * b;
  return c;
};

console.log("Do some math:", doSomeMath(5, 6));
console.log("Do more math:", doMoreMath(5, 6));

// Immediately Invoked Function Expression (IIFE)
// (function () {
//   let a = 4;
//   let b = 6;
//   let c = doSomeMath(a, b);
//   console.log(`The sum of a and b is: ${c}`);
// })();

const DoSomething = function (x = 12, y = 4) {
  z = x + y;
  return z;
};

console.log("What is this", DoSomething());

const a = function () {
  return 100;
};

console.log("function a", a());

function second(z, y) {
  x = z - y;
  return x;
}

console.log("function second returns", second(100, 80));
