
 

import React from 'react';
import { Editor } from 'slate-react';
import { Value, ValueJSON,ValueProperties } from 'slate';
import PropTypes from 'prop-types';
import { EDITOR_INITIAL } from '../constants';
 
//import { Provider } from 'react-redux';

//const initialValue = Value.fromJSON({ ...EDITOR_INITIAL });

const initial = {
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
}


const initialState = {
  placeholder: "Some placeholder....."
}

type AppProps = {
    value: ValueProperties|ValueJSON;
    children: JSX.Element[]
    
}
type AppState = {
    value: ValueProperties|ValueJSON;
    
}

export default class App extends React.Component<AppProps, AppState> {
    // Set the initial value when the app is first constructed. 
    state: AppState = {
      value: Value.fromJSON({})
    }
      //props: AppProps;
  ​   //state: AppState

  /*
  constructor(props){ 
    super(props);
    this.state = {
      value: Value.fromJSON({})
    }
  }*/
    //constructor(props: AppProps){ this.setState({ value: initialValue }); }
    // On change, update the app's React state with the new editor value.
    onChange = ({ value }) => {
      this.setState({ value })
    }

    componentDidMount(){
      console.log("componentDidMount", this.state);
      //const v: ValueJSON = initial;
      const editorValues = Value.fromJSON(initial as ValueJSON);
      this.setState({ value: editorValues });
    }
    componentDidUpdate(){
      console.log("componentDidUpdate", this.state);
    }
    componentDidCatch(error, info) {
      this.setState({ error, info })
    }
  ​
    // Render the editor.
    render() {
        return <main>
            <div>
                <h1>Header 1</h1>
                <p>111111111</p>
                <p>AAAAAAAAA</p>
                <Editor value={Value.fromJSON({})} onChange={this.onChange} />
            </div>
        </main>
      

    }
  }




