/* @flow */
import { Navigation } from 'react-native-navigation';

// Reset the app to a new layout...
const setRoot = (layout: any): void => {
  Navigation.setRoot(layout);
};

// Set default options to all screens. Useful for declaring a consistent style across the app...
const setDefaultOptions = (options: any): void => {
  Navigation.setDefaultOptions(options);
};

// Change a component's navigation options...
const mergeOptions = (componentId: string, options: any): void => {
  Navigation.mergeOptions(componentId, options);
};

// Show a screen as a modal...
const showModal = (screenName: string, passProps: any): void => {
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
const dismissModal = (componentId: string): void => {
  Navigation.dismissModal(componentId);
};

// Dismiss all Modals...
const dismissAllModals = (): void => {
  Navigation.dismissModal();
};

// Push a new layout into this screen's navigation stack...
const push = (componentId: string, screenName: string, passProps: any): void => {
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
const pop = (componentId: string, params: any): void => {
  Navigation.pop(componentId, params);
};

// Pop the stack to a given component...
const popTo = (componentId: string): void => {
  Navigation.popTo(componentId);
};

// Pop the component's stack to root...
const popToRoot = (componentId: string): void => {
  Navigation.popToRoot(componentId);
};

// Sets new root component to stack...
const setStackRoot = (componentId: string, layout: any): void => {
  Navigation.setStackRoot(componentId, layout);
};

// Show overlay on top of the entire app...
const showOverlay = (layout: string): void => {
  Navigation.showOverlay(layout);
};

// dismiss overlay by componentId...
const dismissOverlay = (componentId: string): void => {
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
