/* eslint-disable no-nested-ternary */
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Header, Nav } from '../styledComponent/NavbarComp';

export const NavBar = ({ isAdmin, loggedIn }) => (
  <Header>
    <div className="container">
      <div id="app-logo">
        <Link to="/">
          {/* eslint-disable-next-line global-require */}
          <img src={require('../../images/icon.svg')} alt="logo" />
          <h1>SendIt</h1>
        </Link>
      </div>
      <Nav>
        <ul>
          {isAdmin && loggedIn ? (
            <li id="adminLink">
              <Link to="/admin">Admin</Link>
            </li>
          ) : !isAdmin && loggedIn ? (
            <li id="profileLink">
              <Link to="/profile">Profile</Link>
            </li>
          ) : (
            <Fragment />
          )}
          {!loggedIn ? (
            <Fragment>
              <li id="loginLink">
                <Link to="/signin">Login</Link>
              </li>
              <li id="signUpLink">
                <Link to="/signup">Sign Up</Link>
              </li>
            </Fragment>
          ) : (
            <li id="signUpLink">
              <Link to="/logout">Logout</Link>
            </li>
          )}
        </ul>
      </Nav>
    </div>
  </Header>
);
export const mapStateToProps = state => ({
  isAdmin: state.auth.data.isAdmin,
  loggedIn: state.auth.data.loggedIn
});

const hoc = connect(
  mapStateToProps,
  null
);
NavBar.propTypes = {
  isAdmin: PropTypes.bool,
  loggedIn: PropTypes.bool
};
export default hoc(NavBar);
