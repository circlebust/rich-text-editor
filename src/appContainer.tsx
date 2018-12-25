import React,{useState, useReducer} from 'react';
import styled from '@emotion/styled';
import {
  HashRouter,
  Link as RouterLink,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
/*
import CheckLists from './check-lists'
import CodeHighlighting from './code-highlighting'
import Embeds from './embeds'
import Emojis from './emojis'
import ForcedLayout from './forced-layout'
import History from './history'
import Versions from './versions'
import HoveringMenu from './hovering-menu'
import HugeDocument from './huge-document'
import Images from './images'
import Links from './links'
import MarkdownPreview from './markdown-preview'
import MarkdownShortcuts from './markdown-shortcuts'
import PasteHtml from './paste-html'
import PlainText from './plain-text'
import Plugins from './plugins'
import RTL from './rtl'
import ReadOnly from './read-only'
import SearchHighlighting from './search-highlighting'
import InputTester from './input-tester'
import SyncingOperations from './syncing-operations'
import Tables from './tables'
import Mentions from './mentions'
*/
import RichText from './components/RichText';
import { isNull } from 'util';


/**
 * Examples.
 *
 * @type {Array}
 */

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
 

const mapComponents = () => components.map(
  ({ name, component, path }) => routeContainer({ path })
);
/**
 * Some styled components.
 *
 * @type {Component}
 */

const Nav = styled('div')`
  padding: 10px 15px;
  color: #aaa;
  background: #000;
`

const Title = styled('span')`
  margin-right: 0.5em;
`

const LinkList = styled('div')`
  float: right;
`

const Link = styled('a')`
  margin-left: 1em;
  color: #aaa;
  text-decoration: none;

  &:hover {
    color: #fff;
    text-decoration: underline;
  }
`

const TabList = styled('div')`
  padding: 15px 15px;
  background-color: #222;
  text-align: center;
  margin-bottom: 30px;

  & > * + * {
    margin-left: 0.5em;
  }
`

const MaskedRouterLink = ({ active, ...props }) => <RouterLink to={""} {...props} />

const Tab = styled(MaskedRouterLink)`
  display: inline-block;
  margin-bottom: 0.2em;
  padding: 0.2em 0.5em;
  border-radius: 0.2em;
  text-decoration: none;
  color: ${p => (p.active ? 'white' : '#777')};
  background: ${p => (p.active ? '#333' : 'transparent')};

  &:hover {
    background: #333;
  }
`

const Wrapper = styled('div')`
  max-width: 42em;
  margin: 0 auto 20px;
  padding: 20px;
`

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
//const getError = () => useState(this.state);
/**
 * App.
 *
 * @type {Component}
 */
interface IState { 
  error:  { [k:string]: any; stack: any } | null; 
  info:  { stack: any} | null;  
}
export default class App extends React.Component<{}, IState> {
  /**
   * Initial state.
   *
   * @type {Object}
   */

  state = {
    error: null, //{ stack: null},
    info:  null //{ stack: null},
  }
  //constructor(props,state){super(props); this.setState(state)}
  /*
  getError = () => { 
    const err = this.state.error;
    if(err !=== null){ }
    return (this.state.error === null) ? null : this.state.error.stack; //["stack"];
*/
  componentDidMount(){
    this.setState({
      error: { stack: null },
      info: { stack: null },
    });
    console.log("state", this.state);
  }

  /**
   * Catch the `error` and `info`.
   *
   * @param {Error} error
   * @param {Object} info
   */

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

    /**
   * Render the example app.
   *
   * @return {Element}
   */
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
