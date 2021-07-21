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
  },
  updateProfileImage: (data) => (dispatch) => {
    return axios({
      method: 'post',
      url: 'image',
      headers: {'Authorization': 'bearer '+localStorage.getItem('_ut_')},
      data
    }).then(resp => {
      dispatch({type: profileTypes.get, payload: resp.data.data})
    })
  }
};

export default profileAction;