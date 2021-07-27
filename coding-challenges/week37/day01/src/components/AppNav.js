import { Link } from 'react-router-dom';
import { LABELS, PATHS } from '../config';
import { useSelector, useDispatch } from 'react-redux';
import authAction from '../actions/authAction';

const AppNav = () => {
  const isLoggedIn = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logoutUser = (e) => {
    e.preventDefault();
    dispatch(authAction.logout());
  };

  return (
    <nav className='d-flex bg-dark text-light py-2 justify-content-between align-items-center px-3'>
      <h3 className='text-light'>Adrixus</h3>
      {isLoggedIn ? (
        <div>
          <Link
            onClick={logoutUser}
            className='me-3 py-2 text-decoration-none'
            to={PATHS.LOGOUT}
          >
            {LABELS.logout}
          </Link>
        </div>
      ) : (
        <div>
          <Link className='me-3 py-2 text-decoration-none' to={PATHS.LOGIN}>
            {LABELS.login}
          </Link>
          <Link className='me-3 py-2 text-decoration-none' to={PATHS.SIGNUP}>
            {LABELS.signup}
          </Link>
        </div>
      )}
    </nav>
  );
};

export default AppNav;
