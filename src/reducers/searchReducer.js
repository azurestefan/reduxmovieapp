import { SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, LOADING } from '../actions/types';

//initial states of our app. Reducer is recognizing the action by its type. All the types of our actions is stored in actions/types
const initialState = {
  //4 basic states in our application
  text: '', //text user is entering in the search box.
  movies: [], //json data from search result.
  loading: false, //spinner will be applied depending on this state.
  movie: [], // single move value from api.
};

//
export default function searchReducer(state = initialState, action) {
  //will test the action type. Depending on the action type it will set the value of that action which is the payload(data coming from the action) into specific states.
  switch (action.type) {
    case SEARCH_MOVIE: //If the action type is SEARCH_MOVIE,
      return {
        ...state,
        text: action.payload, //will return the text state from the searchAction.js
        loading: false,
      };
    case FETCH_MOVIES: 
      return {
        ...state,
        movies: action.payload, 
        loading: false,
      };
    case FETCH_MOVIE:
      return {
        ...state,
        movie: action.payload,
        loading: false,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
