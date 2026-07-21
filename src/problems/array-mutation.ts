/*
So the precise statement is:

JavaScript passes everything by value. For objects and arrays, the value being copied is a reference to the object.

That's why mutating the object works, but reassigning the parameter doesn't affect the caller.
 */

function modify(arr: number[]) {
    arr[0] = 99;      // mutates shared object
}

function replace(arr: number[]) {
    arr = [99, 99];   // rebinds local variable
}

const x = [1, 2];

modify(x);
console.log(x); // [99, 2]

replace(x);
console.log(x); // still [99, 2]
