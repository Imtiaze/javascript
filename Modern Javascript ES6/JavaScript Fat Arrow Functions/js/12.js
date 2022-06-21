
// every function in javascript is constructor

function Person(name)
{
    this.name = name;
    console.log(this.name);
}

var person = new Person('Imtiaze');


// but if we write it as arrow function it will not work, this doesn't have any value in arrow function

var Stuent = (name) => {
    this.name = name;
}

var stuent = new Stuent('Khorrom');

//  Stuent is not a constructor