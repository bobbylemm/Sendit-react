/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, withRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index.js';
import './css/style.scss';
import App from './App.js';

const AppWithRouter = withRouter(App);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppWithRouter />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);
