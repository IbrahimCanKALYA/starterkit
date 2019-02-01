/* @flow */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Swiper from 'react-native-swiper';

import { Navigate } from 'utils';
import SwiperRow from './SwiperRow';
import styles from './styles';

type Props = any;

type State = {
  showDots: boolean,
  swipeElements: Array<Object>,
};

class WelcomeScreen extends Component<Props, State> {
  static defaultProps: any;

  constructor(props) {
    super(props);
    const {
      props: { navigation },
    } = this;
    this.state = {
      swipeElements: [
        { text: 'First Swipe', key: 'first' },
        { text: 'Second Swipe', key: 'second' },
        {
          text: 'Third Swipe',
          key: 'third',
          button: true,
          buttonText: 'Start',
          onPressButton: () => {
            Navigate.push(navigation, 'LoginScreen');
          },
        },
      ],
      showDots: true,
    };
  }

  render() {
    const {
      state: { showDots, swipeElements },
    } = this;
    return (
      <View style={styles.container}>
        <Swiper
          onMomentumScrollEnd={(e, state) => {
            if (state.index === 2) {
              this.setState({ showDots: false });
            } else {
              this.setState({ showDots: true });
            }
          }}
          loop={false}
          showsPagination={showDots}
        >
          {swipeElements.map(item => (
            <SwiperRow
              text={item.text}
              button={item.button}
              buttonText={item.buttonText}
              onPressButton={item.onPressButton}
              key={item.key}
            />
          ))}
        </Swiper>
      </View>
    );
  }
}

WelcomeScreen.propTypes = {
  navigation: PropTypes.any.isRequired,
};
WelcomeScreen.defaultProps = {};

const mapStateToProps = null;

export default connect(mapStateToProps)(WelcomeScreen);
