import {
  LOGIN_USER_ERROR,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER
} from '../actions/authUser';

const authUser = JSON.parse(localStorage.getItem('authUser'));
const initialState = {
  error: '',
  isLoading: '',
  data: {
    user: authUser ? authUser.user : '',
    accessToken: authUser ? authUser.token : '',
    isAdmin: '',
    loggedIn: ''
  }
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        data: {
          user: '',
          accessToken: '',
          isAdmin: '',
          loggedIn: false
        },
        isLoading: true
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        data: {
          user: action.payload.user,
          accessToken: action.payload.token,
          isAdmin: action.payload.isAdmin,
          loggedIn: true
        },
        isLoading: false
      };
    case LOGIN_USER_ERROR:
      return {
        ...state,
        data: {
          user: '',
          accessToken: '',
          isAdmin: '',
          loggedIn: false
        },
        isLoading: false,
        error: action.payload
      };
    case LOGOUT_USER:
      return {
        ...state,
        data: {
          user: null,
          accessToken: null,
          isAdmin: null,
          loggedIn: null
        },
        isLoading: false,
        error: null
      };
    default:
      return state;
  }
};
export default authReducer;
