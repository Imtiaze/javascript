
// before rest operators


function myFun(a, ...params)
{
    console.log(a);
    console.log(params);   // it will return a normal array unlike object
}


myFun(1, 2, 3, 4, 5);



// function myFun(...params, a) // won't work, because ... should be last formal parameter