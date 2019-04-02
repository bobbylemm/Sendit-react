import thunk from 'redux-thunk';
import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import createParcels, {
  CREATE_PARCEL_ERROR,
  CREATE_PARCEL_REQUEST,
  CREATE_PARCEL_SUCCESS
} from './createParcels';
import config from '../../config';

const mock = new MockAdapter(axios);
const mockStore = configureMockStore([thunk]);
const store = mockStore({
  auth: {
    data: {
      accessToken:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfaWQiOjEsImVtYWlsIjoiYnVjaGlAZ21haWwuY29tIiwidXNlcl9uYW1lIjoiYnVjaGkiLCJpc19hZG1pbiI6ZmFsc2V9LCJpYXQiOjE1NTIzMjUxMzIsImV4cCI6MTU1MjM0MzEzMn0.CupbzrNohucKSkRpPIZ2yOX7UC-yuvneGAdcbluX0QI'
    }
  }
});

const validNewParcel = {
  dropOfflocation: 'illasa',
  packageName: 'yam burger',
  pickupLocation: 'lasgidi',
  price: 8,
  quantity: 2,
  weight: 4
};

describe('testing create parcel action', () => {
  it('check for login success', async () => {
    mock.onPost(`${config.apiUrl}/parcel`).reply(201);

    const expectActions = [
      { type: CREATE_PARCEL_REQUEST },
      { type: CREATE_PARCEL_SUCCESS }
    ];
    await store.dispatch(createParcels(validNewParcel));
    expect(store.getActions()).toEqual(expectActions);
  });
  it('check for login failure', async () => {
    mock.onPost(`${config.apiUrl}/parcel`).reply(401);

    const expectActions = [
      { type: CREATE_PARCEL_REQUEST },
      { type: CREATE_PARCEL_ERROR, payload: 'Error creating this parcel' }
    ];
    try {
      await store.dispatch(createParcels(validNewParcel));
    } catch (errors) {
      expect(store.getActions()).toEqual(expectActions);
    }
  });
});
