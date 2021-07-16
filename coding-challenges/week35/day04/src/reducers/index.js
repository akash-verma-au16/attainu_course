import { combineReducers } from 'redux';

import auth from './auth';
import profile from './profile';
import tasks from './tasks';


export default combineReducers({
  auth,
  profile,
  tasks
});