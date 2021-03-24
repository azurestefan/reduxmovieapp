import React, { Component } from 'react';
import { fetchMovie, setLoading } from '../../actions/searchActions';
import Spinner from '../layout/Spinner';

class ImageLoader extends Component {
  state = {
    src: 'movie.Poster',
    fallbackSrc: `https://via.placeholder.com/295x295`,
    loaded: false,
    error: false,
  };
  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.id);
    this.props.setLoading();
  }
  onImageLoaded = () => {
    this.setState({ loaded: true });
  };

  onImageError = () => {
    this.setState({ error: true });
  };

  render() {
    const { movie } = this.props;
    const { src, loaded, fallbackSrc, error } = this.state;
    let imgSrc = movie.Poster === 'N/A' ? "https://via.placeholder.com/295x295" : movie.Poster;

    return (
      <div className='image-container'>
        <img src={imgSrc} onLoad={this.onImageLoaded} onError={this.onImageError} alt='default' />
        {!loaded && (
          <div className='image-container-overlay'>
            <Spinner />
          </div>
        )}
      </div>
    );
  }
}

export default ImageLoader;
