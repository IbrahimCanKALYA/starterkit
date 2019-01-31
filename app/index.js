/* @flow */
// import { images } from 'resources';
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
} from 'react-navigation';
// import store from 'store';
import {
  WelcomeScreen,
  LoginScreen,
  HomeScreen,
  ProfileScreen,
  MessagingScreen,
} from './screens';

let navigation; // eslint-disable-line

export function startIntroductionScreen() {
  const AppNavigator = createStackNavigator({
    WelcomeScreen: {
      screen: WelcomeScreen,
    },
    LoginScreen: {
      screen: LoginScreen,
    },
  });

  navigation = createAppContainer(AppNavigator);
}

export function startTabBasedApp() {
  const TabNavigator = createBottomTabNavigator({
    HomeScreen,
    ProfileScreen,
    MessagingScreen,
  });

  navigation = createAppContainer(TabNavigator);
}

export default navigation;
