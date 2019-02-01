import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { store, persistor } from 'store';
import { Loading } from 'components';
import { PersistGate } from 'redux-persist/es/integration/react';
import Navigation from './app/index';

type Props = any;

export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <Navigation />
          </View>
        </PersistGate>
      </Provider>
    );
  }
}
