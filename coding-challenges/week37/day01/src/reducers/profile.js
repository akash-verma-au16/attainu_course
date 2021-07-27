import { profileTypes } from '../actionTypes';

const initialData = {
  users: [],
  filtered: [],
};

const profile = (state, action) => {
  state = state || initialData;

  switch (action.type) {
    case profileTypes.get:
      return { ...state, users: action.payload, filtered: action.payload };

    case profileTypes.filter:
      return {
        ...state,
        filtered: state.users.filter((str) =>
          str.login.includes(action.payload)
        ),
      };

    default:
      return state;
  }
};

export default profile;
