import { Alert } from 'react-native';

export default {
  showInfo: (
    title = 'info',
    message,
    ok = () => {
      console.log('OK Pressed');
    },
  ) => {
    Alert.alert(title, message, [{ text: 'Tamam', onPress: ok }], { cancelable: false });
  },
  confirm: (
    title = 'info',
    message,
    ok = () => {
      console.log('OK Pressed');
    },
    cancel = () => {
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
