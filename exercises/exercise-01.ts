/*
Complete the code of the printPositiveNumbers function below. The function
should accept an array of arbitrary elements, check if the element is a
positive number, and if it is, print it as:

Found positive number: X!

Array.prototype.forEach is a method used for looping over all the elements
of an array, and execute a function for each element. forEach doesn't return
anything, and it doesn't expect the function that's passed to it to return
anything either. It's only used for side effects.
*/

export function printPositiveNumbers(inputArray) {
  inputArray.forEach(/*...*/);
}

// Feel free to add your own tests below these
printPositiveNumbers([-4, '8', -15, -16, 23, 42]); // 23, 42
printPositiveNumbers(['hello123', 5]); // 5
printPositiveNumbers([{ num: 1 }, -1, 5]); // 5