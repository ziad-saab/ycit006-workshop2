/*
Complete the code of the function below. The function should accept
an array and a function as arguments, and return an array of all
elements of the input array where the passed function returned true
*/

export function filterArray(inputArray: any[], testFunction) {
  inputArray.filter(/*...*/);
}

/* Test code */
const numbers = [-1, 5, -10, 20];
const isPositive = (n: number) => n > 0;
const positiveNumbers = filterArray(numbers, isPositive);
console.log(positiveNumbers); // 5, 20