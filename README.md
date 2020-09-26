# Working with array methods in TypeScript

In this workshop, you'll practice working with array methods in TypeScript. You'll do this both by reading code, fixing bugs in existing code, and writing your own code.

## Getting Started
Either download this repository as a zip file and extract it, or clone it using Git. Then, move to the directory containing the files you extracted/cloned, and run `npm install`. Then, go through each of the exercises in the `exercises` directory and follow the instructions. The following instructions apply to *all* exercises:

* No red squiggles! Some exercises will have red or yellow squiggles to inform you of a warning or an error. Sometimes you'll introduce your own squiggles by trying to solve an exercise. There's one simple rule: **an exercise isn't completed if there are any squiggles, even if the "code works".**
* Use the inference! TypeScript is really good at inferring types. While adding a manual type annotation where it would otherwise be inferred correctly isn't an error, it's not recommended. Again, one simple rule: **an exercise isn't correct if there are manual type annotations in places where inference would work correctly, even if the "code works".**
* Don't touch the test code! Many of the exercises have test code below the instructions. This test code will be commented with the expected output. The test code is always correct: you'll never have to modify it.

## Testing your code
You can run:

```sh
npx ts-node exercises/exercise-XX.ts
```

to test your solution. If there are any TypeScript errors in your code, then the code will not execute. If you'd like to execute your code despite any errors, run it like this:

```sh
npx ts-node --log-error exercises/exercise-XX.ts
```

This will still print the TypeScript errors, but will not prevent the code from compiling and executing.