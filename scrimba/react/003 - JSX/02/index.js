const page = (
    <div>
        <h1 className="header">This is JSX</h1>
        <p>This is paragraph</p>
    </div>
);


console.log(page);

ReactDOM.render(
    page,   
    document.getElementById('root')
);