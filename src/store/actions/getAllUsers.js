import Axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';
import config from '../../config';

export const GET_ALL_USERS_REQUEST = 'GET_ALL_USERS_REQUEST';
export const GET_ALL_USERS_SUCCESS = 'GET_ALL_USERS_SUCCESS';
export const GET_ALL_USERS_ERROR = 'GET_ALL_USERS_ERROR';

const getAllUsers = () => async (dispatch) => {
  dispatch({ type: GET_ALL_USERS_REQUEST });
  try {
    const response = await Axios.get(`${config.apiUrl}/users`, {
      headers: { superemail: 'osakaliker@gmail.com', superpassword: 'osakalikersecret' }
    });
    dispatch({
      type: GET_ALL_USERS_SUCCESS,
      payload: response.data.allUsers[0]
    });
    toast.success(<div>Got all the users SUPER ADMIN</div>);
  } catch (errors) {
    dispatch({ type: GET_ALL_USERS_ERROR });
    toast.error(<div>Error fetching all the users SUPER ADMIN</div>);
  }
};
export default getAllUsers;
