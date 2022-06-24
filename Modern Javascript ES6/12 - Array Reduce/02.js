

let array = [1, 2, 3, 4, 5, 6];

let number = array.reduce((previousValue, currentValue, currentIndex, arr) => {   
    console.log('previousValue: ' + previousValue + ' currentValue: ' + currentValue + ' currentIndex: ' + currentIndex + ' arr: ' + arr);
    return previousValue + currentValue;
}, 0); // if default value provided like 0, then previous value is 0 and current value is 1 , if not provided previous value 1, current value 2

console.log(number);