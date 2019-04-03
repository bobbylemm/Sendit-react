import React from 'react';
import PropTypes from 'prop-types';
import '../../css/admin.scss';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import Parcels from '../../components/Table/index';
import getAllparcels from '../../store/actions/getAllParcels';
import editParcellocation from '../../store/actions/editParcelLocation';
import editParcelstatus from '../../store/actions/editParcelStatus';

const tableNames = [
  'Package id',
  'Package name',
  'Dropoff location',
  'Pickup location',
  'Present location',
  'Weight',
  'Status',
  'Price',
  'Cancelled',
  'Action'
];

export class AdminPage extends React.Component {
  constructor() {
    super();
    this.state = {
      edit: true,
      currentOption: ''
    };
  }

  componentDidMount() {
    const { getAllParcels } = this.props;
    getAllParcels();
  }

  render() {
    const {
      allParcels: { isLoading, data },
      editParcelLocation,
      editParcelStatus
    } = this.props;
    const { edit, html, currentOption } = this.state;
    return (
      <main>
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
                <h2>Welcome Admin</h2>
                <p className="px-1">
                  As an administrator you can perform the following actions
                </p>
                <ul>
                  <li>
                    <b>Edit parcel present location</b>
                  </li>
                  <li>
                    <b>Edit parcel delivery status</b>
                  </li>
                </ul>
                <p />
              </div>
            </div>
          </div>
          {/*  */}
          <div className="col-10 border profilePic dashboard-lar">
            {isLoading && (
              <div id="loader-container">
                <Loader type="Puff" color="#FFFFFF" height="100" width="100" />
              </div>
            )}
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
                <Parcels
                  handleEdit={this.handleEdit}
                  editParcelStatus={editParcelStatus}
                  adminTable
                  handleInput={this.handleInput}
                  tableNames={tableNames}
                  editParcelLocation={editParcelLocation}
                  parcels={data}
                  editState={edit}
                  currentOption={currentOption}
                  html={html}
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
  allParcels: state.allParcels
});
const mapDispatchToProps = dispatch => ({
  getAllParcels: () => dispatch(getAllparcels()),
  editParcelLocation: (id, presentLocation, editedStatus) =>
    dispatch(editParcellocation(id, presentLocation, editedStatus)),
  editParcelStatus: (id, newStatus) => dispatch(editParcelstatus(id, newStatus))
});
const hoc = connect(
  mapStateToProps,
  mapDispatchToProps
);
AdminPage.propTypes = {
  editParcelStatus: PropTypes.func,
  getAllParcels: PropTypes.func,
  editParcelLocation: PropTypes.func,
  allParcels: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  allUsers: PropTypes.object
};
export default hoc(AdminPage);
