/* @flow */
import { Alert } from 'react-native';

export default {
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
