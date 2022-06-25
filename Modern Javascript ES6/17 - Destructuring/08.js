

// swaping

let a = 5, b = 3;

// old style
let temp = a;
a = b;
b = temp;

console.log(a, b);


[b, a] = [a, b];

console.log(a, b);
