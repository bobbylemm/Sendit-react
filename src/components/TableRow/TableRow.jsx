/* eslint-disable no-nested-ternary */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import {
  Td,
  Tdbig,
  Tr,
  SpanView,
  SpanMobileView,
  Select
} from '../styledComponent/TableComp/TableComp';
import Button from '../styledComponent/Button';

class TableRow extends Component {
  state = {
    clicked: '',
    newStatus: '',
    option1: '',
    option2: '',
    editedPresentLocation: '',
    editedDropOffLocation: ''
  };

  handleSelect = async e => {
    const { profileTable, superAdminTable } = this.props;
    const newStatus =
      e.currentTarget.options[e.currentTarget.options.selectedIndex].innerHTML;
    if (!profileTable && !superAdminTable) {
      this.setState({
        newStatus
      });
      return;
    }
    const parsedNewStatus = JSON.parse(newStatus);
    this.setState({
      newStatus: parsedNewStatus
    });
  };

  handleClick = async () => {
    const { status } = this.props;
    if (status === 'delivered') {
      await this.setState({
        option1: 'in-transit',
        option2: 'processing'
      });
    }
    if (status === 'in-transit') {
      await this.setState({
        option1: 'delivered',
        option2: 'processing'
      });
    }
    if (status === 'processing') {
      await this.setState({
        option1: 'delivered',
        option2: 'in-transit'
      });
    }
  };

  handleInput = async e => {
    const { profileTable } = this.props;
    if (profileTable) {
      return this.setState({
        editedDropOffLocation: e.target.innerHTML
      });
    }
    await this.setState({
      editedPresentLocation: e.target.innerHTML
    });
  };

  handleCancel = async () => {
    const { cancelParcel, parcelId } = this.props;
    await cancelParcel(parcelId);
  };

  handleEdit = async e => {
    const {
      userId,
      parcelId,
      editAdminStatus,
      userEmail,
      profileTable,
      superAdminTable,
      editParcelLocation,
      editParcelStatus,
      adminTable,
      editDropOffLocation
    } = this.props;
    const {
      newStatus,
      editedPresentLocation,
      editedDropOffLocation
    } = this.state;
    let id;
    if (parcelId) {
      id = parcelId.toString();
    } else {
      id = userId.toString();
    }
    const er = e.target.id;
    const value = e.target.innerHTML;
    if (er === id) {
      if (value === 'edit') {
        e.target.innerHTML = 'save';
        await this.setState({
          clicked: true
        });
      } else {
        e.target.innerHTML = 'edit';
        await this.setState({
          clicked: false
        });
        if (!profileTable && !superAdminTable && editedPresentLocation) {
          editParcelLocation(parcelId, editedPresentLocation);
        }
        if (profileTable && editedDropOffLocation) {
          editDropOffLocation(parcelId, editedDropOffLocation);
        }
        if (newStatus && superAdminTable) {
          editAdminStatus(userEmail, newStatus);
        }
        if (newStatus && adminTable) {
          editParcelStatus(parcelId, newStatus);
        }
      }
    } else {
      this.setState({
        clicked: false
      });
    }
  };

