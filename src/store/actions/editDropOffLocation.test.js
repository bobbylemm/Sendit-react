import thunk from 'redux-thunk';
import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import editParcelDestination, {
  USER_EDIT_PARCEL_LOCATION_REQUEST,
  USER_EDIT_PARCEL_LOCATION_SUCCESS,
  USER_EDIT_PARCEL_LOCATION_ERROR
} from './editDropOffLocation';
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
  it('update parcel dropoff Location FAILURE', async () => {
    mock.onPut(`${config.apiUrl}/parcels/1/currentlocation`).reply(400);
    await store.dispatch(editParcelDestination(1, { newLocation: 'lekki' }));
    const expectActions = [
      {
        type: USER_EDIT_PARCEL_LOCATION_REQUEST
      },
      {
        type: USER_EDIT_PARCEL_LOCATION_ERROR,
        payload: 'error editing parcel destination'
      }
    ];
    expect(store.getActions()).toEqual(expectActions);
  });
  it('update parcel dropoff Location SUCCESS', async () => {
    mock.onPut(`${config.apiUrl}/parcels/1/destination`).reply(200);
    await store.dispatch(editParcelDestination(1, { newdropOff: 'lekki' }));
    const expectActions = [
      {
        type: USER_EDIT_PARCEL_LOCATION_REQUEST
      },
      {
        type: USER_EDIT_PARCEL_LOCATION_SUCCESS,
        payload: [
          {
            parcel_id: 1,
            status: 'user',
            present_location: 'ikeja',
            dropoff_location: { newdropOff: 'lekki' }
          }
        ]
      }
    ];
    expect(store.getActions()).toEqual(expectActions);
  });
});
