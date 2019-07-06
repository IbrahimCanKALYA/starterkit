/* @flow */
import { Navigation } from 'react-native-navigation';
import { images } from 'resources';
// eslint-disable-next-line
import store from 'store';
import registerScreens from './screens';

registerScreens(store);

export function startIntroductionScreen() {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'WelcomeScreen',
            },
          },
        ],
        options: {
          topBar: {
            visible: false,
            height: 0,
          },
        },
      },
    },
  });
}

export function startTabBasedApp() {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'MessagingScreen',
                  },
                },
              ],
              options: {
                bottomTab: {
                  icon: images.messagingIcon,
                  testID: 'THIRD_TAB_BAR_BUTTON',
                },
                topBar: {
                  visible: false,
                  height: 0,
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'HomeScreen',
                  },
                },
              ],
              options: {
                bottomTab: {
                  icon: images.homePageIcon,
                  testID: 'FIRST_TAB_BAR_BUTTON',
                },
                topBar: {
                  visible: false,
                  height: 0,
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'ProfileScreen',
                  },
                },
              ],
              options: {
                bottomTab: {
                  icon: images.profileIcon,
                  testID: 'SECOND_TAB_BAR_BUTTON',
                },
                topBar: {
                  visible: false,
                  height: 0,
                },
              },
            },
          },
        ],
      },
    },
  });
}
