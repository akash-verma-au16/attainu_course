import React from 'react';
import { Link } from 'react-router-dom';
import {} from 'react-bootstrap';

const Nav = () => (
  <nav className='bg-dark d-flex align-items-center justify-content-between'>
    <h4 className='text-light ms-5'>Navbar </h4>
    <ul className='d-flex mt-2 me-5'>
      <li>
        <Link className='nav-link mx-3' to='/'>
          Home
        </Link>
      </li>
      <li>
        <Link className='nav-link mx-3' to='/about'>
          About
        </Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
