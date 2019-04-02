import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import getAllParcels from './getAllParcels';
import getUserParcels from './getUserParcelReducer';
import authReducer from './authReducer';
import getAllUsers from './getAllUsers';

const reducers = combineReducers({
  allParcels: getAllParcels,
  allUsers: getAllUsers,
  userParcels: getUserParcels,
  auth: authReducer,
  form: formReducer
});
export default reducers;
