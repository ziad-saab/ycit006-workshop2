/*
The code below looks like it should output "John was found at index 0".
Unfortunately, when executing this code in its current form, we get
"John was not found..." instead.

Array.prototype.indexOf is a method that accepts a value as its input,
and returns the index of that value in the array. If the value is
not found in the array, then indexOf returns -1.

First, read the description of indexOf here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf#Description

and explain why we're not getting the expected result.

Then, read the documentation for Array.prototype.findIndex here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex

and fix the code in getPersonIndex below using findIndex appropriately.
*/

interface Person {
  firstName: string;
  lastName: string;
}

const people = [
  {
    firstName: 'John',
    lastName: 'Smith',
  },
  {
    firstName: 'Jane',
    lastName: 'Smith',
  }
];

export function getPersonIndex(p: Person) {
  return people.indexOf(p);
}

// Test code
const johnIndex = getPersonIndex({ firstName: 'John', lastName: 'Smith'});
if (johnIndex >= 0) {
  console.log(`John was found at index ${johnIndex}`);
} else {
  console.log('John was not found...');
}