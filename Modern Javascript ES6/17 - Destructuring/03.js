


// Object destructing

const user = {
    id: 339,
    name: 'Ahammed Imtiaze',
    age: 26,
    education: {
        degree: {
            BCSE: 'Bachelor of Computer Science and Engineering',
            BEEE: 'Bachelor of Electrical Engineering'
        }
    }
};


let {education: {degree: {BCSE: degree}}} = user;

console.log(degree);