

let array = [11, 22, 33, 44, 55];



let slice = array.slice(0, 3);

console.log(slice);
console.log(array);

let anotherSlice = array.slice(-2, 4);

console.log(anotherSlice);

/* 
output: 

[ 11, 22, 33 ]
[ 11, 22, 33, 44, 55 ]
[ 44, 55 ]
*/

let whatWillBeTheOutputOfThis = array.slice(-1, 4);
console.log('whatWillBeTheOutputOfThis: ' + whatWillBeTheOutputOfThis);

let alsoThis = array.slice();
console.log(alsoThis);

/* 
output :

[11, 22, 33, 44, 55] 

*/