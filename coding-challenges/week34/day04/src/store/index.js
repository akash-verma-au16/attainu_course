import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducers';
import thunk from 'redux-thunk';

const middleware = [thunk];
const initialState = {
  videos: [],
  error: '',
};

export default createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
