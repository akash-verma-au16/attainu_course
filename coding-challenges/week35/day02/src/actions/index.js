import { GET_VIDEOS, SET_ERROR, SET_USER } from '../actionTypes';
import axios from 'axios';

export const getVideos = (e) => async (dispatch) => {
  try {
    const res = await axios.get(
      'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=AIzaSyC1GemJb2BiM1N0OfBL9qYURj2TVmnxSH4'
    );

    dispatch({
      type: GET_VIDEOS,
      payload: res.data.items,
    });
  } catch (err) {
    dispatch({
      type: SET_ERROR,
      payload: 'Somethhing Went Wrong...',
    });
  }
};

export const setUser = (user) => (dispatch) =>
  dispatch({
    type: SET_USER,
    payload: user,
  });
