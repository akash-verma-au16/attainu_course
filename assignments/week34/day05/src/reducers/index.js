import { GET_VIDEOS, SET_ERROR, SET_USER } from '../actionTypes';

const initialState = {
  videos: [],
  user: {},
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
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
