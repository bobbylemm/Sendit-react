/* eslint-disable react/prefer-stateless-function */
import React, { Fragment, Component } from 'react';
import AppRouter from './AppRouter';

class App extends Component {
  render() {
    return (
      <Fragment>
        <AppRouter />
      </Fragment>
    );
  }
}
export default App;
