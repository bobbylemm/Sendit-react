import Axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';
import config from '../../config';

export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';
export const LOGOUT_USER = 'LOGOUT_USER';
export const REGISTER_USER_REQUEST = 'REGISTER_USER_REQUEST';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_ERROR = 'REGISTER_USER_ERROR';

const loginUser = values => async dispatch => {
  dispatch({ type: LOGIN_USER_REQUEST });
  try {
    const response = await Axios.post(`${config.apiUrl}/auth/login`, {
      Email: values.email,
      password: values.password
    });
    localStorage.setItem('authUser', JSON.stringify(response.data));
    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: response.data
    });
    toast.success(<div>Logged in successfully</div>);
  } catch (errors) {
    dispatch({ type: LOGIN_USER_ERROR, payload: 'Invalid login credentials' });
    toast.error(<div>Invalid login credentials</div>);
  }
};

const logoutUser = () => async dispatch => {
  try {
    localStorage.clear();
    dispatch({
      type: LOGOUT_USER
    });
    toast.info(<div>Successfully logged out</div>);
  } catch (errors) {
    return null;
  }
};

const registerUser = values => async dispatch => {
  dispatch({ type: REGISTER_USER_REQUEST });
  try {
    const response = await Axios.post(`${config.apiUrl}/auth/register`, {
      Email: values.email,
      password: values.password,
      userName: values.username
    });
    localStorage.setItem('authUser', JSON.stringify(response.data));
    dispatch({
      type: REGISTER_USER_SUCCESS,
      payload: response.data
    });
    toast.success(<div>Successfully registered</div>);
  } catch (errors) {
    dispatch({ type: REGISTER_USER_ERROR, payload: 'Error in registeration' });
    toast.error(<div>Error in registeration</div>);
  }
};
export { loginUser, registerUser, logoutUser };
