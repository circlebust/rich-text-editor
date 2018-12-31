import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';
import { GlobalStyle } from './components';



const root = window.document.createElement('div');
root.id = "root";
window.document.body.appendChild(root);

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

render(App);

/**
 * Re-render for hot module replacement in development.
 */

if (module["hot"]) {
  module["hot"].accept('./app', () => render(App))
}
