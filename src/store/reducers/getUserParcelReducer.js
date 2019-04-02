import {
  GET_USER_PARCELS_ERROR,
  GET_USER_PARCELS_REQUEST,
  GET_USER_PARCELS_SUCCESS
} from '../actions/getAllUserParcels';
import {
  USER_EDIT_PARCEL_LOCATION_ERROR,
  USER_EDIT_PARCEL_LOCATION_REQUEST,
  USER_EDIT_PARCEL_LOCATION_SUCCESS
} from '../actions/editDropOffLocation';
import {
  CREATE_PARCEL_ERROR,
  CREATE_PARCEL_REQUEST,
  CREATE_PARCEL_SUCCESS
} from '../actions/createParcels';
import {
  CANCEL_PARCEL_ERROR,
  CANCEL_PARCEL_REQUEST,
  CANCEL_PARCEL_SUCCESS
} from '../actions/cancelParcel';

const initialState = {
  error: '',
  isLoading: '',
  data: []
};
const getUserParcelReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PARCEL_REQUEST:
    case GET_USER_PARCELS_REQUEST:
    case USER_EDIT_PARCEL_LOCATION_REQUEST:
    case CANCEL_PARCEL_REQUEST:
      return { ...state, isLoading: true };
    case USER_EDIT_PARCEL_LOCATION_SUCCESS:
    case GET_USER_PARCELS_SUCCESS:
    case CANCEL_PARCEL_SUCCESS:
      return { ...state, isLoading: false, data: [...action.payload] };
    case USER_EDIT_PARCEL_LOCATION_ERROR:
    case CREATE_PARCEL_ERROR:
    case GET_USER_PARCELS_ERROR:
    case CANCEL_PARCEL_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    case CREATE_PARCEL_SUCCESS:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
export default getUserParcelReducer;
