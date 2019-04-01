/* eslint-disable no-underscore-dangle */
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import throttle from 'lodash/throttle';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};
const persistedState = loadState();

const store = createStore(
  null,
  persistedState,
  composeEnhancers(applyMiddleware(thunk))
);

const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    return localStorage.setItem('state', serializedState);
  } catch (error) {
    // die
  }
};

store.subscribe(
  throttle(() => {
    saveState({
      auth: store.getState().auth
    });
  }, 1000)
);

export default store;
