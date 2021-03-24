import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header>
      <nav className='navbar navbar-light bg-dark mb-5 w-100'>
        <div className='container'>
          <div className='navbar-header'>
            <Link className='navbar-brand text-white text-lg brand-text' to='/'>
              Movie Explorer
            </Link>
          </div>
          <ul className='navbar-nav ml-auto text-light d-inline-block'>
            <li className='nav-item d-inline-block mr-4'>
              <i className='fas fa-film fa-3x' id='react-logo' />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
