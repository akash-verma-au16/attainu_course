import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { LABELS, PATHS } from '../../config';
import profileAction from '../../actions/profileAction';
import HeaderLink from '../HeaderLink';
import Logout from '../Logout';
const AppNav = () => {

  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state=>state.auth);

  useEffect(() => {
    if(isLoggedIn) {
      setTimeout(() => {
        dispatch(profileAction.getDetails());
      }, 0);
    }
  },[isLoggedIn,dispatch]);

  return (
    <header>
      <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
        <Link to={PATHS.HOME} className="d-flex align-items-center text-dark text-decoration-none">
          <span className="fs-4">{LABELS.home}</span>
        </Link>

        <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
          {
            isLoggedIn ?
              <>
                <HeaderLink to={PATHS.PROFILE} name={LABELS.profile} />
                <Logout to={PATHS.LOGOUT} name={LABELS.logout} />
              </> :
              <>
                <HeaderLink to={PATHS.LOGIN} name={LABELS.login} />
                <HeaderLink to={PATHS.SIGNUP} name={LABELS.signup} />
              </>
          }
        </nav>
      </div>
    </header>
  )
}

export default AppNav;
