import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Redirect } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { setAuth } from '../utils/auth';
import authAction from '../actions/authAction';
import { axios } from '../config';
import { useDispatch } from 'react-redux';

const SignupSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6, 'Password is too short.').required(),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });

  const onSubmit = (data) => {
    setMessage('');
    axios({
      method: 'post',
      url: 'login',
      data,
    })
      .then((resp) => {
        if (resp.data.msg) return setMessage(resp.data.msg);
        setAuth(resp.data.token);
        dispatch(authAction.login());
        return <Redirect to='/home' />;
      })
      .catch((err) => {
        setMessage(err.message);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='w-100 p-3'>
      {message !== '' && (
        <p className='alert alert-danger p-1'>
          {message}
          <span
            onClick={() => setMessage('')}
            className='float-end p-0 me-1 btn'
          >
            &times;
          </span>
        </p>
      )}
      <div className='mt-3 text-start'>
        <input
          {...register('email')}
          className='w-100'
          style={input}
          placeholder='Enter Email'
        />
        {errors.email && (
          <p className='text-danger mt-2 py-0'>⚠ {errors.email.message}</p>
        )}
      </div>
      <div className='mt-3 text-start'>
        <input
          type='password'
          {...register('password')}
          className='w-100'
          style={input}
          placeholder='Enter Password'
        />
        {errors.password && (
          <p className='text-danger mt-2 py-0'>⚠ {errors.password.message}</p>
        )}
      </div>
      <button className='btn btn-danger mt-3 w-100' type='submit'>
        Login
      </button>
    </form>
  );
};

const input = {
  padding: '8px 15px',
  border: '1px solid #D3D3D3',
  borderRadius: '5px',
};

export default LoginForm;
