import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';
import config from '../../config';

export const GET_ALLPARCELS_REQUEST = 'GET_ALLPARCELS_REQUEST';
export const GET_ALLPARCELS_SUCCESS = 'GET_ALLPARCELS_SUCCESS';
export const GET_ALLPARCELS_ERROR = 'GET_ALLPARCELS_ERROR';

const getAllParcels = () => async (dispatch, getState) => {
  dispatch({ type: GET_ALLPARCELS_REQUEST });
  try {
    const parcels = await axios.get(`${config.apiUrl}/parcels`, {
      headers: { 'x-auth-token': getState().auth.data.accessToken }
    });
    dispatch({
      type: GET_ALLPARCELS_SUCCESS,
      payload: parcels.data.allParcels[0]
    });
    return toast.success(<div>Got all the parcels ADMIN</div>);
  } catch (errors) {
    dispatch({ type: GET_ALLPARCELS_ERROR });
    return toast.error(<div>Failed to get all parcels ADMIN</div>);
  }
};
export default getAllParcels;
