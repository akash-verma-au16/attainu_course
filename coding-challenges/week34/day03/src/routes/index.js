import { PATHS } from '../config';
import Profile from '../containers/Profile';
import Videos from '../containers/Videos';

const routes = [
  { exact: true, path: PATHS.PROFILE, component: Profile },
  { exact: true, path: PATHS.VIDEOS, component: Videos },
];

export default routes;
