import { profileTypes } from '../actionTypes';
import { axios } from '../config';

const profileAction = {
  getDetails: () => (dispatch) => {
    return axios({
      method: 'get',
      url: 'users',
      headers: { 'x-auth-token': localStorage.getItem('_ut_') },
    })
      .then((resp) => dispatch({ type: profileTypes.get, payload: resp.data }))
      .catch((err) => dispatch({ type: profileTypes.get, payload: [] }));
  },

  filterUsers: (text) => (dispatch) => {
    return dispatch({ type: profileTypes.filter, payload: text });
  },
};

export default profileAction;
