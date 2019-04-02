import thunk from 'redux-thunk';
import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import editParcelLocation, {
  ADMIN_EDIT_PARCEL_SUCCESS,
  ADMIN_EDIT_PARCEL_ERROR,
  ADMIN_EDIT_PARCEL_REQUEST
} from './editParcelLocation';
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
        present_location: 'ikeja'
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
  it('update parcel present Location SUCCESS', async () => {
    mock.onPut(`${config.apiUrl}/parcels/1/currentlocation`).reply(200);
    await store.dispatch(editParcelLocation(1, { newLocation: 'lekki' }));
    const expectActions = [
      {
        type: ADMIN_EDIT_PARCEL_REQUEST
      },
      {
        type: ADMIN_EDIT_PARCEL_SUCCESS,
        payload: {
          data: [
            {
              parcel_id: 1,
              status: 'user',
              present_location: { newLocation: 'lekki' }
            }
          ]
        }
      }
    ];
    expect(store.getActions()).toEqual(expectActions);
  });
  it('update parcel present Location FAILURE', async () => {
    mock.onPut(`${config.apiUrl}/parcels/1/currentlocation`).timeout();
    await store.dispatch(editParcelLocation());
    const expectActions = [
      {
        type: ADMIN_EDIT_PARCEL_REQUEST
      },
      {
        type: ADMIN_EDIT_PARCEL_ERROR,
        payload: 'error editing the parcel present location'
      }
    ];
    expect(store.getActions()).toEqual(expectActions);
  });
});
