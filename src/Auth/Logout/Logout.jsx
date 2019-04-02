import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logoutUser } from '../../store/actions/authUser';

export class Logout extends Component {
  componentDidMount() {
    const { logoutUsers, history } = this.props;
    logoutUsers();
    history.push('/');
  }

  render() {
    return null;
  }
}
export const mapDispatchToProps = dispatch => ({
  logoutUsers: () => dispatch(logoutUser())
});
const hoc = connect(
  null,
  mapDispatchToProps
);
Logout.propTypes = {
  logoutUsers: PropTypes.func,
  history: PropTypes.object
};
export default hoc(Logout);
