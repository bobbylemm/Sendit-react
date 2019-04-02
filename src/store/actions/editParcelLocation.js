import Axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';
import config from '../../config';

export const ADMIN_EDIT_PARCEL_SUCCESS = 'ADMIN_EDIT_PARCEL_SUCCESS';
export const ADMIN_EDIT_PARCEL_ERROR = 'GET_ALLPARCELS_ERROR';
export const ADMIN_EDIT_PARCEL_REQUEST = 'ADMIN_EDIT_PARCEL_REQUEST';

const editParcelLocation = (id, newLocation) => async (dispatch, getState) => {
  const state = getState();
  dispatch({ type: ADMIN_EDIT_PARCEL_REQUEST });
  try {
    await Axios.put(
      `${config.apiUrl}/parcels/${id}/currentlocation`,
      {
        newLocation:
          newLocation ||
          state.allParcels.data.find(parcel => parcel.parcel_id === id)
            .present_location
      },
      { headers: { 'x-auth-token': getState().auth.data.accessToken } }
    );
    state.allParcels.data.find(
      parcel => parcel.parcel_id === id
    ).present_location = newLocation;
    dispatch({
      type: ADMIN_EDIT_PARCEL_SUCCESS,
      payload: state.allParcels.data
    });
    return toast.success(
      <div>Successfully updated parcel present location ADMIN</div>
    );
  } catch (errors) {
    dispatch({
      type: ADMIN_EDIT_PARCEL_ERROR,
      payload: 'error editing the parcel present location'
    });
    return toast.error(<div>Error updating parcel present location ADMIN</div>);
  }
};
export default editParcelLocation;
