import React, { useReducer } from 'react';
import axios from 'axios';
import PostContext from './postContext';
import postReducer from './postReducer';
import { GET_POSTS, POST_ERROR, SET_CURRENT, CLEAR_CURRENT } from '../types';

const PostState = (props) => {
  const initialState = {
    posts: [],
    current: {},
    error: null,
  };

  const [state, dispatch] = useReducer(postReducer, initialState);

  const getPosts = async () => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');

      dispatch({
        type: GET_POSTS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: POST_ERROR,
        payload: err.response.msg,
      });
    }
  };

  const setCurrent = async (id) => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );

      dispatch({
        type: SET_CURRENT,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: POST_ERROR,
        payload: err.response.msg,
      });
    }
  };

  const clearCurrent = () => {
    dispatch({
      type: CLEAR_CURRENT,
      payload: {},
    });
  };

  return (
    <PostContext.Provider
      value={{
        posts: state.posts,
        current: state.current,
        error: state.error,
        getPosts,
        setCurrent,
        clearCurrent,
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};

export default PostState;
