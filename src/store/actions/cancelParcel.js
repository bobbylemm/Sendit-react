import Axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';
import config from '../../config';

export const CANCEL_PARCEL_REQUEST = 'CANCEL_PARCEL_REQUEST';
export const CANCEL_PARCEL_SUCCESS = 'CANCEL_PARCEL_SUCCESS';
export const CANCEL_PARCEL_ERROR = 'CANCEL_PARCEL_ERROR';

const cancelParcel = id => async (dispatch, getState) => {
  const state = getState();
  dispatch({ type: CANCEL_PARCEL_REQUEST });
  try {
    await Axios.put(`${config.apiUrl}/parcels/${id}/cancel`, null, {
      headers: { 'x-auth-token': getState().auth.data.accessToken }
    });
    state.userParcels.data.find(parcel => parcel.parcel_id === id).cancelled = true;
    dispatch({ type: CANCEL_PARCEL_SUCCESS, payload: state.userParcels.data });
    return toast.success(<div>Successfully cancelled parcel</div>);
  } catch (errors) {
    dispatch({ type: CANCEL_PARCEL_ERROR, payload: 'failed to cancel this parcel' });
    return toast.error(<div>Error cancelling parcel</div>);
  }
};
export default cancelParcel;
