import { combineReducers, createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import todoReducer from '../todo/_todoReducer';

const rootReducers = combineReducers({
  todo: todoReducer
});

function storeConfig() {
  return applyMiddleware(promise)(createStore)(rootReducers);
}

export default storeConfig;