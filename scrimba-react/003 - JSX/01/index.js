const h1 = document.createElement("h1")
h1.textContent = "Hello world"
h1.className = "header"
console.log(h1)

// it return 

{/* <h1 class="header">Hello world</h1> */}


const element = <h1 className="header">This is JSX</h1>
console.log(element)

// {$$typeof: Symbol(react.element), type: 'h1', key: null, ref: null, props: {…}, …}
// $$typeof: Symbol(react.element)
// key: null
// props: {className: 'header', children: 'This is JSX'}
// ref: null
// type: "h1"
// _owner: null
// _store: {validated: false}
// _self: null
// _source: null
// [[Prototype]]: Object

// JSX
ReactDOM.render(element, document.getElementById("root"))