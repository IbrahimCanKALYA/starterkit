/* @flow */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import propTypes from 'prop-types';

import { Button } from 'components';
import styles from './styles';

type Props = any;
class SwiperRow extends Component<Props> {
  static defaultProps: any;

  render() {
    const {
      props: {
        text, button, buttonText, onPressButton,
      },
    } = this;
    return (
      <View style={styles.container}>
        <Text>{text}</Text>
        {button ? (
          <Button
            buttonStyle={styles.buttonStyle}
            buttonTextStyle={styles.buttonTextStyle}
            text={buttonText}
            onPress={onPressButton}
          />
        ) : null}
      </View>
    );
  }
}

SwiperRow.propTypes = {
  text: propTypes.string,
  button: propTypes.bool,
  buttonText: propTypes.string,
  onPressButton: propTypes.func,
};

SwiperRow.defaultProps = {
  text: '',
  button: false,
  buttonText: 'Start',
  onPressButton: () => {},
};

export default SwiperRow;
