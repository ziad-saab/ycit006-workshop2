/*
Fix the code of the function below so that it matches the signature. The
function should return an array with all positive numbers passed to it.

Hint: you'll need to use a *type assertion* to complete this exercise

Array.prototype.filter is a method used for creating a new array that contains
elements from the initial array that pass a certain filter. The filter is
defined as a function that accepts a single element, and returns either
true or false. Elements for which the function returns true will be part
of the returned array.
*/

export function getPositiveNumbers(inputArray: any[]): number[] {
  inputArray.filter(el => typeof el === "number" && el < 0);
}

// Feel free to add your own tests below these
const posNumbers = getPositiveNumbers([-4, '8', -15, -16, 23, 42]);
console.log(posNumbers); // 23, 42