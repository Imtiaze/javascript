

// A variable can be assigned a default, in the case that the value unpacked from the array is undefined.

let a, b;

[a, b = 2] = [1];

console.log(a + ' ' + b);