/* @flow */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Navigate } from 'utils';
import styles from './styles';

type Props = any;

class SplashScreen extends Component<Props> {
  setNavigationStack() {
    const {
      props: { navigation, auth },
    } = this;
    if (auth.login) {
      Navigate.navigate(navigation, 'Tab');
    } else {
      Navigate.navigate(navigation, 'Stack');
    }
  }

  render() {
    this.setNavigationStack();
    return (
      <View style={styles.container}>
        <Text>SplashScreen</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(SplashScreen);
