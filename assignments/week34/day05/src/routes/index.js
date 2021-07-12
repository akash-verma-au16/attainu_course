import { PATHS } from '../config';
import Profile from '../containers/Profile';
import Login from '../containers/Login';
import Videos from '../containers/Videos';

export const privateRoutes = [
  { exact: true, path: PATHS.PROFILE, component: Profile },
  { exact: true, path: PATHS.VIDEOS, component: Videos },
];

const routes = [{ exact: true, path: PATHS.LOGIN, component: Login }];

export default routes;
