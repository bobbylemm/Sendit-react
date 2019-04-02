import authReducer from './authReducer';

import {
  LOGIN_USER_ERROR,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  REGISTER_USER_ERROR,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  LOGOUT_USER
} from '../actions/authUser';

const state = {
  error: '',
  isLoading: '',
  data: {
    user: '',
    accessToken: '',
    isAdmin: '',
    loggedIn: ''
  }
};
const action = {
  payload: {
    user: 'dozie',
    accessToken: '',
    isAdmin: false,
    loggedIn: true
  }
};

describe('login reducer test', () => {
  it('should return initial state', () => {
    expect(authReducer(undefined, {})).toEqual(state);
  });
  it('should log out the user', () => {
    expect(authReducer(state, { type: LOGOUT_USER })).toEqual({
      ...state,
      data: {
        user: null,
        accessToken: null,
        isAdmin: null,
        loggedIn: null
      },
      isLoading: false,
      error: null
    });
  });
  it('should handle register user request', () => {
    expect(authReducer(state, { type: REGISTER_USER_REQUEST })).toEqual({
      ...state,
      isLoading: true,
      data: {
        user: '',
        accessToken: '',
        isAdmin: '',
        loggedIn: false
      }
    });
  });
  it('should handle login user request', () => {
    expect(authReducer(state, { type: LOGIN_USER_REQUEST })).toEqual({
      ...state,
      data: {
        user: '',
        accessToken: '',
        isAdmin: '',
        loggedIn: false
      },
      isLoading: true
    });
  });
  it('should handle register user error', () => {
    expect(
      authReducer(state, { type: REGISTER_USER_ERROR, payload: 'error in registeration' })
    ).toEqual({
      ...state,
      data: {
        user: '',
        accessToken: '',
        isAdmin: '',
        loggedIn: false
      },
      isLoading: false,
      error: 'error in registeration'
    });
  });
  it('should handle login user error', () => {
    expect(authReducer(state, { type: LOGIN_USER_ERROR, payload: 'error logging in' })).toEqual({
      ...state,
      data: {
        user: '',
        accessToken: '',
        isAdmin: '',
        loggedIn: false
      },
      isLoading: false,
      error: 'error logging in'
    });
  });
  it('should handle register user success', () => {
    expect(
      authReducer(state, {
        type: REGISTER_USER_SUCCESS,
        payload: {
          user: 'dozie',
          accessToken: '',
          isAdmin: false,
          loggedIn: true
        }
      })
    ).toEqual({
      ...state,
      data: {
        user: action.payload.user,
        accessToken: action.payload.token,
        isAdmin: action.payload.isAdmin,
        loggedIn: true
      },
      isLoading: false
    });
  });
  it('should handle login user success', () => {
    expect(
      authReducer(state, {
        type: LOGIN_USER_SUCCESS,
        payload: {
          user: 'dozie',
          accessToken: '',
          isAdmin: false,
          loggedIn: true
        }
      })
    ).toEqual({
      ...state,
      data: {
        user: action.payload.user,
        accessToken: action.payload.token,
        isAdmin: action.payload.isAdmin,
        loggedIn: true
      },
      isLoading: false
    });
  });
});
