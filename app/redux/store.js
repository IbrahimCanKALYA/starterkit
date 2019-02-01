/* @flow */
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import sagas from 'sagas';
import reducers from './reducerCombiner';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(sagas);

const persistor = persistStore(store);

// $FlowFixMe
console.disableYellowBox = true; // eslint-disable-line

export { store, persistor };
