import { GET_VIDEOS, SET_ERROR } from '../actionTypes';

const initialState = {
  videos: [],
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEOS:
      return {
        ...state,
        videos: action.payload,
        error: '',
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
