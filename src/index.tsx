import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './appContainer';
import { createGlobalStyle } from 'styled-components';
//import styled, { } from '@emotion/styled';
import { StyleSheet, css } from 'aphrodite';
//import './index.css';

const GlobalStyle = createGlobalStyle`
html,
input,
textarea {
  font-family: 'Roboto', sans-serif;
  line-height: 1.4;
  background: #eee;
}

body {
  margin: 0;
}

p {
  margin: 0;
}

pre {
  padding: 10px;
  background-color: #eee;
  white-space: pre-wrap;
}

:not(pre) > code {
  font-family: monospace;
  background-color: #eee;
  padding: 3px;
}

img {
  max-width: 100%;
  max-height: 20em;
}

blockquote {
  border-left: 2px solid #ddd;
  margin-left: 0;
  margin-right: 0;
  padding-left: 10px;
  color: #aaa;
  font-style: italic;
}

blockquote[dir='rtl'] {
  border-left: none;
  padding-left: 0;
  padding-right: 10px;
  border-right: 2px solid #ddd;
}

table {
  border-collapse: collapse;
}

td {
  padding: 10px;
  border: 2px solid #ddd;
}

input {
  box-sizing: border-box;
  font-size: 0.85em;
  width: 100%;
  padding: 0.5em;
  border: 2px solid #ddd;
  background: #fafafa;
}

input:focus {
  outline: 0;
  border-color: blue;
}

[data-slate-editor] > * + * {
  margin-top: 1em;
}
`

/**
 * Render the app.
 */

const root = window.document.createElement('div')
root.id = 'root'
window.document.body.appendChild(root)

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <div>
        <GlobalStyle/>
        <Component />
      </div>
    </AppContainer>,
    root
  )
}

render(App)

/**
 * Re-render for hot module replacement in development.
 */

if (module["hot"]) {
  module["hot"].accept('./app', () => render(App))
}
