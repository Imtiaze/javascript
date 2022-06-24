


let object = {
    name: "Javascript",
    estd: '1995',
    founder: 'Brendan Eich',
    ranking: 1,
    libraries: {
        vue: 'vue', react: 'react', angular: 'angular'
    },
    es: [
        2009, 2015, 2016, 2018
    ]
};


let value1 = Object.entries(object);
let value2 = Object.entries(object.libraries);
let value21 = Object.entries(object.es);

console.log(value1, value2, value21);