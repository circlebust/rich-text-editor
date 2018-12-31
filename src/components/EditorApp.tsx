import React,{useState, useReducer} from 'react';
import styled from '@emotion/styled';
import {
  HashRouter,
  Link as RouterLink,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import RichText from './RichText';
import { Nav, Title, 
  TabList, Link, LinkList, 
  Toolbar, Icon, Menu, Button,
  MaskedRouterLink, Tab, Wrapper

} from './smallComponents';



const components = [
  { name: 'Rich Text', component: RichText, path: '/rich-text' }
];





const routeContainer = ({ path }) => (
  <Route key={path} exact path={path}>
    {({ match }) => (
      <Tab to={path} active={match && match.isExact}>{name}</Tab>
    )}
  </Route>
);
 


const Example = styled(Wrapper)`
  background: #fff;
`

const Warning = styled(Wrapper)`
  background: #fffae0;

  & > pre {
    background: #fbf1bd;
    white-space: pre;
    overflow-x: scroll;
    margin-bottom: 0;
  }
` 

interface IState { 
  error:  { [k:string]: any; stack: any } | null; 
  info:  { stack: any} | null;  
}
export default class EditorApp extends React.Component<{}, IState> {
  /**
   * Initial state.
   *
   * @type {Object}
   */

  state = {
    error: null, //{ stack: null},
    info:  null //{ stack: null},
  }

  componentDidMount(){
    this.setState({
      error: { stack: null },
      info: { stack: null },
    });
    console.log("state", this.state);
  }

  componentDidCatch(error, info) {
    this.setState({ error, info })
  }

  renderWarning(){
    console.log("RENDER renderWarning", this.state);
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

  /**
   * Render the example app.
   *
   * @return {Element}
   */
  renderExample(){
    console.log("RENDER EXAMPLE", this.state);
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
              ({ name, component, path }) => routeContainer({ path })
            )}
          </TabList>
          {this.renderExample()}
        </div>
      </HashRouter>
    )
  }
}
