/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';
import '../../../css/signup.scss';
import Button from '../../../components/styledComponent/Button';
import InputField from '../../../components/Input';
import BackgroungImg from '../../../components/styledComponent/BackgroundImg';
import FormCard from '../../../components/styledComponent/FormCard';

const SignupForm = ({ pristine, handleSubmit, submitting, isLoading }) => (
  <main>
    <BackgroungImg className="auth-bg ht-100">
      {isLoading && (
        <div id="loader-container">
          <Loader type="Puff" color="#FFFFFF" height="100" width="100" />
        </div>
      )}
      <FormCard>
        <h2>Signup</h2>
        <form id="form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-3">
              <label className="label" htmlFor="username">
                Username
              </label>
            </div>
            <div className="col-9">
              <Field
                component={InputField}
                type="text"
                name="username"
                id="username"
                placeholder="Enter your Username for display..."
                required
              />
            </div>
          </div>
          {/*  */}
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
                id="email"
                placeholder="Enter your Email..."
                required
              />
            </div>
          </div>
          {/*  */}
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
          {/*  */}
          <div className="row">
            <div className="col-3" />
            <div className="col-9">
              <Button
                disabled={pristine || submitting}
                type="submit"
                id="signup"
                className="btn w-100 ht-6">
                Sign up
              </Button>
            </div>
          </div>
          <div className="row">
            <div className="col-3" />
            <div className="col-9">
              <p id="tip">
                Do you have an account ? <a href="/signin">Login </a>
              </p>
            </div>
          </div>
        </form>
      </FormCard>
    </BackgroungImg>
  </main>
);
SignupForm.propTypes = {
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  isLoading: PropTypes.bool
};

export default reduxForm({
  form: 'register-form'
})(SignupForm);
