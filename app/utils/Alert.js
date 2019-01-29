/* @flow */
import { Alert } from 'react-native';

export default {
  // Shows an alert without cancel button...
  showInfo: (
    title: string = 'info',
    message: string,
    ok: Function = () => {
      // $FlowFixMe
      console.log('OK Pressed'); // eslint-disable-line
    },
  ) => {
    Alert.alert(title, message, [{ text: 'Tamam', onPress: ok }], { cancelable: false });
  },
  // Show alert with cancel button for take a confirmation from user...
  confirm: (
    title: string = 'info',
    message: string,
    ok: Function = () => {
      // $FlowFixMe
      console.log('OK Pressed'); // eslint-disable-line
    },
    cancel: Function = () => {
      'CANCEL Pressed';
    },
  ) => {
    Alert.alert(
      title,
      message,
      [{ text: 'İptal', onPress: cancel }, { text: 'Tamam', onPress: ok }],
      { cancelable: false },
    );
  },
};
