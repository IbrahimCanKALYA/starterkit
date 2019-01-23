/* @flow */
import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

type Props = any;

class Button extends Component<Props> {
  static defaultProps: any;

  render() {
    const {
      props: { text, buttonStyle, buttonTextStyle },
      props,
    } = this;
    return (
      <TouchableOpacity style={[styles.container, buttonStyle]} {...props}>
        <View style={styles.buttonText}>
          <Text style={buttonTextStyle}>{text}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string,
  buttonTextStyle: PropTypes.object,
  buttonStyle: PropTypes.object,
};
Button.defaultProps = {
  text: 'Button',
  buttonTextStyle: {},
  buttonStyle: {},
};

export default Button;
