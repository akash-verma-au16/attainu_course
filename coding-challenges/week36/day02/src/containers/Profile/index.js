import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import './index.scss';
import profileAction from '../../actions/profileAction';

const Profile = () => {
  const dispatch = useDispatch();
  const [ file, setFile ] = useState('');

  const isLoggedIn = useSelector(state=>state.auth);
  const profile = useSelector(state=>state.profile);

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  }

  const uploadImage = () => {
    const formData = new FormData();
    formData.append('image',file);
    dispatch(profileAction.updateProfileImage(formData));
    setFile(null);
  }
  
  if(!isLoggedIn) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <div className="profile-container">
        {
          profile.image ?
          <img className="profile-image" src={profile.image} alt="user profile" /> :
          null
        }
        <h1>{profile.firstName}</h1>
        <span>{profile.email}</span>
      </div>
      <div className="upload-containner">
        <input
          className="image-input"
          name="image"
          type="file"
          value=""
          onChange={onFileChange}
        />
        <button
          className={`btn btn-success${file ? '' : ' disabled'}`}
          onClick={uploadImage}
        >
          Upload
        </button>
      </div>
    </>
  )
};

export default Profile;
