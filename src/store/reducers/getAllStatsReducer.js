import {
  GET_STATS_REQUEST,
  GET_STATS_SUCCESS,
  GET_STATS_ERROR
} from '../actions/getStatistics';

const initialState = {
  error: '',
  isLoading: '',
  data: []
};
const getAllStatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STATS_REQUEST:
      return { ...state, isLoading: true };
    case GET_STATS_SUCCESS:
      return { ...state, isLoading: false, data: [...action.payload] };
    case GET_STATS_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};
export default getAllStatsReducer;
