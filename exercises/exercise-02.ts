/*
Complete the code of the printPositiveNumbersEvenInsideStrings function
below. The function should accept an array of arbitrary elements. For
each element, check if the element is a positive number, and if it is,
print it as:

Found positive number: X!

If the element is a string, the function should try to parse it as a
number. The parsing should only succeed if the string contains *only*
a number. In that case, it should be treated the same way as the
equivalent number.
*/

export function printPositiveNumbersEvenInsideStrings(inputArray) {
  inputArray.forEach(/*...*/);
}

// Feel free to add your own tests below these
printPositiveNumbersEvenInsideStrings([-4, '8', -15, -16, 23, 42]); // 8, 23, 42
printPositiveNumbersEvenInsideStrings(['hello123', '45.6', 5, '-10']); // 45.6, 5
printPositiveNumbersEvenInsideStrings([{ num: 1 }, -1, '-5']); // nothing