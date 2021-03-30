import React from 'react';
import ReactDOM from 'react-dom';
import App from './main/app';

import { Provider } from 'react-redux';
import storeConfig from './main/reducers';

const store = storeConfig()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);