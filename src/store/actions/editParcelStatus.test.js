import thunk from 'redux-thunk';
import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import editParcelStatus, {
  ADMIN_EDIT_PARCEL_STATUS_ERROR,
  ADMIN_EDIT_PARCEL_STATUS_SUCCESS,
  ADMIN_EDIT_PARCEL_STATUS_REQUEST
} from './editParcelStatus';
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
        status: 'user'
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
  it('update parcel status SUCCESS', async () => {
    mock.onPut(`${config.apiUrl}/parcels/1/status`).reply(200);
    await store.dispatch(editParcelStatus(1, { newStatus: 'admin' }));
    const expectActions = [
      { type: ADMIN_EDIT_PARCEL_STATUS_REQUEST },
      {
        type: ADMIN_EDIT_PARCEL_STATUS_SUCCESS,
        payload: [{ parcel_id: 1, status: { newStatus: 'admin' } }]
      }
    ];
    expect(store.getActions()).toEqual(expectActions);
  });
  it('update parcel status FAILURE', async () => {
    mock.onPut(`${config.apiUrl}/parcels/1/status`).reply(500);
    await store.dispatch(editParcelStatus(2, {}));
    const expectActions = [
      { type: ADMIN_EDIT_PARCEL_STATUS_REQUEST },
      {
        type: ADMIN_EDIT_PARCEL_STATUS_ERROR,
        payload: 'error changing your status'
      }
    ];
    expect(store.getActions()).toEqual(expectActions);
  });
});
