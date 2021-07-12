import { useSelector } from 'react-redux';

const Home = () => {
  const user = useSelector((state) => state.user);

  return (
    <div className='text-center mt-3'>
      <h1>PROFILE</h1>
      <hr />
      <div className='d-flex justify-content-center'>
        <div className='text-start border p-5'>
          <h2 className='text-center'>User Data</h2>
          <hr />
          <h3>Email: {user.email}</h3>
          <h3>Password: {user.password}</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
