/*
Fix the code of the function below so that it returns all the strings
in inputArray in upper case.

Array.prototype.map is a method used for creating a new array by transforming
each element from the original array. The transformation is done by a function
that takes a single element, and returns the new element.
*/

export function makeStringsUppercase(inputArray: string[]): string[] {
  return inputArray.map(/*...*/);
}

// Feel free to add your own tests below these
const people = ['Alice', 'Bob', 'Carol'];
const uppercasePeople = makeStringsUppercase(people);
console.log(uppercasePeople); // ALICE, BOB, CAROL