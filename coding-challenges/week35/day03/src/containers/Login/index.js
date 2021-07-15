import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { axios } from '../../config';
import * as yup from 'yup';
import InputField from '../../components/InputField';
import Toast from '../../components/Toast';

import './index.scss';
import { setAuth } from '../../utils/auth';
import authAction from '../../actions/authAction';

let schema = yup.object().shape({
  password: yup.string().required().min(6),
  email: yup.string().required().email(),
});

const Login = ({history}) => {
  const isLoggedIn = useSelector(state=>state.auth);
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ message, setMessage ] = useState('');

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    setMessage('');
    e.preventDefault();
    schema.validate({email, password},{abortEarly:false})
    .then(data => {
      setMessage('');
      axios({
        method: 'post',
        url: 'login',
        data
      })
      .then(resp=> {
        setAuth(resp.data.token);
        dispatch(authAction.login());
        history.push('/profile')
      })
      .catch(err=>{
        setMessage(err.message);
      });
    })
    .catch( err => {
      setMessage(err.errors[0]);
    });
  }

  if(isLoggedIn) {
    return <Redirect to="/" />
  }

  return (
    <form className="login-form" onSubmit={submitHandler}>
      <Toast message={message} />
      <InputField
        value={email}
        setValue={setEmail}
        name="email"
        fieldId="inputEmail"
        label="Email"
      />
      <InputField
        value={password}
        setValue={setPassword}
        name="email"
        fieldId="inputPassword"
        label="Password"
      />
      <div className="mb-3 row">
        <div className="col-sm-10">
          <button className="btn btn-outline-danger">Login</button>
        </div>
      </div>
    </form>
  );
};

export default Login;
