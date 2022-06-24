

// problem with copying one array to another, copied by referrence, so one value change in the array change value of another array


let number = [1, 2, 3, 4, 5];

let a = number;

a.push(6);
number.push(7);

console.log(a);
console.log(number);



// But if we use spread operator  to remove this issu 


let b = [...number];

b.push(8);

console.log(b);
console.log(number);



