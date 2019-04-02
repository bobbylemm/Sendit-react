import {
  GET_ALL_USERS_ERROR,
  GET_ALL_USERS_REQUEST,
  GET_ALL_USERS_SUCCESS
} from '../actions/getAllUsers';
import {
  EDIT_ADMIN_STATUS_ERROR,
  EDIT_ADMIN_STATUS_REQUEST,
  EDIT_ADMIN_STATUS_SUCCESS
} from '../actions/editAdminStatus';

const initialState = {
  error: '',
  isLoading: '',
  data: []
};
const getAllUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS_ERROR:
      return { ...state, error: action.payload, isLoading: false };
    case GET_ALL_USERS_REQUEST:
      return { ...state, isLoading: true };
    case GET_ALL_USERS_SUCCESS:
      return { ...state, data: [...action.payload], isLoading: false };
    case EDIT_ADMIN_STATUS_SUCCESS:
      return { ...state, data: [...action.payload], isLoading: false };
    case EDIT_ADMIN_STATUS_ERROR:
      return { ...state, error: action.payload, isLoading: false };
    case EDIT_ADMIN_STATUS_REQUEST:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};
export default getAllUsersReducer;
