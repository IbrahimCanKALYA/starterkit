/* @flow */
import { Navigation } from 'react-native-navigation';
import { Redux } from 'utils';
import WelcomeScreen from './WelcomeScreen';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import MessagingScreen from './MessagingScreen';

// registering all screens with redux...
export default function registerScreens(store: any = null) {
  Navigation.registerComponent('WelcomeScreen', Redux.reduxStoreWrapper(WelcomeScreen, store));
  Navigation.registerComponent('LoginScreen', Redux.reduxStoreWrapper(LoginScreen, store));
  Navigation.registerComponent('HomeScreen', Redux.reduxStoreWrapper(HomeScreen, store));
  Navigation.registerComponent('ProfileScreen', Redux.reduxStoreWrapper(ProfileScreen, store));
  Navigation.registerComponent('MessagingScreen', Redux.reduxStoreWrapper(MessagingScreen, store));
}
