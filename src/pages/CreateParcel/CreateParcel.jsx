import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import createParcels from '../../store/actions/createParcels';
import CreateParcelForm from './CreateParcelForm/index';

export class CreateParcel extends Component {
  handleSubmit = async values => {
    const { createParcel } = this.props;
    await createParcel(values);
  };

  render() {
    const { isLoading } = this.props;
    return (
      <CreateParcelForm onSubmit={this.handleSubmit} isLoading={isLoading} />
    );
  }
}

export const mapStateToProps = state => ({
  user: state.userParcels.data.user,
  isLoading: state.userParcels.isLoading
});

export const mapDispatchToProps = dispatch => ({
  createParcel: values => dispatch(createParcels(values))
});

CreateParcel.propTypes = {
  createParcel: PropTypes.func,
  isLoading: PropTypes.bool
};
const hoc = connect(
  mapStateToProps,
  mapDispatchToProps
);
export default hoc(CreateParcel);
