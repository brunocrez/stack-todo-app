import { combineReducers, createStore, applyMiddleware } from 'redux';

import promise from 'redux-promise';
import multi from 'redux-multi';
import thunk from 'redux-thunk'

import todoReducer from '../todo/_todoReducer';

const rootReducers = combineReducers({
  todo: todoReducer
});

function storeConfig() {
  return applyMiddleware(thunk, multi, promise)(createStore)(rootReducers);
}

export default storeConfig;