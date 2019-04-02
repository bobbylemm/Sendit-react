import thunk from 'redux-thunk';
import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import cancelParcel, {
  CANCEL_PARCEL_REQUEST,
  CANCEL_PARCEL_SUCCESS,
  CANCEL_PARCEL_ERROR
} from './cancelParcel';
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
        dropoff_location: 'banana island',
        cancelled: false
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
  it('cancelling a parcel SUCCESS', async () => {
    mock.onPut(`${config.apiUrl}/parcels/1/cancel`).reply(200);
    await store.dispatch(cancelParcel(1));
    const expectActions = [
      {
        type: CANCEL_PARCEL_REQUEST
      },
      {
        type: CANCEL_PARCEL_SUCCESS,
        payload: [
          {
            parcel_id: 1,
            status: 'user',
            present_location: 'ikeja',
            dropoff_location: 'banana island',
            cancelled: true
          }
        ]
      }
    ];
    expect(store.getActions()).toEqual(expectActions);
  });
  it('cancelling a parcel FAILURE', async () => {
    mock.onPut(`${config.apiUrl}/parcels/1/cancel`).reply(400);
    await store.dispatch(cancelParcel());
    const expectActions = [
      {
        type: CANCEL_PARCEL_REQUEST
      },
      {
        type: CANCEL_PARCEL_ERROR,
        payload: 'failed to cancel this parcel'
      }
    ];
    expect(store.getActions()).toEqual(expectActions);
  });
});
