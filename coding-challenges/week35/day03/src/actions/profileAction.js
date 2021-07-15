import { profileTypes } from '../actionTypes';
import { axios } from '../config';

const profileAction = {
  getDetails: () => (dispatch) => {
    return axios({
      method: 'post',
      url: 'user',
      headers: {'Authorization': 'bearer '+localStorage.getItem('_ut_')}
    }).then(resp => {
      dispatch({type: profileTypes.get, payload: resp.data})
    })
  }
};

export default profileAction;