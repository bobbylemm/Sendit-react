import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../css/admin.scss';
import { connect } from 'react-redux';
import Users from '../../components/Table/index';
import getAllUser from '../../store/actions/getAllUsers';
import editAdminStatus from '../../store/actions/editAdminStatus';

const tableNames = ['User id', 'Username', 'email', 'isAdmin', 'Action'];

export class SuperAdminPage extends Component {
  constructor() {
    super();
    this.state = {
      edit: true,
      isadmin: ''
    };
  }

  componentDidMount() {
    const { getAllUsers } = this.props;
    getAllUsers();
  }

  render() {
    const { allUsers, editAdminstatus } = this.props;
    const { edit } = this.state;
    return (
      <main>
        <div id="loader">
          <img src="./img/loader.gif" alt="loader" id="loader-pic" />
        </div>
        <div className="section">
          <div className="col-2">
            <div className="dashboard dashboard-min">
              {/* eslint-disable-next-line global-require */}
              <img
                src={require('../../images/admin.svg')}
                alt="admin pic"
                className="profile-pic"
              />
              <div className="profile-btn">
                <h2>Welcome super admin</h2>
                <p className="px-1">
                  You can give admin rights to any user or remove admin rights
                  from user.
                </p>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="col-10 border profilePic dashboard-lar">
            <div id="user-ft">
              <div id="btn-two-ft">
                <h2>Here are all the parcels</h2>
                <div id="modal-edit">
                  <div id="modal-content-edit" className="bg-white p-3">
                    <h3 id="modal-message">fff</h3>
                    <main className="container">
                      <button type="submit" id="signup" className="btn w-3">
                        Ok
                      </button>
                    </main>
                  </div>
                </div>
                <Users
                  handleInput={this.handleInput}
                  tableNames={tableNames}
                  users={allUsers}
                  editState={edit}
                  handleSelect={this.handleSelect}
                  editAdminStatus={editAdminstatus}
                  superAdminTable
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  allUsers: state.allUsers
});
const mapDispatchToProps = dispatch => ({
  getAllUsers: () => dispatch(getAllUser()),
  editAdminstatus: (adminEmail, isadmin) =>
    dispatch(editAdminStatus(adminEmail, isadmin))
});
const hoc = connect(
  mapStateToProps,
  mapDispatchToProps
);
SuperAdminPage.propTypes = {
  getAllUsers: PropTypes.func,
  editAdminstatus: PropTypes.func,
  isLoading: PropTypes.bool,
  allUsers: PropTypes.array
};
export default hoc(SuperAdminPage);
