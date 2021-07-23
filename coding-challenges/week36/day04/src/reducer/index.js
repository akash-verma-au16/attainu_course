import {
  ON_CHANGE,
  ON_SUBMIT,
  DELETE_TASK,
  HANDLE_EDIT,
  SET_CURRENT_TASK,
} from '../actions/types';

const initialState = {
  tasks: [],
  current: '',
  edit: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_CHANGE:
      return {
        ...state,
        current: action.current,
      };
    case ON_SUBMIT:
      return {
        ...state,
        tasks: [...state.tasks, state.current],
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task, index) => index !== action.index),
      };
    case SET_CURRENT_TASK:
      return {
        ...state,
        edit: parseInt(action.index),
      };
    case HANDLE_EDIT:
      return {
        ...state,
        tasks: state.tasks.map((task, index) => {
          if (index === action.index) {
            return action.text;
          } else {
            return task;
          }
        }),
        edit: null,
      };

    default:
      return state;
  }
};

export default reducer;
