/* eslint-disable no-nested-ternary */
// @flow

import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';
import '../../../css/signin.scss';
import Button from '../../../components/styledComponent/Button';
import InputField from '../../../components/Input/index';
import BackgroungImg from '../../../components/styledComponent/BackgroundImg';
import FormCard from '../../../components/styledComponent/FormCard';

const SigninForm = ({ pristine, handleSubmit, submitting, isLoading }) => (
  <main>
    <BackgroungImg className="auth-bg ht-100">
      {isLoading && (
        <div id="loader-container">
          <Loader type="Puff" color="#FFFFFF" height="100" width="100" />
        </div>
      )}
      <FormCard>
        <h2>Sign In</h2>
        <form id="form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-3">
              <label className="label" htmlFor="email">
                Email
              </label>
            </div>
            <div className="col-9">
              <Field
                component={InputField}
                type="email"
                name="email"
                placeholder="Enter your Email"
                id="email"
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <label className="label" htmlFor="password">
                Password
              </label>
            </div>
            <div className="col-9">
              <Field
                component={InputField}
                type="password"
                name="password"
                id="password"
                placeholder="Enter your Password"
                required
              />
            </div>
          </div>
          <div className="message" />
          <div className="row">
            <div className="col-3" />
            <div className="col-9">
              <Button
                type="submit"
                id="signup"
                className="btn w-100 ht-6"
                disabled={pristine || submitting}>
                Sign in
              </Button>
            </div>
          </div>
          <p id="tip">
            Do not have an account ?<a href="/signup">Sign up </a>
          </p>
        </form>
      </FormCard>
    </BackgroungImg>
  </main>
);
SigninForm.propTypes = {
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  isLoading: PropTypes.bool
};

export default reduxForm({ form: 'signin-form' })(SigninForm);
