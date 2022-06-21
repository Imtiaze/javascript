
const searchInput = document.querySelector('.search');
const display = document.querySelector('.result');
const thanks = document.querySelector('.thanks');

/*  
function show()
{
    display.innerHTML = this.value;
    // Expected result wouldn't display aas we are calling this in built in setTimeout function
    setTimeout(function() {
        thanks.innerHTML = `You have type: ${this.value}`;
    }, 1000);

}

*/

// We can eleminate this problem with

// function show()
// {
//     console.log(this);
//     display.innerHTML = this.value;

//     var self = this.value
//     setTimeout(function() {
//         thanks.innerHTML = `You have type: ${self}`;
//     }, 1000);

// }


// lets see after converting in arrow function
/*
var show = () => {
    display.innerHTML = this.value; // arrow function never cares about - this
}
*/
searchInput.addEventListener('keyup', show);


// Expected result wouldn't display aas we are calling this in built in setTimeout function
