import React from 'react';

function Footer() {
  return (
    <footer>
      <div className='row'>
        <div className='col-md-12'>
          <div className='footer p-3 mt-4 text-center bg-dark text-light'>
            Developed By: <span className='text-warning font-weight-normal'>Stephen Hong</span> Using <span></span>
            <a href='http://www.omdbapi.com/' target='_blank' rel='noopener noreferrer'>
              OMDB API
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
