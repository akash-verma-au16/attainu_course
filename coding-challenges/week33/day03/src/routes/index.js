import { PATHS } from '../config';
import Home from '../containers/Home';
import Posts from '../containers/Posts';
import PostDetail from '../containers/PostDetail';

const routes = [
  { exact: true, path: PATHS.HOME, component: Home },
  { exact: true, path: PATHS.POSTS, component: Posts },
  { exact: true, path: PATHS.POST_DETAIL, component: PostDetail },
];

export default routes;
