import { PATHS } from '../config';
import Home from '../containers/Home';
import Login from '../containers/Login';
import NotFound from '../containers/NotFound';
import SignUp from '../containers/SignUp';

const routes = [
  { path: PATHS.HOME, exact: true, component: Home },
  { path: PATHS.LOGIN, exact: true, component: Login },
  { path: PATHS.SIGNUP, exact: true, component: SignUp },
  { path: '*', exact: true, component: NotFound },
];

export default routes;
