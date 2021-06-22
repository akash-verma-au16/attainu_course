import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Fragment } from 'react';
import Header from './components/Header';
import Posts from './components/Posts';
import Current from './components/Current';

import PostState from './context/post/PostState';

const App = () => (
  <Fragment>
    <PostState>
      <Header />
      <div className='d-flex container my-3'>
        <div className='p-3 w-75'>
          <Posts />
        </div>
        <div className='p-3 w-25'>
          <Current />
        </div>
      </div>
    </PostState>
  </Fragment>
);

export default App;
