/* @flow */
import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './styles';

type Props = any;

class Loading extends Component<Props> {
  static defaultProps: any;

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}

Loading.propTypes = {};
Loading.defaultProps = {};

export default Loading;
