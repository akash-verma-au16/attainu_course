import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import profileAction from '../actions/profileAction';

const Home = () => {
  const dispatch = useDispatch();
  const [start, setStart] = useState(0);
  const profile = useSelector((state) => state.profile);
  const isLoggedIn = useSelector((state) => state.auth);

  useEffect(() => {
    if (isLoggedIn) dispatch(profileAction.getDetails());
  }, [isLoggedIn, dispatch]);

  if (!isLoggedIn) return <Redirect to='/' />;
  const skip = 10;

  const filterSearch = (e) => {
    setStart(0);
    dispatch(profileAction.filterUsers(e.target.value));
  };

  const items = [];
  for (let number = 1; number < profile.filtered.length / skip + 1; number++) {
    items.push(
      <h4
        className={number === start + 1 ? 'text-primary ps-3' : 'ps-3'}
        style={{ cursor: 'pointer' }}
        onClick={() => setStart(number - 1)}
      >
        {number}
      </h4>
    );
  }

  return (
    <div className='container my-4' style={{ maxWidth: '60vw' }}>
      <input
        type='text'
        placeholder='Filter/Search User...'
        className='w-100 p-2 rounded border-info'
        onChange={filterSearch}
      />
      <ul className='mt-3 list-group'>
        <li className='text-center bg-secondary text-light fs-2 list-group-item'>
          USERS
        </li>
        {profile.filtered.length > 0 ? (
          profile.filtered
            .slice(start * skip, (start + 1) * skip)
            .map((user, idx) => (
              <li
                key={idx}
                className='p-2 ps-4 list-group-item text-capitalize'
              >
                <img
                  src={user.avatar_url}
                  alt='img'
                  className='me-5'
                  style={{ width: '50px' }}
                />
                {user.login}
              </li>
            ))
        ) : (
          <li key='nil' className='p-2 list-group-item'>
            No User Available...
          </li>
        )}
        {profile.filtered.length > 0 && (
          <li className='bg-secondary text-light d-flex justify-content-center list-group-item pb-0'>
            {start !== 0 && (
              <h4
                style={{ cursor: 'pointer' }}
                onClick={() => setStart(start - 1)}
              >
                {'< '}
              </h4>
            )}
            <h4 className='d-flex'>{items}</h4>
            {(start + 1) * skip <= profile.filtered.length - 1 && (
              <h4
                className='ps-3'
                style={{ cursor: 'pointer' }}
                onClick={() => setStart(start + 1)}
              >
                {' >'}
              </h4>
            )}
          </li>
        )}
      </ul>
    </div>
  );
};

export default Home;
