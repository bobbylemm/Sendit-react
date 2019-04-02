import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import signin from '../Auth/Signin';
import signup from '../Auth/Signup';
import logout from '../Auth/Logout';
import Home from '../pages/HomePage';
import CreateParcel from '../pages/CreateParcel';
import ProfilePage from '../pages/ProfilePage';

const AppRouter = () => (
  <Fragment>
    <Route path="/" exact component={Home} />
    <Route path="/signin" component={signin} />
    <Route path="/signup" component={signup} />
    <Route path="/logout" component={logout} />
    <Route path="/create-parcel" component={CreateParcel} />
    <Route path="/profile" component={ProfilePage} />
  </Fragment>
);
export default AppRouter;
