import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginUser } from '../../store/actions/authUser';
import SigninForm from './SigninForm/index';

export class Signin extends Component {
  componentDidUpdate() {
    const { history, user } = this.props;
    if (user) {
      return history.push('/');
    }
  }

  handleSubmit = async values => {
    const { loginUsers } = this.props;
    loginUsers(values);
  };

  render() {
    const { isLoading } = this.props;
    return <SigninForm onSubmit={this.handleSubmit} isLoading={isLoading} />;
  }
}

export const mapStateToProps = state => ({
  user: state.auth.data.user,
  isLoading: state.auth.isLoading
});

export const mapDispatchToProps = dispatch => ({
  loginUsers: values => dispatch(loginUser(values))
});

const hoc = connect(
  mapStateToProps,
  mapDispatchToProps
);
Signin.propTypes = {
  loginUsers: PropTypes.func,
  history: PropTypes.object,
  user: PropTypes.string,
  isLoading: PropTypes.bool
};
export default hoc(Signin);
