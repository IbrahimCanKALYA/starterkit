/* @flow */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';

type Props = any;

class ProfileScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text>ProfileScreen</Text>
      </View>
    );
  }
}

const mapStateToProps = null;

export default connect(mapStateToProps)(ProfileScreen);
