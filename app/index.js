import { Navigation } from 'react-native-navigation';
import store from './redux/store';
import registerScreens from './screens';
import { images } from 'resources';

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
                    name: 'WelcomeScreen',
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Tab 1',
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
        ],
      },
    },
  });
}
