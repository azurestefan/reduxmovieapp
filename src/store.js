import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from './reducers';

const middleware = [thunk];
const initialState = {};
const store = createStore(
  rootReducer,
  initialState,
  //spread operator applies other middleware needed for this store.
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
