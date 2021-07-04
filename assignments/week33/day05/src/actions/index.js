import {
  ON_CHANGE,
  ON_SUBMIT,
  DELETE_TASK,
  HANDLE_EDIT,
  SET_CURRENT_TASK,
} from './types';

export const onChange = (e) => (dispatch) =>
  dispatch({
    type: ON_CHANGE,
    current: e.target.value,
  });

export const onSubmit = (e) => (dispatch) => {
  e.preventDefault();
  dispatch({
    type: ON_SUBMIT,
  });
};

export const deleteTask = (e) => (dispatch) =>
  dispatch({
    type: DELETE_TASK,
    index: parseInt(e.target.parentElement.id),
  });

export const setCurrentTask = (e) => (dispatch) =>
  dispatch({
    type: SET_CURRENT_TASK,
    index: parseInt(e.target.id),
  });

export const handleEdit = (e, text) => (dispatch) => {
  e.preventDefault();
  dispatch({
    type: HANDLE_EDIT,
    index: parseInt(e.target.id),
    text: text.current.value,
  });
};
