import React,{useState, useReducer} from 'react';
import {
  HashRouter,
  Link as RouterLink,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { Button, MaskedRouterLink, Toolbar, Icon, 
  TabList, Link, LinkList, Title, Nav, 
  Warning, Example, RouteContainer 
} from './components';
import { 
  RichTextEditor
} from './components';

const components = [
  { name: 'Rich Text Editor', component: RichTextEditor, path: '/rich-text' }
];





interface IState { 
  error:  { [k:string]: any; stack: any } | null; 
  info:  { stack: any} | null;  
}
class App extends React.Component<{}, IState> {

  state = {
    error: null, //{ stack: null},
    info:  null //{ stack: null},
  }

  componentDidMount(){
    this.setState({
      error: { stack: null },
      info: { stack: null },
    });
    //console.log("state", this.state);
  }

  componentDidCatch(error, info) {
    this.setState({ error, info })
  }

  renderWarning(){
    console.log("RENDER WARNING:", this.state);
    return (
      <Warning>
        <p>
          An error was thrown by one of the example's React components!
        </p>
        <pre>
          <code>
            {this.state.error["stack"]}
            {'\n'}
            {this.state.info["stack"]}
          </code>
        </pre>
      </Warning>
    )
  }

  renderExample(){
    console.log("RENDER EXAMPLE:", this.state);
    return (
      <Example>
        <Switch>
          {components.map(
            ({ name, component, path }) => <Route key={path} path={path} component={component} />
          )}
          <Redirect from="/" to="/rich-text" />
        </Switch>
      </Example>
    )
  }

  render() {
    return (
      <HashRouter>
        <div>
          <Nav>
            <Title>Slate Examples</Title>
            <LinkList>
              <Link href="https://github.com/ianstormtaylor/slate">GitHub</Link>
              <Link href="https://docs.slatejs.org/">Docs</Link>
            </LinkList>
          </Nav>
          <TabList>
            {components.map(
              ({ name, component, path }) => RouteContainer({ path })
            )}
          </TabList>
          {this.renderExample()}
        </div>
      </HashRouter>
    )
  }
}

export default App;