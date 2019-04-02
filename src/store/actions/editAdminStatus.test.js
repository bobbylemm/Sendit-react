import thunk from 'redux-thunk';
import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import editAdminStatus, {
  EDIT_ADMIN_STATUS_ERROR,
  EDIT_ADMIN_STATUS_REQUEST,
  EDIT_ADMIN_STATUS_SUCCESS
} from './editAdminStatus';
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
  it('update admin status SUCCESS', async () => {
    mock.onPut(`${config.apiUrl}/createadmin`).reply(201);
    await store.dispatch(editAdminStatus('dodo@gmail.com', true));
    const expectActions = [
      {
        type: EDIT_ADMIN_STATUS_REQUEST
      },
      {
        type: EDIT_ADMIN_STATUS_SUCCESS,
        payload: {
          data: [
            {
              email: 'dodo@gmail.com',
              isadmin: true
            }
          ]
        }
      }
    ];
    expect(store.getActions()).toEqual(expectActions);
  });
  it('update admin status FAILURE', async () => {
    mock.onPut(`${config.apiUrl}/createadmin`).reply(400);
    await store.dispatch(editAdminStatus('doda@gmail.com', true));
    const expectActions = [
      {
        type: EDIT_ADMIN_STATUS_REQUEST
      },
      {
        type: EDIT_ADMIN_STATUS_ERROR
      }
    ];
    expect(store.getActions()).toEqual(expectActions);
  });
});
