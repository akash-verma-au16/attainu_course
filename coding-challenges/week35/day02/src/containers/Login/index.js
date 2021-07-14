import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setUser } from '../../actions';
import { GoogleLogin } from 'react-google-login';

const Login = () => {
  const email = useRef('');
  const password = useRef('');
  const dispatch = useDispatch();
  const history = useHistory();

  const formSubmit = (e) => {
    e.preventDefault();
    dispatch(
      setUser({
        email: email.current.value,
        password: password.current.value,
      })
    );
    history.push('/profile');
  };

  const responseGoogle = () => {
    dispatch(
      setUser({
        email: 'googleUser@google.com',
        password: 'googleUserPassword',
      })
    );
    history.push('/profile');
  };

  return (
    <div className='mt-3'>
      <h1 className='text-center'>LOGIN</h1>
      <hr />
      <div className='d-flex justify-content-center'>
        <Form className='w-25 border p-5' onSubmit={formSubmit}>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              ref={email}
              required
            />
          </Form.Group>

          <Form.Group controlId='formBasicPassword' className='mt-3'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Password'
              ref={password}
              required
            />
          </Form.Group>

          <Button variant='primary' type='submit' className='mt-3 w-100'>
            Submit
          </Button>
          <hr />
          <GoogleLogin
            clientId='541123293556-9f7v2a4bq3tv8nda146sg14vh15ega0l.apps.googleusercontent.com'
            render={(renderProps) => (
              <button
                className='btn btn-danger w-100'
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                Google+ Login
              </button>
            )}
            buttonText='Login'
            onSuccess={responseGoogle}
            //onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
        </Form>
      </div>
    </div>
  );
};

export default Login;
