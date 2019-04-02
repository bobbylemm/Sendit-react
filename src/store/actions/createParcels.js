import Axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';
import config from '../../config';

export const CREATE_PARCEL_REQUEST = 'CREATE_PARCEL_REQUEST';
export const CREATE_PARCEL_SUCCESS = 'CREATE_PARCEL_SUCCESS';
export const CREATE_PARCEL_ERROR = 'CREATE_PARCEL_ERROR';

const createParcel = values => async (dispatch, getState) => {
  dispatch({ type: CREATE_PARCEL_REQUEST });
  try {
    await Axios.post(
      `${config.apiUrl}/parcel`,
      {
        packageName: values.packageName,
        dropOfflocation: values.dropOfflocation,
        pickupLocation: values.pickupLocation,
        weight: values.weight,
        quantity: values.quantity,
        price: values.weight * values.quantity
      },
      { headers: { 'x-auth-token': getState().auth.data.accessToken } }
    );
    dispatch({ type: CREATE_PARCEL_SUCCESS });
    return toast.success(<div>Successfully created a new parcel</div>);
  } catch (errors) {
    dispatch({
      type: CREATE_PARCEL_ERROR,
      payload: 'Error creating this parcel'
    });
    return toast.error(<div>Error creating this parcel</div>);
  }
};
export default createParcel;
