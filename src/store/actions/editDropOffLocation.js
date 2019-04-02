import Axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';
import config from '../../config';

export const USER_EDIT_PARCEL_LOCATION_REQUEST = 'USER_EDIT_PARCEL_LOCATION_REQUEST';
export const USER_EDIT_PARCEL_LOCATION_SUCCESS = 'USER_EDIT_PARCEL_LOCATION_SUCCESS';
export const USER_EDIT_PARCEL_LOCATION_ERROR = 'USER_EDIT_PARCEL_LOCATION_ERROR';

const editParcelDestination = (id, newdropOff) => async (dispatch, getState) => {
  const state = getState();
  dispatch({ type: USER_EDIT_PARCEL_LOCATION_REQUEST });
  try {
    await Axios.put(
      `${config.apiUrl}/parcels/${id}/destination`,
      {
        newdropOff:
          newdropOff
          || state.userParcels.data.find(parcel => parcel.parcel_id === id).dropoff_location
      },
      { headers: { 'x-auth-token': getState().auth.data.accessToken } }
    );
    state.userParcels.data.find(parcel => parcel.parcel_id === id).dropoff_location = newdropOff;
    dispatch({
      type: USER_EDIT_PARCEL_LOCATION_SUCCESS,
      payload: state.userParcels.data
    });
    return toast.success(<div>Successfully updated parcel destination</div>);
  } catch (errors) {
    dispatch({
      type: USER_EDIT_PARCEL_LOCATION_ERROR,
      payload: 'error editing parcel destination'
    });
    return toast.error(<div>Error updating parcel destination</div>);
  }
};
export default editParcelDestination;
