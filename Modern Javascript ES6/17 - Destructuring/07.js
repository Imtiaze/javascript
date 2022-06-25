

//  Array Destructuring

var numbers =  [1, 2, [3, 100, 500], 4, 5, 6, 7];

var [, , [x, a, ,], , , , b] = numbers;

console.log(x, a, b);