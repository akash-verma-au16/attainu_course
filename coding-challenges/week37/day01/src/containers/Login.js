import LoginForm from '../components/LoginForm';
import { Link, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Login = () => {
  const isLoggedIn = useSelector((state) => state.auth);
  if (isLoggedIn) return <Redirect to='/home' />;

  return (
    <div className='d-flex flex-column justify-content-center align-items-center mt-3'>
      <div
        className='text-center border p-5 rounded-3 mt-5'
        style={{ width: '60vh' }}
      >
        <h1
          className='mb-0 pb-0'
          style={{ font: 'bold 3.25rem/150% Arial, sans-serif' }}
        >
          Login
        </h1>
        <LoginForm />
        <label className='mt-3'>
          Need a new account?{' '}
          <Link to='/signup' className='text-primary text-decoration-none'>
            Sign Up
          </Link>
        </label>
      </div>
    </div>
  );
};

export default Login;
