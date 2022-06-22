

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result = array.filter((currenctValue, currentIndex, arr) => {
    return currenctValue % 2 == 0;
});

console.log(result);
console.log(array);