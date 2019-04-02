import thunk from 'redux-thunk';
import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import {
  LOGIN_USER_ERROR,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  REGISTER_USER_ERROR,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  LOGOUT_USER,
  loginUser,
  logoutUser,
  registerUser
} from './authUser';
import config from '../../config';

const mock = new MockAdapter(axios);
const mockStore = configureMockStore([thunk]);
const store = mockStore();

const validLogin = {
  email: 'buchi@gmail.com',
  password: 'buchisecret'
};

const validRegister = {
  email: 'bodo@gmail.com',
  password: 'bodosecret',
  username: 'bodo'
};

const mockUserPayloadLogin = {
  isAdmin: true,
  message: 'successfully logged in',
  status: 'success',
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfaWQiOjEsImVtYWlsIjoiYnVjaGlAZ21haWwuY29tIiwidXNlcl9uYW1lIjoiYnVjaGkiLCJpc19hZG1pbiI6ZmFsc2V9LCJpYXQiOjE1NTIzMjUxMzIsImV4cCI6MTU1MjM0MzEzMn0.CupbzrNohucKSkRpPIZ2yOX7UC-yuvneGAdcbluX0QI',
  user: 'buchi'
};
const mockUserPayloadRegister = {
  message: 'successfully logged in',
  status: 'success',
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfaWQiOjEsImVtYWlsIjoiYnVjaGlAZ21haWwuY29tIiwidXNlcl9uYW1lIjoiYnVjaGkiLCJpc19hZG1pbiI6ZmFsc2V9LCJpYXQiOjE1NTIzMjUxMzIsImV4cCI6MTU1MjM0MzEzMn0.CupbzrNohucKSkRpPIZ2yOX7UC-yuvneGAdcbluX0QI',
  user: 'buchi'
};

describe('testing login success', () => {
  beforeEach(() => {
    store.clearActions();
  });
  afterEach(() => {
    mock.reset();
  });

  it('check for login success', async () => {
    mock.onPost(`${config.apiUrl}/auth/login`).reply(201, mockUserPayloadLogin);

    const expectActions = [
      { type: LOGIN_USER_REQUEST },
      { type: LOGIN_USER_SUCCESS, payload: mockUserPayloadLogin }
    ];
    await store.dispatch(loginUser(validLogin));
    expect(store.getActions()).toEqual(expectActions);
  });

  it('check for login failure', async () => {
    mock.onPost(`${config.apiUrl}/auth/login`).reply(500, mockUserPayloadLogin);

    const expectActions = [
      { type: LOGIN_USER_REQUEST },
      { type: LOGIN_USER_ERROR, payload: 'Invalid login credentials' }
    ];
    await store.dispatch(loginUser(validLogin));
    expect(store.getActions()).toEqual(expectActions);
  });

  it('check for register action success', async () => {
    mock.onPost(`${config.apiUrl}/auth/register`).reply(201, mockUserPayloadRegister);

    const expectActions = [
      { type: REGISTER_USER_REQUEST },
      { type: REGISTER_USER_SUCCESS, payload: mockUserPayloadRegister }
    ];
    await store.dispatch(registerUser(validRegister));
    expect(store.getActions()).toEqual(expectActions);
  });

  it('check for register action failure', async () => {
    mock.onPost(`${config.apiUrl}/auth/register`).reply(500, mockUserPayloadRegister);

    const expectActions = [
      { type: REGISTER_USER_REQUEST },
      { type: REGISTER_USER_ERROR, payload: 'Error in registeration' }
    ];
    await store.dispatch(registerUser(validRegister));
    expect(store.getActions()).toEqual(expectActions);
  });

  it('check for logout success', async () => {
    const expectActions = [{ type: LOGOUT_USER }];
    await store.dispatch(logoutUser());
    expect(store.getActions()).toEqual(expectActions);
  });
  // it('check for logout failure', async () => {
  //   const expectActions = [{}];
  //   await store.dispatch(logoutUser());
  //   expect(store.getActions()).toEqual(expectActions);
  // });
});
