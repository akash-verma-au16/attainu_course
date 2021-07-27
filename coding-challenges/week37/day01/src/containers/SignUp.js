import SignUpForm from '../components/SignUpForm';
import { Link, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SignUp = () => {
  const isLoggedIn = useSelector((state) => state.auth);
  if (isLoggedIn) return <Redirect to='/home' />;

  return (
    <div className='d-flex flex-column justify-content-center align-items-center mt-3'>
      <div
        className='text-center border p-5 rounded-3'
        style={{ width: '60vh' }}
      >
        <h1
          className='mb-0 pb-0'
          style={{ font: 'bold 3.25rem/150% Arial, sans-serif' }}
        >
          Sign Up
        </h1>
        <SignUpForm />
        <label className='mt-3'>
          Already have an Account?{' '}
          <Link to='/' className='text-primary text-decoration-none'>
            Login
          </Link>
        </label>
      </div>
    </div>
  );
};

export default SignUp;
