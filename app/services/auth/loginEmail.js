/* @flow */
import firebase from 'react-native-firebase';

export default function loginEmail(eMail: String, password: String) {
  return firebase.auth().signInWithEmailAndPassword(eMail, password);
}
