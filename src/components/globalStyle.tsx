
import { createGlobalStyle } from 'styled-components';
//import styled, { } from '@emotion/styled';
import { StyleSheet, css } from 'aphrodite';
//import './index.css';

export const GlobalStyle = createGlobalStyle`
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



@font-face {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/materialicons/v41/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format('woff2');
}

.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -moz-font-feature-settings: 'liga';
  -moz-osx-font-smoothing: grayscale;
}
`;
