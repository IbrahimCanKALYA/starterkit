import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { store, persistor } from 'store';
import { PersistGate } from 'redux-persist/integration/react';
import { Loading } from 'components';
import { Navigation } from './app/index';

let interval;
type Props = any;

export default class App extends Component<Props> {
  async componentWillMount() {
    await this.watchStackNavigator();
  }

  watchStackNavigator() {
    interval = setInterval(() => {
      if (Navigation !== null) {
        this.forceUpdate();
        clearInterval(interval);
      }
    }, 1);
    return true;
  }

  // you can render your splash screen instead of Loading...
  render() {
    if (Navigation !== null) {
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
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <Loading />
      </View>
    );
  }
}
