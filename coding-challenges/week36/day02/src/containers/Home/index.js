import { useSelector } from 'react-redux';
import Tasks from '../../components/Tasks';
const Home = () => {
  const isLoggedIn = useSelector(state => state.auth);

  return (
    <>
    {
      isLoggedIn ?
      <Tasks /> :
      <p>Login to continue...</p>
    }
    </>
  )
};

export default Home;
