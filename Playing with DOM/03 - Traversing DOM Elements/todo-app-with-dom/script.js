/*
 * Title: To Do Application using vanilla JS DOM
 * Description: This JS file has all the JS functions necessary to control the to do application
 * Author: Ahammed Imtiaze (From Learn with Sumit )
 * Date: 16 July, 2022
 *
 */



let headerElement = document.getElementById('header');

// Header headerElement is HTML element or object, if we console log this

console.dir(headerElement);

// We can use any property or methods
headerElement.style.color = 'red';
headerElement.style.fontSize = '50px';




console.log(`${headerElement.textContent} ${headerElement.innerText}`);

// output
// To-Do App TO-DO APP
// textContent = To-Do App // provide the content of html element
// innerText = TO-DO APP    // provide the content of the browser

// Change the text property
headerElement.textContent = 'Yes Apps';
headerElement.innerText = 'TO-DO APPS';

// console.log(headerElement);


// To get the HTML
console.log(headerElement.innerHTML)