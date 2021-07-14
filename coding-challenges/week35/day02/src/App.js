import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import routes, { privateRoutes } from './routes';
import Layout from './containers/Layout';

const App = () => {
  return (
    <Layout>
      <Switch>
        {privateRoutes.map((route, idx) => {
          return <PrivateRoute key={`P-${idx}`} {...route} />;
        })}
        {routes.map((route, idx) => (
          <Route key={idx} {...route} />
        ))}
      </Switch>
    </Layout>
  );
};

export default App;
