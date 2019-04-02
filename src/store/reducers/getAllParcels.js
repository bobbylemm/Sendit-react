import {
  GET_ALLPARCELS_REQUEST,
  GET_ALLPARCELS_ERROR,
  GET_ALLPARCELS_SUCCESS
} from '../actions/getAllParcels';
import {
  ADMIN_EDIT_PARCEL_ERROR,
  ADMIN_EDIT_PARCEL_REQUEST,
  ADMIN_EDIT_PARCEL_SUCCESS
} from '../actions/editParcelLocation';
import {
  ADMIN_EDIT_PARCEL_STATUS_ERROR,
  ADMIN_EDIT_PARCEL_STATUS_REQUEST,
  ADMIN_EDIT_PARCEL_STATUS_SUCCESS
} from '../actions/editParcelStatus';

const initialState = {
  error: '',
  isLoading: '',
  data: []
};
const getAllParcelsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALLPARCELS_REQUEST:
      return { ...state, isLoading: true };
    case GET_ALLPARCELS_SUCCESS:
      return { ...state, data: [...action.payload], isLoading: false };
    case GET_ALLPARCELS_ERROR:
      return { ...state, error: action.payload, isLoading: false };
    case ADMIN_EDIT_PARCEL_REQUEST:
      return { ...state, isLoading: true };
    case ADMIN_EDIT_PARCEL_SUCCESS:
      return { ...state, isLoading: false, data: [...action.payload] };
    case ADMIN_EDIT_PARCEL_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    case ADMIN_EDIT_PARCEL_STATUS_REQUEST:
      return { ...state, isLoading: true };
    case ADMIN_EDIT_PARCEL_STATUS_SUCCESS:
      return { ...state, isLoading: false, data: [...action.payload] };
    case ADMIN_EDIT_PARCEL_STATUS_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};
export default getAllParcelsReducer;
