import Axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';
import config from '../../config';

export const ADMIN_EDIT_PARCEL_STATUS_SUCCESS = 'ADMIN_EDIT_PARCEL_STATUS_SUCCESS';
export const ADMIN_EDIT_PARCEL_STATUS_ERROR = 'ADMIN_EDIT_PARCEL_STATUS_ERROR';
export const ADMIN_EDIT_PARCEL_STATUS_REQUEST = 'ADMIN_EDIT_PARCEL_STATUS_REQUEST';

const editParcelStatus = (id, newStatus) => async (dispatch, getState) => {
  dispatch({ type: ADMIN_EDIT_PARCEL_STATUS_REQUEST });
  const state = getState();
  try {
    await Axios.put(
      `${config.apiUrl}/parcels/${id}/status`,
      { newStatus },
      { headers: { 'x-auth-token': getState().auth.data.accessToken } }
    );
    state.allParcels.data.find(parcel => parcel.parcel_id === id).status = newStatus;
    dispatch({
      type: ADMIN_EDIT_PARCEL_STATUS_SUCCESS,
      payload: state.allParcels.data
    });
    return toast.success(<div>Successfully updated parcel status ADMIN</div>);
  } catch (errors) {
    dispatch({ type: ADMIN_EDIT_PARCEL_STATUS_ERROR, payload: 'error changing your status' });
    return toast.error(<div>error changing parcel status ADMIN</div>);
  }
};
export default editParcelStatus;
