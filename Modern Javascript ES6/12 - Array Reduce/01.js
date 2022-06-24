
let array = [1, 2, 3, 4, 5, 6];


let number = array.reduce((previousValue, currentValue) => {    // return only one number after whole operation
    // console.log(previousValue + ' ' + currentValue);
    return previousValue + currentValue;
}, 0); // if default value provided like 0, then previous value is 0 and current value is 1 , if not provided previous value 1, current value 2


let a;
let n = a + 3 + 6;
console.log(a + ' ' + n);

console.log(number);