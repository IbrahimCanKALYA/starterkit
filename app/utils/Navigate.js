import { Navigation } from 'react-native-navigation';

// Reset the app to a new layout...
const setRoot = (layout) => {
  Navigation.setRoot(layout);
};

// Set default options to all screens. Useful for declaring a consistent style across the app...
const setDefaultOptions = (options) => {
  Navigation.setDefaultOptions(options);
};

// Change a component's navigation options...
const mergeOptions = (componentId, options) => {
  Navigation.mergeOptions(componentId, options);
};

// Show a screen as a modal...
const showModal = (screenName, passProps) => {
  Navigation.showModal({
    component: {
      name: screenName,
      passProps: {
        ...passProps,
      },
    },
  });
};

// Dismiss a modal by componentId. The dismissed modal can be anywhere in the stack...
const dismissModal = (componentId) => {
  Navigation.dismissModal(componentId);
};

// Dismiss all Modals...
const dismissAllModals = () => {
  Navigation.dismissModal();
};

// Push a new layout into this screen's navigation stack...
const push = (componentId, screenName, passProps) => {
  Navigation.push(componentId, {
    component: {
      name: screenName,
      passProps: {
        ...passProps,
      },
    },
  });
};

// Pop a component from the stack, regardless of it's position...
const pop = (componentId, params) => {
  Navigation.pop(componentId, params);
};

// Pop the stack to a given component...
const popTo = (componentId) => {
  Navigation.popTo(componentId);
};

// Pop the component's stack to root...
const popToRoot = (componentId) => {
  Navigation.popToRoot(componentId);
};

// Sets new root component to stack...
const setStackRoot = (componentId, layout) => {
  Navigation.setStackRoot(componentId, layout);
};

// Show overlay on top of the entire app...
const showOverlay = (layout) => {
  Navigation.showOverlay(layout);
};

// dismiss overlay by componentId...
const dismissOverlay = (componentId) => {
  Navigation.dismissOverlay(componentId);
};

// Resolves arguments passed on launch...
const getLaunchArgs = () => Navigation.getLaunchArgs();

// Obtain the events registry instance...
const events = () => Navigation.events();

// Constants coming from native...
const constants = () => Navigation.constants();

module.exports = {
  setRoot,
  setDefaultOptions,
  mergeOptions,
  showModal,
  dismissModal,
  dismissAllModals,
  push,
  pop,
  popTo,
  popToRoot,
  setStackRoot,
  showOverlay,
  dismissOverlay,
  getLaunchArgs,
  events,
  constants,
};
