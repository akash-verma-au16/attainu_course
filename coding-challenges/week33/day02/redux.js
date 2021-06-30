const redux = require('redux');

const initialState = {
  counter: 0,
  userInfo: {},
  posts: [],
};

const createStore = redux.createStore;

const reducer = (state, action) => {
  state = state || initialState;
  if (action.type === 'INCREMENT') {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }
  if (action.type === 'DECREMENT') {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }
  if (action.type === 'ADD_USER') {
    return {
      ...state,
      userInfo: action.payload,
    };
  }
  if (action.type === 'ADD_POST') {
    return {
      ...state,
      posts: [...state.posts, action.payload],
    };
  }

  return state;
};

const store = createStore(reducer);

store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });
store.dispatch({
  type: 'ADD_POST',
  payload: {
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreparchitecto',
  },
});

store.dispatch({
  type: 'ADD_USER',
  payload: {
    id: 7,
    name: 'John Doe',
    username: 'Bret',
    email: 'John@yop.biz',
  },
});

console.log(store.getState());
