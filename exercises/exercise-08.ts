/*
Read the documentation of Array.prototype.concat here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

Next, complete the code of the concat function below so that it acts
the same way as concat, but for only one value to keep things simpler.
You're not allowed to use Array.prototype.concat to complete this exercise.
*/

export function concat(inputArray: any[], valueToConcat: any): any[] {
  if (Array.isArray(valueToConcat)) {
    /*...*/
  } else {
    /*...*/
  }
}

// Test code
const numbers = concat([4, 8, 15], [16, 23, 42]);
console.log(numbers); // [4, 8, 15, 16, 23, 42]

const letters = ['A', 'B', 'C'];
const moreLetters = concat(letters, 'D');
console.log(moreLetters); // [A, B, C, D]
console.log(letters === moreLetters); // false