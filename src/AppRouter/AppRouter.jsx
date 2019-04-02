import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import signin from '../Auth/Signin';
import signup from '../Auth/Signup';
import logout from '../Auth/Logout';

const AppRouter = () => (
  <Fragment>
    <Route path="/signin" component={signin} />
    <Route path="/signup" component={signup} />
    <Route path="/logout" component={logout} />
  </Fragment>
);
export default AppRouter;
