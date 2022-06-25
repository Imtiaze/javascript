


// Object destructing

const user = {
    id: 339,
    name: 'Ahammed Imtiaze',
    age: 26,
    // education: {
    //     degree: {
    //         BCSE: 'Bachelor of Computer Science and Engineering',
    //         BEEE: 'Bachelor of Electrical Engineering'
    //     }
    // }
};


// If the property is not exist, and we try to access, on that case, programm will fail
// In that case we can provide a default object

let {education: { degree : { BCSE : degree } = {} } = {} } = user;

console.log(degree);


// Program will crash, return with undefined;