import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className='col-md-4 mb-5'>
        <div className='card card-body bg-dark text-center h-100 d-flex flex-column'>
          <img variant='top' className='w-100 mb-2' src={movie.Poster} alt='Movie Cover' rounded />
          <h5 className='text-light card-title'>
            {movie.Title} ({movie.Year})
          </h5>
          <Link className='btn btn-primary mt-auto' to={'/movie/' + movie.imdbID}>
            Movie Details
          </Link>
        </div>
      </div>
    );
  }
}

export default MovieCard;
