import { combineReducers, createStore } from 'redux';

import todoReducer from '../todo/_todoReducer';

const rootReducers = combineReducers({
  todo: todoReducer
});

function storeConfig() {
  return createStore(rootReducers);
}

export default storeConfig;