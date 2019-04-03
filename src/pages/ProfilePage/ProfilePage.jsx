import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import Parcels from '../../components/Table/index';
import Button from '../../components/styledComponent/Button';
import getAllUserparcels from '../../store/actions/getAllUserParcels';
import getAllStats from '../../store/actions/getStatistics';
import editDropOfflocation from '../../store/actions/editDropOffLocation';
import cancelparcel from '../../store/actions/cancelParcel';
import '../../css/profile.scss';

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

export class ProfilePage extends Component {
  constructor() {
    super();
    this.state = {
      view1: true,
      deliveredParcels: '',
      undeliveredParcels: ''
    };
  }

  componentDidMount() {
    const { getAllUserParcels, getAllStat } = this.props;
    getAllStat();
    getAllUserParcels();
  }
  static getDerivedStateFromProps(props, state) {
    if (props.stats === undefined) return null;
    if (
      props.stats.delivered !== state.deliveredParcels ||
      props.stats.undelivered !== state.undeliveredParcels
    ) {
      return {
        deliveredParcels: props.stats.delivered,
        undeliveredParcels: props.stats.undelivered
      };
    }
    return null;
  }

  handleView1 = () => {
    this.setState({
      view1: true
    });
  };

  handleView2 = () => {
    this.setState({
      view1: false
    });
  };

  render() {
    const {
      editDropOffLocation,
      cancelParcel,
      userParcels: { data, isLoading }
    } = this.props;
    const { view1, deliveredParcels, undeliveredParcels } = this.state;
    return (
      <main>
        <div className="section">
          <div className="col-2">
            <div className="dashboard dashboard-min">
              <img
                src={require('../../images/profile.svg')}
                alt="profile-pic"
                className="profile-pic"
              />
              <h3 id="welcomeUser">Welcome user</h3>
              <div className="profile-btn">
                <button
                  onClick={this.handleView1}
                  type="button"
                  id="p-deliv"
                  className="btn-profile">
                  parcels delivered
                </button>
                <button
                  onClick={this.handleView2}
                  type="button"
                  id="view-all"
                  className="btn-profile">
                  view/edit parcels
                </button>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="col-10 border profilePic dashboard-lar">
            <div id="user-ft">
              {view1 ? (
                <div className="btn-one-ft">
                  <h2>all parcel orders</h2>
                  <table>
                    <thead data-title="all parcels">
                      <tr>
                        <th>parcels delivered</th>
                        <th>parcels not delivered/in transit</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <span className="mobile-view-title">
                            parcels delivered
                          </span>
                          <span className="parcel-detail" id="parcelsDelivered">
                            {deliveredParcels}
                          </span>
                        </td>
                        <td>
                          <span className="mobile-view-title">
                            parcels not delivered/in transit
                          </span>
                          <span
                            className="parcel-detail"
                            id="parcelsUnDelivered">
                            {undeliveredParcels}
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="btn-one-ft">
                  {isLoading && (
                    <div id="loader-container">
                      <Loader
                        type="Puff"
                        color="#FFFFFF"
                        height="100"
                        width="100"
                      />
                    </div>
                  )}
                  <h2>all parcel orders</h2>
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
                  <div id="modal-cancel">
                    <div id="modal-content-cancel" className="bg-white p-3">
                      <h3>Are you sure yo want to cancel parcel</h3>
                      <main className="container">
                        <Button type="submit" id="signup" className="btn">
                          yes
                        </Button>
                        <Button type="submit" id="signup" className="btn">
                          no
                        </Button>
                      </main>
                    </div>
                  </div>
                  <Parcels
                    tableNames={tableNames}
                    parcels={data}
                    cancelParcel={cancelParcel}
                    editDropOffLocation={editDropOffLocation}
                    profileTable
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  userParcels: state.userParcels,
  stats: state.stats.data[0]
});

export const mapDispatchToProps = dispatch => ({
  getAllUserParcels: () => dispatch(getAllUserparcels()),
  getAllStat: () => dispatch(getAllStats()),
  cancelParcel: id => dispatch(cancelparcel(id)),
  editDropOffLocation: (id, newLocation) =>
    dispatch(editDropOfflocation(id, newLocation))
});

ProfilePage.propTypes = {
  editDropOffLocation: PropTypes.func,
  cancelParcel: PropTypes.func,
  getAllStat: PropTypes.func,
  getAllUserParcels: PropTypes.func,
  isLoading: PropTypes.bool,
  userParcels: PropTypes.object,
  stats: PropTypes.object
};

const hoc = connect(
  mapStateToProps,
  mapDispatchToProps
);
export default hoc(ProfilePage);
