

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


let result = array.findIndex((currentValue, index, array) => {
    return currentValue == 10;
});


console.log(result);