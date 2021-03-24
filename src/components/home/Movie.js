import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchMovie, setLoading } from '../../actions/searchActions';
import Spinner from '../layout/Spinner';
import ImageLoader from './ImageLoader';

export class Movie extends Component {
  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.id);
    this.props.setLoading();
  }
  render() {
    const { loading, movie } = this.props;
    let imgSrc = movie.Poster === 'N/A' ? 'https://via.placeholder.com/295x295' : movie.Poster;

    let movieInfo = (
      <main className='container'>
        <div className='row'>
          <figure className='col-md-4 card card-body'>
            <img src={imgSrc} className='thumbnail' alt='Poster' />
          </figure>
          <article className='col-md-8'>
            <header className='mb-4'>{movie.Title}</header>
            <ul className='list-group'>
              <li className='list-group-item'>
                <strong>Genre:</strong> {movie.Genre}
              </li>
              <li className='list-group-item'>
                <strong>Released:</strong> {movie.Released}
              </li>
              <li className='list-group-item'>
                <strong>Rated:</strong> {movie.Rated}
              </li>
              <li className='list-group-item'>
                <strong>IMDB Rating:</strong> {movie.imdbRating}
              </li>
              <li className='list-group-item'>
                <strong>Director:</strong> {movie.Director}
              </li>
              <li className='list-group-item'>
                <strong>Writer:</strong> {movie.Writer}
              </li>
              <li className='list-group-item'>
                <strong>Actors:</strong> {movie.Actors}
              </li>
            </ul>
          </article>
        </div>
        <article className='row'>
          <div className='card card-body bg-dark my-5 text-light'>
            <aside className='col-md-12'>
              <h3>About </h3>
              {movie.Plot}
              <hr />
              <a href={'https://www.imdb.com/title/' + movie.imdbID} target='_blank' rel='noopener noreferrer' className='btn btn-primary'>
                View on IMDB
              </a>
              <Link to='/' className='btn btn-default text-light'>
                Go Back To Search
              </Link>
            </aside>
          </div>
        </article>
      </main>
    );

    let content = loading ? <Spinner /> : movieInfo;
    return <div>{content}</div>;
  }
}

const mapStateToProps = (state) => ({
  loading: state.movies.loading,
  movie: state.movies.movie,
});

export default connect(mapStateToProps, { fetchMovie, setLoading })(Movie);
