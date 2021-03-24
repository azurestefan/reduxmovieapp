import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    let imgSrc = movie.Poster === 'N/A' ? 'https://via.placeholder.com/295x350' : movie.Poster;

    return (
      <div className='col-md-4 mb-5'>
        <div className='card card-body bg-dark text-center h-100 d-flex flex-column'>
          <img variant='top' className='card-img-top' src={imgSrc} alt='Movie Cover' rounded />

          <div className='card-body d-flex flex-column'>
            <h5 className='text-light card-title mt-auto'>
              {movie.Title} <br />({movie.Year}) <br />
              <br />
              <Link className='btn btn-primary mt-auto' to={'/movie/' + movie.imdbID}>
                Movie Details
              </Link>
            </h5>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
