/*
 * Title: To Do Application using vanilla JS DOM
 * Description: This JS file has all the JS functions necessary to control the to do application
 * Author: Ahammed Imtiaze (From Learn with Sumit )
 * Date: 16 July, 2022
 *
 */



// The method console.dir() displays an interactive list of the properties of the specified JavaScript object. The output is presented as a hierarchical listing with disclosure triangles that let you see the contents of child objects.

// In other words, console.dir() is the way to see all the properties of a specified JavaScript object in console by which the developer can easily get the properties of the object.
console.dir(document);

// It's an object
console.log(typeof(document));


// Getting the Properties
console.log(document.title);
console.log(document.URL);

// Though it's look like string, but it is an object
console.log(document.head);
console.log(typeof(document.head));