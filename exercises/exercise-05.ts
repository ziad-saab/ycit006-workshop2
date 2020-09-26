/*
Fix the code of the function below so that it returns all the strings
in inputArray in upper case. This is similar to the previous exercise,
but this time the inputArray can contain values of any type. If the value
isn't a string, then it should be removed from the input array.

Hint: You'll need to use a type assertion
*/

export function makeStringsUppercase(inputArray: any[]): string[] {
  return (
    inputArray
    .filter(/* Remove anything that's not a string */)
    .map(/* Make the strings uppercase*/)
  );
}

// Feel free to add your own tests below these
const people = ['Alice', 4, 'Bob', 8, 'Carol', 15, 16];
const uppercasePeople = makeStringsUppercase(people);
console.log(uppercasePeople); // ALICE, BOB, CAROL