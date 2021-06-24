import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const Alarm = () => {
  const [state, setState] = useState({
    current: null,
    alarms: [],
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
    seconds: new Date().getSeconds(),
  });

  useEffect(() => {
    setInterval(() => {
      setState((s) => ({
        ...s,
        hours: new Date().getHours(),
        minutes: new Date().getMinutes(),
        seconds: new Date().getSeconds(),
      }));
    }, 1000);
  }, []);

  useEffect(() => {
    state.alarms.forEach((alarm) => {
      const [h, m] = alarm.split(':');
      if (h === state.hours.toString() && m === state.minutes.toString()) {
        console.log(`Alarm..... ${alarm}`);
        alert(`Alarm..... ${alarm}`);
        setState({
          ...state,
          alarms: state.alarms.filter((done) => done !== alarm),
        });
      }
    });
  }, [state.minutes, state.hours, state.alarms]);

  const onChange = (e) => {
    setState({
      ...state,
      current: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.current && !state.alarms.includes(state.current)) {
      setState({
        ...state,
        alarms: [...state.alarms, state.current],
      });
    }
  };

  return (
    <div className='d-flex justify-content-center'>
      <Form className='border p-5 rounded' onSubmit={handleSubmit}>
        <h3 className='text-primary mb-4 text-center'>{`${state.hours} : ${state.minutes} : ${state.seconds}`}</h3>
        <Form.Group controlId='inputfield'>
          <Form.Control type='time' placeholder='Time' onChange={onChange} />
        </Form.Group>
        <div className='mt-3'>
          <Button variant='primary' type='submit' size='lg' className='w-100'>
            Set Alarm
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Alarm;
