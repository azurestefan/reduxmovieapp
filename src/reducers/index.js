import { combineReducers } from 'redux';
import searchReducer from './searchReducer';

export default combineReducers({
  movies: searchReducer, //combineReducers is the parent state that literally combines all reducers. Movies will take the values and states from searchReducer
});
