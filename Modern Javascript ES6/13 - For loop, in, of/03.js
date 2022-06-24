
let i = 1;

for (; ; ) {   // we can ommit from for loop like this way

    if ( i <= 5) {
        console.log(i);
    } else {
        break;
    }
    i++;
}

console.log('Now i is accessible from outside for let too: ' + i); 