  render() {
    const {
      parcelId,
      userId,
      userName,
      userEmail,
      isAdmin,
      packageName,
      dropoffLocation,
      pickupLocation,
      presentLocation,
      weight,
      price,
      status,
      cancelled,
      tableNames,
      profileTable,
      superAdminTable
    } = this.props;
    const { clicked, option1, option2 } = this.state;
    return (
      <Fragment>
        {superAdminTable ? (
          <Tr>
            <Td>
              <SpanMobileView>{tableNames[0]}</SpanMobileView>
              <SpanView>{userId}</SpanView>
            </Td>
            <Td>
              <SpanMobileView>{tableNames[1]}</SpanMobileView>
              <SpanView>{userName}</SpanView>
            </Td>
            <Td>
              <SpanMobileView>{tableNames[3]}</SpanMobileView>
              <SpanView>{userEmail}</SpanView>
            </Td>
            <Td>
              <SpanMobileView>{tableNames[4]}</SpanMobileView>
              <SpanView>
                <Select
                  id={userId}
                  onChange={e => this.handleSelect(e)}
                  disabled={!clicked}>
                  <option value={isAdmin}>{String(isAdmin)}</option>
                  <option value={isAdmin}>
                    {String(isAdmin) === 'true' ? 'false' : 'true'}
                  </option>
                </Select>
              </SpanView>
            </Td>
            <Tdbig>
              <SpanMobileView>{tableNames[5]}</SpanMobileView>
              <Button id={userId} small onClick={e => this.handleEdit(e)}>
                edit
              </Button>
            </Tdbig>
          </Tr>
        ) : (
          <Tr>
            <Td>
              <SpanMobileView>{tableNames[0]}</SpanMobileView>
              <SpanView>{parcelId}</SpanView>
            </Td>
            <Td>
              <SpanMobileView>{tableNames[1]}</SpanMobileView>
              <SpanView>{packageName}</SpanView>
            </Td>
            <Td>
              <SpanMobileView>{tableNames[2]}</SpanMobileView>
              {profileTable ? (
                <SpanView
                  contentEditable={clicked || false}
                  suppressContentEditableWarning
                  onInput={e => this.handleInput(e)}>
                  {dropoffLocation}
                </SpanView>
              ) : (
                <SpanView>{dropoffLocation}</SpanView>
              )}
            </Td>
            <Td>
              <SpanMobileView>{tableNames[3]}</SpanMobileView>
              <SpanView>{pickupLocation}</SpanView>
            </Td>
            <Td>
              <SpanMobileView>{tableNames[4]}</SpanMobileView>
              {profileTable ? (
                <SpanView>{presentLocation}</SpanView>
              ) : (
                <SpanView
                  contentEditable={clicked || false}
                  suppressContentEditableWarning
                  onInput={e => this.handleInput(e)}>
                  {presentLocation}
                </SpanView>
              )}
            </Td>
            <Td>
              <SpanMobileView>{tableNames[5]}</SpanMobileView>
              <SpanView>{weight}</SpanView>
            </Td>
            <Td>
              <SpanMobileView>{tableNames[6]}</SpanMobileView>
              <SpanView>
                {profileTable ? (
                  status
                ) : (
                  <Select
                    onClick={this.handleClick}
                    onChange={e => this.handleSelect(e)}
                    disabled={!clicked}
                    className={
                      status === 'delivered'
                        ? 'delivered'
                        : status === 'in-transit'
                        ? 'in-transit'
                        : 'processing'
                    }>
                    <option value={status}>{status}</option>
                    <option value={option1}>{option1}</option>
                    <option value={option2}>{option2}</option>
                  </Select>
                )}
              </SpanView>
            </Td>
            <Td>
              <SpanMobileView>{tableNames[7]}</SpanMobileView>
              <SpanView>{price}</SpanView>
            </Td>
            <Td>
              <SpanMobileView>{tableNames[8]}</SpanMobileView>
              <SpanView
                className={
                  cancelled ? 'uncancelled-parcel' : 'cancelled-parcel'
                }>
                {String(cancelled)}
              </SpanView>
            </Td>
            <Tdbig>
              <Button id={parcelId} small onClick={e => this.handleEdit(e)}>
                edit
              </Button>
              {profileTable ? (
                <Button small onClick={e => this.handleCancel(e)}>
                  cancel
                </Button>
              ) : null}
            </Tdbig>
          </Tr>
        )}
      </Fragment>
    );
  }
}
TableRow.propTypes = {
  tableNames: PropTypes.array,
  parcels: PropTypes.object,
  users: PropTypes.object,
  handleEdit: PropTypes.func,
  handleSelect: PropTypes.func,
  handleCancel: PropTypes.func,
  editAdminStatus: PropTypes.func,
  editDropOffLocation: PropTypes.func,
  cancelParcel: PropTypes.func,
  editParcelLocation: PropTypes.func,
  currentOption: PropTypes.string,
  editState: PropTypes.bool,
  editParcelStatus: PropTypes.func,
  handleInput: PropTypes.func,
  profileTable: PropTypes.bool,
  adminTable: PropTypes.bool,
  superAdminTable: PropTypes.bool,
  userParcels: PropTypes.object,
  userId: PropTypes.number,
  parcelId: PropTypes.number,
  userName: PropTypes.string,
  userEmail: PropTypes.string,
  isAdmin: PropTypes.bool,
  packageName: PropTypes.string,
  dropoffLocation: PropTypes.string,
  pickupLocation: PropTypes.string,
  presentLocation: PropTypes.string,
  weight: PropTypes.number,
  price: PropTypes.number,
  status: PropTypes.string,
  cancelled: PropTypes.bool
};
export default TableRow;
