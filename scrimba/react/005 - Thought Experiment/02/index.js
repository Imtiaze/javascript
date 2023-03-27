/**
Challenge: fix our code!

Don't forget, you're not using CDNs anymore, so there's no
global "ReactDOM" variable to use anymore.
 */
const page = (
    <div>
        <h1 className="header">This is JSX</h1>
        <p>This is paragraph</p>
        <ul><li>first item</li></ul>
        <input value="Input Value"></input>
        <input type="submit" value="Input Value"></input>
        
    </div>
);


ReactDOM.render(page, document.getElementById('root'));


// JSX returns plain javascript Object. At this point (object) there is nothing to do with the DOM nor recognized by the browser. Now react dom can take this javascript object and interpret them into real DOM elements so the browser can understand them.

/*

{
    "type":"div",
    "key":null,
    "ref":null,
    "props":{
       "children":[
          {
             "type":"h1",
             "key":null,
             "ref":null,
             "props":{
                "className":"header",
                "children":"This is JSX"
             },
             "_owner":null,
             "_store":{
                
             }
          },
          {
             "type":"p",
             "key":null,
             "ref":null,
             "props":{
                "children":"This is paragraph"
             },
             "_owner":null,
             "_store":{
                
             }
          },
          {
             "type":"ul",
             "key":null,
             "ref":null,
             "props":{
                "children":{
                   "type":"li",
                   "key":null,
                   "ref":null,
                   "props":{
                      "children":"first item"
                   },
                   "_owner":null,
                   "_store":{
                      
                   }
                }
             },
             "_owner":null,
             "_store":{
                
             }
          },
          {
             "type":"input",
             "key":null,
             "ref":null,
             "props":{
                "value":"Input Value"
             },
             "_owner":null,
             "_store":{
                
             }
          },
          {
             "type":"input",
             "key":null,
             "ref":null,
             "props":{
                "type":"submit",
                "value":"Input Value"
             },
             "_owner":null,
             "_store":{
                
             }
          }
       ]
    },
    "_owner":null,
    "_store":{
       
    }
 }

 */