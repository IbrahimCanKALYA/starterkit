import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import store from 'store';
import * as Navigation from './app/';

type Props = any;

export default class App extends Component<Props> {
  render() {
    console.log('app.js')
    return (
      <Provider store={store}>
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
          <Navigation />
        </View>
      </Provider>
    );
  }
}
