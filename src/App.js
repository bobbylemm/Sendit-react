/* eslint-disable react/prefer-stateless-function */
import React, { Fragment, Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar/index';
import 'react-toastify/dist/ReactToastify.min.css';
import AppRouter from './AppRouter/index';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <ToastContainer autoClose={3000} position="top-right" />
        <AppRouter />
      </Fragment>
    );
  }
}
export default App;
