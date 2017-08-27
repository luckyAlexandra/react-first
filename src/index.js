import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { doChange } from './store/reducers.js';
import helloSaga from './sagas.js';

import App from './App';

const sagaMiddleware = createSagaMiddleware(helloSaga)

var store = createStore(doChange,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(helloSaga)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
