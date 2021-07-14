import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = useSelector((state) => state.user);

  return (
    <Route
      {...rest}
      render={(props) =>
        user.email ? <Component {...props} /> : <Redirect to='/' />
      }
    />
  );
};
export default PrivateRoute;
