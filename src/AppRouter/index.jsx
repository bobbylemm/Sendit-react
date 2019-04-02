import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import signin from '../Auth/Signin/index';

const Home = () => <div>welcome</div>;

const AppRouter = () => (
  <Fragment>
    <Route path="/" exact component={Home} />
    <Route path="/signin" component={signin} />
  </Fragment>
);
export default AppRouter;
