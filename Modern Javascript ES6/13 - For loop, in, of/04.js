


let myObj = {
    name: 'Javascript',
    estd: '1995',
    founder: 'Brenden Eich'
}


console.log(myObj);


for (property in myObj) {
    console.log(property + ' ' + myObj[property]);
}
