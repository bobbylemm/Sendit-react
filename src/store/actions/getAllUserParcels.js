import Axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';
import config from '../../config';

export const GET_USER_PARCELS_REQUEST = 'GET_USER_PARCELS_REQUEST';
export const GET_USER_PARCELS_SUCCESS = 'GET_USER_PARCELS_SUCCESS';
export const GET_USER_PARCELS_ERROR = 'GET_USER_PARCELS_ERROR';

const getAllUserParcel = () => async (dispatch, getState) => {
  dispatch({ type: GET_USER_PARCELS_REQUEST });
  const { user } = getState().auth.data;
  try {
    const response = await Axios.get(`${config.apiUrl}/user/:1/parcels`, {
      headers: { 'x-auth-token': getState().auth.data.accessToken }
    });
    dispatch({
      type: GET_USER_PARCELS_SUCCESS,
      payload: response.data.parcels[0]
    });
    toast.success(
      <div>
        Got all your parcels--
        {user}
      </div>
    );
  } catch (errors) {
    dispatch({ type: GET_USER_PARCELS_ERROR, error: 'error fetching parcels' });
    toast.error(
      <div>
        error fetching parcels
        {user}
      </div>
    );
  }
};
export default getAllUserParcel;
