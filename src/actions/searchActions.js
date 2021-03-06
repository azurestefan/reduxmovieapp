//each action is a function. Each action has a type, payload.
//the action here is search. We will trigger the search action when we press the enter.
//Will call the api, the data will fetched and passed from the action into the reducer.
//reducer will check the action type. If it is a movie action type it will set the movie into the action payload.
import { SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, LOADING } from './types';
import axios from 'axios';
import { APIKey } from '../akey';

//action with name searchMovie
export const searchMovie = (text) => (dispatch) => {
  // In redux, when something is triggered, an action is dispatched. dispatch is coming from the redux thunk middleware.
  dispatch({
    type: SEARCH_MOVIE,
    payload: text, //the text that is passed from the action and is set into the payload.
  }); // dispatching the action type and the action payload which will allow the reducer(searchReducer) to recognize our action.
};

export const fetchMovies = (text) => (dispatch) => {
  axios
    .get(`https://www.omdbapi.com/?apikey=${APIKey}&s=${text}`)
    .then((response) =>
      dispatch({
        type: FETCH_MOVIES,
        payload: response.data,
      })
    )
    .catch((err) => console.log(err));
};

export const fetchMovie = (id) => (dispatch) => {
  axios
    .get(`https://www.omdbapi.com/?apikey=${APIKey}&i=${id}`)
    .then((response) =>
      dispatch({
        type: FETCH_MOVIE,
        payload: response.data,
      })
    )
    .catch((err) => console.log(err));
};

export const setLoading = () => {
  return {
    type: LOADING,
  };
};
