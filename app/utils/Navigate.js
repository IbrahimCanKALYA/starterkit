/* @flow */

// Push a new layout into this screen's navigation stack...
const navigate = (navigator: any, screenName: string, passProps: any): void => {
  navigator.navigate(screenName);
};

const push = (navigator: any, screenName: string, passProps: any): void => {
  navigator.push(screenName);
};

module.exports = {
  navigate,
  push,
};
