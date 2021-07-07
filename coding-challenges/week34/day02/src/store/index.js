import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../reducer';
import thunk from 'redux-thunk';

const middleware = [thunk];
const initialState = {
  tasks: [],
  current: '',
  edit: null,
};

export default createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
