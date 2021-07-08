import { Link } from 'react-router-dom';
import { PATHS } from '../../config';

const Menu = () => {
  return (
    <nav className='navbar bg-dark d-flex justify-content-between px-5'>
      <h5 className='text-light'>NAVBAR</h5>
      <ul className='d-flex'>
        <li>
          <Link className='nav-link' to={PATHS.PROFILE}>
            Profile
          </Link>
        </li>
        <li>
          <Link className='nav-link' to={PATHS.VIDEOS}>
            Videos
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
