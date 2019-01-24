/* @flow */
import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import WelcomeScreen from './WelcomeScreen';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import MessagingScreen from './MessagingScreen';

type Props = any;

function reduxStoreWrapper(MyComponent, store, ...props) {
  return () => class StoreWrapper extends Component<Props> {
    render() {
      return (
        <Provider store={store}>
          <MyComponent
            {...{
              ...this.props,
              ...props,
            }}
          />
        </Provider>
      );
    }
  };
}

// registering all screens with redux...
export default function registerScreens(store: any = null) {
  Navigation.registerComponent('WelcomeScreen', reduxStoreWrapper(WelcomeScreen, store));
  Navigation.registerComponent('LoginScreen', reduxStoreWrapper(LoginScreen, store));
  Navigation.registerComponent('HomeScreen', reduxStoreWrapper(HomeScreen, store));
  Navigation.registerComponent('ProfileScreen', reduxStoreWrapper(ProfileScreen, store));
  Navigation.registerComponent('MessagingScreen', reduxStoreWrapper(MessagingScreen, store));
}
