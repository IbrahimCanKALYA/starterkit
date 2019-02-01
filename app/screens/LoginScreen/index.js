/* @flow */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Button, TextInputCustom, Loading } from 'components';
import { FormValidation, Alert, Navigate } from 'utils';
import * as AuthActions from 'actions/auth';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';

type Props = any;
type State = {
  serviceCall: boolean,
};
class LoginScreen extends Component<Props, State> {
  static defaultProps: any;

  constructor(props) {
    super(props);
    this.state = {
      serviceCall: false,
    };
  }

  componentDidUpdate() {
    const {
      state: { serviceCall },
    } = this;
    const {
      props: { auth, navigation },
    } = this;
    if (serviceCall && !auth.isLoading) {
      if (auth.error) {
        Alert.showInfo('Hata', auth.errorDescription);
      } else {
        Navigate.navigate(navigation, 'Tab');
      }
    }
  }

  emailLogin(): void {
    const params = {
      eMail: (this: any).emailField.getText(),
      password: (this: any).passwordField.getText(),
    };

    const {
      props: { loginEmail },
    } = this;

    if (!FormValidation.isEmpty(params.eMail)) {
      Alert.showInfo('Hata', 'Lütfen email giriniz!');
    } else if (!FormValidation.validateEmail(params.eMail)) {
      Alert.showInfo('Hata', 'Lütfen geçerli bir email giriniz!');
    } else if (!FormValidation.isEmpty(params.password)) {
      Alert.showInfo('Hata', 'Lütfen şifrenizi giriniz!');
    } else if (!FormValidation.validatePasswordLength(params.password)) {
      Alert.showInfo('Hata', 'Şifre en az 8 karakter olmalıdır!');
    } else {
      this.setState({ serviceCall: true });
      loginEmail(params.eMail, params.password);
    }
  }

  render() {
    const {
      props: { auth },
    } = this;
    return (
      <View style={styles.container}>
        {auth.isLoading ? <Loading /> : null}
        <KeyboardAwareScrollView
          style={styles.containerView}
          automaticallyAdjustContentInsets={false}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.formContainer}>
            <Text style={styles.title}>Giriş</Text>
            <TextInputCustom
              ref={(ref) => {
                (this: any).emailField = ref;
              }}
              placeholder="E-Mail"
            />
            <TextInputCustom
              ref={(ref) => {
                (this: any).passwordField = ref;
              }}
              placeholder="Şifre"
              secureTextEntry
              returnKeyType="done"
            />
          </View>
          <Button
            buttonStyle={styles.buttonStyle}
            buttonTextStyle={styles.buttonTextStyle}
            text="Login"
            onPress={() => {
              this.emailLogin();
            }}
          />
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

LoginScreen.propTypes = {
  loginEmail: PropTypes.func.isRequired,
};
LoginScreen.defaultProps = {};

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  loginEmail: (eMail, password) => dispatch(AuthActions.loginEmail.request(eMail, password)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginScreen);
