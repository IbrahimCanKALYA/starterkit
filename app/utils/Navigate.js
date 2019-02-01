/* @flow */

// Push a new layout into this screen's navigation stack...
const navigate = (navigation: any, screenName: string, passProps: any): void => {
  navigation.navigate(screenName);
};

const push = (navigation: any, screenName: string, passProps: any): void => {
  navigation.push(screenName);
};

module.exports = {
  navigate,
  push,
};
