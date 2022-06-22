

let numbers = [1, 2, 3, 4, 5, 6, 7, 10];


let result = numbers.find(function(currentValue) {
    return currentValue > 4;
});

console.log(result);