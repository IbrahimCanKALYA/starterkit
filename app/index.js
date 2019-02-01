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

let Navigation = null; // eslint-disable-line

function startIntroductionScreen() {
  const AppNavigator = createStackNavigator({
    WelcomeScreen: {
      screen: WelcomeScreen,
    },
    LoginScreen: {
      screen: LoginScreen,
    },
  });

  Navigation = createAppContainer(AppNavigator);
}

function startTabBasedApp() {
  const TabNavigator = createBottomTabNavigator({
    HomeScreen,
    ProfileScreen,
    MessagingScreen,
  });

  Navigation = createAppContainer(TabNavigator);
}

export { Navigation, startIntroductionScreen, startTabBasedApp };
