import { Component } from 'react';
import { connect } from 'react-redux';
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
const mapDispatchToProps = dispatch => ({
  logoutUsers: () => dispatch(logoutUser())
});
const hoc = connect(
  null,
  mapDispatchToProps
);
export default hoc(Logout);
