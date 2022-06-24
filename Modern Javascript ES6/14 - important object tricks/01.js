


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


let keys = Object.keys(object);
let key = Object.keys(object.libraries);
let key1 = Object.keys(object.es);

console.log(keys, key, key1);