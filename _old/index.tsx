import React from 'react';
import ReactDOM from 'react-dom';
//import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './components/app';
import { Value } from 'slate';
const initialValue = require('./value.json');
/*
const initialValue = Value.fromJSON({
    document: {
      nodes: [
        {
          object: 'block',
          type: 'paragraph',
          nodes: [
            {
              object: 'text',
              leaves: [
                {
                  text: 'A line of text in a paragraph.',
                },
              ],
            },
          ],
        },
      ],
    },
});*/

//React.createElement("div", { id: "root"});
(() => {
    try {
        const root = document.createElement("div");
        root.setAttribute("id", "root");
        window.document.body.appendChild(root);
        
        ReactDOM.render(<App value={Value.fromJSON(initialValue)}/>, document.getElementById('root'));
        
    } catch(err){ console.log(err);}
})();
