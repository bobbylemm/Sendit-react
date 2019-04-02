import thunk from 'redux-thunk';
import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import getAllUsers, {
  GET_ALL_USERS_REQUEST,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_ERROR
} from './getAllUsers';
import config from '../../config';

const mockStore = configureMockStore([thunk]);
const store = mockStore({
  auth: {
    data: {
      accessToken:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfaWQiOjEsImVtYWlsIjoiYnVjaGlAZ21haWwuY29tIiwidXNlcl9uYW1lIjoiYnVjaGkiLCJpc19hZG1pbiI6ZmFsc2V9LCJpYXQiOjE1NTIzMjUxMzIsImV4cCI6MTU1MjM0MzEzMn0.CupbzrNohucKSkRpPIZ2yOX7UC-yuvneGAdcbluX0QI',
      user: 'taju'
    }
  },
  allParcels: {
    data: [
      {
        parcel_id: 1,
        status: 'user',
        present_location: 'ikeja',
        dropoff_location: 'banana island'
      }
    ]
  },
  allUsers: {
    data: [
      {
        email: 'dodo@gmail.com',
        isadmin: false
      }
    ]
  },
  userParcels: {
    data: [
      {
        parcel_id: 1,
        status: 'user',
        present_location: 'ikeja',
        dropoff_location: 'banana island'
      }
    ]
  }
});

describe('testing get all parcels in application', () => {
  let mock;
  beforeEach(() => {
    mock = new MockAdapter(axios);
    store.clearActions();
  });
  afterEach(() => {
    mock.restore();
  });
  it('get all users SUCCESS', async () => {
    mock.onGet(`${config.apiUrl}/users`).reply(201, { allUsers: [{ user: 'sule' }] });
    await store.dispatch(getAllUsers());
    const expectActions = [
      {
        type: GET_ALL_USERS_REQUEST
      },
      {
        type: GET_ALL_USERS_SUCCESS,
        payload: { user: 'sule' }
      }
    ];
    expect(store.getActions()).toEqual(expectActions);
  });
  it('get all users FAILURE', async () => {
    mock.onGet(`${config.apiUrl}/users`);
    await store.dispatch(getAllUsers());
    const expectActions = [
      {
        type: GET_ALL_USERS_REQUEST
      },
      {
        type: GET_ALL_USERS_ERROR
      }
    ];
    expect(store.getActions()).toEqual(expectActions);
  });
});
