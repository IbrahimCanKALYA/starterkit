/* @flow */
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import {
  WelcomeScreen,
  LoginScreen,
  HomeScreen,
  ProfileScreen,
  MessagingScreen,
  SplashScreen,
} from './screens';

const StackNavigator = createStackNavigator({
  WelcomeScreen: {
    screen: WelcomeScreen,
    navigationOptions: {
      header: null,
    },
  },
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
    },
  },
});

const TabNavigator = createBottomTabNavigator({
  HomeScreen: {
    screen: HomeScreen,
  },
  ProfileScreen: {
    screen: ProfileScreen,
  },
  MessagingScreen: {
    screen: MessagingScreen,
  },
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Splash: SplashScreen,
      Stack: StackNavigator,
      Tab: TabNavigator,
    },
    {
      initialRouteName: 'Splash',
    },
  ),
);
