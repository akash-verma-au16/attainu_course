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
  firstName: yup.string().required(),
  lastName: yup.string(),
  email: yup.string().email().required(),
  password: yup.string().min(6, 'Password is too short.').required(),
  check: yup
    .boolean()
    .oneOf([true], 'You must accept the Terms and Conditions'),
});

const SignUpForm = () => {
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
      url: 'signup',
      data,
    })
      .then((resp) => {
        if (resp.data.msg) return setMessage(resp.data.msg);
        setAuth(resp.data.token);
        dispatch(authAction.login());
        return <Redirect to='/home' />;
      })
      .catch((err) => {
        console.log(err);
        setMessage(err.message);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='w-100'>
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
          {...register('firstName')}
          className='w-100'
          style={input}
          placeholder='Enter First Name'
        />
        {errors.firstName && (
          <p className='text-danger mt-2 py-0'>⚠ {errors.firstName.message}</p>
        )}
      </div>
      <div className='mt-3 text-start'>
        <input
          {...register('lastName')}
          className='w-100'
          style={input}
          placeholder='Enter Last Name'
        />
        {errors.lastName && (
          <p className='text-danger mt-2 py-0'>⚠ {errors.lastName.message}</p>
        )}
      </div>
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
      <div className='mt-3 text-start'>
        <input type='checkbox' {...register('check')} />
        <label className='ms-3'>
          I agree to the{' '}
          <span className='text-primary'>Terms & Conditions</span>.
        </label>
        {errors.check && (
          <p className='text-danger mt-2 py-0'>⚠ {errors.check.message}</p>
        )}
      </div>
      <button className='btn btn-danger mt-2 w-100' type='submit'>
        Sign Up
      </button>
    </form>
  );
};

const input = {
  padding: '8px 15px',
  border: '1px solid #D3D3D3',
  borderRadius: '5px',
};

export default SignUpForm;
