import thunk from 'redux-thunk';
import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import getAllParcels, {
  GET_ALLPARCELS_ERROR,
  GET_ALLPARCELS_REQUEST,
  GET_ALLPARCELS_SUCCESS
} from './getAllParcels';
import config from '../../config';

const mockStore = configureMockStore([thunk]);
const store = mockStore({
  auth: {
    data: {
      accessToken:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfaWQiOjEsImVtYWlsIjoiYnVjaGlAZ21haWwuY29tIiwidXNlcl9uYW1lIjoiYnVjaGkiLCJpc19hZG1pbiI6ZmFsc2V9LCJpYXQiOjE1NTIzMjUxMzIsImV4cCI6MTU1MjM0MzEzMn0.CupbzrNohucKSkRpPIZ2yOX7UC-yuvneGAdcbluX0QI',
      user: 'taju'
    }
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
  it('check for get all articles succeess', async () => {
    mock.onGet(`${config.apiUrl}/parcels`).reply(200, { allParcels: [{}] });
    await store.dispatch(getAllParcels());
    const expectActions = [
      { type: GET_ALLPARCELS_REQUEST },
      { type: GET_ALLPARCELS_SUCCESS, payload: {} }
    ];
    expect(store.getActions()).toEqual(expectActions);
  });
  it('check for get all articles failure', async () => {
    mock.onGet(`${config.apiUrl}/parcels`).reply(401);
    await store.dispatch(getAllParcels());
    const expectActions = [{ type: GET_ALLPARCELS_REQUEST }, { type: GET_ALLPARCELS_ERROR }];
    expect(store.getActions()).toEqual(expectActions);
  });
});
