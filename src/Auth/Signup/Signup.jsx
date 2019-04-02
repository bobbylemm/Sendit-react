import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SignupForm from './SignupForm';
import { registerUser } from '../../store/actions/authUser';

export class Signup extends Component {
  componentDidUpdate() {
    const { history, user } = this.props;
    if (user) {
      return history.push('/');
    }
  }

  handleSubmit = async values => {
    const { registerUsers } = this.props;
    await registerUsers(values);
  };

  render() {
    return <SignupForm onSubmit={this.handleSubmit} />;
  }
}
export const mapStateToProps = state => ({
  user: state.auth.data.user,
  isLoading: state.auth.isLoading
});

export const mapDispatchToProps = dispatch => ({
  registerUsers: values => dispatch(registerUser(values))
});

const hoc = connect(
  mapStateToProps,
  mapDispatchToProps
);
Signup.propTypes = {
  registerUsers: PropTypes.func,
  history: PropTypes.object,
  user: PropTypes.string,
  isLoading: PropTypes.bool
};
export default hoc(Signup);
