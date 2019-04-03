import Axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';
import config from '../../config';

export const GET_STATS_REQUEST = 'GET_STATS_REQUEST';
export const GET_STATS_SUCCESS = 'GET_STATS_SUCCESS';
export const GET_STATS_ERROR = 'GET_STATS_ERROR';

const getAllUsers = () => async (dispatch, getState) => {
  dispatch({ type: GET_STATS_REQUEST });
  try {
    const undelivered = await Axios.get(
      `${config.apiUrl}/user/:uid/num-undelivered-parcels`,
      {
        headers: { 'x-auth-token': getState().auth.data.accessToken }
      }
    );
    const delivered = await Axios.get(
      `${config.apiUrl}/user/:uid/num-delivered-parcels`,
      {
        headers: { 'x-auth-token': getState().auth.data.accessToken }
      }
    );
    dispatch({
      type: GET_STATS_SUCCESS,
      payload: [
        { delivered: delivered.data.count, undelivered: undelivered.data.count }
      ]
    });
  } catch (errors) {
    dispatch({ type: GET_STATS_ERROR });
    toast.error(<div>Error getting statistics</div>);
  }
};
export default getAllUsers;
