import { useState } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import InputField from '../../components/InputField';
import Toast from '../../components/Toast';

import './index.scss';
import { PATHS } from '../../config';

let schema = yup.object().shape({
  firstName: yup.string().required(),
  password: yup.string().required().min(6),
  email: yup.string().required().email(),
});

const SignUp = ({history}) => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ firstName, setFirstName ] = useState('');
  const [ message, setMessage ] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    schema.validate({firstName, email, password},{abortEarly:false})
    .then( async data => {
      setMessage('');
      //making  api  call
      const response = await axios({
        method: 'post',
        url: 'http://localhost:5000/api/v1/signup',
        data
      });

      if(Object.values(response.data.error).length) {
        setMessage(response.data.message);
      } else {
        history.push(PATHS.LOGIN);
      }

    })
    .catch( err => {
      const errorMessage = err.errors ? err.errors[0] : err.message
      setMessage(errorMessage);
    });
  }

  return (
    <form className="signup-form" onSubmit={submitHandler}>
      <Toast message={message} />
      <InputField
        value={firstName}
        setValue={setFirstName}
        name="firstName"
        fieldId="inputFirstName"
        label="First Name"
      />
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
          <button className="btn btn-outline-danger">SignUp</button>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
