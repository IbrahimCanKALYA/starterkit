/* @flow */
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import sagas from 'sagas';
import { startIntroductionScreen, startTabBasedApp } from '../index';
import reducers from './reducerCombiner';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(sagas);

function onRehydrate() {
  // Getting past state from phone storage...
  const currentState = store.getState();

  // $FlowFixMe
  console.disableYellowBox = true; // eslint-disable-line

  if (currentState.auth.login) {
    startTabBasedApp();
  } else {
    startIntroductionScreen();
  }
}

persistStore(store, {}, onRehydrate);

export default store;
