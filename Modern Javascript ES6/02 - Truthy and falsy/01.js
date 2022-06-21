
// Javascript only return false on this explicit 


//    false, 0, "", null, undefined, NaN


let isFalse = false;
let isZero = 0;
let isEmpty = "";
let isNull = null;
let isUndefined = undefined;
let isNotaNumber = NaN;

if (! isFalse) {
    console.log('is False');
} else {
    console.log('true');
}

if (! isZero) {
    console.log('zero');
} else {
    console.log('true');
}

if (! isEmpty) {
    console.log('empty');
} else {
    console.log('true');
}

if (! isNull) {
    console.log('is Null');
} else {
    console.log('true');
}

if (! isUndefined) {
    console.log('isUndefined');
} else {
    console.log('true');
}

if (! isNotaNumber) {
    console.log('isNotaNumber');
} else {
    console.log('true');
}