import Axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';
import config from '../../config';

export const EDIT_ADMIN_STATUS_REQUEST = 'EDIT_ADMIN_STATUS_REQUEST';
export const EDIT_ADMIN_STATUS_SUCCESS = 'EDIT_ADMIN_STATUS_SUCCESS';
export const EDIT_ADMIN_STATUS_ERROR = 'EDIT_ADMIN_STATUS_ERROR';

const editAdminStatus = (adminEmail, isadmin) => async (dispatch, getState) => {
  dispatch({ type: EDIT_ADMIN_STATUS_REQUEST });
  const state = getState();
  try {
    const { message } = await Axios.put(
      `${config.apiUrl}/createadmin`,
      {
        adminEmail,
        isadmin
      },
      { headers: { superemail: 'osakaliker@gmail.com', superpassword: 'osakalikersecret' } }
    );
    state.allUsers.data.find(user => user.email === adminEmail).isadmin = isadmin;
    dispatch({
      type: EDIT_ADMIN_STATUS_SUCCESS,
      payload: state.allUsers
    });
    toast.success(<div>{message}</div>);
  } catch (errors) {
    dispatch({ type: EDIT_ADMIN_STATUS_ERROR });
    toast.error(<div>Error editing status SUPER ADMIN</div>);
  }
};
export default editAdminStatus;
