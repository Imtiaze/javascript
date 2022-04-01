import React from 'react';
import ReactDOM from 'react-dom';

const title = 'Call Fami ly'
const description = 'loremip sum text goes here'
const date = new Date();
const day = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();

ReactDOM.render(
  <div>
    <h1>Todo app</h1>
    <h3>{title}</h3>
    <p>{ description }</p>
    <h4>{ day +'/'+ month +'/'+ year }</h4>
  </div>,
  document.getElementById('root')
);
