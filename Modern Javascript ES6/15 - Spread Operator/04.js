

// We can also use this for object


let myObj1 = {
    x: 1,
    y: 2,
    c: {
        m: 5,
        n: 6,
    }
};

let myObj2 = {
    a: 3,
    b: 4,
};


console.log({...myObj1, ...myObj2});