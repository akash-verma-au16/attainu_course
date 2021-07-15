import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './index.scss';

const Profile = () => {
  
  const isLoggedIn = useSelector(state=>state.auth);
  const profile = useSelector(state=>state.profile);

  
  if(!isLoggedIn) {
    return <Redirect to="/login" />
  }

  return (
    <div className="profile-container">
      <h1>{profile.firstName}</h1>
      <span>{profile.email}</span>
    </div>
  )
};

export default Profile;
